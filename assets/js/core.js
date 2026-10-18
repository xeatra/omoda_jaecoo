/* =====================================================================
   CORE — helpers, header, footer, shared components.
   Partials map 1:1 to CakePHP elements (header, footer, card-model,
   card-stock, card-offer, card-news, lead-form).
   ===================================================================== */
(function () {
  const SP = window.SP;
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) { } } };
  SP.store = store;
  const qs = new URLSearchParams(location.search);
  SP.lang = (qs.get('lang') || store.get('oj.lang') || 'ro') === 'en' ? 'en' : 'ro';
  SP.setLang = l => { SP.lang = l; store.set('oj.lang', l); SP.render(); };
  SP.t = k => (SP.I18N[SP.lang] || {})[k] || SP.I18N.ro[k] || k;
  SP.L = v => (v && typeof v === 'object' && !Array.isArray(v) && ('ro' in v || 'en' in v)) ? (v[SP.lang] || v.ro) : v;
  SP.param = k => new URLSearchParams(location.search).get(k);
  SP.esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  SP.eur = n => { if (n == null) return '—'; const s = Math.round(n).toLocaleString(SP.lang === 'en' ? 'en-GB' : 'de-DE'); return SP.lang === 'en' ? '€' + s : s + ' €'; };
  SP.num = n => n.toLocaleString(SP.lang === 'en' ? 'en-GB' : 'de-DE');
  SP.date = (iso, o) => new Date(iso + 'T12:00:00').toLocaleDateString(SP.lang === 'en' ? 'en-GB' : 'ro-RO', o || { day: 'numeric', month: 'long', year: 'numeric' });
  SP.model = id => SP.MODELS.find(m => m.id === id);
  SP.ref = p => p + '-' + String(Math.floor(100000 + Math.random() * 899999));
  SP.monthly = (price, down = .2, n = 60, rate = .079) => { const P = price * (1 - down), r = rate / 12; return P * r / (1 - Math.pow(1 + r, -n)); };
  const t = SP.t, L = SP.L, esc = SP.esc;

  /* icons */
  const P = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>', arrowL: '<path d="M19 12H5M11 18l-6-6 6-6"/>', down: '<path d="m6 9 6 6 6-6"/>',
    left: '<path d="m15 18-6-6 6-6"/>', right: '<path d="m9 18 6-6-6-6"/>', menu: '<path d="M4 7h16M4 12h16M4 17h16"/>', x: '<path d="M18 6 6 18M6 6l12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>', minus: '<path d="M6 12h12"/>', plus: '<path d="M12 5v14M5 12h14"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>', clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>', wheel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 3v6.5M4.2 16.5l5.6-3.2M19.8 16.5l-5.6-3.2"/>',
    sliders: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    doc: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    download: '<path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14"/>', car: '<path d="M5 17h14M3 17v-4l2.2-5.2A2 2 0 0 1 7 6.5h10a2 2 0 0 1 1.8 1.3L21 13v4"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>', bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/>', tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    headset: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2" y="14" width="5" height="6" rx="2"/><rect x="17" y="14" width="5" height="6" rx="2"/>',
    book: '<path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/><path d="M4 16a4 4 0 0 1 4-4h10"/>', alert: '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/>',
    box: '<path d="m3 7 9-4 9 4v10l-9 4-9-4z"/><path d="m3 7 9 4 9-4M12 11v10"/>', whatsapp: '<path d="M3 21l1.7-5A9 9 0 1 1 8 19.4z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1.2-1.2 2 1-.4 1.6c-3 .5-7.6-4-7-7l1.6-.4 1 2z"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'
  };
  SP.icon = (n, c) => '<svg class="ic ' + (c || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || '') + '</svg>';
  const I = SP.icon;

  /* brand logos (inline so they take currentColor) */
  SP.logo = (b, cls) => { const g = SP.LOGOS[b]; return '<svg class="logo logo--' + b + ' ' + (cls || '') + '" viewBox="' + g.vb + '" role="img" aria-label="' + b.toUpperCase() + '"><path fill="currentColor" fill-rule="evenodd" d="' + g.d + '"/></svg>'; };

  SP.fuelChip = f => '<span class="chip chip--' + f + '">' + L(SP.FUEL[f]) + '</span>';
  SP.statusChip = s => '<span class="chip chip--st-' + s + '">' + t('status.' + s) + '</span>';
  SP.hoursOpen = () => { const d = new Date(), h = d.getHours() + d.getMinutes() / 60, wd = d.getDay(); return (wd >= 1 && wd <= 5 && h >= 9 && h < 19) || (wd === 6 && h >= 10 && h < 15); };

  /* ---------- header ---------- */
  const ACTIVE = { home: '', brand: 'models', model: 'models', configurator: 'config', stock: 'stock', vehicle: 'stock', offers: 'offers', offer: 'offers', service: 'service', brochures: 'brochures', locations: 'locations', location: 'locations', news: 'news', article: 'news', contact: 'contact', request: '' };
  function mega() {
    const col = b => '<div class="mega__col" data-brand="' + b + '"><a class="mega__brand" href="marca.html?b=' + b + '">' + SP.logo(b) + '<span>' + t('nav.allRange') + I('arrow') + '</span></a><ul>' +
      SP.MODELS.filter(m => m.brand === b).map(m => '<li><a href="model.html?m=' + m.id + '"><img src="' + m.img('studio') + '" alt="" loading="lazy"><span><strong>' + m.name + '</strong><small>' + L(SP.FUEL[m.fuel]) + ' · ' + t('c.from') + ' ' + SP.eur(m.from) + '</small></span></a></li>').join('') + '</ul></div>';
    return '<div class="mega"><div class="container mega__in">' + col('omoda') + col('jaecoo') + '</div></div>';
  }
  const NAV = [['models', 'marca.html?b=omoda', 'mega'], ['config', 'configurator.html'], ['stock', 'stoc.html'], ['offers', 'oferte.html'],
    ['service', 'service.html', [['nav.booking', 'service.html#programare'], ['nav.warranty', 'service.html#garantie'], ['nav.assist', 'service.html#asistenta'], ['nav.recall', 'service.html#rechemare'], ['nav.manuals', 'service.html#manuale'], ['nav.accessories', 'service.html#accesorii']]],
    ['brochures', 'brosuri.html'], ['locations', 'locatii.html'], ['contact', 'contact.html']];

  SP.header = function (page) {
    const act = ACTIVE[page];
    const items = NAV.map(n => '<li class="nav__i' + (act === n[0] ? ' is-on' : '') + (n[2] ? ' has-sub' : '') + '"><a href="' + n[1] + '">' + t('nav.' + n[0]) + (n[2] ? I('down', 'chev') : '') + '</a>' +
      (n[2] === 'mega' ? mega() : n[2] ? '<ul class="drop">' + n[2].map(s => '<li><a href="' + s[1] + '">' + t(s[0]) + '</a></li>').join('') + '</ul>' : '') + '</li>').join('');
    const drawer = NAV.map(n => {
      const subs = n[2] === 'mega' ? SP.MODELS.map(m => [m.name, 'model.html?m=' + m.id]) : (n[2] || []).map(s => [t(s[0]), s[1]]);
      return subs.length ? '<li><details><summary>' + t('nav.' + n[0]) + I('down') + '</summary><ul>' + (n[2] === 'mega' ? '<li><a href="marca.html?b=omoda">' + t('nav.omoda') + '</a></li><li><a href="marca.html?b=jaecoo">' + t('nav.jaecoo') + '</a></li>' : '') + subs.map(s => '<li><a href="' + s[1] + '">' + s[0] + '</a></li>').join('') + '</ul></details></li>'
        : '<li><a class="drawer__a" href="' + n[1] + '">' + t('nav.' + n[0]) + '</a></li>';
    }).join('');
    const open = SP.hoursOpen();
    return '<div class="topbar"><div class="container topbar__in"><span class="topbar__dealer">' + t('dealer.tag') + '</span>' +
      '<span class="topbar__r"><span class="dotst ' + (open ? 'is-open' : '') + '">' + t(open ? 'c.open' : 'c.closedNow') + '</span><a href="tel:' + SP.DEALER.phone.replace(/\s/g, '') + '">' + I('phone') + SP.DEALER.phone + '</a>' +
      '<span class="lang"><button data-lang="ro" class="' + (SP.lang === 'ro' ? 'is-on' : '') + '">RO</button><button data-lang="en" class="' + (SP.lang === 'en' ? 'is-on' : '') + '">EN</button></span></span></div></div>' +
      '<header class="hdr" id="hdr"><div class="container hdr__in">' +
      '<button class="burger" type="button" aria-label="' + t('nav.menu') + '" data-open>' + I('menu') + '</button>' +
      '<a class="brand" href="index.html" aria-label="OMODA & JAECOO București">' + SP.logo('omoda') + '<i></i>' + SP.logo('jaecoo') + '<em>' + (SP.lang === 'en' ? 'Bucharest' : 'București') + '</em></a>' +
      '<nav class="nav" aria-label="Main"><ul>' + items + '</ul></nav>' +
      '<div class="hdr__cta"><a class="btn btn--line btn--sm" href="solicita.html?tip=test-drive">' + t('nav.testdrive') + I('arrow') + '</a><a class="btn btn--ink btn--sm" href="solicita.html?tip=suna">' + t('nav.callme') + I('arrow') + '</a></div>' +
      '</div></header>' +
      '<div class="drawer" id="drawer" hidden><div class="drawer__p"><div class="drawer__h">' + SP.logo('omoda') + '<i></i>' + SP.logo('jaecoo') + '<button type="button" class="drawer__x" aria-label="' + t('nav.close') + '" data-close>' + I('x') + '</button></div><ul class="drawer__l">' + drawer + '</ul>' +
      '<div class="drawer__f"><a class="btn btn--ink btn--block" href="solicita.html?tip=suna">' + t('nav.callme') + '</a><span class="lang"><button data-lang="ro" class="' + (SP.lang === 'ro' ? 'is-on' : '') + '">RO</button><button data-lang="en" class="' + (SP.lang === 'en' ? 'is-on' : '') + '">EN</button></span></div></div></div>';
  };

  /* ---------- sticky action bar (mobile + desktop bottom, like importer) ---------- */
  SP.actionbar = () => '<nav class="abar" aria-label="Quick actions"><a href="solicita.html?tip=test-drive">' + I('wheel') + t('nav.testdrive') + '</a><a href="configurator.html">' + I('sliders') + t('nav.config') + '</a><a href="solicita.html?tip=oferta">' + I('doc') + t('nav.offer') + '</a></nav>';

  /* ---------- footer ---------- */
  SP.footer = function () {
    const col = (h, l) => '<div class="fcol"><h4>' + h + '</h4><ul>' + l.map(x => '<li><a href="' + x[1] + '">' + x[0] + '</a></li>').join('') + '</ul></div>';
    const legal = [['ft.privacy', 'confidentialitate'], ['ft.cookies', 'cookies'], ['ft.legalNotes', 'mentiuni-legale'], ['ft.anpc', 'anpc'], ['ft.legal', 'mentiune-legala']];
    return '<footer class="ftr"><div class="container">' +
      '<div class="ftr__top"><div class="ftr__brand"><span class="ftr__logos">' + SP.logo('omoda') + '<i></i>' + SP.logo('jaecoo') + '</span><p>' + SP.DEALER.name + '. ' + t('ft.importer') + '</p>' +
      '<div class="social">' + ['Facebook', 'Instagram', 'YouTube', 'TikTok', 'LinkedIn'].map(s => '<a href="#" aria-label="' + s + '">' + s.slice(0, 2) + '</a>').join('') + '</div></div>' +
      '<div class="ftr__loc">' + SP.LOCATIONS.map(l => '<div><h4>' + L(l.short) + '</h4><p>' + l.address + '</p><p><a href="tel:' + l.phone.replace(/\s/g, '') + '">' + l.phone + '</a></p></div>').join('') +
      '<div><h4>' + t('lo.hours') + '</h4>' + SP.DEALER.hours.map(h => '<p>' + L(h.d) + ': ' + (h.h || t('c.closed')) + '</p>').join('') + '</div></div></div>' +
      '<div class="ftr__cols">' +
      col(t('ft.models'), [[t('nav.omoda'), 'marca.html?b=omoda'], [t('nav.jaecoo'), 'marca.html?b=jaecoo'], [t('nav.config'), 'configurator.html'], [t('nav.brochures'), 'brosuri.html']]) +
      col(t('ft.buy'), [[t('nav.stock'), 'stoc.html'], [t('nav.offers'), 'oferte.html'], [t('nav.testdrive'), 'solicita.html?tip=test-drive'], [t('nav.offer'), 'solicita.html?tip=oferta']]) +
      col(t('ft.service'), [[t('nav.booking'), 'service.html#programare'], [t('nav.warranty'), 'service.html#garantie'], [t('nav.assist'), 'service.html#asistenta'], [t('nav.recall'), 'service.html#rechemare']]) +
      col(t('ft.dealer'), [[t('nav.locations'), 'locatii.html'], [t('nav.news'), 'stiri.html'], [t('nav.contact'), 'contact.html']]) +
      '<div class="fcol fcol--nl"><h4>' + t('ft.newsletter') + '</h4><p>' + t('ft.newsletterD') + '</p><form class="nl" data-nl novalidate><label class="sr" for="nl">Email</label><input id="nl" type="email" placeholder="' + t('f.emailPh') + '"><button class="btn btn--ink btn--sm" type="submit">' + t('ft.subscribe') + '</button></form></div>' +
      '</div>' +
      '<div class="ftr__legal">' + legal.map(x => '<a href="legal.html?doc=' + x[1] + '">' + t(x[0]) + '</a>').join('<span>|</span>') + '<span>|</span><a href="sitemap.html">' + t('ft.sitemap') + '</a></div>' +
      '<div class="ftr__bottom"><p>© 2026 ' + SP.DEALER.legal.company + ' · ' + SP.DEALER.legal.reg + ' · ' + SP.DEALER.legal.cui + '</p><p class="ftr__demo">' + t('ft.demo') + '</p>' +
      '<div class="anpc"><a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener"><small>ANPC</small>SAL</a><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener"><small>EU</small>SOL</a></div></div>' +
      '</div></footer>';
  };

  /* ---------- shared cards ---------- */
  SP.modelCard = m => '<article class="mcard" data-brand="' + m.brand + '"><a href="model.html?m=' + m.id + '" class="mcard__stage"><img src="' + m.img('studio') + '" alt="' + m.name + '" loading="lazy"></a>' +
    '<div class="mcard__b"><div class="mcard__top">' + SP.fuelChip(m.fuel) + (m.stockOnly ? '<span class="chip">' + (SP.lang === 'en' ? 'Stock only' : 'Doar din stoc') + '</span>' : '') + '</div>' +
    '<h3><a href="model.html?m=' + m.id + '">' + m.name + '</a></h3><p>' + L(m.tagline) + '</p>' +
    '<div class="mcard__price"><small>' + t('c.launch') + ' ' + t('c.from') + '</small><strong>' + SP.eur(m.from) + '</strong><small>' + t('c.vat') + '</small></div>' +
    '<div class="mcard__cta"><a class="btn btn--ink btn--sm" href="model.html?m=' + m.id + '">' + t('c.explore') + '</a><a class="btn btn--line btn--sm" href="configurator.html?m=' + m.id + '">' + t('c.configure') + '</a></div></div></article>';

  SP.stockCard = v => '<article class="scard" data-brand="' + v.brand + '"><a class="scard__stage" href="vehicul.html?id=' + v.id + '">' + SP.statusChip(v.status) + '<img src="' + v.img + '" alt="' + esc(v.model.name) + '" loading="lazy"><span class="scard__n">' + I('camera') + v.gallery.length + '</span></a>' +
    '<div class="scard__b"><p class="scard__k">' + SP.logo(v.brand, 'logo--xs') + '<span>' + v.year + ' · ' + SP.num(v.km) + ' km</span></p><h3><a href="vehicul.html?id=' + v.id + '">' + v.model.name + ' <span>' + v.version.name + '</span></a></h3>' +
    '<ul class="scard__chips"><li>' + L(SP.FUEL[v.model.fuel]) + '</li><li>' + L(v.color.name) + '</li></ul>' +
    '<div class="scard__f"><div class="scard__p">' + (v.priceList > v.price ? '<s>' + SP.eur(v.priceList) + '</s>' : '') + '<strong>' + SP.eur(v.price) + '</strong><small>' + t('c.vat') + ' · ' + t('v.rate') + ' ' + SP.eur(SP.monthly(v.price)) + '/' + t('c.month') + '</small></div><a class="iconbtn" href="vehicul.html?id=' + v.id + '" aria-label="' + t('c.details') + '">' + I('arrow') + '</a></div></div></article>';

  SP.offerCard = o => '<article class="ocard"' + (o.brand ? ' data-brand="' + o.brand + '"' : '') + '><a class="ocard__img" href="oferta.html?id=' + o.id + '"><img src="' + o.img + '" alt="" loading="lazy"><span class="ocard__tag">' + esc(o.tag) + '</span></a>' +
    '<div class="ocard__b"><p class="kicker">' + (o.brand ? o.brand.toUpperCase() : 'OMODA & JAECOO') + ' · ' + t('of.cat.' + o.cat) + '</p><h3><a href="oferta.html?id=' + o.id + '">' + L(o.title) + '</a></h3><p>' + L(o.lead) + '</p>' +
    '<div class="ocard__f"><a class="link" href="oferta.html?id=' + o.id + '">' + t('c.details') + I('arrow') + '</a><small>' + t('c.valid') + ' ' + SP.date(o.valid, { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</small></div></div></article>';

  SP.newsCard = n => '<article class="ncard"><a class="ncard__img" href="stire.html?id=' + n.id + '"><img src="' + n.img + '" alt="" loading="lazy"></a><div class="ncard__b"><p class="kicker">' + (n.brand ? n.brand.toUpperCase() : 'OMODA & JAECOO') + ' · ' + SP.date(n.date, { day: 'numeric', month: 'long' }) + '</p>' +
    '<h3><a href="stire.html?id=' + n.id + '">' + L(n.title) + '</a></h3><p>' + L(n.lead) + '</p><a class="link" href="stire.html?id=' + n.id + '">' + t('c.read') + I('arrow') + '</a></div></article>';

  SP.shead = (eyebrow, title, sub, link) => '<div class="shead"><div><p class="eyebrow">' + eyebrow + '</p><h2 class="h2">' + title + '</h2>' + (sub ? '<p class="shead__sub">' + sub + '</p>' : '') + '</div>' + (link ? '<a class="link" href="' + link[1] + '">' + link[0] + I('arrow') + '</a>' : '') + '</div>';
  SP.phead = (eyebrow, title, sub, brand) => '<section class="phead"' + (brand ? ' data-brand="' + brand + '"' : '') + '><div class="container"><p class="eyebrow">' + eyebrow + '</p><h1 class="h1">' + title + '</h1>' + (sub ? '<p class="phead__sub">' + sub + '</p>' : '') + '</div></section>';

  /* ---------- lead form (→ Sales Partner Lead Collector) ---------- */
  const COUNTIES = ['București', 'Ilfov', 'Alba', 'Arad', 'Argeș', 'Bacău', 'Bihor', 'Bistrița-Năsăud', 'Botoșani', 'Brăila', 'Brașov', 'Buzău', 'Călărași', 'Caraș-Severin', 'Cluj', 'Constanța', 'Covasna', 'Dâmbovița', 'Dolj', 'Galați', 'Giurgiu', 'Gorj', 'Harghita', 'Hunedoara', 'Ialomița', 'Iași', 'Maramureș', 'Mehedinți', 'Mureș', 'Neamț', 'Olt', 'Prahova', 'Sălaj', 'Satu Mare', 'Sibiu', 'Suceava', 'Teleorman', 'Timiș', 'Tulcea', 'Vâlcea', 'Vaslui', 'Vrancea'];
  let seq = 0;
  SP.field = (id, name, label, input, full) => '<div class="field' + (full ? ' field--full' : '') + '"><label for="' + id + '">' + label + '</label>' + input + '<span class="err" data-err="' + name + '"></span></div>';
  SP.leadForm = function (o) {
    o = o || {}; const id = 'lf' + (++seq), F = SP.field;
    return '<form class="lead" data-lead novalidate data-type="' + (o.type || 'offer') + '" data-ctx="' + esc(o.ctx || '') + '"><div class="grid-f">' +
      (o.model !== undefined && !o.hideModel ? F(id + 'm', 'model', t('f.model'), '<select id="' + id + 'm" name="model">' + ['omoda', 'jaecoo'].map(b => '<optgroup label="' + b.toUpperCase() + '">' + SP.MODELS.filter(m => m.brand === b).map(m => '<option value="' + m.id + '"' + (m.id === o.model ? ' selected' : '') + '>' + m.name + '</option>').join('') + '</optgroup>').join('') + '</select>', true) : '') +
      F(id + 'n', 'name', t('f.name') + ' *', '<input id="' + id + 'n" name="name" autocomplete="name" placeholder="' + t('f.namePh') + '">') +
      F(id + 'p', 'phone', t('f.phone') + ' *', '<input id="' + id + 'p" name="phone" type="tel" autocomplete="tel" placeholder="' + t('f.phonePh') + '">') +
      F(id + 'e', 'email', t('f.email') + ' *', '<input id="' + id + 'e" name="email" type="email" autocomplete="email" placeholder="' + t('f.emailPh') + '">') +
      F(id + 'c', 'county', t('f.county'), '<select id="' + id + 'c" name="county">' + COUNTIES.map(c => '<option>' + c + '</option>').join('') + '</select>') +
      (o.when ? F(id + 'w', 'when', t('f.when'), '<select id="' + id + 'w" name="when"><option>' + t('f.asap') + '</option><option>' + t('f.morning') + '</option><option>' + t('f.afternoon') + '</option><option>' + t('f.evening') + '</option></select>', true) : '') +
      (o.message ? F(id + 'g', 'message', t('f.msg'), '<textarea id="' + id + 'g" name="message" rows="3"></textarea>', true) : '') +
      '</div><label class="check"><input type="checkbox" name="gdpr"><span>' + t('f.gdpr') + ' <a href="legal.html?doc=confidentialitate">' + t('ft.privacy') + '</a></span></label><span class="err" data-err="gdpr"></span>' +
      '<label class="check"><input type="checkbox" name="mkt"><span>' + t('f.mkt') + '</span></label>' +
      '<button class="btn btn--ink btn--block" type="submit">' + (o.submit || t('f.send')) + I('arrow') + '</button></form>';
  };
  SP.validate = function (f) {
    const v = n => (f.elements[n] && f.elements[n].value || '').trim(), e = {};
    if (f.elements.name && v('name').length < 3) e.name = t('f.errName');
    if (f.elements.phone && !/^[+0-9 ()-]{9,}$/.test(v('phone'))) e.phone = t('f.errPhone');
    if (f.elements.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('email'))) e.email = t('f.errEmail');
    if (f.elements.gdpr && !f.elements.gdpr.checked) e.gdpr = t('f.errGdpr');
    f.querySelectorAll('[data-err]').forEach(x => { x.textContent = e[x.dataset.err] || ''; });
    f.querySelectorAll('input,select,textarea').forEach(x => x.toggleAttribute('aria-invalid', !!e[x.name]));
    const k = Object.keys(e)[0]; if (k && f.elements[k]) f.elements[k].focus();
    return !k;
  };
  SP.done = (title, text, ref, extra) => '<div class="done" role="status"><span class="done__i">' + I('check') + '</span><h3>' + title + '</h3><p>' + text + ' <strong>' + ref + '</strong></p>' + (extra || '') + '</div>';

  /* ---------- lightbox / toast ---------- */
  SP.lightbox = function (imgs, i) {
    i = i || 0; const el = document.createElement('div'); el.className = 'lb';
    el.innerHTML = '<button class="lb__x" aria-label="' + t('nav.close') + '">' + I('x') + '</button><button class="lb__p" aria-label="prev">' + I('left') + '</button><img alt=""><button class="lb__n" aria-label="next">' + I('right') + '</button><span class="lb__c"></span>';
    const draw = () => { el.querySelector('img').src = imgs[i]; el.querySelector('.lb__c').textContent = (i + 1) + ' / ' + imgs.length; };
    const close = () => { el.remove(); document.removeEventListener('keydown', key); document.body.classList.remove('noscroll'); };
    const key = e => { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') { i = (i + 1) % imgs.length; draw(); } if (e.key === 'ArrowLeft') { i = (i - 1 + imgs.length) % imgs.length; draw(); } };
    el.addEventListener('click', e => { if (e.target.closest('.lb__x') || e.target === el) close(); else if (e.target.closest('.lb__n')) { i = (i + 1) % imgs.length; draw(); } else if (e.target.closest('.lb__p')) { i = (i - 1 + imgs.length) % imgs.length; draw(); } });
    document.addEventListener('keydown', key); document.body.appendChild(el); document.body.classList.add('noscroll'); draw();
  };
  SP.toast = msg => { let el = document.querySelector('.toast'); if (!el) { el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); } el.textContent = msg; el.classList.add('is-on'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('is-on'), 2400); };

  function chrome() {
    document.querySelectorAll('.cookie,.demo-badge').forEach(e => e.remove());
    const b = document.createElement('a'); b.className = 'demo-badge'; b.href = 'https://salespartner.ro'; b.target = '_blank'; b.rel = 'noopener'; b.textContent = 'DEMO · Sales Partner'; document.body.appendChild(b);
    if (store.get('oj.cookies')) return;
    const c = document.createElement('div'); c.className = 'cookie';
    c.innerHTML = '<p>' + t('ck.text') + ' <a href="legal.html?doc=cookies">' + t('ck.more') + '</a></p><div><button class="btn btn--line btn--sm" data-ck="n">' + t('ck.necessary') + '</button><button class="btn btn--ink btn--sm" data-ck="a">' + t('ck.accept') + '</button></div>';
    c.addEventListener('click', e => { const k = e.target.closest('[data-ck]'); if (k) { store.set('oj.cookies', k.dataset.ck); c.remove(); } });
    document.body.appendChild(c);
  }

  function bind() {
    document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => SP.setLang(b.dataset.lang)));
    const dr = document.getElementById('drawer');
    document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => { dr.hidden = false; document.body.classList.add('noscroll'); }));
    document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => { dr.hidden = true; document.body.classList.remove('noscroll'); }));
    dr.addEventListener('click', e => { if (e.target === dr) { dr.hidden = true; document.body.classList.remove('noscroll'); } });
    const hdr = document.getElementById('hdr'); const sc = () => hdr.classList.toggle('is-scrolled', scrollY > 20);
    window.removeEventListener('scroll', SP._sc || (() => { })); SP._sc = sc; window.addEventListener('scroll', sc, { passive: true }); sc();
    document.querySelectorAll('[data-nl]').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); const i = f.querySelector('input'); if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.value.trim())) { i.setAttribute('aria-invalid', ''); i.focus(); return; } f.innerHTML = '<p class="nl__ok">' + I('check') + t('ft.subscribed') + '</p>'; }));
    document.querySelectorAll('form[data-lead]').forEach(f => f.addEventListener('submit', e => {
      e.preventDefault(); if (!SP.validate(f)) return;
      /* Integration point: POST /api/leads → Sales Partner Lead Collector (source = Website, type, model, context) */
      f.outerHTML = SP.done(t('f.ok'), t('f.okD'), '#' + SP.ref('WEB'));
    }));
    document.querySelectorAll('[data-lightbox]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); SP.lightbox(JSON.parse(el.dataset.lightbox), +(el.dataset.index || 0)); }));
  }

  SP.render = function () {
    const page = document.body.dataset.page || 'home';
    document.documentElement.lang = SP.lang;
    document.getElementById('site-header').innerHTML = SP.header(page);
    document.getElementById('site-footer').innerHTML = SP.footer() + (page === 'configurator' ? '' : SP.actionbar());
    const fn = SP.pages[page] || SP.pages.notfound, out = fn();
    document.getElementById('main').innerHTML = out.html;
    document.title = (out.title ? out.title + ' · ' : '') + 'OMODA & JAECOO București';
    bind(); if (out.bind) out.bind(document.getElementById('main'));
    chrome();
    if (location.hash) { const el = document.getElementById(location.hash.slice(1)); if (el) setTimeout(() => el.scrollIntoView(), 50); }
  };
  document.addEventListener('DOMContentLoaded', SP.render);
})();
