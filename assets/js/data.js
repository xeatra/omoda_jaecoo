/* =====================================================================
   DATA LAYER (demo) — OMODA & JAECOO București
   In production every block below is published from Sales Partner via API.
   Model, version, price, colour and equipment data come from the importer
   price lists valid from 01.10.2026 (Genius Automotive Europe Kft.).
   Bilingual fields are { ro, en }.
   ===================================================================== */
window.SP = window.SP || {};

SP.DEALER = {
  name: 'OMODA & JAECOO București',
  short: 'O&J București',
  legal: {
    company: 'Demo Auto Dealer S.R.L.', address: 'Bd. Iuliu Maniu 600, Sector 6, București',
    reg: 'J40/0000/2026', cui: 'RO00000000', capital: '200 RON', email: 'contact@oj-bucuresti.demo'
  },
  importer: {
    company: 'Genius Romania S.R.L.', address: 'București, Calea Victoriei nr. 155',
    official: 'Genius Automotive Europe Kft.', reg: 'J2025058290007', cui: 'RO52272229', email: 'contact@omoda-jaecoo.ro',
    assistance: '+40 31 22 80 888'
  },
  phone: '+40 21 555 01 00', phoneService: '+40 21 555 01 10', whatsapp: '+40 722 000 300',
  email: 'vanzari@oj-bucuresti.demo', emailService: 'service@oj-bucuresti.demo',
  hours: [
    { d: { ro: 'Luni – Vineri', en: 'Monday – Friday' }, h: '09:00 – 19:00' },
    { d: { ro: 'Sâmbătă', en: 'Saturday' }, h: '10:00 – 15:00' },
    { d: { ro: 'Duminică', en: 'Sunday' }, h: null }
  ],
  social: { fb: '#', ig: '#', yt: '#', tt: '#', in: '#' }
};

SP.TEAM = {
  ab: { name: 'Alexandra Barbu', role: { ro: 'Director General', en: 'General Manager' } },
  cm: { name: 'Cosmin Moraru', role: { ro: 'Director Vânzări', en: 'Sales Director' } },
  dp: { name: 'Diana Popa', role: { ro: 'Consilier vânzări OMODA', en: 'OMODA sales advisor' }, phone: '+40 722 000 301' },
  vn: { name: 'Vlad Neagu', role: { ro: 'Consilier vânzări JAECOO', en: 'JAECOO sales advisor' }, phone: '+40 722 000 302' },
  si: { name: 'Sorina Ilie', role: { ro: 'Consilier flote & leasing', en: 'Fleet & leasing advisor' }, phone: '+40 722 000 303' },
  gt: { name: 'George Tudose', role: { ro: 'Șef Service', en: 'Head of Service' } },
  ra: { name: 'Raluca Anghel', role: { ro: 'Consilier service', en: 'Service advisor' }, phone: '+40 722 000 310' }
};

SP.LOCATIONS = [
  { id: 'vest', name: { ro: 'Showroom & Service București Vest', en: 'Showroom & Service Bucharest West' }, short: { ro: 'București Vest', en: 'Bucharest West' },
    address: 'Bd. Iuliu Maniu 600, Sector 6, București', phone: '+40 21 555 01 00', email: 'vanzari@oj-bucuresti.demo',
    lat: 44.4316, lng: 25.9876, img: 'assets/img/o9/hero.webp', types: ['sales', 'service', 'parts', 'charging'],
    services: { ro: ['Vânzări OMODA & JAECOO', 'Test drive pentru toată gama', 'Service autorizat ICE, hibrid, PHEV, EV', 'Piese & accesorii originale', 'Stație de încărcare DC', 'Finanțare, leasing, flote'],
                en: ['OMODA & JAECOO sales', 'Test drives for the whole range', 'Authorised ICE, hybrid, PHEV, EV service', 'Genuine parts & accessories', 'DC charging station', 'Finance, leasing, fleets'] },
    team: ['ab', 'cm', 'dp', 'vn', 'si'] },
  { id: 'nord', name: { ro: 'Showroom București Nord', en: 'Showroom Bucharest North' }, short: { ro: 'București Nord', en: 'Bucharest North' },
    address: 'Șos. Pipera-Tunari 10, Voluntari, Ilfov', phone: '+40 21 555 01 20', email: 'nord@oj-bucuresti.demo',
    lat: 44.5002, lng: 26.1148, img: 'assets/img/j7shsp/hero.webp', types: ['sales', 'service'],
    services: { ro: ['Showroom OMODA & JAECOO', 'Test drive', 'Recepție service & predare mașini', 'Consultanță flote'],
                en: ['OMODA & JAECOO showroom', 'Test drives', 'Service reception & handovers', 'Fleet consulting'] },
    team: ['gt', 'ra'] }
];

/* ---------------------------------------------------------------- spec labels */
SP.SPEC_LABELS = {
  engine: { ro: 'Motor', en: 'Engine' }, trans: { ro: 'Transmisie', en: 'Transmission' }, drive: { ro: 'Tracțiune', en: 'Drive' },
  power: { ro: 'Putere', en: 'Power' }, sysPower: { ro: 'Putere sistem', en: 'System power' }, torque: { ro: 'Cuplu maxim', en: 'Max torque' },
  accel: { ro: 'Accelerație 0–100 km/h', en: '0–100 km/h' }, vmax: { ro: 'Viteză maximă', en: 'Top speed' },
  cons: { ro: 'Consum mixt (WLTP)', en: 'Combined consumption (WLTP)' }, energy: { ro: 'Consum energie (WLTP)', en: 'Energy consumption (WLTP)' },
  co2: { ro: 'Emisii CO₂ (WLTP)', en: 'CO₂ emissions (WLTP)' }, evRange: { ro: 'Autonomie electrică (WLTP)', en: 'Electric range (WLTP)' },
  totalRange: { ro: 'Autonomie totală (WLTP)', en: 'Total range (WLTP)' }, battery: { ro: 'Baterie', en: 'Battery' },
  charge: { ro: 'Încărcare AC / DC', en: 'AC / DC charging' }, dims: { ro: 'Dimensiuni L × l × h', en: 'Dimensions L × W × H' },
  wb: { ro: 'Ampatament', en: 'Wheelbase' }, trunk: { ro: 'Portbagaj (VDA 211 / 215)', en: 'Boot (VDA 211 / 215)' },
  tank: { ro: 'Rezervor', en: 'Fuel tank' }, weight: { ro: 'Masă proprie', en: 'Kerb weight' }, emission: { ro: 'Normă poluare', en: 'Emission standard' },
  tow: { ro: 'Remorcare cu / fără frână', en: 'Towing braked / unbraked' }
};
SP.FUEL = {
  ice: { ro: 'Benzină', en: 'Petrol' }, hev: { ro: 'Full Hybrid', en: 'Full Hybrid' },
  phev: { ro: 'Plug-in Hybrid', en: 'Plug-in Hybrid' }, ev: { ro: 'Electric', en: 'Electric' }
};

/* ---------------------------------------------------------------- MODELS (importer data) */
const C = (code, ro, en, group, price, hex) => ({ code, name: { ro, en }, group, price, hex });
const STD = 'std', EXTRA = 'extra', BI = 'bitone', MATT = 'matte';

SP.MODELS = [
  /* ============================ OMODA ============================ */
  { id: 'o5', brand: 'omoda', name: 'OMODA 5', fuel: 'ice', pdf: 'omoda-5-shs-h-lista-preturi.pdf', validFrom: '2026-10-01',
    tagline: { ro: 'SUV compact cu echipare de top din standard', en: 'Compact SUV with top-tier standard equipment' },
    intro: { ro: 'Design futurist, motor 1.6 TGDI de 147 CP și cutie automată 7DCT. Extra este standard: ecran de 12,3", cameră, scaune încălzite și asistență ADAS 4.0.', en: 'Futuristic design, a 147 hp 1.6 TGDI engine and 7-speed DCT. Extra is standard: 12.3" screen, camera, heated seats and ADAS 4.0 assistance.' },
    key: [['147', 'CP'], ['10,1', 's'], ['7,0', 'l/100'], ['372', 'L']], keyL: ['power', 'accel', 'cons', 'trunk'],
    versions: [
      { id: 'confort', name: 'Confort', engine: '1.6 TGDI · 7DCT', list: 27990, net: 23132, launch: 22990, launchNet: 19000,
        hi: { ro: ['Ecran central tactil 12,3"', 'Cameră marșarier cu ghidaj dinamic', 'Scaune față sport încălzite', 'Acces fără cheie și pornire prin buton', 'Jante aliaj 18"'], en: ['12.3" central touchscreen', 'Reversing camera with dynamic guides', 'Heated front sports seats', 'Keyless entry and push-button start', '18" alloy wheels'] } },
      { id: 'premium', name: 'Premium', engine: '1.6 TGDI · 7DCT', list: 30990, net: 25612, launch: 25490, launchNet: 21066,
        hi: { ro: ['Trapă electrică', 'Hayon electric', 'Cameră 360° de înaltă rezoluție', 'Audio SONY cu 8 difuzoare', 'Încărcare wireless rapidă', 'Scaune față electrice, încălzite și ventilate'], en: ['Electric sunroof', 'Power tailgate', 'High-resolution 360° camera', 'SONY audio, 8 speakers', 'Fast wireless charging', 'Power, heated and ventilated front seats'] } }
    ],
    specs: { engine: '1.6 TGDI, 1.598 cm³', trans: '7DCT automată', drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, power: '108 kW / 147 CP', torque: '275 Nm', accel: '10,1 s', vmax: '195 km/h', cons: '7,0 l/100 km', co2: '159 g/km', dims: '4.447 × 1.824 × 1.588 mm', wb: '2.610 mm', trunk: '372 / 442 L', tank: '51 L', weight: '1.455 kg', emission: 'EURO 6e' },
    colors: [C('BW', 'Alb Zăpadă', 'Snow White', STD, 0, '#F2F2F0'), C('NL', 'Roșu Rubiniu', 'Ruby Red', EXTRA, 490, '#A3122A'), C('CL', 'Negru Cărbune', 'Carbon Black', EXTRA, 490, '#16171A'), C('GV', 'Gri Fantomă', 'Phantom Grey', EXTRA, 490, '#5E6267'), C('KX', 'Argintiu Metalizat', 'Metallic Silver', EXTRA, 490, '#A9ADB2'), C('X4', 'Duo Metal (bi-tone)', 'Duo Metal (two-tone)', BI, 750, '#9EA3A8'), C('ZE', 'Duo Alb (bi-tone)', 'Duo White (two-tone)', BI, 750, '#EDEDEB')],
    colorRule: { ro: 'Culorile extra sunt disponibile pentru versiunea Premium.', en: 'Extra colours are available on the Premium version.' }, extraTrims: ['premium'],
    interiors: [{ id: 'negru', name: { ro: 'Piele ecologică neagră', en: 'Black eco-leather' }, price: 0, hex: '#1B1B1D', img: 'int2' }],
    gallery: ['hero', 'hero2', 'int1', 'int2'] },

  { id: 'o5shsh', brand: 'omoda', name: 'OMODA 5 SHS-H', fuel: 'hev', pdf: 'omoda-5-shs-h-lista-preturi.pdf', validFrom: '2026-10-01',
    tagline: { ro: 'Full hybrid de 224 CP, fără priză', en: '224 hp full hybrid, no plug needed' },
    intro: { ro: 'Super Hybrid System cu transmisie DHT dedicată: 224 CP, 0–100 km/h în 7,9 s și un consum mixt de 5,3 l/100 km, fără să încarci vreodată.', en: 'Super Hybrid System with a dedicated DHT transmission: 224 hp, 0–100 km/h in 7.9 s and 5.3 l/100 km combined, without ever plugging in.' },
    key: [['224', 'CP'], ['7,9', 's'], ['5,3', 'l/100'], ['120', 'g/km']], keyL: ['sysPower', 'accel', 'cons', 'co2'],
    versions: [
      { id: 'confort', name: 'Confort', engine: 'Full Hybrid 1.5 TGDI · DHT', list: 29990, net: 24711, launch: 25490, launchNet: 21066,
        hi: { ro: ['Super Hybrid System 224 CP', 'Ecran central 12,3"', 'Cameră marșarier', 'Scaune față încălzite', 'Volan încălzit', 'Jante aliaj 17"'], en: ['224 hp Super Hybrid System', '12.3" central screen', 'Reversing camera', 'Heated front seats', 'Heated steering wheel', '17" alloy wheels'] } },
      { id: 'premium', name: 'Premium', engine: 'Full Hybrid 1.5 TGDI · DHT', list: 32990, net: 27264, launch: 28990, launchNet: 23959,
        hi: { ro: ['Trapă și hayon electric', 'Cameră 360°', 'Audio SONY 8 difuzoare', 'Iluminare ambientală multicoloră', 'Scaune electrice ventilate', 'Jante aliaj 18"'], en: ['Electric sunroof and tailgate', '360° camera', 'SONY audio, 8 speakers', 'Multicolour ambient lighting', 'Power ventilated seats', '18" alloy wheels'] } }
    ],
    specs: { engine: '1.5 TGDI, 1.499 cm³ + motor electric', trans: 'DHT', drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, sysPower: '165 kW / 224 CP', torque: '295 Nm', accel: '7,9 s', vmax: '175 km/h', cons: '5,3 l/100 km', co2: '120 g/km', dims: '4.447 × 1.824 × 1.588 mm', wb: '2.610 mm', trunk: '300 / 372 L', tank: '51 L', weight: '1.621 kg', emission: 'EURO 6e' },
    colors: [C('BW', 'Alb Zăpadă', 'Snow White', STD, 0, '#F2F2F0'), C('NL', 'Roșu Rubiniu', 'Ruby Red', EXTRA, 490, '#A3122A'), C('CL', 'Negru Cărbune', 'Carbon Black', EXTRA, 490, '#16171A'), C('GV', 'Gri Fantomă', 'Phantom Grey', EXTRA, 490, '#5E6267'), C('KX', 'Argintiu Metalizat', 'Metallic Silver', EXTRA, 490, '#A9ADB2'), C('X4', 'Duo Metal (bi-tone)', 'Duo Metal (two-tone)', BI, 750, '#9EA3A8'), C('ZE', 'Duo Alb (bi-tone)', 'Duo White (two-tone)', BI, 750, '#EDEDEB')],
    colorRule: { ro: 'Culorile extra sunt disponibile pentru versiunea Premium.', en: 'Extra colours are available on the Premium version.' }, extraTrims: ['premium'],
    interiors: [{ id: 'negru', name: { ro: 'Piele ecologică neagră', en: 'Black eco-leather' }, price: 0, hex: '#1B1B1D', img: 'int2' }],
    gallery: ['hero', 'hero2', 'int1', 'int2'] },

  { id: 'o5ev', brand: 'omoda', name: 'OMODA 5 EV', fuel: 'ev', pdf: 'omoda-5-ev-lista-preturi.pdf', validFrom: '2026-10-01',
    tagline: { ro: '100% electric, până la 430 km WLTP', en: 'Fully electric, up to 430 km WLTP' },
    intro: { ro: 'Noua formă a viitorului: 204 CP, baterie de 61 kWh, încărcare DC 130 kW, pompă de căldură și funcție V2L pentru a alimenta orice, oriunde.', en: 'The new shape of the future: 204 hp, a 61 kWh battery, 130 kW DC charging, a heat pump and V2L to power anything, anywhere.' },
    key: [['430', 'km'], ['204', 'CP'], ['130', 'kW DC'], ['7,6', 's']], keyL: ['evRange', 'power', 'charge', 'accel'],
    versions: [
      { id: 'premium', name: 'Premium', engine: { ro: 'Motor 100% electric', en: '100% electric motor' }, list: 39590, net: 32719, launch: 35590, launchNet: 29413,
        hi: { ro: ['Ecran central 12,3" și Head-Up Display', 'Cameră 360°', 'Trapă și hayon electric', 'Audio SONY 8 difuzoare', 'Pompă de căldură și funcție V2L', 'Navigație cu planificare încărcare'], en: ['12.3" screen and head-up display', '360° camera', 'Electric sunroof and tailgate', 'SONY audio, 8 speakers', 'Heat pump and V2L', 'Navigation with charging-stop planning'] } }
    ],
    specs: { engine: { ro: 'Motor electric 150 kW', en: '150 kW electric motor' }, drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, power: '150 kW / 204 CP', torque: '340 Nm', accel: '7,6 s', vmax: '172 km/h', energy: '16,9 kWh/100 km', evRange: { ro: 'până la 430 km', en: 'up to 430 km' }, battery: '61 kWh', charge: '10,3 kW / 130 kW', dims: '4.424 × 1.830 × 1.588 mm', wb: '2.630 mm', trunk: '370 L', weight: '1.710 kg', emission: 'EURO 6e' },
    colors: [C('BW', 'Alb', 'White', STD, 0, '#F2F2F0'), C('GV', 'Gri Fantomă', 'Phantom Grey', EXTRA, 490, '#5E6267'), C('CL', 'Negru Carbon', 'Carbon Black', EXTRA, 490, '#16171A'), C('KX', 'Argintiu Metalizat', 'Metallic Silver', EXTRA, 490, '#A9ADB2'), C('ZE', 'Alb bi-tone', 'White two-tone', BI, 750, '#EDEDEB'), C('X4', 'Argintiu Metalizat bi-tone', 'Silver two-tone', BI, 750, '#9EA3A8')],
    interiors: [{ id: 'negru', name: { ro: 'Interior negru', en: 'Black interior' }, price: 0, hex: '#1B1B1D', img: 'int2' }],
    gallery: ['hero', 'hero2', 'int1', 'int2'] },

  { id: 'o7', brand: 'omoda', name: 'OMODA 7 SHS-P', fuel: 'phev', pdf: 'omoda-7-shs-p-lista-preturi.pdf', validFrom: '2026-10-01',
    tagline: { ro: 'Plug-in hybrid cu până la 1.200 km autonomie', en: 'Plug-in hybrid with up to 1,200 km of range' },
    intro: { ro: 'Elegant și sportiv: până la 90 km în mod electric, cameră 540°, ecran glisant de 15,6" și jante de 20". Un SUV care își schimbă ritmul după tine.', en: 'Elegant and sporty: up to 90 km in electric mode, a 540° camera, a sliding 15.6" screen and 20" wheels. An SUV that follows your pace.' },
    key: [['1.200', 'km'], ['90', 'km EV'], ['8,4', 's'], ['53', 'g/km']], keyL: ['totalRange', 'evRange', 'accel', 'co2'],
    versions: [
      { id: 'exclusive', name: 'Exclusive', engine: 'Plug-in Hybrid 1.5 TGDI · DHT', list: 43490, net: 35942, launch: 37990, launchNet: 31396,
        hi: { ro: ['Autonomie 100% electrică de până la 90 km', 'Cameră panoramică 540°', 'Ecran central 15,6" glisant', 'Trapă panoramică din sticlă', 'Audio Sony 8 difuzoare', 'Jante aliaj 20"'], en: ['Up to 90 km fully electric', '540° panoramic camera', 'Sliding 15.6" central screen', 'Panoramic glass roof', 'Sony audio, 8 speakers', '20" alloy wheels'] } },
      { id: 'exclusive-plus', name: 'Exclusive Plus', engine: 'Plug-in Hybrid 1.5 TGDI · DHT', list: 44690, net: 36933, launch: 39490, launchNet: 32636,
        hi: { ro: ['Toate dotările Exclusive', 'Scaune față cu funcție de masaj', 'APA – parcare asistată', 'Torpedou', 'Ecran central fix'], en: ['Everything in Exclusive', 'Massaging front seats', 'APA automatic parking', 'Glovebox', 'Fixed central screen'] } }
    ],
    specs: { engine: '1.5 TGDI, 1.499 cm³ + motor electric', trans: 'DHT', drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, power: { ro: '105 kW termic / 150 kW electric', en: '105 kW petrol / 150 kW electric' }, torque: '365 Nm', accel: '8,4 s', vmax: '180 km/h', cons: '2,3 l/100 km', energy: '21,5 kWh/100 km', co2: '53 g/km', evRange: { ro: 'până la 90 km', en: 'up to 90 km' }, totalRange: { ro: 'până la 1.200 km', en: 'up to 1,200 km' }, battery: '18,4 kWh', charge: '6,6 kW / 40 kW', dims: '4.660 × 1.875 × 1.670 mm', wb: '2.720 mm', trunk: '401 / 537 L', tank: '70 L', tow: '1.250 / 750 kg' },
    colors: [C('BW', 'Alb Zăpadă', 'Snow White', STD, 0, '#F2F2F0'), C('KU', 'Argintiu Selenar', 'Lunar Silver', EXTRA, 490, '#AEB4BC'), C('SY', 'Verde Safir', 'Sapphire Green', EXTRA, 490, '#2E6F6A'), C('CL', 'Negru Cărbune', 'Carbon Black', EXTRA, 490, '#16171A'), C('UK', 'Gri Cosmic (mat)', 'Cosmic Grey (matte)', MATT, 990, '#4A4E54')],
    interiors: [{ id: 'negru', name: { ro: 'Interior negru', en: 'Black interior' }, price: 0, hex: '#1B1B1D', img: null }],
    gallery: ['hero', 'hero2', 'int1'] },

  { id: 'o9', brand: 'omoda', name: 'OMODA 9 SHS-P', fuel: 'phev', pdf: 'omoda-9-shs-p-lista-preturi.pdf', validFrom: '2026-10-01',
    tagline: { ro: 'Flagship AWD de 462 CP, 145 km electric', en: '462 hp AWD flagship, 145 km electric' },
    intro: { ro: 'Super Hybrid System cu trei motoare electrice și tracțiune integrală: 0–100 km/h în 4,9 s, până la 145 km 100% electric și 1.100 km autonomie combinată. Disponibil și în Black Edition, negru mat.', en: 'Super Hybrid System with three electric motors and all-wheel drive: 0–100 km/h in 4.9 s, up to 145 km fully electric and 1,100 km combined range. Also available as Black Edition in matte black.' },
    key: [['462', 'CP'], ['4,9', 's'], ['145', 'km EV'], ['1.100', 'km']], keyL: ['sysPower', 'accel', 'evRange', 'totalRange'],
    versions: [
      { id: 'exclusive', name: 'Exclusive', engine: 'Plug-in Hybrid 1.5 TGDI · 3DHT AWD', list: 52990, net: 43793, launch: 49990, launchNet: 41314,
        hi: { ro: ['AR-HUD cu realitate augmentată', 'Audio Sony 14 difuzoare', 'Cameră 540°', 'Scaune față cu masaj, memorie, încălzite și ventilate', 'Suspensie CDC adaptivă', 'Jante 20" Michelin'], en: ['Augmented-reality HUD', 'Sony audio, 14 speakers', '540° camera', 'Massaging, memory, heated and ventilated front seats', 'Adaptive CDC suspension', '20" wheels with Michelin tyres'] } },
      { id: 'black', name: 'Black Edition', engine: 'Plug-in Hybrid 1.5 TGDI · 3DHT AWD', list: 55080, net: 45521, launch: 52080, launchNet: 43041,
        hi: { ro: ['Toate dotările Exclusive', 'Vopsea neagră mată unică', 'Covorașe premium Black Edition', 'Emblemă Black Edition', 'Disponibil doar cu interior negru'], en: ['Everything in Exclusive', 'Unique matte black paint', 'Black Edition premium mats', 'Black Edition badge', 'Black interior only'] } }
    ],
    specs: { engine: '1.5 TGDI, 1.499 cm³ + 3 motoare electrice', trans: '3DHT', drive: { ro: 'Integrală (AWD)', en: 'All-wheel drive (AWD)' }, sysPower: '340 kW / 462 CP', torque: { ro: '700 Nm (electric)', en: '700 Nm (electric)' }, accel: '4,9 s', vmax: '180 km/h', cons: '0,2 l/100 km', energy: '18,1 kWh/100 km', co2: '38 g/km', evRange: { ro: 'până la 145 km', en: 'up to 145 km' }, totalRange: { ro: 'până la 1.100 km', en: 'up to 1,100 km' }, battery: '34,46 kWh NMC', charge: '6,6 kW / 65 kW', dims: '4.775 × 1.920 × 1.671 mm', wb: '2.800 mm', trunk: '471 / 660 L', tank: '70 L', weight: '2.195 kg', tow: '1.500 / 750 kg' },
    colors: [C('BX', 'Alb Perlat', 'Pearl White', STD, 0, '#F1F0EC'), C('GX', 'Gri Cenușiu', 'Ash Grey', EXTRA, 490, '#8C8F93'), C('CM', 'Negru Diamant', 'Diamond Black', EXTRA, 490, '#121316'), C('UE', 'Gri Rinocer (mat)', 'Rhino Grey (matte)', MATT, 1590, '#6B6E70')],
    interiors: [{ id: 'negru', name: { ro: 'Alcantara neagră', en: 'Black Alcantara' }, price: 0, hex: '#18181A', img: 'int2' }, { id: 'rosu', name: { ro: 'Roșu Rubin', en: 'Ruby Red' }, price: 0, hex: '#8E1F28', img: 'int1' }],
    gallery: ['hero', 'hero2', 'hero3', 'int1', 'int2'] },

  /* ============================ JAECOO ============================ */
  { id: 'j5', brand: 'jaecoo', name: 'JAECOO 5', fuel: 'ice', pdf: 'jaecoo-5-lista-preturi.pdf', validFrom: '2026-04-20',
    tagline: { ro: 'SUV compact, gata de aventură', en: 'Compact SUV, ready for adventure' },
    intro: { ro: 'Linii pătrate, garda la sol înaltă și un interior complet echipat: ecran de 13,2", cameră 540°, plafon panoramic și scaune ventilate, toate din standard.', en: 'Square lines, high ground clearance and a fully equipped cabin: 13.2" screen, 540° camera, panoramic roof and ventilated seats — all standard.' },
    key: [['147', 'CP'], ['13,2', '"'], ['540°', 'cam'], ['384', 'L']], keyL: ['power', null, null, 'trunk'],
    versions: [
      { id: 'premium', name: 'Premium', engine: '1.6 TGDI · 7DCT', list: 31990, net: 26438, launch: 24990, launchNet: 20653,
        hi: { ro: ['Ecran tactil 13,2" și bord digital 8,8"', 'Cameră HD 540°', 'Plafon panoramic din sticlă', 'Audio Sony 8 difuzoare', 'Scaune față încălzite, ventilate, electrice', 'Cruise control adaptiv și ADAS complet'], en: ['13.2" touchscreen and 8.8" digital cluster', 'HD 540° camera', 'Panoramic glass roof', 'Sony audio, 8 speakers', 'Heated, ventilated, power front seats', 'Adaptive cruise and full ADAS'] } }
    ],
    specs: { engine: '1.6 TGDI, 1.598 cm³', trans: '7DCT', drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, power: '108 kW / 147 CP', torque: '275 Nm', accel: '10,2 s', vmax: '190 km/h', cons: '7,0 l/100 km', co2: '159 g/km', dims: '4.380 × 1.860 × 1.650 mm', wb: '2.620 mm', trunk: '384 / 480 L', tank: '51 L', weight: '1.521 kg', tow: '1.250 / 750 kg' },
    colors: [C('BW', 'Alb Zăpadă', 'Snow White', STD, 0, '#F2F2F0'), C('GV', 'Gri Măsliniu', 'Olive Grey', EXTRA, 490, '#6C7173'), C('CL', 'Negru Canion', 'Canyon Black', EXTRA, 490, '#17181A'), C('WS', 'Albastru Ghețar', 'Glacier Blue', EXTRA, 490, '#2E4A6B'), C('LQ', 'Verde Alpin', 'Alpine Green', EXTRA, 490, '#2C8C8A'), C('Z6', 'Verde Alpin, acoperiș negru', 'Alpine Green, black roof', BI, 750, '#2C8C8A'), C('ZE', 'Alb Zăpadă, acoperiș negru', 'Snow White, black roof', BI, 750, '#EDEDEB')],
    interiors: [{ id: 'negru', name: { ro: 'Interior negru', en: 'Black interior' }, price: 0, hex: '#1B1B1D', img: 'int2' }, { id: 'alb', name: { ro: 'Alb cenușiu și negru', en: 'Ash white and black' }, price: 390, hex: '#D7D5D0', img: 'int1' }],
    gallery: ['hero', 'hero2', 'int1', 'int2'] },

  { id: 'j5ev', brand: 'jaecoo', name: 'JAECOO 5 EV', fuel: 'ev', pdf: 'jaecoo-5-ev-lista-preturi.pdf', validFrom: '2026-10-01',
    tagline: { ro: '100% electric, 402 km WLTP', en: 'Fully electric, 402 km WLTP' },
    intro: { ro: 'Același SUV robust, acum electric: 211 CP, baterie LFP de 61 kWh, încărcare DC 130 kW, pompă de căldură și priză de 220 V la bord.', en: 'The same rugged SUV, now electric: 211 hp, a 61 kWh LFP battery, 130 kW DC charging, a heat pump and a 220 V socket on board.' },
    key: [['402', 'km'], ['211', 'CP'], ['130', 'kW DC'], ['7,7', 's']], keyL: ['evRange', 'power', 'charge', 'accel'],
    versions: [
      { id: 'exclusive', name: 'Exclusive', engine: { ro: 'Motor 100% electric', en: '100% electric motor' }, list: 39590, net: 32719, launch: 35590, launchNet: 29413,
        hi: { ro: ['Pompă de căldură', 'Ecran 13,2" și bord digital 8,8"', 'Cameră HD 540°', 'Plafon panoramic', 'Audio Sony', 'Priză 220 V'], en: ['Heat pump', '13.2" screen and 8.8" cluster', 'HD 540° camera', 'Panoramic roof', 'Sony audio', '220 V socket'] } }
    ],
    specs: { engine: { ro: 'Motor sincron cu magnet permanent', en: 'Permanent-magnet synchronous motor' }, drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, power: '155 kW / 211 CP', torque: '288 Nm', accel: '7,7 s', vmax: '175 km/h', energy: '16,5 kWh/100 km', evRange: { ro: 'până la 402 km', en: 'up to 402 km' }, battery: '61 kWh LFP', charge: '10,3 kW / 130 kW', dims: '4.380 × 1.860 × 1.650 mm', wb: '2.620 mm', trunk: '384 / 480 L', weight: '1.785 kg', tow: '— / 750 kg' },
    colors: [C('BW', 'Alb Zăpadă', 'Snow White', STD, 0, '#F2F2F0'), C('CL', 'Negru Canion', 'Canyon Black', EXTRA, 490, '#17181A'), C('UR', 'Gri Fiord', 'Fjord Grey', EXTRA, 490, '#7C8186'), C('WS', 'Albastru Ghețar', 'Glacier Blue', EXTRA, 490, '#3F6C8E'), C('LQ', 'Verde Alpin', 'Alpine Green', EXTRA, 490, '#2C8C8A')],
    interiors: [{ id: 'negru', name: { ro: 'Piele sintetică neagră', en: 'Black synthetic leather' }, price: 0, hex: '#1B1B1D', img: 'int1' }],
    gallery: ['hero', 'int1'] },

  { id: 'j5shsh', brand: 'jaecoo', name: 'JAECOO 5 SHS-H', fuel: 'hev', pdf: 'jaecoo-5-shs-h-lista-preturi.pdf', validFrom: '2026-10-01',
    tagline: { ro: 'Full hybrid de 224 CP, de la 25.990 €', en: '224 hp full hybrid, from €25,990' },
    intro: { ro: 'Super Hybrid System cu transmisie DHT: 224 CP, 0–100 km/h în 7,9 s și 5,3 l/100 km. Confort și Exclusive, ambele cu ACC și pachet complet de siguranță.', en: 'Super Hybrid System with DHT transmission: 224 hp, 0–100 km/h in 7.9 s and 5.3 l/100 km. Confort and Exclusive, both with ACC and a full safety pack.' },
    key: [['224', 'CP'], ['7,9', 's'], ['5,3', 'l/100'], ['120', 'g/km']], keyL: ['sysPower', 'accel', 'cons', 'co2'],
    versions: [
      { id: 'confort', name: 'Confort', engine: 'Full Hybrid 1.5 TGDI · DHT', list: 29990, net: 24785, launch: 25990, launchNet: 21480,
        hi: { ro: ['Jante aliaj 18"', 'Faruri LED', 'Cruise control adaptiv (ACC)', 'Pachet complet siguranță (AEB, FCW, LKA)', 'Ecran 13,2" și bord 8,8"', 'Volan încălzit'], en: ['18" alloy wheels', 'LED headlights', 'Adaptive cruise control', 'Full safety pack (AEB, FCW, LKA)', '13.2" screen and 8.8" cluster', 'Heated steering wheel'] } },
      { id: 'exclusive', name: 'Exclusive', engine: 'Full Hybrid 1.5 TGDI · DHT', list: 32990, net: 27264, launch: 29490, launchNet: 24372,
        hi: { ro: ['Cameră HD 540°', 'Scaune electrice încălzite și ventilate', 'Audio Sony 8 difuzoare', 'Trapă panoramică electrică', 'Hayon electric', 'Iluminare ambientală multicoloră'], en: ['HD 540° camera', 'Power heated and ventilated seats', 'Sony audio, 8 speakers', 'Electric panoramic roof', 'Power tailgate', 'Multicolour ambient lighting'] } }
    ],
    specs: { engine: '1.5 TGDI, 1.499 cm³ + motor electric', trans: 'DHT', drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, sysPower: '165 kW / 224 CP', torque: '295 Nm', accel: '7,9 s', vmax: '175 km/h', cons: '5,3 l/100 km', co2: '120 g/km', battery: '1,83 kWh', dims: '4.380 × 1.860 × 1.650 mm', wb: '2.620 mm', trunk: '314 / 410 L', tank: '51 L', weight: '1.536 kg', tow: '1.250 / 750 kg' },
    colors: [C('BW', 'Alb Zăpadă', 'Snow White', STD, 0, '#F2F2F0'), C('GV', 'Gri Măsliniu', 'Olive Grey', EXTRA, 490, '#6C7173'), C('CL', 'Negru Canion', 'Canyon Black', EXTRA, 490, '#17181A'), C('WS', 'Albastru Ghețar', 'Glacier Blue', EXTRA, 490, '#2E4A6B'), C('LQ', 'Verde Alpin', 'Alpine Green', EXTRA, 490, '#2C8C8A'), C('Z6', 'Verde Alpin, acoperiș negru', 'Alpine Green, black roof', BI, 750, '#2C8C8A'), C('ZE', 'Alb Zăpadă, acoperiș negru', 'Snow White, black roof', BI, 750, '#EDEDEB')],
    interiors: [{ id: 'negru', name: { ro: 'Interior negru', en: 'Black interior' }, price: 0, hex: '#1B1B1D', img: 'int1' }],
    gallery: ['hero', 'hero2', 'int1'] },

  { id: 'j7', brand: 'jaecoo', name: 'JAECOO 7', fuel: 'ice', pdf: 'jaecoo-7-lista-preturi.pdf', validFrom: '2026-10-01', stockOnly: true,
    tagline: { ro: 'SUV cu tracțiune integrală disponibilă', en: 'SUV with available all-wheel drive' },
    intro: { ro: 'Spre infinit și dincolo de el: Premium cu tracțiune față sau Exclusive AWD cu moduri Zăpadă, Noroi, Nisip și Offroad. Disponibil în limita stocului.', en: 'To infinity and beyond: Premium with front-wheel drive or Exclusive AWD with Snow, Mud, Sand and Offroad modes. Available while stocks last.' },
    key: [['147', 'CP'], ['AWD', ''], ['584', 'L'], ['540°', 'cam']], keyL: ['power', 'drive', 'trunk', null],
    versions: [
      { id: 'premium', name: 'Premium', engine: '1.6 TGDI · 7DCT · FWD', list: 32990, net: 27264, launch: 26990, launchNet: 22305,
        hi: { ro: ['Ecran central 13,2"', 'Trapă panoramică și hayon electric', 'Cameră HD 540°', 'Încărcare wireless rapidă', 'Scaune față încălzite, electrice 6 direcții', 'Jante 19"'], en: ['13.2" central screen', 'Panoramic roof and power tailgate', 'HD 540° camera', 'Fast wireless charging', 'Heated 6-way power front seats', '19" wheels'] } },
      { id: 'exclusive', name: 'Exclusive AWD', engine: '1.6 TGDI · 7DCT · AWD', list: 35990, net: 29744, launch: 29990, launchNet: 24785,
        hi: { ro: ['Tracțiune integrală AWD (4x4)', 'Ecran central 14,8"', 'Head-Up Display', 'Scaune ventilate, scaun șofer cu memorie', 'Banchetă spate încălzită', 'Audio SONY 8 difuzoare'], en: ['All-wheel drive (4x4)', '14.8" central screen', 'Head-up display', 'Ventilated seats, driver memory', 'Heated rear bench', 'SONY audio, 8 speakers'] } }
    ],
    specs: { engine: '1.6 TGDI, 1.598 cm³', trans: '7DCT', drive: { ro: 'FWD (Premium) / AWD (Exclusive)', en: 'FWD (Premium) / AWD (Exclusive)' }, power: '108 kW / 147 CP', torque: '275 Nm', accel: '10,3 s / 11,7 s', vmax: '180 km/h', cons: '7 / 8 l/100 km', co2: '159 / 182 g/km', dims: '4.500 × 1.865 × 1.680 mm', wb: '2.672 mm', trunk: '424 / 584 L (FWD)', tank: '51 / 57 L', weight: '1.524 / 1.649 kg', emission: 'EURO 6E' },
    colors: [C('BW', 'Alb Zăpadă', 'Snow White', STD, 0, '#F2F2F0'), C('CL', 'Negru Carbon', 'Carbon Black', EXTRA, 490, '#16171A'), C('SP', 'Verde Smarald', 'Emerald Green', EXTRA, 490, '#7C9B4E'), C('KU', 'Argintiu Lună', 'Moon Silver', EXTRA, 490, '#A7AABF'), C('UD', 'Gri Măsliniu', 'Olive Grey', EXTRA, 490, '#6E9396'), C('ZM', 'Verde bi-tone', 'Green two-tone', BI, 750, '#7C9B4E'), C('ZN', 'Argintiu bi-tone', 'Silver two-tone', BI, 750, '#A7AABF'), C('ZK', 'Gri bi-tone', 'Grey two-tone', BI, 750, '#6E9396')],
    interiors: [{ id: 'negru', name: { ro: 'Tapițerie neagră', en: 'Black upholstery' }, price: 0, hex: '#1B1B1D', img: 'int2' }],
    gallery: ['hero', 'hero2', 'int1', 'int2'] },

  { id: 'j7shsp', brand: 'jaecoo', name: 'JAECOO 7 SHS-P', fuel: 'phev', pdf: 'jaecoo-7-shs-p-lista-preturi.pdf', validFrom: '2026-10-01',
    tagline: { ro: 'Plug-in hybrid: 90 km electric, 1.200 km total', en: 'Plug-in hybrid: 90 km electric, 1,200 km total' },
    intro: { ro: 'Super Hybrid System cu 525 Nm, 90 km în mod electric și 1.200 km autonomie totală. Head-Up Display, parbriz încălzit, scaune ventilate și interior Maro Caramel opțional.', en: 'Super Hybrid System with 525 Nm, 90 km in electric mode and 1,200 km total range. Head-up display, heated windscreen, ventilated seats and optional Caramel Brown interior.' },
    key: [['1.200', 'km'], ['90', 'km EV'], ['525', 'Nm'], ['23', 'g/km']], keyL: ['totalRange', 'evRange', 'torque', 'co2'],
    versions: [
      { id: 'exclusive', name: 'Exclusive', engine: 'Plug-in Hybrid 1.5 TGDI · 1DHT', list: 41990, net: 34702, launch: 36490, launchNet: 30157,
        hi: { ro: ['Head-Up Display', 'Scaune față încălzite și ventilate, șofer cu memorie', 'Plafon panoramic, hayon cu senzor', 'Parbriz încălzit electric', 'Încărcare wireless 50 W', 'Audio SONY 8 difuzoare'], en: ['Head-up display', 'Heated and ventilated front seats, driver memory', 'Panoramic roof, hands-free tailgate', 'Electrically heated windscreen', '50 W wireless charging', 'SONY audio, 8 speakers'] } }
    ],
    specs: { engine: '1.5 TGDI, 1.499 cm³ + motor electric', trans: '1DHT', drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, power: { ro: '105 kW termic / 150 kW electric', en: '105 kW petrol / 150 kW electric' }, torque: '525 Nm', vmax: '180 km/h', cons: '0,7 l/100 km', energy: '18,7 kWh/100 km', co2: '23 g/km', evRange: { ro: 'până la 90 km', en: 'up to 90 km' }, totalRange: { ro: 'până la 1.200 km', en: 'up to 1,200 km' }, battery: '18,4 kWh', charge: '6,6 kW / 40 kW', dims: '4.500 × 1.865 × 1.670 mm', wb: '2.672 mm', trunk: '340 / 500 L', tank: '60 L', weight: '1.795 kg', emission: 'EURO 6E' },
    colors: [C('BW', 'Alb Zăpadă', 'Snow White', STD, 0, '#F2F2F0'), C('CL', 'Negru Carbon', 'Carbon Black', EXTRA, 490, '#16171A'), C('KU', 'Argintiu Lună', 'Moon Silver', EXTRA, 490, '#A7AABF'), C('UD', 'Gri Măsliniu', 'Olive Grey', EXTRA, 490, '#6E9396'), C('SP', 'Verde Smarald', 'Emerald Green', EXTRA, 490, '#7C9B4E'), C('ZN', 'Argintiu bi-tone', 'Silver two-tone', BI, 750, '#A7AABF'), C('ZK', 'Gri bi-tone', 'Grey two-tone', BI, 750, '#6E9396'), C('ZM', 'Smarald bi-tone', 'Emerald two-tone', BI, 750, '#7C9B4E')],
    interiors: [{ id: 'negru', name: { ro: 'Tapițerie neagră', en: 'Black upholstery' }, price: 0, hex: '#1B1B1D', img: 'int2' }, { id: 'caramel', name: { ro: 'Maro Caramel', en: 'Caramel Brown' }, price: 390, hex: '#B98A5E', img: 'int1' }],
    gallery: ['hero', 'hero2', 'int1', 'int2'] },

  { id: 'j7shsh', brand: 'jaecoo', name: 'JAECOO 7 SHS-H', fuel: 'hev', pdf: 'jaecoo-7-shs-h-lista-preturi.pdf', validFrom: '2026-10-13',
    tagline: { ro: 'Full hybrid de 224 CP, de la 29.457 €', en: '224 hp full hybrid, from €29,457' },
    intro: { ro: 'Cel mai nou membru al gamei JAECOO 7: full hybrid de 224 CP, 5,5 l/100 km, fără priză. Confort sau Exclusive cu Head-Up Display și cameră 540°.', en: 'The newest JAECOO 7: a 224 hp full hybrid, 5.5 l/100 km, no plug needed. Confort or Exclusive with head-up display and 540° camera.' },
    key: [['224', 'CP'], ['8,9', 's'], ['5,5', 'l/100'], ['125', 'g/km']], keyL: ['sysPower', 'accel', 'cons', 'co2'],
    versions: [
      { id: 'confort', name: 'Confort', engine: 'Full Hybrid 1.5 TGDI · DHT', list: 34490, net: 28504, launch: 29457, launchNet: 24345,
        hi: { ro: ['Iluminare LED', 'Ecran tactil 13,2"', 'Cameră marșarier dinamică', 'Acces și pornire fără cheie', 'Filtrare aer N95', 'Scaune față încălzite, jante 19"'], en: ['LED lighting', '13.2" touchscreen', 'Dynamic reversing camera', 'Keyless entry and start', 'N95 air filtration', 'Heated front seats, 19" wheels'] } },
      { id: 'exclusive', name: 'Exclusive', engine: 'Full Hybrid 1.5 TGDI · DHT', list: 37490, net: 30983, launch: 32490, launchNet: 26851,
        hi: { ro: ['Cameră 540° HD', 'Scaune ventilate, șofer cu memorie', 'Banchetă spate încălzită', 'Plafon panoramic și hayon electric', 'Head-Up Display', 'Audio Sony 8 difuzoare'], en: ['HD 540° camera', 'Ventilated seats, driver memory', 'Heated rear bench', 'Panoramic roof and power tailgate', 'Head-up display', 'Sony audio, 8 speakers'] } }
    ],
    specs: { engine: '1.5 TGDI, 1.499 cm³ + motor electric', trans: 'DHT', drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, sysPower: '165 kW / 224 CP', torque: '365 Nm', accel: '8,9 s', vmax: '180 km/h', cons: '5,5 l/100 km', co2: '125 g/km', battery: '1,83 kWh', dims: '4.500 × 1.865 × 1.680 mm', wb: '2.672 mm', tank: '51 L', emission: 'EURO 6E' },
    colors: [C('BW', 'Alb Zăpadă', 'Snow White', STD, 0, '#F2F2F0'), C('CL', 'Negru Carbon', 'Carbon Black', EXTRA, 490, '#16171A'), C('KU', 'Argintiu Lună', 'Moon Silver', EXTRA, 490, '#A7AABF'), C('UD', 'Gri Măsliniu', 'Olive Grey', EXTRA, 490, '#6E9396'), C('ZN', 'Argintiu bi-tone', 'Silver two-tone', BI, 750, '#A7AABF'), C('ZK', 'Gri bi-tone', 'Grey two-tone', BI, 750, '#6E9396')],
    colorRule: { ro: 'Culorile extra și bi-tone sunt disponibile pentru versiunea Exclusive.', en: 'Extra and two-tone colours are available on the Exclusive version.' }, extraTrims: ['exclusive'],
    interiors: [{ id: 'negru', name: { ro: 'Interior negru', en: 'Black interior' }, price: 0, hex: '#1B1B1D', img: 'int1' }],
    gallery: ['hero', 'hero2', 'int1'] },

  { id: 'j8', brand: 'jaecoo', name: 'JAECOO 8 SHS-P', fuel: 'phev', pdf: 'jaecoo-8-shs-p-lista-preturi.pdf', validFrom: '2026-10-01',
    tagline: { ro: 'Flagship AWD de 462 CP, 135 km electric', en: '462 hp AWD flagship, 135 km electric' },
    intro: { ro: 'Cel mai mare JAECOO: 462 CP, tracțiune integrală, 135 km 100% electric, piele naturală, masaj față, audio Sony cu 14 difuzoare și 0–100 km/h în 5,8 s.', en: 'The largest JAECOO: 462 hp, all-wheel drive, 135 km fully electric, genuine leather, front massage seats, 14-speaker Sony audio and 0–100 km/h in 5.8 s.' },
    key: [['462', 'CP'], ['5,8', 's'], ['135', 'km EV'], ['1.000', 'km']], keyL: ['sysPower', 'accel', 'evRange', 'totalRange'],
    versions: [
      { id: 'exclusive', name: 'Exclusive', engine: 'Plug-in Hybrid 1.5 TGDI · 3DHT AWD', list: 53990, net: 44620, launch: 50990, launchNet: 41140,
        hi: { ro: ['462 CP, tracțiune integrală AWD', 'Autonomie electrică până la 135 km', 'Audio Sony premium 14 difuzoare', 'Scaune față și spate încălzite și ventilate', 'Masaj pentru șofer și pasager', 'Head-Up Display, cameră 540°, jante 20"'], en: ['462 hp, all-wheel drive', 'Up to 135 km electric range', 'Premium Sony audio, 14 speakers', 'Heated and ventilated front and rear seats', 'Driver and passenger massage', 'Head-up display, 540° camera, 20" wheels'] } }
    ],
    specs: { engine: '1.5 TGDI + 3 motoare electrice', trans: '3DHT', drive: { ro: 'Integrală (AWD)', en: 'All-wheel drive (AWD)' }, sysPower: '340 kW / 462 CP', torque: '580 / 700 Nm', accel: '5,8 s', vmax: '180 km/h', cons: '5,8 l/100 km', energy: '21,2 kWh/100 km', co2: '47 g/km', evRange: { ro: 'până la 135 km', en: 'up to 135 km' }, totalRange: { ro: 'până la 1.000 km', en: 'up to 1,000 km' }, battery: '34,46 kWh NMC', charge: '6,6 kW / 70 kW', dims: '4.820 × 1.930 × 1.710 mm', wb: '2.820 mm', trunk: '148 / 738 L', tank: '70 L' },
    colors: [C('BW', 'Alb Zăpadă', 'Snow White', STD, 0, '#F2F2F0'), C('CL', 'Negru Carbon', 'Carbon Black', EXTRA, 490, '#16171A'), C('UD', 'Gri Măsliniu', 'Olive Grey', EXTRA, 490, '#3F6A70'), C('KY', 'Argintiu Metalic', 'Metallic Silver', EXTRA, 490, '#8E9296'), C('ZE', 'Alb Zăpadă, plafon negru', 'Snow White, black roof', BI, 750, '#EDEDEB'), C('ZK', 'Gri Măsliniu, plafon negru', 'Olive Grey, black roof', BI, 750, '#3F6A70'), C('ZL', 'Argintiu Metalic bi-tone', 'Metallic Silver two-tone', BI, 750, '#8E9296'), C('UE', 'Gri Meteor (mat)', 'Meteor Grey (matte)', MATT, 1590, '#5F6266')],
    interiors: [{ id: 'negru', name: { ro: 'Piele naturală neagră', en: 'Black genuine leather' }, price: 0, hex: '#18181A', img: 'int2' }, { id: 'teracota', name: { ro: 'Piele naturală Maro Teracotă', en: 'Terracotta Brown genuine leather' }, price: 0, hex: '#A0522D', img: 'int1' }],
    gallery: ['hero', 'hero2', 'int1', 'int2'] }
];
SP.MODELS.forEach(m => { m.img = n => 'assets/img/' + m.id + '/' + n + '.webp'; m.colorImg = code => 'assets/img/' + m.id + '/colors/' + code + '.webp'; m.from = Math.min.apply(null, m.versions.map(v => v.launch)); });

/* ---------------------------------------------------------------- CONFIGURATOR: dealer accessories (demo prices) */
SP.ACCESSORIES = [
  { id: 'mats', name: { ro: 'Set covorașe premium', en: 'Premium floor mat set' }, price: 149, fits: 'all' },
  { id: 'tray', name: { ro: 'Tavă portbagaj', en: 'Boot liner' }, price: 89, fits: 'all' },
  { id: 'film', name: { ro: 'Folie protecție vopsea (față)', en: 'Paint protection film (front)' }, price: 590, fits: 'all' },
  { id: 'tow', name: { ro: 'Cârlig remorcare detașabil, montat', en: 'Detachable tow bar, fitted' }, price: 790, fits: ['ice', 'hev', 'phev'] },
  { id: 'wallbox', name: { ro: 'Wallbox 11 kW, montaj inclus', en: '11 kW wallbox, installed' }, price: 1190, fits: ['ev', 'phev'] },
  { id: 'winter', name: { ro: 'Set roți iarnă complete', en: 'Complete winter wheel set' }, price: 1390, fits: 'all' },
  { id: 'service', name: { ro: 'Pachet revizii 3 ani', en: '3-year service plan' }, price: 690, fits: 'all' }
];

/* ---------------------------------------------------------------- STOCK (demo — live: Sales Partner API) */
(function () {
  const rows = [
    ['OJ-2601', 'o5', 'premium', 'NL', 'negru', 'stock', 0, 0, 'vest', 'dp'],
    ['OJ-2602', 'o5', 'confort', 'BW', 'negru', 'stock', 0, 0, 'vest', 'dp'],
    ['OJ-2603', 'o5shsh', 'premium', 'X4', 'negru', 'stock', 0, 500, 'nord', 'dp'],
    ['OJ-2604', 'o5shsh', 'confort', 'BW', 'negru', 'transit', 0, 0, 'vest', 'dp'],
    ['OJ-2605', 'o5ev', 'premium', 'ZE', 'negru', 'stock', 0, 1000, 'vest', 'dp'],
    ['OJ-2606', 'o7', 'exclusive', 'SY', 'negru', 'stock', 0, 0, 'vest', 'dp'],
    ['OJ-2607', 'o7', 'exclusive-plus', 'UK', 'negru', 'transit', 0, 0, 'nord', 'dp'],
    ['OJ-2608', 'o9', 'black', 'UE', 'negru', 'stock', 0, 0, 'vest', 'dp'],
    ['OJ-2609', 'o9', 'exclusive', 'BX', 'rosu', 'demo', 3850, 3500, 'vest', 'dp'],
    ['OJ-2610', 'j5', 'premium', 'LQ', 'negru', 'stock', 0, 0, 'vest', 'vn'],
    ['OJ-2611', 'j5', 'premium', 'Z6', 'alb', 'stock', 0, 0, 'nord', 'vn'],
    ['OJ-2612', 'j5ev', 'exclusive', 'WS', 'negru', 'transit', 0, 0, 'vest', 'vn'],
    ['OJ-2613', 'j5shsh', 'exclusive', 'ZE', 'negru', 'stock', 0, 0, 'vest', 'vn'],
    ['OJ-2614', 'j7', 'exclusive', 'ZM', 'negru', 'stock', 0, 1500, 'vest', 'vn'],
    ['OJ-2615', 'j7shsp', 'exclusive', 'ZK', 'caramel', 'stock', 0, 0, 'vest', 'vn'],
    ['OJ-2616', 'j7shsp', 'exclusive', 'BW', 'negru', 'demo', 2400, 2500, 'nord', 'vn'],
    ['OJ-2617', 'j7shsh', 'exclusive', 'ZN', 'negru', 'transit', 0, 0, 'vest', 'vn'],
    ['OJ-2618', 'j8', 'exclusive', 'ZK', 'teracota', 'stock', 0, 0, 'vest', 'vn']
  ];
  SP.STOCK = rows.map(r => {
    const [id, mid, vid, code, intId, status, km, extra, loc, adv] = r;
    const m = SP.MODELS.find(x => x.id === mid), v = m.versions.find(x => x.id === vid);
    const color = m.colors.find(c => c.code === code), interior = m.interiors.find(i => i.id === intId) || m.interiors[0];
    const options = color.price + interior.price;
    const price = v.launch + options - extra;
    return {
      id, modelId: mid, versionId: vid, model: m, version: v, brand: m.brand, year: 2026, km, status, color, interior,
      vin: 'LVVDB' + (m.brand === 'omoda' ? '21B' : '31B') + 'XRD' + id.slice(-4) + '00',
      priceList: v.list + options, price, extraDiscount: extra, location: loc, advisor: adv,
      img: m.colorImg(code), gallery: [m.colorImg(code)].concat(m.gallery.map(g => m.img(g)))
    };
  });
})();

/* ---------------------------------------------------------------- OFFERS (SP Campaigns, demo) */
SP.OFFERS = [
  { id: 'lansare-j7-shs-h', brand: 'jaecoo', model: 'j7shsh', cat: 'auto', img: 'assets/img/j7shsh/hero.webp', tag: '29.457 €',
    title: { ro: 'JAECOO 7 SHS-H — preț de lansare', en: 'JAECOO 7 SHS-H — launch price' },
    lead: { ro: 'Full hybrid de 224 CP de la 29.457 € cu TVA, față de 34.490 € preț de listă.', en: '224 hp full hybrid from €29,457 incl. VAT versus a €34,490 list price.' }, valid: '2026-12-31', featured: true },
  { id: 'o5-de-la-22990', brand: 'omoda', model: 'o5', cat: 'auto', img: 'assets/img/o5/hero.webp', tag: '−5.000 €',
    title: { ro: 'OMODA 5 de la 22.990 €', en: 'OMODA 5 from €22,990' },
    lead: { ro: 'Ofertă de lansare pentru OMODA 5 Confort, cu echipare completă din standard.', en: 'Launch offer for OMODA 5 Confort, fully equipped as standard.' }, valid: '2026-12-31' },
  { id: 'o9-black-edition', brand: 'omoda', model: 'o9', cat: 'auto', img: 'assets/img/o9/hero3.webp', tag: 'Black Edition',
    title: { ro: 'OMODA 9 SHS-P Black Edition', en: 'OMODA 9 SHS-P Black Edition' },
    lead: { ro: 'Ediție limitată, negru mat, 462 CP AWD, de la 52.080 € cu TVA.', en: 'Limited edition in matte black, 462 hp AWD, from €52,080 incl. VAT.' }, valid: '2026-12-31' },
  { id: 'electric-rabla', brand: null, model: 'j5ev', cat: 'auto', img: 'assets/img/o5ev/hero.webp', tag: 'EV',
    title: { ro: 'OMODA 5 EV și JAECOO 5 EV de la 35.590 €', en: 'OMODA 5 EV and JAECOO 5 EV from €35,590' },
    lead: { ro: 'SUV-uri 100% electrice cu pompă de căldură, cumulabile cu programul Rabla, conform condițiilor AFM.', en: 'Fully electric SUVs with a heat pump, combinable with the Rabla scheme under AFM conditions.' }, valid: '2026-12-31' },
  { id: 'garantie-7-ani', brand: null, model: null, cat: 'service', img: 'assets/img/j8/hero.webp', tag: '7 ani',
    title: { ro: 'Garanție 7 ani și asistență rutieră 3 ani', en: '7-year warranty and 3-year roadside assistance' },
    lead: { ro: 'Garanție din fabrică 7 ani / 150.000 km și asistență rutieră 24/7 gratuită 36 de luni, în toată Europa.', en: '7-year / 150,000 km factory warranty and free 24/7 roadside assistance for 36 months across Europe.' }, valid: '2026-12-31' },
  { id: 'leasing-flote', brand: null, model: null, cat: 'finance', img: 'assets/img/j7shsp/hero2.webp', tag: 'Leasing',
    title: { ro: 'Leasing pentru persoane juridice și flote', en: 'Leasing for companies and fleets' },
    lead: { ro: 'Avans de la 10%, rate fixe, TVA deductibil pentru modelele eligibile. Ofertă în 24 de ore.', en: 'From 10% down payment, fixed instalments, deductible VAT on eligible models. Quote within 24 hours.' }, valid: '2026-12-31' }
];

/* ---------------------------------------------------------------- NEWS (CMS) */
SP.NEWS = [
  { id: 'j7-shs-h-lansare', brand: 'jaecoo', date: '2026-10-13', img: 'assets/img/j7shsh/hero2.webp',
    title: { ro: 'JAECOO 7 SHS-H, noul full hybrid de 224 CP, a ajuns în showroom', en: 'JAECOO 7 SHS-H, the new 224 hp full hybrid, is in our showroom' },
    lead: { ro: 'Versiunea full hybrid completează gama JAECOO 7, alături de benzină și plug-in hybrid. Preț de lansare de la 29.457 €.', en: 'The full hybrid completes the JAECOO 7 range alongside petrol and plug-in hybrid. Launch price from €29,457.' } },
  { id: 'o9-black-edition', brand: 'omoda', date: '2026-09-20', img: 'assets/img/o9/hero3.webp',
    title: { ro: 'OMODA 9 SHS-P primește ediția Black Edition', en: 'OMODA 9 SHS-P gets a Black Edition' },
    lead: { ro: 'Finisaj negru mat, covorașe și emblemă dedicate. Aceeași tehnologie: 462 CP, AWD, 145 km electric.', en: 'Matte black finish, dedicated mats and badge. Same technology: 462 hp, AWD, 145 km electric.' } },
  { id: 'shs-1000-km', brand: null, date: '2026-09-02', img: 'assets/img/j8/hero.webp',
    title: { ro: 'Super Hybrid System: peste 1.000 km cu un plin și o încărcare', en: 'Super Hybrid System: over 1,000 km on one tank and one charge' },
    lead: { ro: 'Cum funcționează SHS-H și SHS-P și de ce motorul dedicat atinge o eficiență termică de 44,5%.', en: 'How SHS-H and SHS-P work, and why the dedicated engine reaches 44.5% thermal efficiency.' } },
  { id: 'siguranta-5-stele', brand: null, date: '2026-08-18', img: 'assets/img/j5/hero2.webp',
    title: { ro: 'Siguranță de 5 stele pentru OMODA & JAECOO', en: '5-star safety for OMODA & JAECOO' },
    lead: { ro: 'Structură de caroserie din oțel de înaltă rezistență și peste 20 de sisteme ADAS pe fiecare model.', en: 'High-strength steel body structure and more than 20 ADAS systems on every model.' } }
];
SP.NEWS_BODY = {
  ro: ['OMODA & JAECOO sunt cele două mărci premium ale Chery International, prezente în România prin importatorul oficial Genius Automotive Europe Kft. Gama cuprinde SUV-uri cu motoare pe benzină, full hybrid (SHS-H), plug-in hybrid (SHS-P) și 100% electrice.', 'Toate modelele beneficiază de garanție din fabrică de 7 ani sau 150.000 km și de asistență rutieră 24/7 gratuită timp de 36 de luni.', 'Te așteptăm în showroom-ul OMODA & JAECOO București pentru un test drive sau o ofertă personalizată.'],
  en: ['OMODA & JAECOO are the two premium brands of Chery International, represented in Romania by the official importer Genius Automotive Europe Kft. The range covers petrol, full hybrid (SHS-H), plug-in hybrid (SHS-P) and fully electric SUVs.', 'Every model comes with a 7-year or 150,000 km factory warranty and free 24/7 roadside assistance for 36 months.', 'Visit the OMODA & JAECOO Bucharest showroom for a test drive or a personalised offer.']
};
