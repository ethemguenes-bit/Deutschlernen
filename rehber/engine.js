// Fiil çekim motoru: IRR listesindeki güçlü fiillerden ve zayıf fiil kurallarından tüm zamanları üretir.
(function (W) {
  const IRRMAP = new Map();
  for (const raw of W.IRR.split('\n')) {
    const p = raw.trim().split('|'); if (p.length < 6) continue;
    IRRMAP.set(p[0], { inf: p[0], er: p[1], praet: p[2], pp: p[3], aux: p[4], tr: p[5], star: p[6] === '*' });
  }
  const INSEP = ['miss', 'emp', 'ent', 'zer', 'ver', 'über', 'unter', 'hinter', 'wider', 'be', 'er', 'ge'];
  const NOT_PREFIX = new Set(['beten', 'bellen', 'betteln', 'erben', 'ernten', 'gerben']);
  const NOT_DERIVED = new Set(['bereiten']); // be + reiten değil
  const PRON = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
  const REFL = { A: ['mich', 'dich', 'sich', 'uns', 'euch', 'sich'], D: ['mir', 'dir', 'sich', 'uns', 'euch', 'sich'] };
  const PRAES_OVR = {
    sein: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'], haben: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'],
    werden: ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'], wissen: ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'],
    können: ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'], dürfen: ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
    müssen: ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'], sollen: ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
    wollen: ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'], mögen: ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'],
  };
  const DU_OVR = { laden: 'lädst' };
  const KONJ2 = { sein: 'wäre', haben: 'hätte', werden: 'würde', können: 'könnte', dürfen: 'dürfte', müssen: 'müsste', sollen: 'sollte', wollen: 'wollte', mögen: 'möchte', wissen: 'wüsste', kommen: 'käme', gehen: 'ginge', geben: 'gäbe', finden: 'fände', bleiben: 'bliebe', tun: 'täte', lassen: 'ließe', brauchen: 'bräuchte' };
  const IMP_OVR = { sein: ['sei', 'seid', 'seien Sie'], haben: ['hab(e)', 'habt', 'haben Sie'], werden: ['werde', 'werdet', 'werden Sie'], wissen: ['wisse', 'wisst', 'wissen Sie'] };
  const MODALS = new Set(['können', 'dürfen', 'müssen', 'sollen', 'wollen', 'mögen']);

  function parseSpec(spec) {
    let s = spec.trim(), refl = null, aux = null, sep = '';
    if (s.startsWith('sich(D) ')) { refl = 'D'; s = s.slice(8); } else if (s.startsWith('sich ')) { refl = 'A'; s = s.slice(5); }
    const m = /\[(s|h)\]$/.exec(s); if (m) { aux = m[1]; s = s.slice(0, -3); }
    if (s.includes('·')) { const i = s.indexOf('·'); sep = s.slice(0, i); s = s.slice(i + 1); }
    return { refl, aux, sep, base: s, inf: sep + s, label: (refl ? 'sich ' : '') + sep + s };
  }
  function stemOf(b) { if (/e[lr]n$/.test(b) || !b.endsWith('en')) return b.endsWith('n') ? b.slice(0, -1) : b; return b.slice(0, -2); }
  function needE(st) { return /[td]$/.test(st) || (/[^aeiouäöüylrmn][mn]$/.test(st) && !/[aeiouäöü]h[mn]$/.test(st)); }
  const sib = st => /[sßzx]$/.test(st);

  function baseForms(base) {
    if (IRRMAP.has(base)) { const e = IRRMAP.get(base); return { er: e.er, praet: e.praet, pp: e.pp, aux: e.aux, strong: true, root: base, du: DU_OVR[base] }; }
    for (const p of INSEP) {
      const rest = base.slice(p.length);
      if (base.startsWith(p) && rest.length > 2 && IRRMAP.has(rest) && !NOT_DERIVED.has(base)) {
        const e = IRRMAP.get(rest);
        return { er: p + e.er, praet: p + e.praet, pp: p + (e.pp.startsWith('ge') ? e.pp.slice(2) : e.pp), aux: 'h', strong: true, root: rest, prefix: p, du: DU_OVR[rest] ? p + DU_OVR[rest] : undefined };
      }
    }
    const st = stemOf(base), e = needE(st);
    const insep = base.endsWith('ieren') || (!NOT_PREFIX.has(base) && INSEP.some(p => base.startsWith(p) && base.length > p.length + 3));
    return { er: st + (e ? 'et' : 't'), praet: st + (e ? 'ete' : 'te'), pp: (insep ? '' : 'ge') + st + (e ? 'et' : 't'), aux: 'h', strong: false, root: base };
  }

  function praesens(base, f) {
    if (PRAES_OVR[base]) return PRAES_OVR[base].slice();
    const st = stemOf(base), e = needE(st), regEr = st + (e ? 'et' : 't');
    const ich = base.endsWith('eln') ? base.slice(0, -3) + 'le' : st + 'e';
    let du;
    if (f.du) du = f.du;
    else if (f.er === regEr) du = e ? st + 'est' : sib(st) ? st + 't' : st + 'st';
    else if (/[td]$/.test(st)) du = f.er + 'st';
    else { const b = f.er.slice(0, -1); du = sib(b) ? f.er : b + 'st'; }
    return [ich, du, f.er, base, st + (e ? 'et' : 't'), base];
  }
  function praeteritum(P) {
    if (P.endsWith('e')) return [P, P + 'st', P, P + 'n', P + 't', P + 'n'];
    return [P, P + (/[tdsßz]$/.test(P) ? 'est' : 'st'), P, P + 'en', P + (/[td]$/.test(P) ? 'et' : 't'), P + 'en'];
  }
  function imperativ(base, f, ps) {
    if (IMP_OVR[base]) return IMP_OVR[base].slice();
    if (MODALS.has(base)) return null;
    const st = stemOf(base);
    let du;
    if (!f.strong || f.er === st + (needE(st) ? 'et' : 't')) du = needE(st) || (!f.strong && base.endsWith('ieren')) || base.endsWith('eln') || base.endsWith('ern') ? (base.endsWith('eln') ? base.slice(0, -3) + 'le' : st + 'e') : st;
    else if (/[äöü]/.test(f.er) && !/[äöü]/.test(st)) du = /[td]$/.test(st) ? st + 'e' : st; // a → ä: fahr!, halte!
    else if (/[td]$/.test(st)) du = f.er; // tritt!, gilt!
    else du = f.er.slice(0, -1); // nimm, gib, lies, sieh
    return [du, ps[4], base + ' Sie'];
  }

  function conjugate(spec) {
    const v = parseSpec(spec), f = baseForms(v.base);
    let aux = v.aux || (f.aux === 'hs' ? 's' : f.aux);
    if (v.refl) aux = v.aux || 'h';
    const R = v.refl ? REFL[v.refl] : null, sepT = v.sep ? ' ' + v.sep : '';
    const pp = v.sep + f.pp;
    const P = praesens(v.base, f), T = praeteritum(f.praet);
    const line = (i, verb, rest) => `${verb}${R ? ' ' + R[i] : ''}${rest}`;
    const HAB = PRAES_OVR.haben, SEI = PRAES_OVR.sein, WER = PRAES_OVR.werden;
    const auxP = aux === 's' ? SEI : HAB, auxT = aux === 's' ? praeteritum('war') : praeteritum('hatte');
    const k2 = KONJ2[v.base] || (f.prefix && KONJ2[f.root] ? f.prefix + KONJ2[f.root] : null);
    const tenses = {
      'Präsens': P.map((x, i) => line(i, x, sepT)),
      'Präteritum': T.map((x, i) => line(i, x, sepT)),
      'Perfekt': auxP.map((x, i) => line(i, x, ' ' + pp)),
      'Plusquamperfekt': auxT.map((x, i) => line(i, x, ' ' + pp)),
      'Futur I': WER.map((x, i) => line(i, x, ' ' + v.inf)),
      'Konjunktiv II': k2 ? [k2, k2 + 'st', k2, k2 + 'n', k2 + 't', k2 + 'n'].map((x, i) => line(i, x, sepT)) : praeteritum('würde').map((x, i) => line(i, x, ' ' + v.inf)),
    };
    const imp = imperativ(v.base, f, P);
    if (imp) {
      const r = v.refl ? [' ' + REFL[v.refl][1], ' ' + REFL[v.refl][4], ' sich'] : ['', '', ''];
      tenses['Imperativ'] = imp.map((x, i) => x + r[i] + sepT + '!');
    }
    const auxWord = aux === 's' ? 'ist' : 'hat';
    return {
      ...v, forms: f, aux, both: !v.aux && f.aux === 'hs' && !v.refl,
      stamm: [P[2] + sepT, f.praet + sepT, auxWord + ' ' + pp], pp, tenses, pron: PRON,
    };
  }
  W.VERB_ENGINE = { conjugate, parseSpec, IRRMAP, PRON };
})(typeof window !== 'undefined' ? window : globalThis);
