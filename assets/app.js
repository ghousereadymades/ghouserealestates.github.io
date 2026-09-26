(function () {
  "use strict";

  var SITE = window.SITE, PLACES = window.PLACES, LISTINGS = window.LISTINGS;

  /* ---------------- translations ---------------- */
  var T = {
    en: {
      skip: "Skip to properties",
      brand: SITE.name.en,
      "nav.props": "Properties", "nav.area": "Area map", "nav.tools": "Land calculator", "nav.contact": "Contact",
      "hero.eyebrow": "Lalpettai · Kattumannarkoil · Veeranam",
      "hero.title": "Land between the lake and the temple town.",
      "hero.lede": "Verified house plots, paddy fields, homes and shop sites around Lalpettai — from people who know every street and every channel.",
      "hero.cta1": "See properties", "hero.cta2": "Sell your land",
      "trust.listings": "properties listed", "trust.villages": "places covered", "trust.docs": "documents checked",
      "list.title": "Properties for sale",
      "list.sub": "Tap a place on the map or use the filters.",
      "list.empty": "Nothing matches yet — tell us what you need and we'll find it.",
      "list.disclaimer": "Prices are indicative. Visit and verify documents before any payment.",
      "filter.place": "Place", "filter.budget": "Max budget", "filter.sort": "Sort",
      "filter.allPlaces": "All places", "filter.any": "Any",
      "sort.featured": "Featured", "sort.priceAsc": "Price: low to high", "sort.priceDesc": "Price: high to low", "sort.near": "Nearest to Lalpettai",
      "type.all": "All", "type.plot": "House plots", "type.agri": "Farm land", "type.house": "Houses", "type.commercial": "Shops & commercial",
      "type1.plot": "House plot", "type1.agri": "Farm land", "type1.house": "House", "type1.commercial": "Commercial",
      count: function (n) { return n === 1 ? "1 property" : n + " properties"; },
      featured: "Featured", approved: "Approved layout", facing: "facing",
      "face.east": "East", "face.west": "West", "face.north": "North", "face.south": "South",
      builtUp: "built-up", onRequest: "Price on request", perCent: "per cent", enquire: "Enquire",
      lakh: "L", crore: "Cr", cents: "cents", acres: "acres", sqft: "sq.ft",
      kmFrom: function (k) { return k === 0 ? "Our home town" : "≈ " + k + " km from Lalpettai"; },
      "area.title": "Know the neighbourhood",
      "area.sub": "A simple sketch of the places we cover (not to scale). Tap a place to see what's available there.",
      "area.none": "No listings here right now — ask us, new land comes in every week.",
      "area.showAll": "Show these in the list",
      "why.title": "How we work",
      "why.1t": "Documents first", "why.1p": "Patta, chitta, adangal, EC and parent documents checked before a property is listed.",
      "why.2t": "Walk the land together", "why.2p": "We take you to the site, show boundaries, road access and water source.",
      "why.3t": "Fair local price", "why.3p": "Guideline value and recent sales shared openly — no hidden margins.",
      "why.4t": "Registration support", "why.4p": "Help with the Kattumannarkoil sub-registrar office, loans and patta transfer.",
      "tools.title": "Land measurement calculator",
      "tools.sub": "Cents, acres, grounds, square feet — convert instantly.",
      "tools.value": "Value", "tools.unit": "Unit", "tools.rate": "Rate per cent (₹, optional)",
      "tools.total": "Estimated land value",
      "unit.sqft": "Square feet", "unit.sqm": "Square metres", "unit.cent": "Cents", "unit.ground": "Grounds", "unit.acre": "Acres", "unit.hectare": "Hectares",
      "sell.title": "Have land to sell?",
      "sell.p": "List with us free. We verify, photograph and bring genuine local and NRI buyers.",
      "sell.cta": "Message us on WhatsApp",
      "contact.title": "Talk to us",
      "contact.sub": "Send an enquiry — it opens WhatsApp with your message ready.",
      "contact.office": "Office",
      "contact.hours": "Call or WhatsApp any time · Site visits by appointment",
      "form.name": "Your name", "form.phone": "Phone", "form.want": "I am looking to",
      "form.buy": "Buy", "form.sell": "Sell", "form.rent": "Rent / Lease",
      "form.prop": "Property (optional)", "form.none": "— General enquiry —",
      "form.msg": "Message", "form.send": "Send on WhatsApp",
      "foot.tag": "Lalpettai, Kattumannarkoil Taluk, Cuddalore District",
      "wa.hello": "Hello " + SITE.name.en + ",",
      "wa.about": "I'm interested in",
      "wa.sell": "I'd like to sell my land / property near Lalpettai.",
      "wa.name": "Name", "wa.phone": "Phone", "wa.want": "Looking to"
    },
    ta: {
      skip: "சொத்துகளுக்குச் செல்ல",
      brand: SITE.name.ta,
      "nav.props": "சொத்துகள்", "nav.area": "பகுதி வரைபடம்", "nav.tools": "நில அளவு கணிப்பான்", "nav.contact": "தொடர்பு",
      "hero.eyebrow": "லால்பேட்டை · காட்டுமன்னார்கோயில் · வீராணம்",
      "hero.title": "ஏரிக்கும் கோயில் நகருக்கும் நடுவே உங்கள் நிலம்.",
      "hero.lede": "லால்பேட்டை சுற்றுவட்டாரத்தில் சரிபார்க்கப்பட்ட வீட்டு மனைகள், நெல் வயல்கள், வீடுகள், கடை மனைகள் — ஒவ்வொரு தெருவும் ஒவ்வொரு வாய்க்காலும் தெரிந்தவர்களிடமிருந்து.",
      "hero.cta1": "சொத்துகளைப் பார்க்க", "hero.cta2": "உங்கள் நிலத்தை விற்க",
      "trust.listings": "சொத்துகள் பட்டியலில்", "trust.villages": "ஊர்கள்", "trust.docs": "ஆவணங்கள் சரிபார்ப்பு",
      "list.title": "விற்பனைக்கு உள்ள சொத்துகள்",
      "list.sub": "வரைபடத்தில் ஊரைத் தொடுங்கள் அல்லது வடிகட்டிகளைப் பயன்படுத்துங்கள்.",
      "list.empty": "தற்போது பொருந்தும் சொத்து இல்லை — உங்கள் தேவையைச் சொல்லுங்கள், நாங்கள் தேடித் தருகிறோம்.",
      "list.disclaimer": "விலைகள் தோராயமானவை. பணம் செலுத்தும் முன் இடத்தைப் பார்வையிட்டு ஆவணங்களைச் சரிபார்க்கவும்.",
      "filter.place": "ஊர்", "filter.budget": "அதிகபட்ச பட்ஜெட்", "filter.sort": "வரிசை",
      "filter.allPlaces": "அனைத்து ஊர்களும்", "filter.any": "ஏதேனும்",
      "sort.featured": "சிறப்பு", "sort.priceAsc": "விலை: குறைவு → அதிகம்", "sort.priceDesc": "விலை: அதிகம் → குறைவு", "sort.near": "லால்பேட்டைக்கு அருகில்",
      "type.all": "அனைத்தும்", "type.plot": "வீட்டு மனைகள்", "type.agri": "விவசாய நிலம்", "type.house": "வீடுகள்", "type.commercial": "கடை / வணிக இடம்",
      "type1.plot": "வீட்டு மனை", "type1.agri": "விவசாய நிலம்", "type1.house": "வீடு", "type1.commercial": "வணிக இடம்",
      count: function (n) { return n + " சொத்துகள்"; },
      featured: "சிறப்பு", approved: "அங்கீகாரம் பெற்றது", facing: "நோக்கு",
      "face.east": "கிழக்கு", "face.west": "மேற்கு", "face.north": "வடக்கு", "face.south": "தெற்கு",
      builtUp: "கட்டட பரப்பு", onRequest: "விலைக்கு தொடர்பு கொள்ளவும்", perCent: "ஒரு சென்ட்", enquire: "விசாரிக்க",
      lakh: "லட்சம்", crore: "கோடி", cents: "சென்ட்", acres: "ஏக்கர்", sqft: "ச.அடி",
      kmFrom: function (k) { return k === 0 ? "எங்கள் சொந்த ஊர்" : "லால்பேட்டையிலிருந்து ≈ " + k + " கி.மீ"; },
      "area.title": "பகுதியை அறிந்துகொள்ளுங்கள்",
      "area.sub": "நாங்கள் சேவை செய்யும் ஊர்களின் எளிய வரைபடம் (அளவுக்கேற்பல்ல). ஊரைத் தொட்டு அங்குள்ள சொத்துகளைப் பாருங்கள்.",
      "area.none": "இங்கு தற்போது சொத்து இல்லை — கேளுங்கள், ஒவ்வொரு வாரமும் புதிய நிலங்கள் வருகின்றன.",
      "area.showAll": "இவற்றைப் பட்டியலில் காட்டு",
      "why.title": "எங்கள் செயல்முறை",
      "why.1t": "முதலில் ஆவணங்கள்", "why.1p": "பட்டா, சிட்டா, அடங்கல், வில்லங்கச் சான்று, மூல ஆவணங்கள் சரிபார்த்த பிறகே பட்டியலிடுகிறோம்.",
      "why.2t": "நிலத்தை நேரில் பார்ப்போம்", "why.2p": "இடத்திற்கு அழைத்துச் சென்று எல்லைகள், சாலை வசதி, நீர் ஆதாரத்தைக் காட்டுகிறோம்.",
      "why.3t": "நியாயமான உள்ளூர் விலை", "why.3p": "வழிகாட்டி மதிப்பும் சமீபத்திய விற்பனைகளும் வெளிப்படையாகப் பகிரப்படும் — மறைமுகக் கட்டணம் இல்லை.",
      "why.4t": "பதிவு உதவி", "why.4p": "காட்டுமன்னார்கோயில் சார்பதிவாளர் அலுவலகம், வங்கிக் கடன், பட்டா மாற்றம் — அனைத்திலும் உதவி.",
      "tools.title": "நில அளவு கணிப்பான்",
      "tools.sub": "சென்ட், ஏக்கர், கிரவுண்ட், சதுர அடி — உடனே மாற்றுங்கள்.",
      "tools.value": "அளவு", "tools.unit": "அலகு", "tools.rate": "ஒரு சென்ட் விலை (₹, விருப்பம்)",
      "tools.total": "தோராய நில மதிப்பு",
      "unit.sqft": "சதுர அடி", "unit.sqm": "சதுர மீட்டர்", "unit.cent": "சென்ட்", "unit.ground": "கிரவுண்ட்", "unit.acre": "ஏக்கர்", "unit.hectare": "ஹெக்டேர்",
      "sell.title": "விற்க நிலம் உள்ளதா?",
      "sell.p": "இலவசமாகப் பட்டியலிடுங்கள். நாங்கள் சரிபார்த்து, புகைப்படம் எடுத்து, உண்மையான உள்ளூர் மற்றும் வெளிநாட்டு வாழ் வாங்குபவர்களைக் கொண்டு வருகிறோம்.",
      "sell.cta": "வாட்ஸ்அப்பில் தொடர்பு கொள்ள",
      "contact.title": "எங்களுடன் பேசுங்கள்",
      "contact.sub": "விசாரணையை அனுப்புங்கள் — உங்கள் செய்தியுடன் வாட்ஸ்அப் திறக்கும்.",
      "contact.office": "அலுவலகம்",
      "contact.hours": "எப்போது வேண்டுமானாலும் அழைக்கவும் · முன்பதிவுடன் இடப் பார்வை",
      "form.name": "உங்கள் பெயர்", "form.phone": "தொலைபேசி", "form.want": "நான் விரும்புவது",
      "form.buy": "வாங்க", "form.sell": "விற்க", "form.rent": "வாடகை / குத்தகை",
      "form.prop": "சொத்து (விருப்பம்)", "form.none": "— பொது விசாரணை —",
      "form.msg": "செய்தி", "form.send": "வாட்ஸ்அப்பில் அனுப்பு",
      "foot.tag": "லால்பேட்டை, காட்டுமன்னார்கோயில் வட்டம், கடலூர் மாவட்டம்",
      "wa.hello": "வணக்கம் " + SITE.name.ta + ",",
      "wa.about": "எனக்கு இதில் ஆர்வம் உள்ளது",
      "wa.sell": "லால்பேட்டை அருகே என் நிலம் / சொத்தை விற்க விரும்புகிறேன்.",
      "wa.name": "பெயர்", "wa.phone": "தொலைபேசி", "wa.want": "விருப்பம்"
    }
  };

  var TYPES = ["plot", "agri", "house", "commercial"];
  var TYPE_COLORS = { plot: "#f2a33a", agri: "#7fae4a", house: "#2f7d6f", commercial: "#c2553a" };
  var UNITS = [
    { id: "sqft", f: 1 },
    { id: "sqm", f: 10.7639 },
    { id: "cent", f: 435.6 },
    { id: "ground", f: 2400 },
    { id: "acre", f: 43560 },
    { id: "hectare", f: 107639.1 }
  ];

  var state = { lang: "en", type: "all", place: "", budget: "", sort: "featured" };

  try {
    var saved = localStorage.getItem("gre-lang");
    if (saved === "ta" || saved === "en") state.lang = saved;
    else if ((navigator.language || "").toLowerCase().indexOf("ta") === 0) state.lang = "ta";
  } catch (e) { /* storage unavailable */ }

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function t(key) { var v = T[state.lang][key]; return v === undefined ? T.en[key] : v; }
  function L(obj) { return obj[state.lang] || obj.en; }
  function place(id) { for (var i = 0; i < PLACES.length; i++) if (PLACES[i].id === id) return PLACES[i]; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function num(n, d) { return Number(n.toFixed(d)).toLocaleString("en-IN"); }

  function money(n) {
    if (n == null) return t("onRequest");
    if (n >= 1e7) return "₹" + num(n / 1e7, 2) + " " + t("crore");
    if (n >= 1e5) return "₹" + num(n / 1e5, 1) + " " + t("lakh");
    return "₹" + n.toLocaleString("en-IN");
  }
  function areaText(c) {
    return c >= 100 ? num(c / 100, 2) + " " + t("acres") : num(c, 2) + " " + t("cents");
  }

  /* ---------------- i18n apply ---------------- */
  function applyLang() {
    document.documentElement.lang = state.lang;
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)); });
    document.title = L(SITE.name) + (state.lang === "ta" ? " · லால்பேட்டை & காட்டுமன்னார்கோயில்" : " · Lalpettai & Kattumannarkoil");
    $("#officeAddr").textContent = L(SITE.office);
    $("#budgetSelect option[value='']").textContent = t("filter.any");
    buildChips(); buildPlaceSelect(); buildUnitSelect(); buildPropSelect();
    render(); drawMap(); calc();
  }

  /* ---------------- filters ---------------- */
  function buildChips() {
    var box = $("#typeChips");
    box.innerHTML = ["all"].concat(TYPES).map(function (ty) {
      var dot = ty === "all" ? "" : '<span class="dot" style="background:' + TYPE_COLORS[ty] + '"></span>';
      return '<button type="button" class="chip" data-type="' + ty + '" aria-pressed="' + (state.type === ty) + '">' + dot + esc(t("type." + ty)) + "</button>";
    }).join("");
  }
  function buildPlaceSelect() {
    var sel = $("#placeSelect");
    sel.innerHTML = '<option value="">' + esc(t("filter.allPlaces")) + "</option>" +
      PLACES.map(function (p) { return '<option value="' + p.id + '">' + esc(L(p)) + "</option>"; }).join("");
    sel.value = state.place;
  }

  function filtered() {
    var list = LISTINGS.filter(function (l) {
      if (state.type !== "all" && l.type !== state.type) return false;
      if (state.place && l.village !== state.place) return false;
      if (state.budget && (l.price == null || l.price > +state.budget)) return false;
      return true;
    });
    var P = function (l) { return l.price == null ? Infinity : l.price; };
    var sorters = {
      featured: function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); },
      priceAsc: function (a, b) { return P(a) - P(b); },
      priceDesc: function (a, b) { return (b.price || 0) - (a.price || 0); },
      near: function (a, b) { return place(a.village).km - place(b.village).km; }
    };
    return list.sort(sorters[state.sort]);
  }

  /* ---------------- card illustration ---------------- */
  function art(l) {
    var h = l.hue, bg = "hsl(" + h + " 45% 88%)", fg = "hsl(" + h + " 40% 38%)", c = TYPE_COLORS[l.type];
    var body;
    if (l.type === "agri") {
      var rows = "";
      for (var i = 0; i < 9; i++) rows += '<path d="M' + (-20 + i * 40) + ' 200 L' + (80 + i * 22) + ' 90" stroke="' + c + '" stroke-width="7" stroke-linecap="round" stroke-dasharray="2 10"/>';
      body = '<rect y="90" width="320" height="110" fill="hsl(95 40% 78%)"/>' + rows +
        '<path d="M0 90 Q80 70 160 88 T320 84 V90 H0Z" fill="#6fb7a8"/>' +
        '<g fill="' + fg + '"><path d="M250 90 q-3 -40 8 -60"/><circle cx="258" cy="32" r="16" opacity=".7"/></g>';
    } else if (l.type === "house") {
      body = '<rect y="150" width="320" height="50" fill="hsl(95 35% 72%)"/>' +
        '<g transform="translate(100 60)"><path d="M-14 46 L60 -6 L134 46Z" fill="' + c + '"/>' +
        '<rect x="0" y="44" width="120" height="68" fill="#fffaf2"/>' +
        '<rect x="48" y="68" width="24" height="44" fill="' + fg + '"/>' +
        '<rect x="14" y="60" width="22" height="20" fill="hsl(' + h + ' 60% 70%)"/><rect x="84" y="60" width="22" height="20" fill="hsl(' + h + ' 60% 70%)"/>' +
        '<rect x="-6" y="108" width="132" height="6" fill="' + fg + '"/></g>';
    } else if (l.type === "commercial") {
      body = '<rect y="160" width="320" height="40" fill="#c9c2b4"/><path d="M0 172 H320" stroke="#fff" stroke-width="3" stroke-dasharray="18 14"/>' +
        '<g transform="translate(70 50)"><rect width="180" height="110" fill="#fffaf2"/>' +
        '<path d="M0 0 H180 V24 q-15 14 -30 0 q-15 14 -30 0 q-15 14 -30 0 q-15 14 -30 0 q-15 14 -30 0 q-15 14 -30 0Z" fill="' + c + '"/>' +
        '<rect x="16" y="44" width="68" height="66" fill="hsl(' + h + ' 50% 75%)"/><rect x="100" y="44" width="64" height="66" fill="' + fg + '"/></g>';
    } else {
      var stones = "";
      [[70, 60], [250, 60], [70, 170], [250, 170]].forEach(function (p) { stones += '<rect x="' + (p[0] - 5) + '" y="' + (p[1] - 10) + '" width="10" height="14" rx="2" fill="' + fg + '"/>'; });
      body = '<rect width="320" height="200" fill="hsl(40 45% 82%)"/>' +
        '<g stroke="hsl(40 30% 70%)" stroke-width="1">' + Array.apply(null, Array(12)).map(function (_, i) { return '<path d="M' + i * 28 + ' 0 V200"/>'; }).join("") + "</g>" +
        '<rect x="70" y="56" width="180" height="110" fill="none" stroke="' + c + '" stroke-width="3" stroke-dasharray="10 7"/>' + stones +
        '<text x="160" y="118" text-anchor="middle" font-size="24" font-weight="700" fill="' + fg + '" font-family="Fraunces, serif">' + esc(areaText(l.area)) + "</text>";
    }
    return '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="320" height="200" fill="' + bg + '"/>' + body + "</svg>";
  }

  /* ---------------- render listings ---------------- */
  function render() {
    var list = filtered();
    $("#resultCount").textContent = t("count")(list.length);
    $("#empty").hidden = list.length > 0;
    $("#grid").innerHTML = list.map(function (l) {
      var p = place(l.village);
      var facts = ['<li>' + esc(areaText(l.area)) + "</li>"];
      if (l.builtUp) facts.push("<li>" + num(l.builtUp, 0) + " " + t("sqft") + " " + t("builtUp") + "</li>");
      facts.push("<li>" + esc(t("face." + l.facing)) + " " + t("facing") + "</li>");
      if (l.approved && l.type !== "agri") facts.push("<li>✓ " + esc(t("approved")) + "</li>");
      var perCent = l.price && l.type !== "house" ? "<small>" + money(Math.round(l.price / l.area)) + " / " + t("perCent") + "</small>" : "";
      return '<article class="card" id="' + l.id + '">' +
        '<div class="card-art">' + art(l) +
          '<span class="badge">' + esc(t("type1." + l.type)) + "</span>" +
          (l.featured ? '<span class="badge badge-feat">★ ' + esc(t("featured")) + "</span>" : "") +
        "</div>" +
        '<div class="card-body">' +
          '<span class="card-place">📍 ' + esc(L(p)) + " · " + esc(t("kmFrom")(p.km)) + "</span>" +
          "<h3>" + esc(L(l.title)) + "</h3>" +
          '<p class="card-note">' + esc(L(l.note)) + "</p>" +
          '<ul class="facts">' + facts.join("") + "</ul>" +
          '<div class="card-foot"><div class="price">' + esc(money(l.price)) + perCent + "</div>" +
          '<a class="btn btn-primary" href="#contact" data-enquire="' + l.id + '">' + esc(t("enquire")) + "</a></div>" +
          '<span class="ref">' + l.id + "</span>" +
        "</div></article>";
    }).join("");
  }

  /* ---------------- area map ---------------- */
  function drawMap() {
    var svg = $("#areaMap"), hub = place("lalpettai");
    var title = svg.querySelector("title").outerHTML;
    var g = title;
    // Veeranam lake shape and Kollidam river hint
    g += '<path d="M14 26 Q8 40 18 52 Q26 60 34 50 Q40 40 36 30 Q28 18 14 26Z" fill="#9fd4c4" opacity=".85"/>';
    g += '<text x="21" y="50" font-size="2.6" fill="#1f5f55" font-style="italic" text-anchor="middle">' + (state.lang === "ta" ? "வீராணம் ஏரி" : "Veeranam Lake") + "</text>";
    g += '<path d="M0 92 Q30 84 55 90 T100 86" stroke="#9fd4c4" stroke-width="3" fill="none" opacity=".8"/>';
    g += '<text x="12" y="97" font-size="2.4" fill="#1f5f55" font-style="italic">' + (state.lang === "ta" ? "கொள்ளிடம் ஆறு" : "Kollidam river") + "</text>";
    [12, 24, 38].forEach(function (r, i) {
      g += '<circle class="ring" cx="' + hub.x + '" cy="' + hub.y + '" r="' + r + '"/>';
      g += '<text class="ring-label" x="' + (hub.x + r * .7 + 1) + '" y="' + (hub.y - r * .7) + '">' + [5, 10, 20][i] + " km</text>";
    });
    PLACES.forEach(function (p) {
      if (!p.hub) g += '<path class="road" d="M' + hub.x + " " + hub.y + " Q" + ((hub.x + p.x) / 2 + 4) + " " + ((hub.y + p.y) / 2 - 4) + " " + p.x + " " + p.y + '"/>';
    });
    PLACES.forEach(function (p) {
      var n = LISTINGS.filter(function (l) { return l.village === p.id; }).length;
      var right = p.x < 60;
      g += '<g class="pin' + (p.hub ? " hub" : "") + (state.place === p.id ? " active" : "") + '" tabindex="0" role="button" data-place="' + p.id + '" aria-label="' + esc(L(p)) + ", " + n + '">' +
        '<circle class="halo" cx="' + p.x + '" cy="' + p.y + '" r="4.5"/>' +
        '<circle class="core" cx="' + p.x + '" cy="' + p.y + '" r="' + (p.hub ? 2.6 : 2) + '"/>' +
        (n ? '<text class="count" x="' + p.x + '" y="' + (p.y + .85) + '">' + n + "</text>" : "") +
        '<text x="' + (right ? p.x + 4 : p.x - 4) + '" y="' + (p.y + 1) + '" text-anchor="' + (right ? "start" : "end") + '">' + esc(L(p)) + "</text></g>";
    });
    svg.innerHTML = g;
    sidePanel(state.place || "lalpettai");
  }

  function sidePanel(id) {
    var p = place(id), items = LISTINGS.filter(function (l) { return l.village === id; });
    var html = "<h3>" + esc(L(p)) + '</h3><p class="km">' + esc(t("kmFrom")(p.km)) + "</p>";
    if (!items.length) html += "<p>" + esc(t("area.none")) + "</p>";
    else {
      html += '<ul class="mini">' + items.map(function (l) {
        return '<li><a href="#' + l.id + '" data-jump="' + l.id + '"><span>' + esc(L(l.title)) + "</span><b>" + esc(money(l.price)) + "</b></a></li>";
      }).join("") + "</ul>";
      html += '<button type="button" class="btn btn-ghost" data-show-place="' + id + '">' + esc(t("area.showAll")) + "</button>";
    }
    $("#areaSide").innerHTML = html;
  }

  /* ---------------- calculator ---------------- */
  function buildUnitSelect() {
    var sel = $("#calcUnit"), cur = sel.value || "cent";
    sel.innerHTML = UNITS.map(function (u) { return '<option value="' + u.id + '">' + esc(t("unit." + u.id)) + "</option>"; }).join("");
    sel.value = cur;
  }
  function calc() {
    var v = parseFloat($("#calcValue").value), unit = $("#calcUnit").value;
    var src = UNITS.filter(function (u) { return u.id === unit; })[0];
    if (!src || isNaN(v) || v < 0) { $("#calcOut").innerHTML = ""; $("#calcTotal").hidden = true; return; }
    var sqft = v * src.f;
    $("#calcOut").innerHTML = UNITS.map(function (u) {
      var x = sqft / u.f, d = x >= 100 ? 1 : x >= 1 ? 2 : 4;
      return '<li class="' + (u.id === unit ? "is-src" : "") + '"><b>' + num(x, d) + "</b><span>" + esc(t("unit." + u.id)) + "</span></li>";
    }).join("");
    var rate = parseFloat($("#calcRate").value);
    var out = $("#calcTotal");
    if (rate > 0) {
      out.hidden = false;
      out.innerHTML = esc(t("tools.total")) + ": <b>" + esc(money(Math.round(sqft / 435.6 * rate))) + "</b>";
    } else out.hidden = true;
  }

  /* ---------------- WhatsApp ---------------- */
  function wa(text) { return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(text); }
  function buildPropSelect() {
    var sel = $("#propSelect"), cur = sel.value;
    sel.innerHTML = '<option value="">' + esc(t("form.none")) + "</option>" +
      LISTINGS.map(function (l) { return '<option value="' + l.id + '">' + l.id + " · " + esc(L(l.title)) + "</option>"; }).join("");
    sel.value = cur;
  }
  function updateStaticLinks() {
    $("#sellBtn").href = wa(t("wa.hello") + "\n" + t("wa.sell"));
    $("#waFloat").href = wa(t("wa.hello"));
    var ph = $("#phoneLink"); ph.textContent = "📞 " + SITE.phone; ph.href = "tel:" + SITE.phone.replace(/\s/g, "");
  }

  /* ---------------- events ---------------- */
  document.addEventListener("click", function (e) {
    var el;
    if ((el = e.target.closest(".lang button"))) {
      state.lang = el.dataset.lang;
      try { localStorage.setItem("gre-lang", state.lang); } catch (err) { /* ignore */ }
      applyLang(); updateStaticLinks();
    } else if ((el = e.target.closest(".chip"))) {
      state.type = el.dataset.type; buildChips(); render();
    } else if ((el = e.target.closest("[data-enquire]"))) {
      $("#propSelect").value = el.dataset.enquire;
      $("#enquiry [name=want]").value = "buy";
    } else if ((el = e.target.closest("[data-show-place]"))) {
      state.place = el.dataset.showPlace; state.type = "all";
      $("#placeSelect").value = state.place; buildChips(); render();
      $("#listings").scrollIntoView();
    } else if ((el = e.target.closest("[data-jump]"))) {
      if (!document.getElementById(el.dataset.jump)) {
        state.type = "all"; state.place = ""; state.budget = "";
        $("#placeSelect").value = ""; $("#budgetSelect").value = ""; buildChips(); render(); drawMap();
      }
    } else if ((el = e.target.closest(".pin"))) {
      selectPlace(el.dataset.place);
    }
  });
  document.addEventListener("keydown", function (e) {
    var el = e.target.closest && e.target.closest(".pin");
    if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); selectPlace(el.dataset.place); }
  });
  function selectPlace(id) {
    state.place = state.place === id ? "" : id;
    $("#placeSelect").value = state.place;
    render(); drawMap();
    var pin = $('.pin[data-place="' + id + '"]'); if (pin) pin.focus();
  }

  $("#placeSelect").addEventListener("change", function () { state.place = this.value; render(); drawMap(); });
  $("#budgetSelect").addEventListener("change", function () { state.budget = this.value; render(); });
  $("#sortSelect").addEventListener("change", function () { state.sort = this.value; render(); });
  ["#calcValue", "#calcUnit", "#calcRate"].forEach(function (s) { $(s).addEventListener("input", calc); });

  $("#enquiry").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, lines = [t("wa.hello")];
    var pid = f.prop.value;
    if (pid) {
      var l = LISTINGS.filter(function (x) { return x.id === pid; })[0];
      lines.push(t("wa.about") + ": " + pid + " — " + L(l.title) + " (" + money(l.price) + ")");
    }
    lines.push(t("wa.want") + ": " + f.want.options[f.want.selectedIndex].text);
    if (f.msg.value.trim()) lines.push(f.msg.value.trim());
    lines.push("", t("wa.name") + ": " + f.name.value.trim(), t("wa.phone") + ": " + f.phone.value.trim());
    window.open(wa(lines.join("\n")), "_blank", "noopener");
  });

  /* ---------------- init ---------------- */
  $("#year").textContent = new Date().getFullYear();
  $('[data-count="listings"]').textContent = LISTINGS.length;
  $('[data-count="places"]').textContent = PLACES.length;
  applyLang();
  updateStaticLinks();
})();
