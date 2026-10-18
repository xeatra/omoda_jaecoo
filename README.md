# OMODA & JAECOO București — Dealer website POC

Interactive HTML proof-of-concept for an authorised **OMODA & JAECOO** dealer website (two brands, one dealer), built on the Sales Partner Dealer WebKit structure.
Use it to validate design and flows with the client, and as the reference for the CakePHP 4 implementation.

> Demo only. The dealer (name, company, addresses, phones, people) and the stock cars are fictitious.
> Models, versions, prices, colours, technical data and equipment come from the importer price lists (Genius Automotive Europe), valid October 2026.
> Accessory prices are illustrative.

## Run it

- **Locally:** double-click `index.html`. You don't need a build step or a server.
- **Vercel:** in the same GitHub repo as `lepas/`, create a new Vercel project.
  - Set **Root Directory = `omoda-jaecoo`**.
  - Set Framework preset = *Other*. Leave the build command empty.
  - `vercel.json` enables clean URLs and sends `X-Robots-Tag: noindex`.
  - `robots.txt` blocks all crawlers.
- Language: RO by default. Switch with the RO/EN toggle, or add `?lang=en` to the URL.

## Structure

```
omoda-jaecoo/
  index.html                 Home: split brand hero, model selector, dealer, SHS technology, stock, offers
  marca.html?b=omoda|jaecoo  Brand page with powertrain filter
  model.html?m=…             Model: overview, versions & prices, colours, gallery, specs, equipment per version, stock, PDF
  configurator.html?m=&v=    5 steps: trim → engine & transmission → exterior → interior → options, then summary + lead
  stoc.html?m=…              Stock with brand / model / fuel / availability / price filters
  vehicul.html?id=…          Vehicle detail + FULL version sheet (highlights, specs, equipment for that trim, price list PDF)
  solicita.html?tip=test-drive|oferta|suna&m=…   Request forms
  oferte.html / oferta.html?id=…                 Offers & campaigns
  service.html               4-step service booking + warranty, assistance, recalls, manuals, accessories
  brosuri.html               Price lists / brochures to download (per brand)
  locatii.html / locatie.html?id=…               Locations
  stiri.html / stire.html?id=…                   News
  contact.html
  legal.html?doc=confidentialitate|cookies|mentiuni-legale|anpc|mentiune-legala
  sitemap.html  404.html
  assets/
    css/tokens.css     brand theme; --omoda / --jaecoo accents via [data-brand]
    css/fonts.css      self-hosted Red Hat fonts (OFL, no Google Fonts call)
    css/site.css       components & page styles
    js/logos.js        OMODA / JAECOO wordmarks as inline SVG
    js/data.js         mock data shaped like SP APIs: DEALER, LOCATIONS, TEAM, MODELS, ACCESSORIES, STOCK, OFFERS, NEWS
    js/equipment.js    equipment per model & version (from importer price lists, RO)
    js/i18n.js         all UI strings, RO + EN
    js/core.js         helpers, header/mega menu, footer, cards, lead form, cookie banner
    js/pages-sales.js  home, brand, model, configurator, stock, vehicle, request, offers
    js/pages-other.js  service, brochures, locations, news, contact, legal, sitemap, 404
    img/<model>/       studio cutout, hero, interior, colors/<CODE>.webp
    docs/              importer price-list PDFs
```

## Data source for stock & vehicle detail

Each car is in **Sales Partner** (data received from the importer), and SP publishes it to the website via API.
The POC doesn't assume how that publication works (push, pull or sync). It only shows what the website needs per car:

- **Vehicle:** model, version, VIN, colour and interior code, year, km, status, location, price, photos.
- **Version sheet** (model + version): highlights, technical data and the full equipment list, as in `SP.MODELS` + `SP.EQUIP`.

`vehicul.html` combines the two. A stock car therefore always shows the full spec of its version.

## Footer / legal

The footer row has: POLITICA DE CONFIDENȚIALITATE | POLITICA DE COOKIE-URI | MENȚIUNI LEGALE | A.N.P.C. | MENȚIUNE LEGALĂ | SITEMAP.
It also shows the ANPC SAL / EU SOL badges. *Mențiune legală* holds both the dealer and the importer data. Legal texts are templates; the dealer supplies the final versions.

## Mapping to the CakePHP implementation

| POC piece | Production |
|---|---|
| `SP.header()` / `SP.footer()` / `SP.actionbar()` | `templates/element/header.php`, `footer.php`, `action-bar.php` |
| `SP.modelCard()` / `stockCard()` / `offerCard()` / `newsCard()` | `element/card-*.php` |
| `SP.leadForm()` + configurator summary | `POST /api/leads` → SP Lead Collector (source = Website, type, model, config code) |
| Service wizard submit | `POST /api/service-bookings` → SP AfterSales appointment |
| `SP.STOCK` | Stock published from Sales Partner (mechanism to be decided) |
| `SP.MODELS`, `SP.EQUIP`, price-list PDFs | Model/version catalogue from SP (importer data), per brand |
| `SP.OFFERS` | SP Campaigns module |
| `SP.NEWS`, legal pages | CMS |
| `SP.I18N` + `{ro,en}` fields | CakePHP I18n (`ro_RO`, `en_US`) |

Every integration point is marked in the JS with a comment starting `Integration point:`.

## Notes

- The equipment lists are in Romanian only, as in the importer PDFs. EN pages show a note about this.
- The logos were vectorised from the importer PDFs. For production, replace them with the official SVGs from the importer.
- Maps (Google Maps embed) need internet. Everything else works offline.
