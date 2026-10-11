/* knead — all copy, prices & image slots live here. Edit freely. */
window.KNEAD = {
  currency: "₦",
  /* where photo files live, relative to knead/index.html. On a server whose web root is the project root you can switch this to "/assets/img/". */
  assetBase: "../assets/img/",
  announce: ["Baked fresh daily", "Iced coffee, always", "Come say hello"],
  nav: [
    { label: "About", href: "#who" },
    { label: "Menu", href: "#menu" },
    { label: "Bakery", href: "#eat" },
    { label: "Journal", href: "#journal" },
    { label: "Locations", href: "#locations" }
  ],
  navCta: { label: "Order online", href: "#menu" },

  hero: {
    lines: ["Bread for", "busy mornings.", "Coffee for", "slow ones."],
    sub: "Made with care.",
    body: "Fresh bakes, cold brew, and iced coffee made for mornings, meetings, study sessions, and everything in between.",
    primary: { label: "Explore the menu", href: "#menu" },
    secondary: { label: "Visit knead", href: "#locations" },
    slot: "hero",
    chips: [
      { icon: "drink", title: "Iced Coffee", notes: "Smooth · Rich · Refreshing" },
      { icon: "croissant", title: "Butter Croissant", notes: "Flaky · Golden · Buttery" },
      { icon: "drink", title: "Signature Latte", notes: "Espresso · Vanilla · Milk" }
    ]
  },

  ticker: ["Bake better", "Sip slower", "Live fuller"],
  tickerIcons: ["croissant", "toast", "drink"],

  favorites: {
    eyebrow: "Our favorites",
    title: ["Three bites.", "Endless ways", "to enjoy."],
    sub: "Find your favorite.",
    body: "Three ways into knead: our everyday loaf, a buttery croissant, and the iced coffee people cross town for.",
    cta: { label: "Shop all", href: "#menu" },
    items: [
      { badge: "Best seller", name: "Butter Croissant", notes: "Flaky · Golden · Buttery", price: 3500, cta: "Order now", slot: "fav-croissant", ph: "Butter croissant · 4:5" },
      { badge: "New", name: "Cinnamon Roll", notes: "Brown Sugar · Cinnamon · Glaze", price: 4000, cta: "Order now", slot: "fav-cinnamon", ph: "Cinnamon roll · 4:5" },
      { badge: "Fan favorite", name: "Iced Coffee", notes: "Cocoa · Brown Sugar · Smooth", price: 3000, cta: "Order now", slot: "fav-iced", ph: "Iced coffee, big ice cubes · 4:5" }
    ]
  },

  feature: {
    title: ["When the day", "calls for", "something better."],
    sub: "Take your time.",
    body: "A quiet morning. A long conversation. A late-night study session. knead is made for the moments that deserve a little more time.",
    cta: { label: "Discover knead", href: "#who" },
    taste: { label: "Taste notes", notes: ["Espresso", "Milk", "Vanilla"], name: "Signature Latte", line: "Espresso · Milk · Vanilla", href: "#menu" },
    slot: "feature-bg", ph: "Full-bleed: sunny café table, latte + croissant · 16:9"
  },

  craft: {
    eyebrow: "Baked with craft",
    title: ["Better bakes", "start with better", "ingredients."],
    sub: "From oven to cup.",
    body: "We choose our flour, butter, and beans for their character, so every bite and sip tastes like it was made just for you.",
    cta: { label: "Our story", href: "#who" },
    items: [
      { n: "01", title: "Ingredients", body: "Real butter, quality flour, carefully chosen beans.", slot: "craft-1", ph: "Flour, butter, beans · 3:4" },
      { n: "02", title: "Bake", body: "Small-batch baking, fresh every morning.", slot: "craft-2", ph: "Hands shaping dough · 3:4" },
      { n: "03", title: "Brew", body: "Precisely brewed, served cold or hot.", slot: "craft-3", ph: "Espresso pour over ice · 3:4" }
    ]
  },

  flavors: {
    title: ["A flavor", "for every", "mood."],
    sub: "Taste the range.",
    cta: { label: "See everything", href: "#menu" },
    items: [
      { n: "01", name: "Iced Coffee", notes: "Cocoa · Brown Sugar · Smooth", desc: "Cold, bold, and beautifully refreshing.", slot: "flv-1", ph: "Iced coffee" },
      { n: "02", name: "Signature Latte", notes: "Espresso · Vanilla · Milk", desc: "Silky, sweet, and perfectly balanced.", slot: "flv-2", ph: "Signature latte" },
      { n: "03", name: "Croissants", notes: "Butter · Almond · Chocolate", desc: "Flaky layers, baked fresh daily.", slot: "flv-3", ph: "Croissants" },
      { n: "04", name: "Sandwiches", notes: "Warm · Savory · Filling", desc: "Soft bread, generous fillings.", slot: "flv-4", ph: "Sandwiches" }
    ]
  },

  menu: {
    eyebrow: "The knead menu",
    title: ["Your", "daily", "ritual."],
    sub: "Choose your cup.",
    cta: { label: "Download menu", href: "#" },
    tabs: [
      { id: "coffee", label: "Coffee", tag: "Made to order", slot: "menu-coffee", items: [
        { name: "Espresso", notes: "Rich · Intense", price: 2000 },
        { name: "Americano", notes: "Espresso · Water", price: 2500 },
        { name: "Cortado", notes: "Espresso · Steamed Milk", price: 2800 },
        { name: "Flat White", notes: "Double Espresso · Milk", price: 3200 },
        { name: "knead Latte", notes: "Espresso · Vanilla · Milk", price: 3500 },
        { name: "Mocha", notes: "Espresso · Cocoa · Milk", price: 3500 }
      ]},
      { id: "iced", label: "Iced", tag: "Served cold", slot: "menu-iced", items: [
        { name: "Iced Coffee", notes: "Slow-steeped · Smooth", price: 3000 },
        { name: "Iced Latte", notes: "Espresso · Milk · Ice", price: 3500 },
        { name: "Spanish Latte", notes: "Espresso · Condensed Milk · Ice", price: 3800 },
        { name: "Espresso Tonic", notes: "Espresso · Tonic · Citrus", price: 4000 }
      ]},
      { id: "bakes", label: "Bakes", tag: "Fresh every morning", slot: "menu-bakes", items: [
        { name: "Butter Croissant", notes: "Flaky · Golden · Buttery", price: 3500 },
        { name: "Almond Croissant", notes: "Almond Cream · Toasted Almonds", price: 4200 },
        { name: "Cinnamon Roll", notes: "Brown Sugar · Cinnamon · Glaze", price: 4000 },
        { name: "Chocolate Cookie", notes: "Dark Chocolate · Sea Salt", price: 2500 },
        { name: "Banana Bread", notes: "Ripe Banana · Walnut · Butter", price: 3000 }
      ]},
      { id: "sandwiches", label: "Sandwiches", tag: "Warm & filling", slot: "menu-sand", items: [
        { name: "Chicken Mayo", notes: "Pulled Chicken · Herb Mayo · Lettuce", price: 5500 },
        { name: "Egg & Cheese", notes: "Soft Egg · Cheddar · Brioche", price: 4500 },
        { name: "Tuna Melt", notes: "Tuna · Melted Cheese · Sourdough", price: 5800 }
      ]},
      { id: "noncoffee", label: "Non-Coffee", tag: "No caffeine needed", slot: "menu-non", items: [
        { name: "Hot Chocolate", notes: "Cocoa · Milk · Cream", price: 3000 },
        { name: "Fresh Juice", notes: "Seasonal Fruit · Pressed Daily", price: 2800 },
        { name: "Iced Tea", notes: "Black Tea · Lemon · Ice", price: 2200 }
      ]}
    ]
  },

  more: {
    eyebrow: "The knead experience",
    title: ["More than", "just bread."],
    sub: "A feeling, really.",
    body: "A good bakery is only as good as how it makes you feel when you walk in, and whether you want to stay.",
    items: [
      { n: "01", title: "Slow mornings", body: "Start the day with something worth savoring.", slot: "more-1", ph: "Morning light, coffee + pastry" },
      { n: "02", title: "Good people", body: "A place for conversations, connections, and community.", slot: "more-2", ph: "Friends at a café table" },
      { n: "03", title: "Better work", body: "Bring your laptop. Stay for another cup.", slot: "more-3", ph: "Laptop + iced coffee" },
      { n: "04", title: "Late afternoons", body: "Good bakes never need an excuse.", slot: "more-4", ph: "Golden-hour cookies" }
    ]
  },

  who: {
    eyebrow: "Who we are",
    title: ["We believe", "good food should", "feel good."],
    sub: "Simple. Honest. Delicious.",
    body: [
      "knead began with a simple idea: make food people genuinely look forward to.",
      "Great bakes don’t need to be complicated. They need honest ingredients, patient hands, and a place where people feel welcome."
    ],
    cta: { label: "Meet the people behind knead", href: "#" },
    badge: { top: "Est.", year: "2026", note: "client to confirm" },
    slots: [{ slot: "who-a", ph: "Baker behind the counter · 3:4" }, { slot: "who-b", ph: "Croissant close-up · 4:5" }]
  },

  stats: {
    title: ["Baked", "with intention."],
    sub: "Batch by batch.",
    body: "Every batch starts with carefully chosen ingredients and ends with something warm, fresh, and made to be shared.",
    items: [{ v: "12+", l: "Fresh bakes" }, { v: "08", l: "Signature drinks" }, { v: "24/7", l: "Cravings" }],
    slot: "stats-bg", ph: "Full-bleed: ovens / trays of croissants · 16:9"
  },

  featured: {
    label: "Most ordered this month",
    eyebrow: "Signature drink",
    title: ["Meet your", "new favorite", "iced coffee."],
    sub: "Smooth. Rich. Addictive.",
    product: "knead Iced Coffee",
    parts: ["Double espresso", "Cold milk", "House syrup"],
    price: 3000,
    cta: { label: "Order now", href: "#menu" },
    slot: "featured",
    sticker: "Iced,<br>always"
  },

  eat: {
    eyebrow: "Something to eat",
    title: ["Good coffee", "deserves good", "company."],
    sub: "Baked fresh daily.",
    cta: { label: "See the full menu", href: "#menu" },
    items: [
      { name: "Butter croissant", notes: "Flaky · Golden · Buttery", price: 3500, slot: "eat-1" },
      { name: "Almond croissant", notes: "Almond Cream · Toasted Almonds", price: 4200, slot: "eat-2" },
      { name: "Cinnamon roll", notes: "Brown Sugar · Cinnamon · Glaze", price: 4000, slot: "eat-3" },
      { name: "Chocolate cookie", notes: "Dark Chocolate · Sea Salt", price: 2500, slot: "eat-4" }
    ]
  },

  testimonials: {
    eyebrow: "From our community",
    title: ["Real bakes.", "Real people."],
    sub: "And lots of love.",
    items: [
      /* SAMPLE copy: replace with real, permissioned reviews before launch (see CLIENT_TODO.md). sample:true renders a visible marker. */
      { q: "The croissants here are genuinely the best I’ve had in the city.", name: "Maya R.", role: "Regular since 2026", rating: 5, sample: true },
      { q: "Beautiful space, amazing coffee, and somehow the perfect playlist every time.", name: "Jordan K.", role: "Local", rating: 5, sample: true },
      { q: "knead has become my favorite place for slow mornings and good conversations.", name: "Elena M.", role: "Neighbor", rating: 5, sample: true }
    ]
  },

  journal: {
    eyebrow: "From the journal",
    title: ["Bakes, culture", "& craft."],
    sub: "Stories worth baking.",
    cta: { label: "All stories", href: "#" },
    items: [
      { title: "The Art of the Croissant", cat: "Baking guides", time: "5 min", slot: "j-1", ph: "Laminated dough · 4:3" },
      { title: "Know Your Beans", cat: "Origins", time: "7 min", slot: "j-2", ph: "Coffee beans · 4:3" },
      { title: "The Perfect Pour", cat: "Brew guides", time: "6 min", slot: "j-3", ph: "Espresso over ice · 4:3" }
    ]
  },

  insta: {
    title: ["Inside", "knead."],
    sub: "Follow the ritual.",
    handle: "@kneadbakery",
    href: "https://instagram.com/kneadbakery",
    items: [
      { s: "s1", ph: "Morning iced coffee" }, { s: "s2", ph: "Croissant tray" }, { s: "s3", ph: "Barista" }, { s: "s4", ph: "Café interior" },
      { s: "s2", ph: "Cinnamon rolls" }, { s: "s3", ph: "Maroon cap + cup" }, { s: "s1", ph: "Customers" }, { s: "s4", ph: "Sandwich close-up" }
    ]
  },

  locations: {
    eyebrow: "Find us",
    title: ["Your next bite", "is closer."],
    sub: "See you soon.",
    items: [
      { name: "knead Flagship", address: "12 Placeholder Street, Lekki Phase 1, Lagos", hours: "Mon–Fri 7:00–20:00 · Sat–Sun 8:00–21:00", slot: "loc-1", ph: "Flagship storefront", href: "#" },
      { name: "knead Studio", address: "48 Placeholder Avenue, Victoria Island, Lagos", hours: "Mon–Sun 7:30–19:00", slot: "loc-2", ph: "Studio interior", href: "#" }
    ]
  },

  newsletter: {
    title: ["Start your day", "with knead."],
    sub: "A little good news.",
    body: "New bakes, seasonal drinks, café stories, and occasional surprises, straight to your inbox.",
    cta: "Subscribe"
  },

  finalCta: {
    title: ["Ready for your", "next bite?"],
    sub: "Bake something good.",
    cta: { label: "Order now", href: "#menu" },
    slot: "cta-bg"
  },

  footer: {
    tagline: "No Knead to Panic.",
    cols: [
      { h: "Navigation", links: [["Home", "#top"], ["About", "#who"], ["Menu", "#menu"], ["Locations", "#locations"]] },
      { h: "Explore", links: [["Bakery", "#eat"], ["Journal", "#journal"], ["Order online", "#menu"], ["Gift cards", "#"]] },
      { h: "Social", links: [["Instagram", "https://instagram.com/kneadbakery"], ["TikTok", "#"], ["X / Twitter", "#"]] },
      { h: "Contact", links: [["hello@knead.ng", "mailto:hello@knead.ng"], ["+234 000 000 0000", "tel:+2340000000000"], ["Careers", "#"]] }
    ],
    legal: "© 2026 knead Bakery & Café. All rights reserved.",
    legalLinks: [["Privacy", "#"], ["Terms", "#"]],
    marquee: ["No knead to panic", "Try knead!"]
  }
};

/* line-art icon set — 2px stroke, maroon (currentColor) */
window.KNEAD_ICONS = {
  croissant: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 30c2-9 9-15 18-15s16 6 18 15c-3 2-6 2-9 0"/><path d="M6 30c3 2 6 2 9 0"/><path d="M15 30c0-7 4-12 9-14 5 2 9 7 9 14-3 2-6 2-9 0-3 2-6 2-9 0z"/><path d="M24 16v14"/><path d="M10 25l4 2M38 25l-4 2"/></svg>',
  toast: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 40V22c-3-1-5-4-5-7 0-5 6-8 17-8s17 3 17 8c0 3-2 6-5 7v18z"/><path d="M17 27h2M27 31h2M22 35h2M30 24h1"/></svg>',
  drink: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 16h22l-3 26H16z"/><path d="M11 16h26"/><path d="M14 12c2-3 18-3 20 0"/><path d="M26 12l4-8h5"/><path d="M15 26h18"/><rect x="18" y="28" width="5" height="5" rx="1"/><rect x="25" y="31" width="5" height="5" rx="1"/></svg>',
  sandwich: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22c0-6 8-10 18-10s18 4 18 10z"/><path d="M14 16l2 2M22 14l1 2M30 15l-1 2"/><path d="M5 26c3-2 5 2 8 0s5 2 8 0 5 2 8 0 5 2 8 0 5 2 6 0"/><path d="M8 30h32"/><path d="M8 33c0 3 7 5 16 5s16-2 16-5z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  ne: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  /* extra line-art, same 2px style — used by image fallbacks */
  cup: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 20h24v10a10 10 0 0 1-10 10h-4a10 10 0 0 1-10-10z"/><path d="M34 23h3a5 5 0 0 1 0 10h-4"/><path d="M17 8c-2 3 2 5 0 8M23 6c-2 3 2 5 0 8M29 8c-2 3 2 5 0 8"/><path d="M8 44h30"/></svg>',
  roll: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="25" cy="24" r="16"/><path d="M24 24a2 2 0 0 1 4 0a4 4 0 0 1-8 0a6 6 0 0 1 12 0a8 8 0 0 1-16 0a10 10 0 0 1 20 0"/></svg>',
  cookie: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6a18 18 0 1 0 18 18 6 6 0 0 1-6-6 6 6 0 0 1-6-6 6 6 0 0 1-6-6z"/><path d="M16 20h.01M22 30h.01M31 27h.01M15 32h.01M27 37h.01" stroke-width="3.5"/></svg>',
  bean: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="24" cy="24" rx="11" ry="16" transform="rotate(35 24 24)"/><path d="M32 12C24 18 30 28 16 36"/></svg>',
  wheat: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 44V8"/><path d="M24 16c-5-1-8-4-8-8 5 0 8 3 8 8zM24 16c5-1 8-4 8-8-5 0-8 3-8 8zM24 26c-5-1-8-4-8-8 5 0 8 3 8 8zM24 26c5-1 8-4 8-8-5 0-8 3-8 8zM24 36c-5-1-8-4-8-8 5 0 8 3 8 8zM24 36c5-1 8-4 8-8-5 0-8 3-8 8z"/></svg>',
  store: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18l3-10h28l3 10"/><path d="M7 18a4.25 4.25 0 0 0 8.5 0a4.25 4.25 0 0 0 8.5 0a4.25 4.25 0 0 0 8.5 0a4.25 4.25 0 0 0 8.5 0"/><path d="M10 23v18h28V23"/><path d="M20 41V31h8v10"/><path d="M6 41h36"/></svg>'
};

/* ============================================================
   IMAGE REGISTRY — one entry per slot id (ids unchanged).
   Files live in /assets/img/ as  {file}-{width}.avif  +  {file}-{width}.webp
   for every width in `widths` (see IMAGE_SHOTLIST.md).
   ready:false → the designed brand fallback is shown instead (no 404s).
   When a photo lands: export the sizes, flip ready to true. Done.
   If a ready file is missing / fails, the fallback shows automatically.
   ============================================================ */
(function () {
  const SZ = {
    half: "(max-width:1100px) 100vw, 48vw",
    third: "(max-width:767px) 92vw, (max-width:1100px) 46vw, 31vw",
    quarter: "(max-width:1100px) 46vw, 23vw",
    bleed: "100vw",
    flv: "260px",
    full: "92vw",
    menu: "(max-width:1100px) 180px, 340px",
    av: "52px",
    ig: "340px",
    loc: "(max-width:767px) 92vw, (max-width:1100px) 46vw, 23vw"
  };
  /* R(file, aspect, maxWidth, widths, sizes, alt, icon, tone, extra) */
  const R = (file, ar, w, widths, sizes, alt, icon, tone, x = {}) => {
    const [a, b] = ar.split(":").map(Number);
    return Object.assign({ file, ar, w, h: Math.round(w * b / a), widths, sizes: SZ[sizes] || sizes, alt, icon, tone, ready: false,
      src: `${file}-${widths[widths.length - 1]}.webp` }, x);
  };
  const cup = { ready: true };
  window.KNEAD_IMAGES = {
    /* REAL — from assets/hero-cup.jpg */
    "hero": R("hero-cup", "736:952", 736, [480, 736], "half", "A person in a maroon knead cap holding a butter-yellow knead iced coffee cup", "drink", "butter", cup),
    "featured": R("hero-cup", "736:952", 736, [480, 736], "half", "knead iced coffee over big ice cubes in a butter-yellow cup", "drink", "butter", cup),
    "cta-bg": R("hero-cup", "736:952", 736, [480, 736], "bleed", "Hands holding a knead cup in the sun", "drink", "maroon", cup),

    /* favorites · 4:5 */
    "fav-croissant": R("fav-croissant", "4:5", 1000, [600, 1000], "third", "A golden butter croissant on a cream plate, flaky layers catching the window light", "croissant", "mustard"),
    "fav-cinnamon": R("fav-cinnamon-roll", "4:5", 1000, [600, 1000], "third", "A glazed cinnamon roll with a brown-sugar swirl on parchment", "roll", "maroon"),
    "fav-iced": R("fav-iced-coffee", "4:5", 1000, [600, 1000], "third", "Iced coffee with big clear ice cubes in a butter-yellow knead cup", "drink", "cream"),

    /* full-bleed · 16:9 */
    "feature-bg": R("feature-bg-cafe-table", "16:9", 2400, [960, 1600, 2400], "bleed", "A sunny café table with a signature latte and a butter croissant", "cup", "maroon", { bleed: true }),
    "stats-bg": R("stats-bg-oven-trays", "16:9", 2400, [960, 1600, 2400], "bleed", "Trays of golden croissants coming out of the oven", "croissant", "maroon", { bleed: true }),

    /* craft · 3:4 */
    "craft-1": R("craft-1-ingredients", "3:4", 1000, [600, 1000], "third", "Flour, a block of butter and coffee beans on a wooden counter", "wheat", "butter"),
    "craft-2": R("craft-2-shaping-dough", "3:4", 1000, [600, 1000], "third", "Hands shaping soft dough on a floured bench", "toast", "mustard"),
    "craft-3": R("craft-3-espresso-over-ice", "3:4", 1000, [600, 1000], "third", "Espresso pouring over ice in a clear glass", "drink", "maroon"),

    /* flavor list — cursor reveal 4:5, mobile thumbs 16:10 */
    "flv-1": R("flv-1-iced-coffee", "4:5", 600, [400, 600], "flv", "Iced coffee over big ice cubes", "drink", "mustard"),
    "flv-2": R("flv-2-signature-latte", "4:5", 600, [400, 600], "flv", "Signature latte with latte art in a cream cup", "cup", "butter"),
    "flv-3": R("flv-3-croissants", "4:5", 600, [400, 600], "flv", "Butter, almond and chocolate croissants in a row", "croissant", "maroon"),
    "flv-4": R("flv-4-sandwiches", "4:5", 600, [400, 600], "flv", "A warm sandwich cut in half showing a generous filling", "sandwich", "cream"),
    "flv-1-m": R("flv-1-m-iced-coffee", "16:10", 1000, [600, 1000], "full", "Iced coffee over big ice cubes", "drink", "mustard"),
    "flv-2-m": R("flv-2-m-signature-latte", "16:10", 1000, [600, 1000], "full", "Signature latte with latte art in a cream cup", "cup", "butter"),
    "flv-3-m": R("flv-3-m-croissants", "16:10", 1000, [600, 1000], "full", "Butter, almond and chocolate croissants in a row", "croissant", "maroon"),
    "flv-4-m": R("flv-4-m-sandwiches", "16:10", 1000, [600, 1000], "full", "A warm sandwich cut in half showing a generous filling", "sandwich", "cream"),

    /* menu tabs · 1:1 */
    "menu-coffee": R("menu-coffee", "1:1", 800, [400, 800], "menu", "A flat white and an espresso side by side on the counter", "cup", "maroon"),
    "menu-iced": R("menu-iced", "1:1", 800, [400, 800], "menu", "An iced latte in a tall glass with condensation", "drink", "mustard"),
    "menu-bakes": R("menu-bakes", "1:1", 800, [400, 800], "menu", "A tray of croissants, cinnamon rolls and cookies", "croissant", "cream"),
    "menu-sand": R("menu-sandwiches", "1:1", 800, [400, 800], "menu", "An egg and cheese brioche sandwich on parchment", "sandwich", "mustard"),
    "menu-non": R("menu-non-coffee", "1:1", 800, [400, 800], "menu", "Hot chocolate with cream next to a glass of fresh juice", "cup", "maroon"),

    /* more than bread · 3:4.4 */
    "more-1": R("more-1-slow-mornings", "15:22", 900, [500, 900], "quarter", "Morning light over a coffee and a pastry by the window", "cup", "mustard"),
    "more-2": R("more-2-good-people", "15:22", 900, [500, 900], "quarter", "Friends sharing pastries around a café table, seen from above", "toast", "maroon"),
    "more-3": R("more-3-better-work", "15:22", 900, [500, 900], "quarter", "A laptop beside an iced coffee on a café table", "drink", "butter"),
    "more-4": R("more-4-late-afternoons", "15:22", 900, [500, 900], "quarter", "Chocolate cookies in golden late-afternoon light", "cookie", "mustard"),

    /* who we are */
    "who-a": R("who-a-baker-counter", "3:4", 1000, [600, 1000], "(max-width:1100px) 55vw, 27vw", "A baker behind the counter dusting flour over fresh loaves", "toast", "maroon"),
    "who-b": R("who-b-croissant-closeup", "4:5", 800, [500, 800], "(max-width:1100px) 38vw, 19vw", "Close-up of a croissant’s honeycomb crumb", "croissant", "mustard"),

    /* something to eat · 1:1.15 */
    "eat-1": R("eat-1-butter-croissant", "20:23", 900, [500, 900], "quarter", "Butter croissant on parchment", "croissant", "cream"),
    "eat-2": R("eat-2-almond-croissant", "20:23", 900, [500, 900], "quarter", "Almond croissant dusted with sugar and toasted almonds", "croissant", "mustard"),
    "eat-3": R("eat-3-cinnamon-roll", "20:23", 900, [500, 900], "quarter", "Cinnamon roll with white glaze", "roll", "maroon"),
    "eat-4": R("eat-4-chocolate-cookie", "20:23", 900, [500, 900], "quarter", "Dark chocolate cookie with sea-salt flakes", "cookie", "butter"),

    /* testimonial avatars — initials by default; only use photos with written permission */
    "av-0": R("av-0", "1:1", 120, [120], "av", "", "croissant", "mustard", { initials: "MR" }),
    "av-1": R("av-1", "1:1", 120, [120], "av", "", "drink", "cream", { initials: "JK" }),
    "av-2": R("av-2", "1:1", 120, [120], "av", "", "toast", "maroon", { initials: "EM" }),

    /* journal · 4:3 */
    "j-1": R("j-1-croissant-lamination", "4:3", 1200, [600, 1200], "third", "Laminated croissant dough folded on a floured bench", "croissant", "butter"),
    "j-2": R("j-2-coffee-beans", "4:3", 1200, [600, 1200], "third", "Roasted coffee beans spilling from a scoop", "bean", "maroon"),
    "j-3": R("j-3-espresso-pour", "4:3", 1200, [600, 1200], "third", "Espresso pouring over ice", "drink", "mustard"),

    /* instagram strip — 8 distinct shots (size class in brackets) */
    "ig-0": R("ig-0-morning-iced-coffee", "7:9", 720, [400, 720], "ig", "Morning iced coffee on a sunny windowsill", "drink", "mustard"),
    "ig-1": R("ig-1-croissant-tray", "4:3", 800, [480, 800], "ig", "A tray of fresh croissants", "croissant", "butter"),
    "ig-2": R("ig-2-barista-pour", "4:5", 640, [400, 640], "ig", "A barista’s hands pouring latte art", "cup", "maroon"),
    "ig-3": R("ig-3-cafe-interior", "3:4", 720, [400, 720], "ig", "The café interior with warm wood and butter-yellow walls", "store", "cream"),
    "ig-4": R("ig-4-cinnamon-rolls", "4:3", 800, [480, 800], "ig", "Cinnamon rolls fresh from the oven", "roll", "mustard"),
    "ig-5": R("ig-5-cap-and-cup", "4:5", 640, [400, 640], "ig", "A maroon knead cap resting next to a knead cup", "drink", "maroon"),
    "ig-6": R("ig-6-counter-chat", "7:9", 720, [400, 720], "ig", "Customers chatting at the counter, softly out of focus", "toast", "butter"),
    "ig-7": R("ig-7-tuna-melt", "3:4", 720, [400, 720], "ig", "Close-up of a toasted tuna melt", "sandwich", "mustard"),

    /* locations · 4:5 */
    "loc-1": R("loc-1-flagship-storefront", "4:5", 1000, [600, 1000], "loc", "The knead flagship storefront", "store", "mustard"),
    "loc-2": R("loc-2-studio-interior", "4:5", 1000, [600, 1000], "loc", "Inside knead Studio: tables by a big window", "store", "maroon")
  };
})();
