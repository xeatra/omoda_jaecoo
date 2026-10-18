/* =====================================================================
   PAGES — home · brand · model · configurator · stock · vehicle · request · offers · offer
   ===================================================================== */
(function () {
  const SP = window.SP; SP.pages = SP.pages || {};
  const t = SP.t, L = v => SP.L(v), I = SP.icon, esc = SP.esc, eur = v => SP.eur(v);
  const brandModels = b => SP.MODELS.filter(m => m.brand === b);
  const keyRow = m => '<dl class="keys">' + m.key.map((k, i) => '<div><dt>' + k[0] + (k[1] ? '<small>' + k[1] + '</small>' : '') + '</dt><dd>' + (m.keyL[i] ? L(SP.SPEC_LABELS[m.keyL[i]]) : (k[1] === '"' ? (SP.lang === 'en' ? 'Touchscreen' : 'Ecran tactil') : (SP.lang === 'en' ? 'Camera' : 'Cameră'))) + '</dd></div>').join('') + '</dl>';

  /* ================================================================ HOME */
  SP.pages.home = function () {
    const split = '<section class="split">' +
      '<a class="split__half" data-brand="omoda" href="marca.html?b=omoda"><img src="assets/img/o5/hero.webp" alt="OMODA 5" fetchpriority="high"><div class="split__c">' + SP.logo('omoda', 'logo--xl') + '<p class="split__t">' + t('home.omodaT') + '</p><p class="split__s">' + t('home.omodaS') + '</p><span class="btn btn--glass">' + t('home.omodaC') + I('arrow') + '</span></div></a>' +
      '<a class="split__half" data-brand="jaecoo" href="marca.html?b=jaecoo"><img src="assets/img/j7/hero2.webp" alt="JAECOO 7"><div class="split__c">' + SP.logo('jaecoo', 'logo--xl') + '<p class="split__t">' + t('home.jaecooT') + '</p><p class="split__s">' + t('home.jaecooS') + '</p><span class="btn btn--glass">' + t('home.jaecooC') + I('arrow') + '</span></div></a>' +
      '<h1 class="split__h1"><span>' + t('home.h1') + '</span>' + t('home.choose') + '</h1></section>';

    const selector = '<section class="section sel" id="modele"><div class="container">' +
      '<div class="seg" role="tablist">' + ['omoda', 'jaecoo'].map((b, i) => '<button role="tab" aria-selected="' + (i === 0) + '" data-selb="' + b + '">' + b.toUpperCase() + '</button>').join('') + '</div>' +
      '<div class="sel__tabs" data-seltabs></div><div class="sel__stage" data-selstage></div>' +
      '<p class="sel__all"><a class="link" href="marca.html?b=omoda">' + t('home.allModels') + I('arrow') + '</a></p></div></section>';

    const local = '<section class="section section--soft"><div class="container local"><div><p class="eyebrow">' + t('home.local') + '</p><h2 class="h2">' + t('home.localT') + '</h2></div><div><p class="lead">' + t('home.localD') + '</p>' +
      '<div class="btnrow"><a class="btn btn--ink" href="solicita.html?tip=test-drive">' + t('c.testdrive') + I('arrow') + '</a><a class="btn btn--line" href="solicita.html?tip=oferta">' + t('nav.offer') + '</a></div></div></div></section>';

    const brands = '<section class="section"><div class="container duo">' +
      '<a class="duo__c" data-brand="omoda" href="marca.html?b=omoda"><img src="assets/img/o7/hero.webp" alt="" loading="lazy"><div><p class="eyebrow">OMODA</p><h3 class="h3">' + (SP.lang === 'en' ? 'Bold outside, smart inside.' : 'Îndrăzneț pe dinafară, inteligent pe dinăuntru.') + '</h3><span class="link">' + t('c.explore') + ' OMODA' + I('arrow') + '</span></div></a>' +
      '<a class="duo__c" data-brand="jaecoo" href="marca.html?b=jaecoo"><img src="assets/img/j5/hero2.webp" alt="" loading="lazy"><div><p class="eyebrow">JAECOO</p><h3 class="h3">' + (SP.lang === 'en' ? 'Luxury doesn’t stop where the tarmac ends.' : 'Luxul nu se oprește la asfalt.') + '</h3><span class="link">' + t('c.explore') + ' JAECOO' + I('arrow') + '</span></div></a></div></section>';

    const shs = '<section class="band"><img class="band__bg" src="assets/img/j8/hero.webp" alt="" loading="lazy"><div class="container band__in"><div class="band__txt"><p class="eyebrow">' + t('home.shs') + '</p><h2 class="h2">' + t('home.shsT') + '</h2><p>' + t('home.shsD') + '</p><a class="btn btn--glass" href="stire.html?id=shs-1000-km">' + t('c.read') + I('arrow') + '</a></div>' +
      '<dl class="stats">' + [['1.200', 'km', 'home.s1'], ['145', 'km', 'home.s2'], ['44,5', '%', 'home.s3'], ['7', SP.lang === 'en' ? 'yrs' : 'ani', 'home.s4']].map(s => '<div><dt>' + s[0] + '<small>' + s[1] + '</small></dt><dd>' + t(s[2]) + '</dd></div>').join('') + '</dl></div></section>';

    const order = { stock: 0, demo: 1, transit: 2 };
    const stock = '<section class="section"><div class="container">' + SP.shead(t('home.stock'), t('home.stockT'), null, [t('c.viewAll') + ' (' + SP.STOCK.length + ')', 'stoc.html']) +
      '<div class="grid4">' + SP.STOCK.slice().sort((a, b) => order[a.status] - order[b.status]).filter((v, i, a) => a.findIndex(x => x.modelId === v.modelId) === i).slice(0, 4).map(SP.stockCard).join('') + '</div></div></section>';

    const offers = '<section class="section section--soft"><div class="container">' + SP.shead(t('home.offers'), t('home.offersT'), null, [t('c.viewAll'), 'oferte.html']) +
      '<div class="grid3">' + SP.OFFERS.slice(0, 3).map(SP.offerCard).join('') + '</div></div></section>';

    const unsure = '<section class="section"><div class="container cta"><h2 class="h2">' + t('home.unsure') + '</h2><p class="lead">' + t('home.unsureD') + '</p><div class="btnrow btnrow--c"><a class="btn btn--ink" href="solicita.html?tip=test-drive">' + t('c.testdrive') + I('arrow') + '</a><a class="btn btn--line" href="contact.html">' + t('home.unsureC') + '</a></div></div></section>';

    return {
      title: '', html: split + selector + local + brands + shs + stock + offers + unsure,
      bind(root) {
        let brand = 'omoda', mid = brandModels('omoda')[0].id;
        const drawTabs = () => { root.querySelector('[data-seltabs]').innerHTML = brandModels(brand).map(m => '<button data-selm="' + m.id + '" class="' + (m.id === mid ? 'is-on' : '') + '">' + m.name + '</button>').join(''); root.querySelectorAll('[data-selm]').forEach(b => b.addEventListener('click', () => { mid = b.dataset.selm; drawTabs(); drawStage(); })); };
        const drawStage = () => {
          const m = SP.model(mid); const st = root.querySelector('[data-selstage]');
          st.setAttribute('data-brand', m.brand);
          st.innerHTML = '<div class="sel__img"><img src="' + m.img('studio') + '" alt="' + m.name + '"></div>' +
            '<div class="sel__info"><div>' + SP.fuelChip(m.fuel) + '<h3 class="h3">' + m.name + '</h3><p>' + L(m.tagline) + '</p></div>' + keyRow(m) +
            '<div class="sel__price"><small>' + t('c.launch') + ' ' + t('c.from') + '</small><strong>' + eur(m.from) + '</strong><small>' + t('c.vat') + '</small></div>' +
            '<div class="btnrow"><a class="btn btn--ink" href="model.html?m=' + m.id + '">' + t('c.explore') + ' ' + m.name + I('arrow') + '</a><a class="btn btn--line" href="configurator.html?m=' + m.id + '">' + t('c.configure') + '</a><a class="btn btn--line" href="solicita.html?tip=test-drive&m=' + m.id + '">' + t('c.testdrive') + '</a></div></div>';
        };
        root.querySelectorAll('[data-selb]').forEach(b => b.addEventListener('click', () => { brand = b.dataset.selb; mid = brandModels(brand)[0].id; root.querySelectorAll('[data-selb]').forEach(x => x.setAttribute('aria-selected', String(x === b))); root.querySelector('.sel__all a').href = 'marca.html?b=' + brand; drawTabs(); drawStage(); }));
        drawTabs(); drawStage();
      }
    };
  };

  /* ================================================================ BRAND */
  SP.pages.brand = function () {
    const b = SP.param('b') === 'jaecoo' ? 'jaecoo' : 'omoda';
    const list = brandModels(b), fuels = ['all'].concat(['ice', 'hev', 'phev', 'ev'].filter(f => list.some(m => m.fuel === f)));
    const hero = '<section class="bhero" data-brand="' + b + '"><img src="' + (b === 'omoda' ? 'assets/img/o9/hero.webp' : 'assets/img/j8/hero.webp') + '" alt="" fetchpriority="high"><div class="container bhero__in">' + SP.logo(b, 'logo--xl') + '<p>' + t('brand.' + b + 'Lead') + '</p><span class="chip chip--glass">' + list.length + ' ' + t('brand.models') + '</span></div></section>';
    const html = hero + '<section class="section" data-brand="' + b + '"><div class="container"><div class="fchips" role="tablist">' + fuels.map((f, i) => '<button role="tab" aria-selected="' + (i === 0) + '" data-f="' + f + '">' + t('f.' + f) + '</button>').join('') +
      '<a class="fchips__sw" href="marca.html?b=' + (b === 'omoda' ? 'jaecoo' : 'omoda') + '">' + (b === 'omoda' ? t('nav.jaecoo') : t('nav.omoda')) + I('arrow') + '</a></div><div class="grid3" data-list>' + list.map(SP.modelCard).join('') + '</div></div></section>';
    return {
      title: b.toUpperCase(), html,
      bind(root) { root.querySelectorAll('[data-f]').forEach(x => x.addEventListener('click', () => { root.querySelectorAll('[data-f]').forEach(y => y.setAttribute('aria-selected', String(y === x))); root.querySelector('[data-list]').innerHTML = list.filter(m => x.dataset.f === 'all' || m.fuel === x.dataset.f).map(SP.modelCard).join(''); })); }
    };
  };

  /* ================================================================ MODEL */
  SP.specRows = m => Object.keys(SP.SPEC_LABELS).filter(k => m.specs[k]).map(k => '<div><dt>' + L(SP.SPEC_LABELS[k]) + '</dt><dd>' + L(m.specs[k]) + '</dd></div>').join('');
  SP.equipTable = (m, onlyCol) => {
    const g = (SP.EQUIP[m.id] || []); const vs = m.versions;
    const cols = onlyCol == null ? vs.map((v, i) => i) : [onlyCol];
    const cell = x => x === 'y' ? '<span class="yes" aria-label="' + t('c.std') + '">' + I('check') + '</span>' : x === 'n' ? '<span class="no" aria-label="' + t('c.na') + '">—</span>' : x === 'o' ? '<span class="eopt">opț.</span>' : '<span class="txt">' + esc(x) + '</span>';
    return '<div class="equip" data-equip>' + g.map((grp, gi) => '<details class="equip__g"' + (gi < 1 ? ' open' : '') + '><summary><span>' + grp[0] + '</span><small>' + grp[1].length + '</small>' + I('down') + '</summary><div class="tbl-wrap"><table class="tbl"><thead><tr><th></th>' + cols.map(c => '<th class="c">' + vs[c].name + '</th>').join('') + '</tr></thead><tbody>' +
      grp[1].map(r => '<tr><td>' + esc(r[0]) + '</td>' + cols.map(c => '<td class="c">' + cell(r[c + 1]) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div></details>').join('') + '</div>' +
      (SP.lang === 'en' ? '<p class="note">' + t('m.equipLang') + '</p>' : '');
  };

  SP.pages.model = function () {
    const m = SP.model(SP.param('m')) || SP.MODELS[0];
    const stock = SP.STOCK.filter(v => v.modelId === m.id);
    const anchors = [['overview', 'prezentare'], ['versions', 'versiuni'], ['colors', 'culori'], ['specs', 'date-tehnice'], ['equipment', 'dotari'], ['stock', 'stoc'], ['downloads', 'documente']];
    const hero = '<section class="mhero" data-brand="' + m.brand + '"><img class="mhero__bg" src="' + m.img('hero') + '" alt="' + m.name + '" fetchpriority="high"><div class="container mhero__in">' + SP.logo(m.brand, 'logo--md') + '<h1 class="mhero__t">' + m.name + '</h1><p class="mhero__s">' + L(m.tagline) + '</p>' +
      '<p class="mhero__p"><small>' + t('c.launch') + ' ' + t('c.from') + '</small> ' + eur(m.from) + ' <small>' + t('c.vat') + '</small></p>' +
      '<div class="btnrow"><a class="btn btn--white" href="configurator.html?m=' + m.id + '">' + t('c.configure') + I('arrow') + '</a><a class="btn btn--glass" href="solicita.html?tip=test-drive&m=' + m.id + '">' + t('c.testdrive') + '</a><a class="btn btn--glass" href="solicita.html?tip=oferta&m=' + m.id + '">' + t('c.offer') + '</a></div></div></section>';
    const sub = '<nav class="subnav" data-brand="' + m.brand + '"><div class="container subnav__in"><strong>' + m.name + '</strong><ul>' + anchors.map(a => '<li><a href="#' + a[1] + '">' + t('m.' + a[0]) + '</a></li>').join('') + '</ul><a class="btn btn--ink btn--sm" href="configurator.html?m=' + m.id + '">' + t('c.configure') + '</a></div></nav>';
    const overview = '<section class="section" id="prezentare" data-brand="' + m.brand + '"><div class="container ov"><div><p class="eyebrow">' + t('m.overview') + '</p><p class="ov__intro">' + L(m.intro) + '</p>' + (m.stockOnly ? '<p class="warnbox">' + I('alert') + t('m.stockOnly') + '</p>' : '') + '</div>' + keyRow(m) + '</div></section>';
    const versions = '<section class="section section--soft" id="versiuni" data-brand="' + m.brand + '"><div class="container">' + SP.shead(t('m.versions'), m.name, null) +
      '<div class="vgrid vgrid--' + m.versions.length + '">' + m.versions.map(v => '<article class="vcard"><header><p class="kicker">' + t('m.trim') + '</p><h3>' + v.name + '</h3><p class="vcard__e">' + L(v.engine) + '</p></header>' +
        '<div class="vcard__p"><s>' + eur(v.list) + '</s><strong>' + eur(v.launch) + '</strong><small>' + t('c.launch') + ', ' + t('c.vat') + ' · ' + eur(v.launchNet) + ' ' + t('c.noVat') + '</small><span class="save">' + t('c.saved') + ' ' + eur(v.list - v.launch) + '</span></div>' +
        '<ul class="ticks">' + L(v.hi).map(h => '<li>' + I('check') + h + '</li>').join('') + '</ul>' +
        '<div class="btnrow"><a class="btn btn--ink btn--sm" href="configurator.html?m=' + m.id + '&v=' + v.id + '">' + t('c.configure') + I('arrow') + '</a><a class="btn btn--line btn--sm" href="solicita.html?tip=oferta&m=' + m.id + '">' + t('c.offer') + '</a></div></article>').join('') + '</div>' +
      '<p class="note">' + t('m.disclaimer') + ' ' + SP.date(m.validFrom) + '. ' + t('m.disclaimer2') + '</p></div></section>';
    const groups = [['std', 'm.colorStd'], ['extra', 'm.colorExtra'], ['bitone', 'm.colorBi'], ['matte', 'm.colorMatte']];
    const colors = '<section class="section" id="culori" data-brand="' + m.brand + '"><div class="container cols"><div class="cols__stage"><img data-cimg src="' + m.colorImg(m.colors[0].code) + '" alt=""></div><div class="cols__p"><p class="eyebrow">' + t('m.colors') + '</p><h2 class="h3" data-cname>' + L(m.colors[0].name) + '</h2><p class="muted" data-cprice>' + t('m.colorStd') + ' · ' + t('c.included') + '</p>' +
      groups.filter(g => m.colors.some(c => c.group === g[0])).map(g => { const cs = m.colors.filter(c => c.group === g[0]); return '<div class="swg"><p>' + t(g[1]) + (cs[0].price ? ' · +' + eur(cs[0].price) : '') + '</p><div class="sw">' + cs.map(c => '<button type="button" aria-label="' + esc(L(c.name)) + '" aria-pressed="' + (c === m.colors[0]) + '" style="--c:' + c.hex + '" class="' + (c.group === 'bitone' ? 'sw--bi' : '') + '" data-c="' + c.code + '"></button>').join('') + '</div></div>'; }).join('') +
      (m.colorRule ? '<p class="note">' + L(m.colorRule) + '</p>' : '') +
      '<h3 class="h4 ints__h">' + t('m.interior') + '</h3><ul class="ints">' + m.interiors.map(i => '<li><span style="--c:' + i.hex + '"></span>' + L(i.name) + (i.price ? ' · +' + eur(i.price) : '') + '</li>').join('') + '</ul></div></div>' +
      '<div class="container"><div class="gal">' + m.gallery.map((g, i) => '<a class="gal__i" href="#" data-lightbox=\'' + JSON.stringify(m.gallery.map(x => m.img(x))) + '\' data-index="' + i + '"><img src="' + m.img(g) + '" alt="' + m.name + '" loading="lazy"></a>').join('') + '</div></div></section>';
    const specs = '<section class="section section--soft" id="date-tehnice"><div class="container">' + SP.shead(t('m.specs'), m.name, null) + '<dl class="specs">' + SP.specRows(m) + '</dl></div></section>';
    const equip = '<section class="section" id="dotari" data-brand="' + m.brand + '"><div class="container">' + SP.shead(t('m.equipment'), SP.lang === 'en' ? 'Equipment by trim' : 'Dotări pe versiuni', t('m.equipNote')) + SP.equipTable(m) + '</div></section>';
    const st = '<section class="section section--soft" id="stoc"><div class="container">' + SP.shead(t('m.stock'), m.name + ' ' + t('m.inStockT'), null, [t('c.viewAll'), 'stoc.html?m=' + m.id]) +
      (stock.length ? '<div class="grid4">' + stock.map(SP.stockCard).join('') + '</div>' : '<p class="muted">' + t('m.noStock') + '</p>') + '</div></section>';
    const docs = '<section class="section" id="documente"><div class="container">' + SP.shead(t('m.downloads'), t('c.priceList') + ' ' + m.name, null) +
      '<a class="doc" href="assets/docs/' + m.pdf + '" target="_blank" rel="noopener">' + I('doc') + '<span><strong>' + t('c.priceList') + ' & ' + (SP.lang === 'en' ? 'catalogue' : 'catalog') + ' ' + m.name + '</strong><small>PDF · ' + t('br.valid') + ' ' + SP.date(m.validFrom) + '</small></span>' + I('download') + '</a></div></section>';
    const cta = '<section class="section"><div class="container cta" data-brand="' + m.brand + '"><img src="' + m.img('studio') + '" alt="" loading="lazy"><h2 class="h2">' + t('m.cta') + '</h2><p class="lead">' + t('m.ctaD') + '</p><div class="btnrow btnrow--c"><a class="btn btn--ink" href="configurator.html?m=' + m.id + '">' + t('c.configure') + I('arrow') + '</a><a class="btn btn--line" href="solicita.html?tip=test-drive&m=' + m.id + '">' + t('c.testdrive') + '</a></div></div></section>';
    return {
      title: m.name, html: hero + sub + overview + versions + colors + specs + equip + st + docs + cta,
      bind(root) {
        root.querySelectorAll('[data-c]').forEach(b => b.addEventListener('click', () => {
          const c = m.colors.find(x => x.code === b.dataset.c), img = root.querySelector('[data-cimg]');
          root.querySelectorAll('[data-c]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
          img.classList.add('is-fade'); setTimeout(() => { img.src = m.colorImg(c.code); img.classList.remove('is-fade'); }, 160);
          root.querySelector('[data-cname]').textContent = L(c.name);
          root.querySelector('[data-cprice]').textContent = (c.price ? '+' + eur(c.price) : t('m.colorStd') + ' · ' + t('c.included')) + ' · ' + c.code;
        }));
      }
    };
  };

  /* ================================================================ CONFIGURATOR (5 steps) */
  SP.pages.configurator = function () {
    const m = SP.model(SP.param('m'));
    if (!m) {
      return { title: t('cfg.title'), html: SP.phead(t('cfg.title'), t('cfg.pick'), null) + '<section class="section section--tight"><div class="container">' + ['omoda', 'jaecoo'].map(b => '<div class="cpick" data-brand="' + b + '">' + SP.logo(b, 'logo--md') + '<div class="cpick__g">' + brandModels(b).map(x => '<a class="cpick__c" href="configurator.html?m=' + x.id + '"><img src="' + x.img('studio') + '" alt="" loading="lazy"><strong>' + x.name + '</strong><small>' + t('c.from') + ' ' + eur(x.from) + '</small><span class="btn btn--ink btn--sm">' + t('c.configure') + '</span></a>').join('') + '</div></div>').join('') + '</div></section>' };
    }
    const s = { step: 1, v: (m.versions.find(x => x.id === SP.param('v')) || m.versions[0]).id, c: m.colors[0].code, i: m.interiors[0].id, acc: [] };
    const accs = SP.ACCESSORIES.filter(a => a.fits === 'all' || a.fits.includes(m.fuel));
    const steps = ['cfg.s1', 'cfg.s2', 'cfg.s3', 'cfg.s4', 'cfg.s5'];
    const ver = () => m.versions.find(x => x.id === s.v), col = () => m.colors.find(x => x.code === s.c), int = () => m.interiors.find(x => x.id === s.i);
    const colorOk = c => c.group === 'std' || !m.extraTrims || m.extraTrims.includes(s.v);
    const total = () => ver().launch + col().price + int().price + s.acc.reduce((a, id) => a + accs.find(x => x.id === id).price, 0);
    const code = () => (m.id + '-' + s.v + '-' + s.c + '-' + s.i + (s.acc.length ? '-' + s.acc.join('.') : '')).toUpperCase();

    const html = '<section class="cfg" data-brand="' + m.brand + '"><div class="cfg__stage"><div class="cfg__top"><a class="link link--sm" href="configurator.html">' + I('arrowL') + t('cfg.change') + '</a>' + SP.logo(m.brand, 'logo--sm') + '</div><h1 class="cfg__name">' + m.name + ' <span data-vname></span></h1><div class="cfg__img"><img data-stage alt=""></div><p class="cfg__cap" data-cap></p></div>' +
      '<aside class="cfg__panel"><ol class="cfg__steps">' + steps.map((k, i) => '<li><button type="button" data-goto="' + (i + 1) + '"><span>' + (i + 1) + '</span>' + t(k) + '</button></li>').join('') + '</ol><div class="cfg__body" data-body></div>' +
      '<div class="cfg__bar"><div><small>' + t('cfg.total') + '</small><strong data-total></strong><small data-monthly></small></div><div class="cfg__nav"><button class="btn btn--line btn--sm" data-prev>' + I('arrowL') + '</button><button class="btn btn--ink btn--sm" data-next></button></div></div></aside></section>' +
      '<section class="section section--soft" id="rezumat" hidden data-summary></section>';

    function body() {
      if (s.step === 1) return '<h2 class="h4">' + t('cfg.s1') + '</h2>' + m.versions.map(v => '<label class="opt"><input type="radio" name="v" value="' + v.id + '"' + (v.id === s.v ? ' checked' : '') + '><span><span class="opt__h"><strong>' + v.name + '</strong><em>' + eur(v.launch) + '</em></span><s>' + eur(v.list) + '</s><ul class="ticks ticks--sm">' + L(v.hi).slice(0, 5).map(h => '<li>' + I('check') + h + '</li>').join('') + '</ul></span></label>').join('');
      if (s.step === 2) { const v = ver(); return '<h2 class="h4">' + t('cfg.s2') + '</h2><label class="opt"><input type="radio" checked><span><span class="opt__h"><strong>' + L(v.engine) + '</strong><em>' + t('c.included') + '</em></span><dl class="minispecs">' + ['power', 'sysPower', 'trans', 'drive', 'accel', 'cons', 'energy', 'evRange'].filter(k => m.specs[k]).map(k => '<div><dt>' + L(SP.SPEC_LABELS[k]) + '</dt><dd>' + L(m.specs[k]) + '</dd></div>').join('') + '</dl></span></label>' + (m.stockOnly ? '<p class="warnbox">' + I('alert') + t('m.stockOnly') + '</p>' : ''); }
      if (s.step === 3) return '<h2 class="h4">' + t('cfg.s3') + '</h2><div class="clist">' + m.colors.map(c => { const ok = colorOk(c); return '<label class="copt' + (ok ? '' : ' is-off') + '"><input type="radio" name="c" value="' + c.code + '"' + (c.code === s.c ? ' checked' : '') + (ok ? '' : ' disabled') + '><span class="copt__sw' + (c.group === 'bitone' ? ' sw--bi' : '') + '" style="--c:' + c.hex + '"></span><span class="copt__n">' + L(c.name) + '<small>' + c.code + (ok ? '' : ' · ' + t('cfg.notAvail') + ' ' + m.versions.filter(v => m.extraTrims.includes(v.id)).map(v => v.name).join(', ')) + '</small></span><em>' + (c.price ? '+' + eur(c.price) : t('c.included')) + '</em></label>'; }).join('') + '</div>';
      if (s.step === 4) return '<h2 class="h4">' + t('cfg.s4') + '</h2><div class="clist">' + m.interiors.map(i => '<label class="copt"><input type="radio" name="i" value="' + i.id + '"' + (i.id === s.i ? ' checked' : '') + '><span class="copt__sw" style="--c:' + i.hex + '"></span><span class="copt__n">' + L(i.name) + '</span><em>' + (i.price ? '+' + eur(i.price) : t('c.included')) + '</em></label>').join('') + '</div>';
      return '<h2 class="h4">' + t('cfg.accTitle') + '</h2><p class="note">' + t('cfg.accNote') + '</p><div class="clist">' + accs.map(a => '<label class="copt copt--chk"><input type="checkbox" name="a" value="' + a.id + '"' + (s.acc.includes(a.id) ? ' checked' : '') + '><span class="copt__box">' + I('check') + '</span><span class="copt__n">' + L(a.name) + '</span><em>+' + eur(a.price) + '</em></label>').join('') + '</div>';
    }
    function draw(root) {
      const v = ver(), c = col(), i = int();
      root.querySelector('[data-vname]').textContent = v.name;
      const img = root.querySelector('[data-stage]');
      const src = s.step === 4 && i.img ? m.img(i.img) : m.colorImg(c.code);
      if (img.getAttribute('src') !== src) { img.classList.add('is-fade'); setTimeout(() => { img.src = src; img.classList.toggle('is-photo', s.step === 4 && !!i.img); img.classList.remove('is-fade'); }, 150); }
      root.querySelector('[data-cap]').textContent = L(c.name) + ' · ' + L(i.name);
      root.querySelectorAll('[data-goto]').forEach(b => { const n = +b.dataset.goto; b.parentNode.className = n === s.step ? 'is-on' : n < s.step ? 'is-done' : ''; });
      root.querySelector('[data-body]').innerHTML = body();
      root.querySelector('[data-total]').textContent = eur(total());
      root.querySelector('[data-monthly]').textContent = t('cfg.monthly') + ' ' + eur(SP.monthly(total())) + '/' + t('c.month');
      root.querySelector('[data-prev]').disabled = s.step === 1;
      root.querySelector('[data-next]').innerHTML = (s.step === 5 ? t('cfg.finish') : t('c.next')) + I('arrow');
      root.querySelectorAll('[data-body] input').forEach(inp => inp.addEventListener('change', () => {
        if (inp.name === 'v') { s.v = inp.value; if (!colorOk(col())) s.c = m.colors[0].code; }
        if (inp.name === 'c') s.c = inp.value; if (inp.name === 'i') s.i = inp.value;
        if (inp.name === 'a') s.acc = [...root.querySelectorAll('[name="a"]:checked')].map(x => x.value);
        draw(root);
      }));
    }
    function summary(root) {
      const v = ver(), c = col(), i = int(), sec = root.querySelector('[data-summary]');
      const row = (k, val, p) => '<tr><th>' + k + '</th><td>' + val + '</td><td class="num">' + p + '</td></tr>';
      sec.hidden = false;
      sec.innerHTML = '<div class="container sum"><div><p class="eyebrow">' + t('cfg.summary') + '</p><h2 class="h2">' + m.name + ' ' + v.name + '</h2><div class="sum__img" data-brand="' + m.brand + '"><img src="' + m.colorImg(c.code) + '" alt=""></div>' +
        '<div class="tbl-wrap"><table class="tbl sum__t"><tbody>' + row(t('cfg.base'), m.name + ' ' + v.name + ' · ' + L(v.engine), eur(v.launch)) + row(t('cfg.s3'), L(c.name) + ' (' + c.code + ')', c.price ? eur(c.price) : t('c.included')) + row(t('cfg.s4'), L(i.name), i.price ? eur(i.price) : t('c.included')) +
        s.acc.map(id => { const a = accs.find(x => x.id === id); return row(t('cfg.s5'), L(a.name), eur(a.price)); }).join('') + '</tbody><tfoot><tr><th>' + t('cfg.total') + '</th><td><small>' + t('cfg.totalNote') + '</small></td><td class="num"><strong>' + eur(total()) + '</strong></td></tr></tfoot></table></div>' +
        '<p class="note">' + t('cfg.code') + ': <code>' + code() + '</code> · ' + t('cfg.monthly') + ' ' + eur(SP.monthly(total())) + '/' + t('c.month') + ' — ' + t('cfg.finNote') + '</p></div>' +
        '<div class="panel"><h3 class="h4">' + t('cfg.send') + '</h3><p class="muted">' + t('cfg.sendD') + '</p>' + SP.leadForm({ type: 'configuration', ctx: code(), submit: t('cfg.send'), message: true }) + '</div></div>';
      sec.querySelector('form').addEventListener('submit', e => { e.preventDefault(); const f = e.target; if (!SP.validate(f)) return; /* Integration point: POST /api/leads (type=configuration, payload=configuration code + items) */ f.outerHTML = SP.done(t('cfg.done'), t('f.okD'), '#' + SP.ref('CFG')); });
      sec.querySelectorAll('form').forEach(f => f.removeAttribute('data-lead'));
      sec.scrollIntoView({ behavior: 'smooth' });
    }
    return {
      title: t('cfg.title') + ' ' + m.name, html,
      bind(root) {
        root.querySelectorAll('[data-goto]').forEach(b => b.addEventListener('click', () => { s.step = +b.dataset.goto; draw(root); }));
        root.querySelector('[data-prev]').addEventListener('click', () => { if (s.step > 1) { s.step--; draw(root); } });
        root.querySelector('[data-next]').addEventListener('click', () => { if (s.step < 5) { s.step++; draw(root); } else summary(root); });
        draw(root);
      }
    };
  };

  /* ================================================================ STOCK */
  SP.pages.stock = function () {
    const st = { brand: 'all', model: SP.param('m') || '', fuel: '', status: '', max: '', sort: 'rec' };
    if (st.model) st.brand = SP.model(st.model) ? SP.model(st.model).brand : 'all';
    const sel = (k, lab, opts) => '<div class="field"><label for="s-' + k + '">' + lab + '</label><select id="s-' + k + '" data-s="' + k + '"><option value="">' + t('st.any') + '</option>' + opts.map(o => '<option value="' + o[0] + '">' + o[1] + '</option>').join('') + '</select></div>';
    const html = SP.phead(t('st.eyebrow'), t('st.title'), t('st.sub')) + '<section class="section section--tight"><div class="container">' +
      '<div class="stbar"><div class="seg seg--sm" role="tablist">' + [['all', t('f.all')], ['omoda', 'OMODA'], ['jaecoo', 'JAECOO']].map(b => '<button role="tab" aria-selected="' + (b[0] === st.brand) + '" data-b="' + b[0] + '">' + b[1] + '</button>').join('') + '</div>' +
      '<div class="stbar__r"><span class="muted" data-count></span><button class="btn btn--line btn--sm fbtn" data-fo>' + I('sliders') + t('st.filters') + '</button><label class="sr" for="s-sort">' + t('st.sort') + '</label><select id="s-sort" class="sel-sm" data-s="sort"><option value="rec">' + t('st.rec') + '</option><option value="asc">' + t('st.asc') + '</option><option value="desc">' + t('st.desc') + '</option></select></div></div>' +
      '<div class="stock"><aside class="filters" data-filters><div class="filters__h"><strong>' + t('st.filters') + '</strong><button class="link link--sm" data-reset>' + t('st.reset') + '</button><button class="filters__x" data-fc aria-label="' + t('nav.close') + '">' + I('x') + '</button></div>' +
      '<div class="field"><label for="s-model">' + t('st.model') + '</label><select id="s-model" data-s="model"></select></div>' +
      sel('fuel', t('st.fuel'), ['ice', 'hev', 'phev', 'ev'].map(f => [f, t('f.' + f)])) + sel('status', t('st.status'), ['stock', 'transit', 'demo'].map(s => [s, t('status.' + s)])) +
      sel('max', t('st.max'), [30000, 35000, 40000, 50000, 55000].map(p => [p, eur(p)])) + '<button class="btn btn--ink btn--block filters__go" data-fc>' + t('st.show') + '</button></aside><div class="grid3" data-res></div></div></div></section>';
    function models(root) { const s = root.querySelector('[data-s="model"]'); s.innerHTML = '<option value="">' + t('st.any') + '</option>' + SP.MODELS.filter(m => st.brand === 'all' || m.brand === st.brand).map(m => '<option value="' + m.id + '"' + (m.id === st.model ? ' selected' : '') + '>' + m.name + '</option>').join(''); }
    function apply(root) {
      let l = SP.STOCK.filter(v => (st.brand === 'all' || v.brand === st.brand) && (!st.model || v.modelId === st.model) && (!st.fuel || v.model.fuel === st.fuel) && (!st.status || v.status === st.status) && (!st.max || v.price <= +st.max));
      if (st.sort === 'asc') l.sort((a, b) => a.price - b.price); if (st.sort === 'desc') l.sort((a, b) => b.price - a.price);
      root.querySelector('[data-count]').textContent = l.length + ' ' + t('st.results');
      root.querySelector('[data-res]').innerHTML = l.length ? l.map(SP.stockCard).join('') : '<div class="empty">' + I('car') + '<p>' + t('st.none') + '</p><a class="btn btn--ink" href="configurator.html">' + t('nav.config') + '</a></div>';
    }
    return {
      title: t('st.title'), html,
      bind(root) {
        models(root);
        root.querySelectorAll('[data-b]').forEach(b => b.addEventListener('click', () => { st.brand = b.dataset.b; st.model = ''; root.querySelectorAll('[data-b]').forEach(x => x.setAttribute('aria-selected', String(x === b))); models(root); apply(root); }));
        root.addEventListener('change', e => { const k = e.target.dataset && e.target.dataset.s; if (k) { st[k] = e.target.value; apply(root); } });
        root.querySelector('[data-reset]').addEventListener('click', () => { ['model', 'fuel', 'status', 'max'].forEach(k => { st[k] = ''; root.querySelector('[data-s="' + k + '"]').value = ''; }); apply(root); });
        const f = root.querySelector('[data-filters]');
        root.querySelector('[data-fo]').addEventListener('click', () => { f.classList.add('is-open'); document.body.classList.add('noscroll'); });
        root.querySelectorAll('[data-fc]').forEach(b => b.addEventListener('click', () => { f.classList.remove('is-open'); document.body.classList.remove('noscroll'); }));
        apply(root);
      }
    };
  };

  /* ================================================================ VEHICLE (stock car + full version sheet from importer data) */
  SP.pages.vehicle = function () {
    const v = SP.STOCK.find(x => x.id === SP.param('id')) || SP.STOCK[0];
    const m = v.model, vi = m.versions.indexOf(v.version), adv = SP.TEAM[v.advisor], loc = SP.LOCATIONS.find(l => l.id === v.location);
    const gal = JSON.stringify(v.gallery);
    const facts = [['v.version', v.version.name], ['st.fuel', L(SP.FUEL[m.fuel])], ['v.year', v.year], ['v.km', SP.num(v.km) + ' km'], ['v.color', L(v.color.name) + ' (' + v.color.code + ')'], ['v.int', L(v.interior.name)], ['v.vin', v.vin.slice(0, 11) + '••••••'], ['v.loc', L(loc.short)]];
    const html = '<div class="container crumbs"><a class="link link--sm" href="stoc.html">' + I('arrowL') + t('v.back') + '</a></div>' +
      '<section class="section section--tight" data-brand="' + m.brand + '"><div class="container vd"><div class="vd__g"><a class="vd__main" href="#" data-lightbox=\'' + gal + '\' data-index="0">' + SP.statusChip(v.status) + '<img data-main src="' + v.gallery[0] + '" alt="' + esc(m.name) + '"></a>' +
      '<div class="vd__th">' + v.gallery.map((g, i) => '<button type="button" data-th="' + i + '"' + (i ? '' : ' class="is-on"') + '><img src="' + g + '" alt="" loading="lazy"></button>').join('') + '</div></div>' +
      '<div class="vd__i">' + SP.logo(m.brand, 'logo--sm') + '<h1 class="vd__t">' + m.name + ' <span>' + v.version.name + '</span></h1><p class="muted">' + L(v.version.engine) + '</p>' +
      '<div class="pbox">' + (v.priceList > v.price ? '<div><span>' + t('c.list') + '</span><s>' + eur(v.priceList) + '</s></div>' : '') + '<div class="pbox__m"><span>' + (SP.lang === 'en' ? 'Price' : 'Preț') + '</span><strong>' + eur(v.price) + '</strong></div><div><span>' + t('c.vatIncl') + '</span><span>' + t('v.rate') + ' ' + eur(SP.monthly(v.price)) + '/' + t('c.month') + '</span></div>' +
      (v.extraDiscount ? '<p class="pbox__d">' + I('tag') + t('v.discount') + ': −' + eur(v.extraDiscount) + '</p>' : '') + '</div>' +
      '<dl class="facts">' + facts.map(f => '<div><dt>' + t(f[0]) + '</dt><dd>' + f[1] + '</dd></div>').join('') + '</dl>' +
      '<div class="btnrow"><a class="btn btn--ink" href="#oferta">' + t('c.offer') + I('arrow') + '</a><a class="btn btn--line" href="#test-drive">' + t('c.testdrive') + '</a></div>' +
      '<div class="adv"><span class="avatar">' + adv.name.split(' ').map(x => x[0]).join('') + '</span><div><small>' + t('v.advisor') + '</small><strong>' + adv.name + '</strong><span>' + L(adv.role) + '</span></div><a class="iconbtn" href="tel:' + adv.phone.replace(/\s/g, '') + '" aria-label="' + t('c.call') + '">' + I('phone') + '</a><a class="iconbtn" href="https://wa.me/' + SP.DEALER.whatsapp.replace(/\D/g, '') + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + I('whatsapp') + '</a></div></div></div></section>' +
      '<section class="section section--soft" data-brand="' + m.brand + '"><div class="container">' + SP.shead(t('v.fromSP'), m.name + ' ' + v.version.name, L(m.intro)) +
      '<div class="vsheet"><div><h3 class="h4">' + t('m.highlights') + '</h3><ul class="ticks">' + L(v.version.hi).map(h => '<li>' + I('check') + h + '</li>').join('') + '</ul><h3 class="h4">' + t('m.specs') + '</h3><dl class="specs specs--1">' + SP.specRows(m) + '</dl>' +
      '<a class="doc" href="assets/docs/' + m.pdf + '" target="_blank" rel="noopener">' + I('doc') + '<span><strong>' + t('c.priceList') + ' ' + m.name + '</strong><small>PDF</small></span>' + I('download') + '</a></div>' +
      '<div><h3 class="h4">' + t('m.equipment') + ' · ' + v.version.name + '</h3>' + SP.equipTable(m, vi) + '</div></div></div></section>' +
      '<section class="section"><div class="container forms2"><div class="panel" id="oferta"><h2 class="h4">' + t('v.reqOffer') + '</h2>' + SP.leadForm({ type: 'offer', ctx: v.id, message: true }) + '</div><div class="panel" id="test-drive"><h2 class="h4">' + t('v.td') + '</h2>' + SP.leadForm({ type: 'testdrive', ctx: v.id }) + '</div></div></section>' +
      '<section class="section section--soft"><div class="container">' + SP.shead(t('home.stock'), t('v.similar'), null, [t('v.configure'), 'configurator.html?m=' + m.id]) + '<div class="grid4">' + SP.STOCK.filter(x => x.id !== v.id && (x.modelId === v.modelId || x.brand === v.brand)).slice(0, 4).map(SP.stockCard).join('') + '</div></div></section>';
    return {
      title: m.name + ' ' + v.version.name, html,
      bind(root) { const main = root.querySelector('[data-main]'), a = root.querySelector('.vd__main'); root.querySelectorAll('[data-th]').forEach(b => b.addEventListener('click', () => { main.src = v.gallery[+b.dataset.th]; a.dataset.index = b.dataset.th; main.classList.toggle('is-photo', +b.dataset.th > 0); root.querySelectorAll('[data-th]').forEach(x => x.classList.toggle('is-on', x === b)); })); }
    };
  };

  /* ================================================================ REQUEST: test drive / quote / call me */
  SP.pages.request = function () {
    const map = { 'test-drive': 'td', oferta: 'offer', suna: 'call' };
    let type = map[SP.param('tip')] || 'offer'; const mid = SP.param('m') || 'o5';
    const tabs = [['td', 'req.td', 'wheel'], ['offer', 'req.offer', 'doc'], ['call', 'req.call', 'phone']];
    const html = SP.phead(t('nav.contact'), t('req.title'), t('req.sub')) + '<section class="section section--tight"><div class="container req">' +
      '<div><div class="rtabs" role="tablist">' + tabs.map(x => '<button role="tab" aria-selected="' + (x[0] === type) + '" data-rt="' + x[0] + '">' + I(x[2]) + t(x[1]) + '</button>').join('') + '</div><div class="panel" data-rf></div></div>' +
      '<aside class="req__a" data-ra></aside></div></section>';
    return {
      title: t('req.title'), html,
      bind(root) {
        let model = mid;
        const draw = () => {
          root.querySelector('[data-rf]').innerHTML = SP.leadForm({ type, model, when: type === 'call', message: type !== 'call', submit: type === 'td' ? t('req.td') : type === 'call' ? t('req.call') : t('req.offer') });
          const f = root.querySelector('[data-rf] form'); f.removeAttribute('data-lead');
          const s = f.querySelector('[name="model"]'); if (s) s.addEventListener('change', () => { model = s.value; aside(); });
          f.addEventListener('submit', e => { e.preventDefault(); if (!SP.validate(f)) return; /* Integration point: POST /api/leads */ f.outerHTML = SP.done(t('f.ok'), t('f.okD'), '#' + SP.ref('WEB')); });
          aside();
        };
        const aside = () => { const m = SP.model(model) || SP.MODELS[0]; root.querySelector('[data-ra]').innerHTML = '<div class="rcard" data-brand="' + m.brand + '"><img src="' + m.img('studio') + '" alt=""><div>' + SP.logo(m.brand, 'logo--xs') + '<h3>' + m.name + '</h3><p>' + L(m.tagline) + '</p><p class="rcard__p">' + t('c.from') + ' <strong>' + eur(m.from) + '</strong> ' + t('c.vat') + '</p><a class="link link--sm" href="model.html?m=' + m.id + '">' + t('c.explore') + I('arrow') + '</a></div></div>' +
          '<ul class="contactl"><li>' + I('phone') + '<span><strong>' + SP.DEALER.phone + '</strong>' + t('ct.sales') + '</span></li><li>' + I('clock') + '<span><strong>24h</strong>' + (SP.lang === 'en' ? 'reply time' : 'timp de răspuns') + '</span></li><li>' + I('shield') + '<span><strong>7 ' + (SP.lang === 'en' ? 'years' : 'ani') + '</strong>' + t('nav.warranty') + '</span></li></ul>'; };
        root.querySelectorAll('[data-rt]').forEach(b => b.addEventListener('click', () => { type = b.dataset.rt; root.querySelectorAll('[data-rt]').forEach(x => x.setAttribute('aria-selected', String(x === b))); draw(); }));
        draw();
      }
    };
  };

  /* ================================================================ OFFERS */
  SP.pages.offers = function () {
    const f = SP.OFFERS.find(o => o.featured), cats = ['all', 'auto', 'finance', 'service'];
    const html = SP.phead(t('nav.offers'), t('of.title'), t('of.sub')) + '<section class="section section--tight"><div class="container">' +
      '<article class="feat" data-brand="' + (f.brand || '') + '"><img src="' + f.img + '" alt=""><div class="feat__b"><p class="eyebrow">' + t('of.featured') + '</p><h2 class="h2">' + L(f.title) + '</h2><p class="lead">' + L(f.lead) + '</p><div class="btnrow"><a class="btn btn--ink" href="oferta.html?id=' + f.id + '">' + t('of.apply') + I('arrow') + '</a><small class="muted">' + t('c.valid') + ' ' + SP.date(f.valid) + '</small></div></div></article>' +
      '<div class="fchips" role="tablist">' + cats.map((c, i) => '<button role="tab" aria-selected="' + (i === 0) + '" data-oc="' + c + '">' + t('of.cat.' + c) + '</button>').join('') + '</div><div class="grid3" data-ol>' + SP.OFFERS.map(SP.offerCard).join('') + '</div></div></section>';
    return { title: t('of.title'), html, bind(root) { root.querySelectorAll('[data-oc]').forEach(b => b.addEventListener('click', () => { root.querySelectorAll('[data-oc]').forEach(x => x.setAttribute('aria-selected', String(x === b))); root.querySelector('[data-ol]').innerHTML = SP.OFFERS.filter(o => b.dataset.oc === 'all' || o.cat === b.dataset.oc).map(SP.offerCard).join(''); })); } };
  };
  SP.pages.offer = function () {
    const o = SP.OFFERS.find(x => x.id === SP.param('id')) || SP.OFFERS[0], m = o.model ? SP.model(o.model) : null;
    const html = '<section class="ohero"' + (o.brand ? ' data-brand="' + o.brand + '"' : '') + '><img src="' + o.img + '" alt=""><div class="container ohero__in"><a class="link link--sm link--w" href="oferte.html">' + I('arrowL') + t('of.title') + '</a><span class="chip chip--glass">' + esc(o.tag) + '</span><h1 class="h1">' + L(o.title) + '</h1><p class="lead">' + L(o.lead) + '</p></div></section>' +
      '<section class="section"><div class="container req"><div class="panel"><h2 class="h4">' + t('of.apply') + '</h2>' + SP.leadForm({ type: 'offer', model: o.model || 'o5', ctx: o.id, message: true }) + '</div><aside class="req__a">' + (m ? '<div class="rcard" data-brand="' + m.brand + '"><img src="' + m.img('studio') + '" alt=""><div><h3>' + m.name + '</h3><p>' + L(m.tagline) + '</p><a class="link link--sm" href="model.html?m=' + m.id + '">' + t('c.explore') + I('arrow') + '</a></div></div>' : '') + '<p class="note">' + t('of.terms') + ' ' + t('c.valid') + ' ' + SP.date(o.valid) + '.</p></aside></div></section>';
    return { title: L(o.title), html };
  };
})();
