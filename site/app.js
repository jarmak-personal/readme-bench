/* README Challenge — a small hash-routed viewer over site/data/. */
(() => {
  const $app = document.getElementById('app');
  let DB = null, TRACES = null;
  const textCache = new Map();

  // ---------- utilities ----------
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmtTok = n => n == null ? '—' : n >= 1e6 ? (n/1e6).toFixed(1)+'M' : n >= 1e3 ? (n/1e3).toFixed(n >= 1e4 ? 0 : 1)+'k' : String(n);
  const fmtInt = n => n == null ? '—' : String(n);
  const fmtTime = s => { if (s == null) return '—'; s = Math.round(s); return s >= 3600 ? `${Math.floor(s/3600)}h ${Math.floor(s%3600/60)}m` : s >= 60 ? `${Math.floor(s/60)}m ${s%60}s` : `${s}s`; };
  const fmtDate = iso => iso ? iso.slice(0, 10) : '—';
  const md = s => DOMPurify.sanitize(marked.parse(s || '', { gfm: true, breaks: false }));
  const pref = (k, v) => { try { if (v === undefined) return JSON.parse(localStorage.getItem('rb:'+k)); localStorage.setItem('rb:'+k, JSON.stringify(v)); } catch { return null; } };
  const runById = (target, name) => DB.runs.find(r => r.target === target && r.id === `${target}/${name}`);
  const runName = r => r.id.split('/')[1];
  const targetOf = name => DB.targets.find(t => t.name === name);
  const defaultTarget = () => pref('target') && targetOf(pref('target')) ? pref('target') : DB.targets[0]?.name;
  const runsOf = target => DB.runs.filter(r => r.target === target);
  async function text(path) {
    if (!textCache.has(path)) textCache.set(path, fetch(path).then(r => r.ok ? r.text() : Promise.reject(new Error(`${r.status} ${path}`))));
    return textCache.get(path);
  }
  const runPath = (r, f) => `data/runs/${r.id}/${f}`;
  async function traces() {
    if (!TRACES) TRACES = await fetch('data/traces.json').then(r => r.ok ? r.json() : {}).catch(() => ({}));
    return TRACES;
  }

  const TIERS = ['min', 'default', 'max'];
  // Runs grouped by model, in the index's order (model name, then version); tiers min → default → max.
  function byModel(runs) {
    const groups = [];
    for (const r of runs) {
      let g = groups.find(g => g.model === r.model.display);
      if (!g) groups.push(g = { model: r.model.display, vendor: r.model.vendor, runs: [] });
      g.runs.push(r);
    }
    groups.forEach(g => g.runs.sort((a, b) => TIERS.indexOf(a.tier) - TIERS.indexOf(b.tier)));
    return groups;
  }
  // What a tool call did, for the trace wall.
  const toolKind = t => /^(view|read_file)$/.test(t) ? 'read' : /^(glob|rg|grep|file_search|grep_search|list_dir|search)$/.test(t) ? 'search' : /^(bash|shell|powershell)$/.test(t) ? 'shell' : /^(create|edit|apply_patch|write)/.test(t) ? 'write' : /subagent|^task$/.test(t) ? 'delegate' : 'other';
  const effortText = r => r.reasoning_level ? `<span class="num">${esc(r.reasoning_level)}</span>` : '<span class="muted">no effort setting</span>';
  const tierDot = r => `<span class="tier ${esc(r.tier)}" title="${esc(r.tier)} tier"></span>`;

  function setNav(key, wide) {
    document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.dataset.nav === key));
    $app.classList.toggle('wide', !!wide);
  }
  function targetSelect(current) {
    if (DB.targets.length < 2) return '';
    return `<label>Target <select id="target-select">${DB.targets.map(t => `<option value="${esc(t.name)}" ${t.name === current ? 'selected' : ''}>${esc(t.title)}</option>`).join('')}</select></label>`;
  }
  function bindTargetSelect(hrefFor) {
    const el = document.getElementById('target-select');
    if (el) el.onchange = () => { pref('target', el.value); location.hash = hrefFor(el.value); };
  }

  // ---------- metrics ----------
  const COLS = [
    { key: 'wall',     label: 'Time',        get: r => r.wall_clock_seconds, fmt: fmtTime },
    { key: 'requests', label: 'Requests',    get: r => r.requests,           fmt: fmtInt },
    { key: 'in',       label: 'Input',       get: r => r.tokens.input,       fmt: fmtTok },
    { key: 'out',      label: 'Output',      get: r => r.tokens.output,      fmt: fmtTok },
    { key: 'tools',    label: 'Tool calls',  get: r => r.tool_calls,         fmt: fmtInt },
    { key: 'files',    label: 'Files read',  get: r => r.files_viewed,       fmt: fmtInt },
    { key: 'lines',    label: 'README lines', get: r => r.readme_lines,      fmt: fmtInt },
  ];
  const col = key => COLS.find(c => c.key === key) || COLS[0];

  function factsStrip(r) {
    return `<dl class="facts">
      <div><dt>Time</dt><dd>${fmtTime(r.wall_clock_seconds)}</dd></div>
      <div><dt>Requests</dt><dd>${fmtInt(r.requests)}</dd></div>
      <div><dt>Input</dt><dd>${fmtTok(r.tokens.input)} <small>${r.tokens.cache_read ? `${fmtTok(r.tokens.cache_read)} cached` : ''}</small></dd></div>
      <div><dt>Output</dt><dd>${fmtTok(r.tokens.output)} <small>${r.tokens.reasoning ? `+${fmtTok(r.tokens.reasoning)} reasoning` : ''}</small></dd></div>
      <div><dt>Tool calls</dt><dd>${fmtInt(r.tool_calls)}</dd></div>
      <div><dt>Files read</dt><dd>${fmtInt(r.files_viewed)}</dd></div>
      <div><dt>Compactions</dt><dd>${fmtInt(r.compactions)}${r.truncations ? ` <small>+${r.truncations} truncation${r.truncations === 1 ? '' : 's'}</small>` : ''}</dd></div>
      <div><dt>Effort</dt><dd>${esc(r.reasoning_level || '—')} <small>${esc(r.tier)} tier</small></dd></div>
      <div><dt>README</dt><dd>${r.readme_produced ? `${fmtInt(r.readme_lines)} <small>lines</small>` : '<small>none</small>'}</dd></div>
    </dl>`;
  }
  const runLinks = r => `<a href="#/run/${esc(r.id)}">Run page</a>${r.has_session ? `<a href="#/session/${esc(r.id)}">Transcript</a>` : ''}${r.has_diff ? `<a href="#/diff/${esc(r.id)}">Diff</a>` : ''}${r.readme_produced ? `<a href="${runPath(r, 'README.md')}">Raw</a>` : ''}`;
  const notesBlock = async r => {
    if (!r.notes || !r.readme_produced) return '';
    const body = r.notes.has_body ? await text(runPath(r, 'notes.md')).catch(() => '') : '';
    return `<aside class="notes"><div class="eyebrow">Curator's notes</div>${r.notes.summary ? `<div class="summary">${esc(r.notes.summary)}</div>` : ''}${r.notes.tags?.length ? `<div class="tags">${r.notes.tags.map(esc).join(' · ')}</div>` : ''}${body ? `<div class="body">${md(body)}</div>` : ''}</aside>`;
  };
  const readmeSheet = async r => {
    if (r.readme_produced) return `<article class="sheet markdown-body">${md(await text(runPath(r, 'README.md')).catch(() => '*(README.md could not be loaded)*'))}</article>`;
    const body = r.notes?.has_body ? await text(runPath(r, 'notes.md')).catch(() => '') : '';
    return `<div class="sheet empty"><p>No README.md was produced${r.exit_code ? ` (exit code ${r.exit_code})` : ''}.</p>${r.notes ? `<div class="notes"><div class="eyebrow">Curator's notes</div>${r.notes.summary ? `<div class="summary">${esc(r.notes.summary)}</div>` : ''}${body ? `<div class="body">${md(body)}</div>` : ''}</div>` : ''}</div>`;
  };

  // ---------- home: chart + editor's notes ----------
  function viewHome(target) {
    setNav('home');
    const t = targetOf(target);
    const runs = runsOf(target);
    const models = new Set(runs.map(r => r.model.display)), harnesses = new Set(runs.map(r => r.harness.name));
    const hls = DB.highlights.filter(h => !h.run || runs.some(r => r.id === h.run));
    let held = null;

    // Looked vs wrote: input tokens (log) against README lines. A run with no README sits on the baseline.
    const W = 760, Hh = 440, m = { l: 48, r: 20, t: 16, b: 40 };
    function chart() {
      const plotted = runs.filter(r => r.tokens.input);
      if (!plotted.length) return '';
      const xmin = Math.min(...plotted.map(r => r.tokens.input)), xmax = Math.max(...plotted.map(r => r.tokens.input));
      const ymax = Math.max(1, ...plotted.map(r => r.readme_lines || 0)) * 1.06;
      const X = v => m.l + (Math.log(v) - Math.log(xmin)) / Math.max(1e-9, Math.log(xmax) - Math.log(xmin)) * (W - m.l - m.r);
      const Y = v => Hh - m.b - v / ymax * (Hh - m.t - m.b);
      const xt = []; for (let e = 3; e <= 7; e++) for (const k of [1, 2, 5]) { const v = k * 10 ** e; if (v >= xmin && v <= xmax) xt.push(v); }
      const ystep = ymax > 400 ? 100 : 50; const yt = []; for (let v = 0; v <= ymax; v += ystep) yt.push(v);
      let s = `<g class="grid">${yt.map(v => `<line x1="${m.l}" x2="${W - m.r}" y1="${Y(v)}" y2="${Y(v)}"/>`).join('')}</g>`;
      s += `<g class="axis">${xt.map(v => `<text x="${X(v)}" y="${Hh - m.b + 16}" text-anchor="middle">${fmtTok(v)}</text>`).join('')}${yt.map(v => `<text x="${m.l - 8}" y="${Y(v) + 4}" text-anchor="end">${v}</text>`).join('')}<text class="t" x="${W - m.r}" y="${Hh - 6}" text-anchor="end">input tokens →</text><text class="t" x="${m.l}" y="${m.t - 4}">↑ README lines</text></g>`;
      const groups = byModel(plotted);
      for (const g of groups) s += `<polyline class="path ${g.model === held ? 'hot' : ''}" points="${g.runs.map(r => `${X(r.tokens.input)},${Y(r.readme_lines || 0)}`).join(' ')}" data-model="${esc(g.model)}"/>`;
      for (const g of groups) for (const r of g.runs) s += `<circle class="dot ${r.tier}" r="${g.model === held ? 6 : 4.5}" cx="${X(r.tokens.input)}" cy="${Y(r.readme_lines || 0)}" data-id="${esc(r.id)}"><title>${esc(r.model.display)} · ${esc(r.reasoning_level || r.tier)}</title></circle>`;
      for (const g of groups) if (g.model === held) { const r = g.runs[g.runs.length - 1], px = X(r.tokens.input), right = px > W - 150; s += `<text class="lab ${g.model === held ? 'hot' : ''}" x="${right ? px - 9 : px + 9}" y="${Y(r.readme_lines || 0) + 4}" text-anchor="${right ? 'end' : 'start'}">${esc(g.model)}</text>`; }
      return s;
    }
    // A highlight is a pointer: with no text of its own it shows the post's summary, or the run's note summary.
    const card = h => {
      const r = h.run ? runs.find(x => x.id === h.run) : null;
      const post = h.post ? DB.posts.find(p => p.slug === h.post) : null;
      const body = h.text || post?.summary || r?.notes?.summary || '';
      return `<div class="hl">
        <div class="k"><b>${r ? `<a href="#/run/${esc(r.id)}">${esc(r.model.display)}</a> <span class="muted">· ${esc(r.tier)} tier${r.reasoning_level ? ` · <span class="num">${esc(r.reasoning_level)}</span>` : ''}</span>` : ''}</b><span>${esc(h.kind || '')}</span></div>
        ${h.quote ? `<q>${esc(h.quote)}</q>` : ''}
        <div class="hl-text">${md(body)}</div>
        <div class="hl-links">${r ? `<a href="#/runs/${esc(r.target)}/${esc(runName(r))}">read</a><a href="#/trace/${esc(r.target)}/${esc(runName(r))}">trace</a>` : ''}${post ? `<a href="#/notes/${esc(post.slug)}">${esc(post.title)} →</a>` : ''}</div>
      </div>`;
    };
    const kinds = {};
    for (const r of runs) for (const [k, v] of Object.entries(r.tool_calls_by_name)) kinds[k] = (kinds[k] || 0) + v;
    $app.innerHTML = `
      <section class="hero">
        <div>
          <h1>${esc(DB.tagline)}</h1>
          <blockquote class="prompt">${esc(DB.prompt)}</blockquote>
          <div class="prose">${md(DB.intro)}</div>
          <div class="target-line">${md(t?.summary || '')}${t?.has_about ? `<p><a href="#/target/${esc(target)}">More about this target →</a></p>` : ''}</div>
        </div>
        <div class="counts"><span><b>${runs.length}</b>runs</span><span><b>${models.size}</b>models</span><span><b>${new Set(runs.map(r => r.tier)).size}</b>effort tiers</span><span><b>${harnesses.size}</b>harness${harnesses.size === 1 ? '' : 'es'}</span></div>
      </section>
      ${targetSelect(target) ? `<div class="controls">${targetSelect(target)}</div>` : ''}
      <div class="home">
        <div class="fig">
          <div class="cap"><span class="legend">${TIERS.map(k => `<span><span class="tier ${k}"></span> ${k} effort</span>`).join('')}</span><a href="#/effort/${esc(target)}">Effort grid →</a></div>
          <svg id="chart" viewBox="0 0 ${W} ${Hh}" role="img" aria-label="Input tokens against README lines, one point per run">${chart()}</svg>
        </div>
        <div class="hl-col">
          <h2>Editor's notes <a href="#/notes">all notes →</a></h2>
          ${hls.length ? hls.map(card).join('') : '<p class="muted">No highlights yet. Add cards to <code>notes/highlights.json</code>.</p>'}
        </div>
      </div>
      <section class="explore">
        <h2>Explore</h2>
        <div class="cards">
          <a class="card" href="#/runs/${esc(target)}"><h3>Reading room</h3><p>Every README in one reader. Skim the rail, pin one, read the next beside it.</p><span class="go">Open →</span></a>
          <a class="card" href="#/effort/${esc(target)}"><h3>Effort grid</h3><p>Every model at min / default / max effort, shaded by any metric. What does effort actually change?</p><span class="go">Open →</span></a>
          <a class="card" href="#/trace/${esc(target)}"><h3>Trace wall</h3><p>Every run as a strip of real tool calls on one clock. How did they explore — and when did they write?</p><span class="go">Open →</span></a>
        </div>
      </section>`;
    bindTargetSelect(n => `#/`);
    const svg = document.getElementById('chart');
    const hold = model => { if (model === held) return; held = model; svg.innerHTML = chart(); };
    svg.addEventListener('click', e => { const d = e.target.closest('.dot'); if (d) location.hash = `#/run/${d.dataset.id}`; });
    svg.addEventListener('mouseover', e => { const d = e.target.closest('.dot'), p = e.target.closest('.path'); if (d) hold(runs.find(x => x.id === d.dataset.id).model.display); else if (p) hold(p.dataset.model); });
    svg.addEventListener('mouseleave', () => hold(null));
  }

  // ---------- reading room ----------
  let railReset = false; // set when the order or filter changes: the rail goes back to the top instead of following the selection
  function viewRuns(target, name, q) {
    setNav('runs', true);
    const runs = runsOf(target);
    const sel = (name && runById(target, name)) || runs[0];
    if (!sel) { $app.innerHTML = `<p class="muted">No runs yet for this target.</p>`; return; }
    const pin = q.pin ? runById(target, q.pin) : null;
    const two = pin && pin !== sel;
    const filter = (pref('room-q') || '').toLowerCase(), order = pref('room-order') || 'model';
    const metric = order === 'model' ? col('lines') : col(order);
    const maxMetric = Math.max(1, ...runs.map(r => metric.get(r) || 0));
    const shown = runs.filter(r => !filter || `${r.model.display} ${r.model.vendor} ${r.reasoning_level || ''} ${r.tier} ${r.harness.name}`.toLowerCase().includes(filter));
    let order_ids, list;
    const row = (r, full) => `<a class="row ${r === sel ? 'sel' : ''} ${r === pin ? 'pin' : ''}" href="#/runs/${esc(target)}/${esc(runName(r))}${pin ? `?pin=${esc(runName(pin))}` : ''}">
      <span class="name">${full ? esc(r.model.display) : `${tierDot(r)} ${esc(r.tier)}`}${r.notes ? ' <span class="mark" title="Has curator\'s notes">※</span>' : ''}</span><span class="eff">${full ? `${r.reasoning_level ? esc(r.reasoning_level) + ' · ' : ''}${esc(r.tier)}` : esc(r.reasoning_level || '')}</span>
      <span class="bars"><span class="bar len"><i style="width:${(metric.get(r) || 0) / maxMetric * 100}%"></i></span><small>${metric.get(r) == null ? '—' : metric.fmt(metric.get(r))}</small></span>
    </a>`;
    if (order === 'model') {
      const groups = byModel(shown); order_ids = groups.flatMap(g => g.runs.map(r => r.id));
      list = groups.map(g => `<div class="group">${esc(g.model)} <span class="muted">· ${esc(g.vendor)}</span></div>${g.runs.map(r => row(r)).join('')}`).join('');
    } else {
      const c = col(order); const rows = [...shown].sort((a, b) => (c.get(b) ?? -1) - (c.get(a) ?? -1)); order_ids = rows.map(r => r.id);
      list = rows.map(r => row(r, true)).join('');
    }
    const pane = (r, body, notes) => `<div class="pane">
      <div class="who"><span>${tierDot(r)} <b><a href="#/run/${esc(r.id)}">${esc(r.model.display)}</a></b> · ${effortText(r)}</span><span class="num">${fmtTime(r.wall_clock_seconds)} · ${fmtInt(r.requests)} req · ${fmtTok(r.tokens.input)} in · ${fmtInt(r.files_viewed)} files${r.readme_produced ? ` · ${r.readme_lines} lines` : ''}</span></div>
      ${notes}${body}</div>`;
    $app.innerHTML = `
      <div class="room">
        <div class="rail">
          <div class="tools">${targetSelect(target)}<input type="search" id="room-q" value="${esc(pref('room-q') || '')}" placeholder="Filter — model, vendor, effort" aria-label="Filter runs"><select id="room-order" aria-label="Order"><option value="model" ${order === 'model' ? 'selected' : ''}>by model</option>${COLS.map(c => `<option value="${c.key}" ${order === c.key ? 'selected' : ''}>by ${c.label.toLowerCase()}</option>`).join('')}</select></div>
          <div class="list">${list || '<p class="muted" style="padding:1rem">No runs match.</p>'}</div>
        </div>
        <div class="reader">
          <div class="head">
            <h1>${esc(sel.model.display)}</h1><span class="muted">${esc(sel.harness.name)} ${esc(sel.harness.version || '')} · ${fmtDate(sel.started_at)}</span>
            <span class="actions">${!pin ? `<a class="btn" href="#/runs/${esc(target)}/${esc(runName(sel))}?pin=${esc(runName(sel))}">Pin to compare</a>` : pin === sel ? `<a class="btn on" href="#/runs/${esc(target)}/${esc(runName(sel))}">Pinned — pick another run · unpin</a>` : `<a class="btn on" href="#/runs/${esc(target)}/${esc(runName(sel))}">Unpin ${esc(pin.model.display)}</a><a class="btn" href="#/runs/${esc(target)}/${esc(runName(sel))}?pin=${esc(runName(sel))}">Pin this instead</a>`}${two && pin.readme_produced && sel.readme_produced ? `<a class="btn" href="#/compare/${esc(target)}/${esc(runName(pin))}/${esc(runName(sel))}">Compare by section</a>` : ''}<span class="runlinks">${runLinks(sel)}</span></span>
          </div>
          <div class="panes ${two ? 'two' : ''}" id="panes"><p class="muted">Loading…</p></div>
        </div>
      </div>`;
    bindTargetSelect(n => `#/runs/${n}`);
    document.getElementById('room-q').oninput = e => { pref('room-q', e.target.value); railReset = true; render(); setTimeout(() => { const i = document.getElementById('room-q'); i.focus(); i.setSelectionRange(i.value.length, i.value.length); }); };
    document.getElementById('room-order').onchange = e => { pref('room-order', e.target.value); railReset = true; render(); };
    { const list = document.querySelector('.rail .list'), row = list.querySelector('.row.sel');
      if (railReset) { list.scrollTop = 0; railReset = false; }
      else if (row && (row.offsetTop < list.scrollTop || row.offsetTop + row.offsetHeight > list.scrollTop + list.clientHeight)) list.scrollTop = row.offsetTop - list.clientHeight / 2; }
    document.onkeydown = e => {
      if (e.altKey || e.ctrlKey || e.metaKey || /^(input|select|textarea)$/i.test(e.target.tagName)) return;
      const i = order_ids.indexOf(sel.id), qs = pin ? `?pin=${runName(pin)}` : '';
      if (e.key === 'j' && i < order_ids.length - 1) location.hash = `#/runs/${target}/${order_ids[i + 1].split('/')[1]}${qs}`;
      if (e.key === 'k' && i > 0) location.hash = `#/runs/${target}/${order_ids[i - 1].split('/')[1]}${qs}`;
      if (e.key === 'p') location.hash = pin === sel ? `#/runs/${target}/${runName(sel)}` : `#/runs/${target}/${runName(sel)}?pin=${runName(sel)}`;
    };
    (async () => {
      const parts = await Promise.all([two ? pin : null, sel].filter(Boolean).map(async r => pane(r, await readmeSheet(r), await notesBlock(r))));
      const el = document.getElementById('panes'); if (el) el.innerHTML = parts.join('');
    })();
  }

  // ---------- effort grid ----------
  function viewEffort(target, name) {
    setNav('effort', true);
    const runs = runsOf(target);
    const metric = col(pref('effort-metric') || 'wall');
    const sel = (name && runById(target, name)) || runs.find(r => r.tier === 'max' && r.readme_produced) || runs[0];
    const vals = runs.map(metric.get).filter(v => v != null);
    const lo = Math.min(...vals), hi = Math.max(...vals);
    // Shade on a log scale: these metrics span two orders of magnitude and a linear ramp would leave most cells pale.
    const pos = v => (Math.log(v + 1) - Math.log(lo + 1)) / Math.max(1e-9, Math.log(hi + 1) - Math.log(lo + 1));
    const shade = v => Math.min(6, Math.max(0, Math.round(pos(v) * 6)));
    let grid = `<div class="hd">Model</div>${TIERS.map(t => `<div class="hd c">${t}</div>`).join('')}<div class="hd">min → max</div>`;
    let lastVendor = null;
    for (const g of byModel(runs)) {
      if (g.vendor !== lastVendor) { grid += `<div class="vendor">${esc(g.vendor || '')}</div>`; lastVendor = g.vendor; }
      grid += `<div class="rowh">${esc(g.model)}</div>`;
      const t = TIERS.map(k => g.runs.find(r => r.tier === k));
      for (const r of t) {
        if (!r) { grid += `<div class="cell na">—</div>`; continue; }
        const v = metric.get(r);
        if (v == null) { grid += `<a class="cell na" href="#/effort/${esc(target)}/${esc(runName(r))}">no README</a>`; continue; }
        const k = shade(v);
        grid += `<a class="cell r${k + 1} ${sel === r ? 'sel' : ''}" href="#/effort/${esc(target)}/${esc(runName(r))}"><span class="lbl">${esc(r.reasoning_level || '')}</span>${metric.fmt(v)}</a>`;
      }
      const a = t[0] && metric.get(t[0]), b = t[2] && metric.get(t[2]);
      if (a != null && b != null) {
        const x1 = Math.min(pos(a), pos(b)) * 100, x2 = Math.max(pos(a), pos(b)) * 100;
        grid += `<div class="delta"><span class="bar"><i style="left:${x1}%;width:${Math.max(1, x2 - x1)}%"></i><i class="mn" style="left:${pos(a) * 100}%"></i><i class="mx" style="left:${pos(b) * 100}%"></i></span><span>${b >= a ? '×' : '÷'}${(b >= a ? b / Math.max(1, a) : a / Math.max(1, b)).toFixed(1)}</span></div>`;
      } else grid += `<div class="delta muted">—</div>`;
    }
    $app.innerHTML = `
      <div class="controls">${targetSelect(target)}<span class="seg" id="metric">${COLS.map(c => `<button data-key="${c.key}" class="${c.key === metric.key ? 'on' : ''}">${c.label}</button>`).join('')}</span><span class="ramp muted">less <span>${[1,2,3,4,5,6,7].map(i => `<i class="r${i}"></i>`).join('')}</span> more</span></div>
      <div class="effort-layout">
        <div class="effort-grid">${grid}</div>
        <aside class="aside panel">
          <div class="eyebrow">${esc(sel.model.vendor || '')} · ${esc(sel.tier)} tier · effort ${esc(sel.reasoning_level || '—')}</div>
          <h3><a href="#/run/${esc(sel.id)}">${esc(sel.model.display)}</a></h3>
          <div class="muted">${esc(sel.harness.name)} ${esc(sel.harness.version || '')} · ${fmtDate(sel.started_at)}</div>
          <dl class="kv"><dt>Time</dt><dd>${fmtTime(sel.wall_clock_seconds)}</dd><dt>Requests</dt><dd>${fmtInt(sel.requests)}</dd><dt>Input / output</dt><dd>${fmtTok(sel.tokens.input)} / ${fmtTok(sel.tokens.output)}</dd><dt>Tool calls</dt><dd>${fmtInt(sel.tool_calls)}</dd><dt>Files read</dt><dd>${fmtInt(sel.files_viewed)}</dd><dt>README</dt><dd>${sel.readme_produced ? `${sel.readme_lines} lines · ${fmtTok(sel.readme_bytes)}B` : 'none'}</dd></dl>
          ${sel.notes?.summary ? `<div class="notes"><div class="eyebrow">Curator's notes</div>${esc(sel.notes.summary)}</div>` : ''}
          <p class="runlinks"><a href="#/runs/${esc(target)}/${esc(runName(sel))}">Read the README</a><a href="#/trace/${esc(target)}/${esc(runName(sel))}">Trace</a>${sel.has_session ? `<a href="#/session/${esc(sel.id)}">Transcript</a>` : ''}</p>
        </aside>
      </div>
`;
    bindTargetSelect(n => `#/effort/${n}`);
    document.querySelectorAll('#metric button').forEach(b => b.onclick = () => { pref('effort-metric', b.dataset.key); render(); });
  }

  // ---------- trace wall ----------
  async function viewTrace(target, name) {
    setNav('trace', true);
    const T = await traces();
    const runs = runsOf(target).filter(r => T[r.id]);
    if (!runs.length) { $app.innerHTML = `<div class="pagehead"><div class="eyebrow">Trace</div><h1>Trace wall</h1></div><p class="muted">No event logs for this target's runs.</p>`; return; }
    const clock = pref('trace-clock') || 'abs', order = pref('trace-order') || 'model';
    const dur = r => T[r.id].duration || r.wall_clock_seconds;
    const maxDur = Math.max(...runs.map(dur));
    const open = name ? runById(target, name) : null;
    const strip = r => {
      const tr = T[r.id], span = clock === 'abs' ? maxDur : dur(r), x = t => Math.min(100, t / span * 100);
      let s = `<a class="strip ${open === r ? 'hot' : ''}" href="#/trace/${esc(target)}/${esc(runName(r))}" title="${esc(r.model.display)} · ${esc(r.reasoning_level || r.tier)} — click to read">`;
      for (const [a, b, c] of tr.turns) { const ft = b ?? c; s += `<span class="seg think" style="left:${x(a)}%;width:${x(ft) - x(a)}%"></span><span class="seg stream" style="left:${x(ft)}%;width:${x(c) - x(ft)}%"></span>`; }
      for (const [t, n, d] of tr.tools) if (d > span * 0.004 && n !== 'task') s += `<span class="seg tool" style="left:${x(t)}%;width:${x(t + d) - x(t)}%"></span>`;
      for (const [t, n] of tr.tools) s += `<i class="${toolKind(n)}" style="left:${x(t)}%"><b>${esc(n)} at ${fmtTime(t)}</b></i>`;
      return s + `<span class="end" style="left:${x(dur(r))}%"></span>${r.readme_produced ? '' : '<span class="none">never wrote</span>'}</a>`;
    };
    const lbl = (r, full) => `<div class="lbl ${open === r ? 'hot' : ''}"><span>${full ? esc(r.model.display) : `${tierDot(r)} ${esc(r.tier)}`}</span><span class="eff">${esc(r.reasoning_level || '')}</span></div>`;
    const stat = r => `<div class="stat ${open === r ? 'hot' : ''}"><span>${fmtTime(dur(r))}</span><span class="muted">${r.readme_produced ? r.readme_lines + ' ln' : '—'}</span><a href="#/trace/${esc(target)}/${esc(runName(r))}">read →</a></div>`;
    const ticks = clock === 'abs' ? [0, 60, 120, 180, 240, 300, 360, 420, 480, 600, 900].filter(t => t <= maxDur) : [0, 25, 50, 75, 100];
    let wall = `<div class="hd">Run</div><div class="axis">${ticks.map(t => `<span style="left:${clock === 'abs' ? t / maxDur * 100 : t}%">${clock === 'abs' ? fmtTime(t) : t + '%'}</span>`).join('')}</div><div class="hd">time · README</div>`;
    if (order === 'model') for (const g of byModel(runs)) { wall += `<div class="group">${esc(g.model)} <span class="muted">· ${esc(g.vendor || '')}</span></div>`; for (const r of g.runs) wall += lbl(r) + strip(r) + stat(r); }
    else for (const r of [...runs].sort((a, b) => order === 'dur' ? dur(b) - dur(a) : b.tool_calls - a.tool_calls)) wall += lbl(r, true) + strip(r) + stat(r);
    $app.innerHTML = `
      <div class="controls">${targetSelect(target)}
        <label>Clock <span class="seg" id="clock"><button data-v="abs" class="${clock === 'abs' ? 'on' : ''}">absolute</button><button data-v="norm" class="${clock === 'norm' ? 'on' : ''}">stretch to fit</button></span></label>
        <label>Order <span class="seg" id="order"><button data-v="model" class="${order === 'model' ? 'on' : ''}">by model</button><button data-v="dur" class="${order === 'dur' ? 'on' : ''}">by duration</button><button data-v="tools" class="${order === 'tools' ? 'on' : ''}">by tool calls</button></span></label>
        <span class="trace-legend"><span><i class="think"></i>thinking</span><span><i class="stream"></i>streaming</span><span class="sep"></span><span><i class="read"></i>read</span><span><i class="search"></i>search</span><span><i class="shell"></i>shell</span><span><i class="write"></i>write</span><span><i class="delegate"></i>subagent</span></span>
      </div>
      <div class="wall">${wall}</div>
      <div class="scrim ${open ? 'open' : ''}" id="scrim"></div>
      <aside class="drawer ${open ? 'open' : ''}" id="drawer" aria-label="README"></aside>`;
    bindTargetSelect(n => `#/trace/${n}`);
    document.querySelectorAll('#clock button').forEach(b => b.onclick = () => { pref('trace-clock', b.dataset.v); render(); });
    document.querySelectorAll('#order button').forEach(b => b.onclick = () => { pref('trace-order', b.dataset.v); render(); });
    const close = () => location.hash = `#/trace/${target}`;
    document.getElementById('scrim').onclick = close;
    document.onkeydown = e => { if (e.key === 'Escape' && open) close(); };
    if (open) {
      const tr = T[open.id];
      document.getElementById('drawer').innerHTML = `<div class="dh"><h2><a href="#/run/${esc(open.id)}">${esc(open.model.display)}</a></h2><span class="muted">${effortText(open)} · ${esc(open.harness.name)} ${esc(open.harness.version || '')}</span><span class="runlinks"><a href="#/runs/${esc(target)}/${esc(runName(open))}">Reading room</a>${runLinks(open)}</span><button class="x" id="drawer-close" aria-label="Close">×</button></div>
        <div class="db"><dl class="facts"><div><dt>Total</dt><dd>${fmtTime(dur(open))}</dd></div><div><dt>Thinking</dt><dd>${fmtTime(tr.think)}</dd></div><div><dt>Streaming</dt><dd>${fmtTime(tr.stream)}</dd></div><div><dt>Tools</dt><dd>${fmtTime(tr.tool)}</dd></div><div><dt>Turns</dt><dd>${tr.turns.length}</dd></div><div><dt>Files read</dt><dd>${fmtInt(open.files_viewed)}</dd></div><div><dt>Input</dt><dd>${fmtTok(open.tokens.input)}</dd></div></dl>${await notesBlock(open)}${await readmeSheet(open)}</div>`;
      document.getElementById('drawer-close').onclick = close;
      { const el = document.querySelector('.strip.hot'); if (el) { const y = el.getBoundingClientRect().top; if (y < 0 || y > innerHeight) el.scrollIntoView({ block: 'center' }); } }
    }
  }

  // ---------- single run ----------
  async function viewRun(target, name) {
    setNav('runs');
    const r = runById(target, name);
    if (!r) return notFound();
    const tools = Object.entries(r.tool_calls_by_name).sort((a, b) => b[1] - a[1]);
    const rows = runsOf(target);
    const idx = rows.findIndex(x => x.id === r.id);
    const prev = idx > 0 ? rows[idx - 1] : null, next = idx >= 0 && idx < rows.length - 1 ? rows[idx + 1] : null;
    const pageLink = (x, dir) => x ? `<a class="${dir}" href="#/run/${esc(x.id)}">${dir === 'prev' ? '&larr; ' : ''}<b>${esc(x.model.display)}</b> <span class="muted">${esc(x.reasoning_level || x.tier)}</span>${dir === 'next' ? ' &rarr;' : ''}</a>` : `<span class="${dir}"></span>`;
    const pager = `<nav class="pager">${pageLink(prev, 'prev')}<span class="pos muted">${idx + 1} / ${rows.length}</span>${pageLink(next, 'next')}</nav>`;
    $app.innerHTML = `
      <div class="runhead">
        <div>
          <div class="eyebrow"><a href="#/runs/${esc(target)}">${esc(targetOf(target)?.title || target)}</a></div>
          <h1>${esc(r.model.display)}</h1>
          <div class="meta"><span>${esc(r.harness.name)} ${esc(r.harness.version || '')}</span><span>${fmtDate(r.started_at)}</span><span>batch ${esc(r.batch)}</span></div>
        </div>
        <div class="runlinks">
          <a href="#/runs/${esc(target)}/${esc(name)}">Reading room</a>
          <a href="#/trace/${esc(target)}/${esc(name)}">Trace</a>
          ${r.has_session ? `<a href="#/session/${esc(r.id)}">Transcript</a>` : ''}
          ${r.has_diff ? `<a href="#/diff/${esc(r.id)}">Diff</a>` : ''}
          ${r.readme_produced ? `<a href="${runPath(r, 'README.md')}">Raw</a>` : ''}
        </div>
      </div>
      ${pager}
      ${factsStrip(r)}
      <div class="layout">
        <div>${await notesBlock(r)}${await readmeSheet(r)}${pager}</div>
        <aside class="aside">
          <div class="block"><h3>Tool calls</h3><ul>${tools.map(([k, v]) => `<li><span class="num">${v}</span> ${esc(k)}</li>`).join('') || '<li class="muted">none</li>'}</ul></div>
          ${Object.keys(r.subagents || {}).length ? `<div class="block"><h3>Subagents</h3><ul>${Object.entries(r.subagents).map(([m, lv]) => `<li><span class="num">${Object.values(lv).reduce((a, b) => a + b, 0)}</span> ${esc(m)} <span class="muted">${Object.entries(lv).map(([l, n]) => `${esc(l)}×${n}`).join(', ')}</span></li>`).join('')}</ul></div>` : ''}
          <div class="block"><h3>Files read <span class="muted num">${r.files_viewed}</span></h3><ul class="files">${r.files_viewed_list.map(f => `<li title="${esc(f)}">${esc(f)}</li>`).join('') || '<li class="muted">none</li>'}</ul></div>
        </aside>
      </div>`;
    document.onkeydown = e => {
      if (e.altKey || e.ctrlKey || e.metaKey || /^(input|select|textarea)$/i.test(e.target.tagName)) return;
      if (e.key === 'ArrowLeft' && prev) location.hash = `#/run/${prev.id}`;
      if (e.key === 'ArrowRight' && next) location.hash = `#/run/${next.id}`;
    };
  }

  async function viewRawFile(kind, target, name) {
    setNav('runs');
    const r = runById(target, name);
    if (!r) return notFound();
    const file = kind === 'session' ? 'session.md' : 'changes.diff';
    const body = await text(runPath(r, file)).catch(() => null);
    $app.innerHTML = `
      <div class="pagehead"><div class="eyebrow"><a href="#/run/${esc(r.id)}">${esc(r.model.display)} · ${esc(r.harness.name)}</a></div>
      <h1>${kind === 'session' ? 'Transcript' : 'Working-tree diff'}</h1></div>
      ${body == null ? '<p class="muted">Not available.</p>' : kind === 'session' ? `<article class="sheet markdown-body">${md(body)}</article>` : `<pre class="raw">${esc(body)}</pre>`}`;
  }

  // ---------- compare by section (reached from the reading room with a pin) ----------
  const SECTION_GROUPS = [
    ['Installation',   /install|setup|set up|prerequisites|requirements|system requirements/],
    ['Usage',          /usage|quick ?start|getting started|how to|examples|running|command|cli\b/],
    ['Overview',       /overview|introduction|about|what is|^summary|highlights|features|description|why/],
    ['Configuration',  /config|settings|options|keybind|environment/],
    ['Architecture',   /architect|design|structure|how it works|internals|layout|principles|components/],
    ['Development',    /develop|contribut|testing|tests|build|packaging|scripts/],
    ['License',        /licen[cs]e|legal|notices/],
  ];
  function sections(mdText) {
    const tokens = marked.lexer(mdText || '', { gfm: true });
    const out = [];
    let cur = { title: 'Introduction', key: 'Introduction', label: 'Introduction', tokens: [] };
    for (const t of tokens) {
      if (t.type === 'heading' && t.depth <= 2 && !(t.depth === 1 && out.length === 0 && cur.tokens.length === 0)) {
        if (cur.tokens.length) out.push(cur);
        const title = t.text.replace(/[`*_]/g, '');
        const norm = title.toLowerCase();
        const g = SECTION_GROUPS.find(([, re]) => re.test(norm));
        cur = { title, key: g ? g[0] : norm.replace(/[^a-z0-9 ]/g, '').trim(), label: g ? g[0] : title, tokens: [] };
        continue;
      }
      cur.tokens.push(t);
    }
    if (cur.tokens.length) out.push(cur);
    return out;
  }
  const renderTokens = toks => DOMPurify.sanitize(marked.parser(toks));

  async function viewCompare(target, a, b) {
    setNav('runs');
    const runs = runsOf(target).filter(r => r.readme_produced);
    const ra = a ? runById(target, a) : runs[0];
    const rb = b ? runById(target, b) : runs.find(r => r !== ra) || null;
    const opts = sel => runs.map(r => `<option value="${esc(runName(r))}" ${r === sel ? 'selected' : ''}>${esc(r.model.display)} · ${esc(r.reasoning_level || r.tier)}</option>`).join('');
    const [ta, tb] = await Promise.all([ra ? text(runPath(ra, 'README.md')).catch(() => '') : '', rb ? text(runPath(rb, 'README.md')).catch(() => '') : '']);
    let body;
    if (!ra || !rb) {
      body = `<p class="muted">Need at least two runs with a README for this target.</p>`;
    } else {
      const sa = sections(ta), sb = sections(tb);
      const keys = [], labels = {};
      for (const s of [...sa, ...sb]) if (!keys.includes(s.key)) { keys.push(s.key); labels[s.key] = s.label; }
      const cell = (secs, key) => {
        const m = secs.filter(s => s.key === key);
        if (!m.length) return `<div class="cell none">— no such section —</div>`;
        return `<div class="cell markdown-body">${m.map(s => (s.title === labels[key] ? '' : `<h3 class="own">${esc(s.title)}</h3>`) + renderTokens(s.tokens)).join('')}</div>`;
      };
      body = `<div class="compare">
        ${[ra, rb].map(r => `<div class="pane"><h3>${tierDot(r)} <a href="#/run/${esc(r.id)}">${esc(r.model.display)}</a> <span class="muted">· ${esc(r.reasoning_level || r.tier)}</span></h3>${factsStrip(r)}</div>`).join('')}
      </div>
      <div class="sections">${keys.map(k => `<div class="row"><div class="title">${esc(labels[k])}</div>${cell(sa, k)}${cell(sb, k)}</div>`).join('')}</div>`;
    }
    $app.innerHTML = `
      <div class="pagehead"><div class="eyebrow"><a href="#/runs/${esc(target)}/${esc(rb ? runName(rb) : '')}${ra ? `?pin=${esc(runName(ra))}` : ''}">← Reading room</a></div><h1>Compare by section</h1></div>
      <div class="controls">
        ${targetSelect(target)}
        <label>A <select id="sel-a">${opts(ra)}</select></label>
        <label>B <select id="sel-b">${opts(rb)}</select></label>
      </div>
      ${body}
      <p class="legend">Sections are split on second-level headings and matched by loose synonym groups (Installation ≈ Setup ≈ Requirements). Unmatched headings appear under their own title.</p>`;
    bindTargetSelect(n => `#/compare/${n}`);
    const go = () => location.hash = `#/compare/${target}/${document.getElementById('sel-a').value}/${document.getElementById('sel-b').value}`;
    document.getElementById('sel-a')?.addEventListener('change', go);
    document.getElementById('sel-b')?.addEventListener('change', go);
  }

  // ---------- targets ----------
  function viewTargets() {
    setNav('about');
    $app.innerHTML = `
      <div class="pagehead"><div class="eyebrow">Targets</div><h1>Repositories under test</h1>
      <p class="lede">Each target is one repository at one commit, with its documentation and agent-instruction files removed and its history squashed. What remains is what the software itself reveals.</p></div>
      ${DB.targets.map(t => `<div class="targetcard">
        <h2><a href="#/target/${esc(t.name)}">${esc(t.title)}</a></h2>
        <div>${md(t.summary || '')}</div>
        <dl class="kv"><dt>Upstream</dt><dd><a href="${esc(t.url)}">${esc(t.url)}</a></dd><dt>Commit</dt><dd>${esc(t.commit)}</dd><dt>Runs</dt><dd>${runsOf(t.name).length}</dd></dl>
      </div>`).join('')}`;
  }

  async function viewTarget(name) {
    setNav('about');
    const t = targetOf(name);
    if (!t) return notFound();
    const about = t.has_about ? await text(`data/target-${name}.md`).catch(() => '') : '';
    $app.innerHTML = `
      <div class="pagehead"><div class="eyebrow"><a href="#/targets">Targets</a></div><h1>${esc(t.title)}</h1><div class="lede">${md(t.summary || '')}</div></div>
      <div class="controls"><a href="#/runs/${esc(name)}">Read the READMEs →</a><a href="#/trace/${esc(name)}">Traces →</a></div>
      ${about ? `<article class="prose">${md(about)}</article><hr>` : `<p class="muted">No curator's write-up yet. Add <code>targets/${esc(name)}.md</code>.</p><hr>`}
      <h2>Preparation</h2>
      <dl class="kv">
        <dt>Upstream</dt><dd><a href="${esc(t.url)}">${esc(t.url)}</a></dd>
        <dt>Commit</dt><dd>${esc(t.commit)}</dd>
        <dt>Prepared</dt><dd>${esc(t.prepared_at || '')}</dd>
        <dt>Setup</dt><dd>${esc(t.setup || '(none)')}</dd>
      </dl>
      <details><summary>${t.removed.length} path${t.removed.length === 1 ? '' : 's'} removed</summary><ul>${t.removed.map(p => `<li>${esc(p)}</li>`).join('')}</ul></details>
      ${t.manifest_fixups.length ? `<details><summary>${t.manifest_fixups.length} manifest fixup${t.manifest_fixups.length === 1 ? '' : 's'}</summary><ul>${t.manifest_fixups.map(p => `<li>${esc(p)}</li>`).join('')}</ul></details>` : ''}`;
  }

  // ---------- notes: posts, then per-run notes ----------
  function viewNotes() {
    setNav('notes');
    const noted = DB.runs.filter(r => r.notes);
    $app.innerHTML = `
      <div class="pagehead"><div class="eyebrow">Notes</div><h1>Curator's notes</h1>
      <p class="lede">One person's reading of the runs, kept separate from the artifacts and never turned into a score.</p></div>
      ${DB.posts.length ? `<div class="posts">${DB.posts.map(p => `<div class="post"><h2><a href="#/notes/${esc(p.slug)}">${esc(p.title)}</a></h2><div class="muted num">${esc(p.date)}</div>${p.summary ? `<p>${esc(p.summary)}</p>` : ''}</div>`).join('')}</div>` : ''}
      <h2 class="section">On individual runs</h2>
      ${noted.length ? noted.map(r => `<div class="runnote">
        <h3>${tierDot(r)} <a href="#/run/${esc(r.id)}">${esc(r.model.display)}</a> <span class="muted">· ${esc(r.reasoning_level || r.tier)}${r.notes.tags?.length ? ` · ${r.notes.tags.map(esc).join(', ')}` : ''}</span></h3>
        ${r.notes.summary ? `<p>${esc(r.notes.summary)}${r.notes.has_body ? ` <a href="#/run/${esc(r.id)}">more →</a>` : ''}</p>` : ''}
      </div>`).join('') : '<p class="muted">No notes yet.</p>'}`;
  }

  async function viewPost(slug) {
    setNav('notes');
    const p = DB.posts.find(p => p.slug === slug);
    if (!p) return notFound();
    const body = await text(`data/posts/${slug}.md`).catch(() => '');
    $app.innerHTML = `
      <div class="pagehead"><div class="eyebrow"><a href="#/notes">Notes</a></div><h1>${esc(p.title)}</h1><div class="muted num">${esc(p.date)}</div></div>
      <article class="prose">${md(body)}</article>`;
  }

  async function viewAbout() {
    setNav('about');
    const own = DB.has_about ? await text('data/about.md').catch(() => '') : '';
    $app.innerHTML = `
      <div class="pagehead"><div class="eyebrow">About</div><h1>${esc(DB.title)}</h1><p class="lede">${esc(DB.tagline)}</p></div>
      ${own ? `<article class="prose">${md(own)}</article>` : `<article class="prose">
        <p>A small, informal benchmark for how well coding agents understand an unfamiliar repository and explain it. Take a repository, remove its documentation and agent-instruction files, and give every model the same prompt:</p>
        <blockquote class="prompt">${esc(DB.prompt)}</blockquote>
        <p>The agent inspects the repository with its tools, offline, and writes the README. The README is published exactly as produced. That is the result — there is no score.</p>
        <h2>What a run shows</h2>
        <ul>
          <li>whether the model worked out what the project does</li>
          <li>whether install and usage are right, and checkable</li>
          <li>what it chose to include, and what it chose to leave out</li>
          <li>whether it invented anything the code doesn't support</li>
        </ul>
        <h2>What the numbers are</h2>
        <p>Wall-clock, request count, tokens, tool calls, files read, and compactions are captured from the harness for context. Token counts use each vendor's tokenizer and cache accounting and are not comparable across vendors. No metric is the default ordering; runs are listed alphabetically by model, then by version, then by effort tier.</p>
        <h2>Isolation</h2>
        <p>The agent has no network access and can see only the working copy plus a scratch home directory. Git history is a single commit. Dependencies are installed before the agent starts, so it can run the project's own tooling but cannot fetch anything.</p>
        <p><a href="#/targets">The targets</a> · method, scripts, and raw run data: <a href="${esc(DB.repo_url)}">${esc(DB.repo_url)}</a>.</p>
      </article>`}`;
  }

  function notFound() { $app.innerHTML = `<p class="muted">Not found. <a href="#/">Back to the overview.</a></p>`; }

  // ---------- router ----------
  async function render() {
    document.onkeydown = null;
    // Optional query on the hash: #/route?theme=light|dark&pin=<run>
    const [route, qs] = location.hash.replace(/^#\/?/, '').split('?');
    const q = Object.fromEntries(new URLSearchParams(qs || ''));
    if (q.theme) { pref('theme', q.theme); }
    document.documentElement.dataset.theme = pref('theme') || '';
    const parts = route.split('/').filter(Boolean).map(decodeURIComponent);
    const [p0, p1, p2, p3] = parts;
    const tgt = p1 && targetOf(p1) ? p1 : defaultTarget();
    try {
      if (!p0 || p0 === 'home') return viewHome(tgt);
      if (p0 === 'runs') return viewRuns(tgt, p2, q);
      if (p0 === 'effort') return viewEffort(tgt, p2);
      if (p0 === 'trace') return await viewTrace(tgt, p2);
      if (p0 === 'run' && p1 && p2) return await viewRun(p1, p2);
      if ((p0 === 'session' || p0 === 'diff') && p1 && p2) return await viewRawFile(p0, p1, p2);
      if (p0 === 'compare') return await viewCompare(tgt, p2, p3);
      if (p0 === 'targets') return viewTargets();
      if (p0 === 'target' && p1) return await viewTarget(p1);
      if (p0 === 'notes' && p1) return await viewPost(p1);
      if (p0 === 'notes') return viewNotes();
      if (p0 === 'about') return await viewAbout();
      notFound();
    } catch (e) {
      $app.innerHTML = `<p class="muted">Error: ${esc(e.message)}</p>`;
    } finally {
      if (!(p0 === 'runs' || p0 === 'trace')) window.scrollTo(0, 0);
    }
  }

  fetch('data/index.json').then(r => r.json()).then(db => {
    DB = db; DB.posts = DB.posts || []; DB.highlights = DB.highlights || [];
    document.title = db.title;
    document.getElementById('colophon-text').innerHTML = `${esc(db.tagline)} · ${db.runs.length} run${db.runs.length === 1 ? '' : 's'} · <a href="${esc(db.repo_url)}">source &amp; data</a>`;
    window.addEventListener('hashchange', render);
    render();
  }).catch(e => { $app.innerHTML = `<p class="muted">Could not load data/index.json (${esc(e.message)}). Run <code>scripts/build-site.py</code> first.</p>`; });
})();
