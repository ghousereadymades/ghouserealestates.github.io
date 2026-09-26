/*
 * ------------------------------------------------------------------
 *  SITE SETTINGS & LISTINGS — edit this file to update the website.
 * ------------------------------------------------------------------
 *  • Replace the phone / WhatsApp number below with your real details.
 *  • Add, remove or edit properties in LISTINGS. Every text field has
 *    an English (en) and Tamil (ta) version.
 *  • area is in cents for land; for houses/shops, also give builtUp in sq.ft.
 *  • price is in rupees (a number). Use null for "Price on request".
 *  • village must match one of the ids in PLACES.
 */

window.SITE = {
  name: { en: "Ghouse Real Estates", ta: "கௌஸ் ரியல் எஸ்டேட்ஸ்" },
  phone: "+91 97876 31543",
  whatsapp: "919787631543",       // country code + number, digits only
  office: {
    en: "Main Road, Lalpettai, Kattumannarkoil Taluk, Cuddalore District, Tamil Nadu",
    ta: "மெயின் ரோடு, லால்பேட்டை, காட்டுமன்னார்கோயில் வட்டம், கடலூர் மாவட்டம், தமிழ்நாடு"
  }
};

/* Places shown on the area map. x / y are positions on the schematic map (0–100). */
window.PLACES = [
  { id: "lalpettai",        en: "Lalpettai",           ta: "லால்பேட்டை",            km: 0,  x: 50, y: 50, hub: true },
  { id: "kattumannarkoil",  en: "Kattumannarkoil",     ta: "காட்டுமன்னார்கோயில்",    km: 8,  x: 62, y: 72 },
  { id: "veeranam",         en: "Veeranam Lake side",  ta: "வீராணம் ஏரிக்கரை",       km: 4,  x: 34, y: 33 },
  { id: "omampuliyur",      en: "Omampuliyur",         ta: "ஓமாம்புலியூர்",          km: 12, x: 74, y: 40 },
  { id: "kumaratchi",       en: "Kumaratchi",          ta: "குமராட்சி",              km: 15, x: 82, y: 62 },
  { id: "sethiyathope",     en: "Sethiyathope",        ta: "சேத்தியாத்தோப்பு",       km: 15, x: 22, y: 16 },
  { id: "chidambaram",      en: "Chidambaram Road",    ta: "சிதம்பரம் சாலை",         km: 20, x: 84, y: 25 }
];

/* type: plot | agri | house | commercial */
window.LISTINGS = [
  {
    id: "GR-101",
    type: "plot",
    village: "lalpettai",
    title: { en: "DTCP-approved house plots near Lalpet bus stand", ta: "லால்பேட்டை பேருந்து நிலையம் அருகே DTCP அங்கீகார மனைகள்" },
    note:  { en: "30 ft road, EB & water line ready. Walkable to school and mosque.", ta: "30 அடி சாலை, மின் இணைப்பு, குடிநீர் வசதி தயார். பள்ளி, பள்ளிவாசல் நடந்து செல்லும் தூரம்." },
    area: 5, price: 650000, facing: "east", approved: true, featured: true, hue: 28
  },
  {
    id: "GR-102",
    type: "agri",
    village: "veeranam",
    title: { en: "Two-crop paddy land fed by Veeranam channel", ta: "வீராணம் வாய்க்கால் பாசன இருபோக நெல் நிலம்" },
    note:  { en: "Assured canal water, patta in owner's name, tractor access.", ta: "உறுதியான வாய்க்கால் நீர், உரிமையாளர் பெயரில் பட்டா, டிராக்டர் செல்லும் வழி." },
    area: 150, price: 3600000, facing: "north", approved: false, featured: true, hue: 110
  },
  {
    id: "GR-103",
    type: "house",
    village: "kattumannarkoil",
    title: { en: "2BHK independent house behind Veeranarayana Perumal temple", ta: "வீரநாராயண பெருமாள் கோயில் பின்புறம் 2BHK தனி வீடு" },
    note:  { en: "Built 2019, car porch, borewell + sump, quiet residential street.", ta: "2019-ல் கட்டியது, கார் நிறுத்துமிடம், ஆழ்துளைக் கிணறு + தொட்டி, அமைதியான தெரு." },
    area: 4, builtUp: 1050, price: 3200000, facing: "east", approved: true, featured: true, hue: 200
  },
  {
    id: "GR-104",
    type: "commercial",
    village: "lalpettai",
    title: { en: "Main-road shop site facing Chidambaram highway", ta: "சிதம்பரம் நெடுஞ்சாலை நோக்கிய கடை மனை" },
    note:  { en: "40 ft frontage, heavy daytime footfall, suitable for showroom.", ta: "40 அடி முகப்பு, பகலில் அதிக மக்கள் நடமாட்டம், ஷோரூமிற்கு ஏற்றது." },
    area: 3, price: 2400000, facing: "south", approved: true, featured: false, hue: 350
  },
  {
    id: "GR-105",
    type: "plot",
    village: "omampuliyur",
    title: { en: "Gated layout plots, Omampuliyur", ta: "ஓமாம்புலியூர் பாதுகாக்கப்பட்ட லேஅவுட் மனைகள்" },
    note:  { en: "Compound wall, street lights, easy EMI with local banks.", ta: "சுற்றுச்சுவர், தெரு விளக்குகள், உள்ளூர் வங்கிகளில் எளிய தவணை கடன்." },
    area: 3, price: 330000, facing: "west", approved: true, featured: false, hue: 40
  },
  {
    id: "GR-106",
    type: "agri",
    village: "kumaratchi",
    title: { en: "Coconut grove with farm pump set", ta: "மின் மோட்டாருடன் தென்னந்தோப்பு" },
    note:  { en: "About 120 yielding trees, free EB connection, fenced.", ta: "சுமார் 120 காய்க்கும் மரங்கள், இலவச மின் இணைப்பு, வேலி அமைப்பு." },
    area: 200, price: 5000000, facing: "east", approved: false, featured: false, hue: 95
  },
  {
    id: "GR-107",
    type: "house",
    village: "sethiyathope",
    title: { en: "Traditional tiled house with thinnai & courtyard", ta: "திண்ணை, முற்றத்துடன் பாரம்பரிய ஓட்டு வீடு" },
    note:  { en: "Teak pillars, large backyard, 2 min to Sethiyathope market.", ta: "தேக்கு தூண்கள், பெரிய கொல்லைப்புறம், சேத்தியாத்தோப்பு சந்தைக்கு 2 நிமிடம்." },
    area: 6, builtUp: 1400, price: null, facing: "north", approved: true, featured: false, hue: 18
  },
  {
    id: "GR-108",
    type: "plot",
    village: "chidambaram",
    title: { en: "Corner plot on Chidambaram road, near college", ta: "சிதம்பரம் சாலையில், கல்லூரி அருகே மூலை மனை" },
    note:  { en: "Two-side road, ideal for rental portions or a clinic.", ta: "இருபுறம் சாலை, வாடகை வீடுகள் அல்லது மருத்துவமனைக்கு ஏற்றது." },
    area: 4.5, price: 1350000, facing: "north", approved: true, featured: false, hue: 260
  }
];
