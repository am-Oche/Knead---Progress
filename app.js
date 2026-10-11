/* knead — component renderers + interactions (vanilla, no build step) */
(function () {
  const D = window.KNEAD, I = window.KNEAD_ICONS;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const money = n => D.currency + n.toLocaleString("en-NG");
  const lines = arr => arr.map(l => `${l}<br>`).join("").replace(/<br>$/, "");
  const arr = `<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
  const btn = (b, cls = "btn-fill", extra = "") => `<a class="btn ${cls} ${extra}" href="${b.href}">${b.label}${arr}</a>`;
  const ico = n => I[n] || "";

  /* ---------- image system ----------
     pic(id) renders a real <picture> (AVIF + WebP srcset, explicit w/h, lazy) from KNEAD_IMAGES.
     A designed brand fallback always sits underneath: it shows while loading, when ready:false,
     and automatically if the file is missing / fails (onerror → .err). Never an empty box. */
  const IMG = window.KNEAD_IMAGES || {}, BASE = D.assetBase || "../assets/img/";
  const DECO = {
    spark: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.5c.7 5.6 3.1 8 10.5 10.5-7.4 2.5-9.8 4.9-10.5 10.5-.7-5.6-3.1-8-10.5-10.5C8.9 9.5 11.3 7.1 12 1.5z"/></svg>',
    squig: '<svg viewBox="0 0 132 20" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" aria-hidden="true"><path pathLength="1" d="M3 11c7-9 13 7 21-1s13-9 21-1 13 8 21 0 13-9 21-1 13 8 21 0 13-8 21-1"/></svg>',
    burst: (() => { let p = ""; for (let k = 0; k < 32; k++) { const a = k / 32 * Math.PI * 2, r = k % 2 ? 44 : 50; p += `${(50 + Math.cos(a) * r).toFixed(2)},${(50 + Math.sin(a) * r).toFixed(2)} `; } return `<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="${p.trim()}" fill="currentColor"/></svg>`; })()
  };
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const hash = s => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  const fallback = (id, m) => {
    const h = hash(id), rot = (h % 15) - 7;
    const body = m.initials
      ? `<b class="fb-in">${m.initials}</b>`
      : `<span class="fb-blob"></span><span class="fb-ic" style="--r:${rot}deg">${ico(m.icon) || I.croissant}</span><span class="fb-sp a">${DECO.spark}</span><span class="fb-sp b">${DECO.spark}</span>`;
    return `<span class="fb fb-${m.tone || "butter"}" style="--bx:${22 + h % 56}%;--by:${24 + (h >> 4) % 50}%" aria-hidden="true">${body}</span>`;
  };
  const pic = (id, o = {}) => {
    const m = IMG[id] || { icon: "croissant", tone: "butter", alt: "", ready: false };
    const alt = o.decorative ? "" : esc(m.alt || "");
    const a11y = alt ? ` role="img" aria-label="${alt}"` : ` aria-hidden="true"`;
    if (!m.ready) return `<div class="pic is-fb" data-slot="${id}"${a11y}>${fallback(id, m)}</div>`;
    const set = ext => m.widths.map(w => `${BASE}${m.file}-${w}.${ext} ${w}w`).join(", ");
    const pos = o.pos ? ` style="object-position:${o.pos}"` : "";
    return `<div class="pic" data-slot="${id}">${fallback(id, m)}<picture>` +
      `<source type="image/avif" srcset="${set("avif")}" sizes="${m.sizes}">` +
      `<source type="image/webp" srcset="${set("webp")}" sizes="${m.sizes}">` +
      `<img src="${BASE}${m.src}" alt="${alt}" width="${m.w}" height="${m.h}" loading="${o.eager ? "eager" : "lazy"}" decoding="${o.eager ? "sync" : "async"}"${o.eager ? ' fetchpriority="high"' : ""}${pos} ` +
      `onload="this.closest('.pic').classList.add('ok')" onerror="this.closest('.pic').classList.add('err')"></picture></div>`;
  };
  /* back-compat: old call sites pass (id, ph) */
  const slot = id => pic(id);
  const sticker = (txt, cls = "") => `<span class="sticker ${cls}" aria-hidden="true">${DECO.burst}<b>${txt}</b></span>`;
  const spark = cls => `<span class="deco spark ${cls}" aria-hidden="true">${DECO.spark}</span>`;
  const head = (o, right = "") => `
    <div class="head">
      <div>
        ${o.eyebrow ? `<p class="eyebrow rv">${ico("croissant")}${o.eyebrow}</p>` : ""}
        <h2 class="display h2 rv" style="--d:.05s">${lines(o.title)}</h2>
        <p class="sub rv" style="--d:.12s">${o.sub}</p>
        <span class="squig rv" style="--d:.3s">${DECO.squig}</span>
      </div>
      <div class="head-r rv" style="--d:.2s">
        ${o.body ? `<p class="body">${o.body}</p>` : ""}
        ${right}
      </div>
    </div>`;

  const C = {
    Announce: () => {
      const one = D.announce.map(t => `<span class="item">${t}${ico("croissant")}</span>`).join("");
      return `<div class="announce mq-pause" role="region" aria-label="Announcements"><div class="marquee" style="--mq:36s"><div>${one.repeat(4)}</div><div aria-hidden="true">${one.repeat(4)}</div></div></div>`;
    },
    Logo: (cls = "logo") => `<a href="#top" class="${cls}" aria-label="knead home">${"knead".split("").map(c => `<span>${c}</span>`).join("")}</a>`,
    Nav: () => `
      <header class="nav" id="nav">
        <div class="nav-in">
          ${C.Logo()}
          <nav aria-label="Primary"><ul class="nav-links">${D.nav.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}</ul></nav>
          <div style="display:flex;gap:10px;align-items:center">
            <a class="btn btn-fill btn-sm cta-btn" href="${D.navCta.href}">${D.navCta.label}${arr}</a>
            <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mmenu"><i></i></button>
          </div>
        </div>
      </header>
      <div class="mmenu" id="mmenu" aria-hidden="true">
        <div class="mmenu-top">${C.Logo()}<button class="mmenu-close" aria-label="Close menu">×</button></div>
        <ul>${D.nav.map((n, i) => `<li><a href="${n.href}" style="transition-delay:${.25 + i * .06}s">${n.label}</a></li>`).join("")}</ul>
        ${btn(D.navCta, "btn-butter")}
      </div>`,
    Hero: () => {
      const h = D.hero;
      return `
      <section class="hero" data-screen-label="02 Hero" aria-label="Intro">
        <div class="hero-grid">
          <div class="hero-copy">
            ${spark("h1s hero-fade")}${spark("h2s hero-fade")}
            <div class="hero-icons hero-fade" aria-hidden="true">${["croissant", "toast", "drink", "sandwich"].map(ico).join("")}</div>
            <h1 class="display">${h.lines.map((l, i) => `<span class="ln"><span style="--i:${i}">${l}</span></span>`).join("")}</h1>
            <p class="sub hero-fade">${h.sub}</p>
            <p class="body hero-fade">${h.body}</p>
            <div class="btns hero-fade">${btn(h.primary)}${btn(h.secondary, "btn-line")}</div>
          </div>
          <div class="hero-media">
            <div class="hero-bg par" data-speed="0.12">${pic(h.slot, { eager: true, pos: "50% 30%" })}</div>
            ${sticker("Baked<br>fresh<br>daily", "hero-st")}
            <div class="chips">${h.chips.map((c, i) => `<div class="chip" style="--i:${i}"><span class="ic">${ico(c.icon)}</span><div><h4>${c.title}</h4><p>${c.notes}</p></div></div>`).join("")}</div>
          </div>
        </div>
      </section>`;
    },
    Ticker: () => {
      const one = D.ticker.map((t, i) => `<span class="item"><span class="w">${t}</span>${ico(D.tickerIcons[i % 3])}</span>`).join("");
      return `<section class="ticker" data-screen-label="03 Ticker" aria-label="${D.ticker.join(", ")}"><div class="marquee" style="--mq:30s"><div>${one.repeat(3)}</div><div aria-hidden="true">${one.repeat(3)}</div></div></section>`;
    },
    Favorites: () => {
      const f = D.favorites;
      return `
      <section class="sec" id="favorites" data-screen-label="04 Favorites"><div class="wrap">
        ${head(f, btn(f.cta, "btn-line"))}
        <div class="fav-grid">${f.items.map((p, i) => `
          <article class="pcard rv tilt" style="--d:${i * .1}s">
            <span class="badge"><i></i>${p.badge}</span>
            <div class="media">${slot(p.slot, p.ph)}</div>
            <div class="pcard-b">
              <h3>${p.name}</h3><p class="notes">${p.notes}</p>
              <div class="pcard-f"><span class="price">${money(p.price)}</span><a class="btn btn-fill btn-sm" href="#menu">${p.cta}${arr}</a></div>
            </div>
          </article>`).join("")}
        </div>
      </div></section>`;
    },
    Feature: () => {
      const f = D.feature, t = f.taste;
      return `
      <section class="feature" data-screen-label="05 Feature"><div class="feature-in">
        <div class="bg par" data-speed="0.15">${slot(f.slot, f.ph)}</div>
        <div class="feature-c">
          <div>
            <h2 class="display h2 rv">${lines(f.title)}</h2>
            <p class="sub rv" style="--d:.1s">${f.sub}</p>
            <p class="body rv" style="--d:.18s">${f.body}</p>
            <div class="btns rv" style="--d:.25s">${btn(f.cta, "btn-butter")}</div>
          </div>
          <a class="taste rv" style="--d:.3s" href="${t.href}" aria-label="${t.name} — view menu">
            <div class="t-top"><span>${t.label}</span>${ico("drink").replace("<svg", '<svg width="26" height="26"')}</div>
            <div class="pills">${t.notes.map(n => `<span>${n}</span>`).join("")}</div>
            <div class="taste-b"><div><h4>${t.name}</h4><p class="notes">${t.line}</p></div><span class="round">${I.ne}</span></div>
          </a>
        </div>
      </div></section>`;
    },
    Craft: () => {
      const c = D.craft;
      return `
      <section class="sec" data-screen-label="06 Craft"><div class="wrap">
        ${head(c, btn(c.cta, "btn-line"))}
        <div class="craft-grid">${c.items.map((x, i) => `
          <article class="ccard rv" style="--d:${i * .12}s">
            <span class="tape" style="--tr:${[-4, 3, -2][i]}deg" aria-hidden="true"></span>
            <div class="media rv-img">${slot(x.slot, x.ph)}</div>
            <div class="row"><span class="num">${x.n}</span><div><h4>${x.title}</h4><p class="body">${x.body}</p></div></div>
          </article>`).join("")}
        </div>
      </div></section>`;
    },
    Flavors: () => {
      const f = D.flavors;
      return `
      <section class="sec" style="padding-top:0" data-screen-label="07 Flavors"><div class="wrap">
        ${head({ eyebrow: "Something for everyone", ...f }, btn(f.cta, "btn-line"))}
        <ul class="flist">${f.items.map((x, i) => `
          <li class="frow rv" style="--d:${i * .06}s" tabindex="0" data-i="${i}">
            <span class="n">${x.n}</span><h3>${x.name}</h3><span class="notes">${x.notes}</span><span class="notes desc">${x.desc}</span>
            <span class="round">${I.ne}</span>
            <div class="thumb">${slot(x.slot + "-m", x.ph)}</div>
          </li>`).join("")}
        </ul>
      </div>
      <div class="reveal-img" aria-hidden="true">${f.items.map((x, i) => `<div class="ph" data-i="${i}" style="opacity:0">${pic(x.slot, { decorative: true })}</div>`).join("")}</div>
      </section>`;
    },
    Menu: () => {
      const m = D.menu;
      return `
      <section class="sec menu-sec" id="menu" data-screen-label="08 Menu"><div class="wrap">
        ${head(m, btn(m.cta, "btn-fill"))}
        <div class="tabs" role="tablist" aria-label="Menu categories"><span class="tab-pill" aria-hidden="true"></span>
          ${m.tabs.map((t, i) => `<button class="tab" role="tab" id="tab-${t.id}" aria-controls="menu-panel" aria-selected="${i === 0}" data-i="${i}">${t.label}</button>`).join("")}
        </div>
        <div class="menu-body" id="menu-panel" role="tabpanel">
          <div class="menu-cat"><div><h3 id="mcat-h"></h3><p id="mcat-t"></p></div><div class="media" id="mcat-img"></div></div>
          <ul class="mrows" id="mrows"></ul>
        </div>
      </div></section>`;
    },
    More: () => {
      const m = D.more;
      return `
      <section class="sec" data-screen-label="09 More"><div class="wrap">
        ${head(m)}
        <div class="mt-grid">${m.items.map((x, i) => `
          <article class="mcard rv" style="--d:${i * .1}s" tabindex="0">
            <div class="media">${slot(x.slot, x.ph)}</div>
            <span class="big">${x.n}</span>
            <div class="c"><h4>${x.title}</h4><p>${x.body}</p></div>
          </article>`).join("")}
        </div>
      </div></section>`;
    },
    Who: () => {
      const w = D.who;
      const ring = `<svg class="ring" viewBox="0 0 132 132"><defs><path id="rp" d="M66 66m-52 0a52 52 0 1 1 104 0a52 52 0 1 1-104 0"/></defs><text font-size="10.5" font-weight="700" letter-spacing="3.2" fill="currentColor"><textPath href="#rp">NO KNEAD TO PANIC · NO KNEAD TO PANIC ·</textPath></text></svg>`;
      return `
      <section class="sec who" id="who" data-screen-label="10 Who we are"><div class="wrap who-grid">
        <div>
          <p class="eyebrow rv">${ico("toast")}${w.eyebrow}</p>
          <h2 class="display h2 rv" style="--d:.05s">${lines(w.title)}</h2>
          <p class="sub rv" style="--d:.12s">${w.sub}</p>
          <div class="rv" style="--d:.2s;margin-top:28px">${w.body.map(b => `<p class="body">${b}</p>`).join("")}</div>
          <div class="btns rv" style="--d:.26s">${btn(w.cta)}</div>
        </div>
        <div class="who-imgs">
          <div class="media a rv-img">${slot(w.slots[0].slot, w.slots[0].ph)}</div>
          <figure class="polaroid b rv" style="--d:.2s"><span class="tape" aria-hidden="true"></span><div class="media">${slot(w.slots[1].slot, w.slots[1].ph)}</div><figcaption>still warm</figcaption></figure>
          <div class="est" title="${w.badge.note}">${ring}<div><small>${w.badge.top}</small><h4>${w.badge.year}</h4><small class="est-tbc">tbc</small></div></div>
        </div>
      </div></section>`;
    },
    Stats: () => {
      const s = D.stats;
      return `
      <section class="stats" data-screen-label="11 Stats"><div class="stats-in">
        <div class="bg par" data-speed="0.15">${slot(s.slot, s.ph)}</div>
        <div style="max-width:640px">
          <h2 class="display h2 rv">${lines(s.title)}</h2>
          <p class="sub rv" style="--d:.1s">${s.sub}</p>
          <p class="body rv" style="--d:.18s">${s.body}</p>
        </div>
        <div class="stat-row">${s.items.map((x, i) => `<div class="stat rv" style="--d:${i * .1}s"><b data-count="${x.v}">${x.v}</b><span>${x.l}</span></div>`).join("")}</div>
      </div></section>`;
    },
    Featured: () => {
      const f = D.featured;
      return `
      <section class="sec" data-screen-label="12 Featured"><div class="wrap feat-grid">
        <div class="feat-img rv-img"><div class="feat-bg par" data-speed="0.08">${pic(f.slot)}</div><span class="badge"><i></i>${f.label}</span>${sticker(f.sticker, "feat-st")}</div>
        <div class="feat-c">
          <div>
            <p class="eyebrow rv">${ico("drink")}${f.eyebrow}</p>
            <h2 class="display h2 rv" style="--d:.05s">${lines(f.title)}</h2>
            <p class="sub rv" style="--d:.12s">${f.sub}</p>
          </div>
          <div class="prod rv" style="--d:.2s">
            <h3>${f.product}</h3>
            <ul class="ingr">${f.parts.map((p, i) => `<li><span>0${i + 1}</span>${p}</li>`).join("")}</ul>
            <div class="feat-f"><span class="price">${money(f.price)}</span>${btn(f.cta)}</div>
          </div>
        </div>
      </div></section>`;
    },
    Eat: () => {
      const e = D.eat;
      return `
      <section class="sec" id="eat" style="padding-top:0" data-screen-label="13 Something to eat"><div class="wrap">
        ${head(e, btn(e.cta, "btn-line"))}
        <div class="eat-grid">${e.items.map((x, i) => `
          <article class="ecard rv" style="--d:${i * .08}s">
            <div class="media">${slot(x.slot, x.name + " · 1:1.15")}<span class="ptag">${money(x.price)}</span></div>
            <div><h4>${x.name}</h4><p class="notes">${x.notes}</p></div>
          </article>`).join("")}
        </div>
      </div></section>`;
    },
    Testimonials: () => {
      const t = D.testimonials;
      return `
      <section class="sec testi" data-screen-label="14 Testimonials" aria-roledescription="carousel"><div class="wrap testi-grid">
        <div>
          <p class="eyebrow rv">${ico("croissant")}${t.eyebrow}</p>
          <h2 class="display h2 rv" style="--d:.05s">${lines(t.title)}</h2>
          <p class="sub rv" style="--d:.12s">${t.sub}</p>
          <div class="t-ctrl rv" style="--d:.2s">
            <button class="t-prev" aria-label="Previous review">${I.arrowL}</button>
            <button class="t-next" aria-label="Next review">${I.arrow}</button>
            <span class="t-count" aria-live="polite">01 / 0${t.items.length}</span>
          </div>
        </div>
        <div class="stack rv" style="--d:.15s">${t.items.map((x, i) => `
          <figure class="tcard" data-i="${i}">
            ${x.sample ? `<span class="tbc sample">Sample review · replace before launch</span>` : ""}
            <blockquote>“${x.q.replace(/^“|”$/g, "")}”</blockquote>
            <figcaption class="who">
              <div class="person"><span class="av">${pic("av-" + i)}</span><div><b>${x.name}</b><small>${x.role}</small></div></div>
              <span class="stars" aria-label="${x.rating} out of 5">${I.star.repeat(x.rating)}<span style="margin-left:6px">${x.rating}/5</span></span>
            </figcaption>
          </figure>`).join("")}
        </div>
      </div></section>`;
    },
    Journal: () => {
      const j = D.journal;
      return `
      <section class="sec" id="journal" data-screen-label="15 Journal"><div class="wrap">
        ${head(j, btn(j.cta, "btn-line"))}
        <div class="j-grid">${j.items.map((x, i) => `
          <a class="jcard rv" style="--d:${i * .1}s" href="#">
            <div class="media">${slot(x.slot, x.ph)}</div>
            <div class="jmeta"><span>${x.cat}</span><span>· ${x.time} read</span></div>
            <h3>${x.title}<span class="round">${I.ne}</span></h3>
          </a>`).join("")}
        </div>
      </div></section>`;
    },
    Insta: () => {
      const g = D.insta;
      const track = dec => g.items.map((x, i) => `<div class="ig ${x.s}">${pic("ig-" + i, { decorative: dec })}</div>`).join("");
      return `
      <section class="sec insta" data-screen-label="16 Instagram">
        <div class="wrap">${head(g, `<a class="handle" href="${g.href}" target="_blank" rel="noopener">${I.ig}${g.handle}</a>`)}</div>
        <div class="mq-pause"><div class="marquee" style="--mq:60s"><div class="ig-track">${track(false)}</div><div class="ig-track" aria-hidden="true">${track(true)}</div></div></div>
      </section>`;
    },
    Locations: () => {
      const l = D.locations;
      return `
      <section class="sec" id="locations" style="padding-top:0" data-screen-label="17 Locations"><div class="wrap">
        ${head(l)}
        <div class="loc-grid">${l.items.map((x, i) => `
          <article class="lcard rv" style="--d:${i * .1}s">
            <div class="media">${slot(x.slot, x.ph)}</div>
            <div class="c">
              <h3>${x.name}</h3>
              <dl><div><dt>Address <span class="tbc">Placeholder</span></dt><dd>${x.address}</dd></div><div><dt>Hours <span class="tbc">Placeholder</span></dt><dd>${x.hours}</dd></div></dl>
              <a class="btn btn-fill btn-sm" href="${x.href}">Get directions${arr}</a>
            </div>
          </article>`).join("")}
        </div>
      </div></section>`;
    },
    Newsletter: () => {
      const n = D.newsletter;
      return `
      <section class="sec" style="padding-top:0" data-screen-label="18 Newsletter"><div class="wrap"><div class="news-in">
        ${spark("n1s")}${spark("n2s")}
        <div class="news-icons" aria-hidden="true">${["croissant", "toast", "drink", "sandwich"].map(ico).join("")}</div>
        <div>
          <h2 class="display h2 rv">${lines(n.title)}</h2>
          <p class="sub rv" style="--d:.1s">${n.sub}</p>
        </div>
        <form class="nform rv" style="--d:.18s" novalidate>
          <p class="body">${n.body}</p>
          <label class="sr" for="nl-email">Email address</label>
          <div class="field"><input id="nl-email" type="email" placeholder="Your email address" required autocomplete="email"><button class="btn btn-fill" type="submit">${n.cta}${arr}</button></div>
          <small class="msg">No spam. Just bread news. Unsubscribe anytime.</small>
          <p class="ok" role="status">You’re in. Fresh news, coming right up.</p>
        </form>
      </div></div></section>`;
    },
    FinalCta: () => {
      const f = D.finalCta;
      return `
      <section class="cta" data-screen-label="19 Final CTA"><div class="cta-in">
        <div class="bg par" data-speed="0.15">${pic(f.slot, { pos: "50% 40%" })}</div>
        <div class="cta-c">
          ${spark("c1s")}${spark("c2s")}
          <h2 class="display rv">${lines(f.title)}</h2>
          <p class="sub rv" style="--d:.1s">${f.sub}</p>
          <div class="btns rv" style="--d:.2s;justify-content:center">${btn(f.cta, "btn-butter")}</div>
        </div>
      </div></section>`;
    },
    Footer: () => {
      const f = D.footer;
      const one = f.marquee.map((t, i) => `<span class="item"><span class="${i % 2 ? "o" : ""}">${t}</span>${ico(["croissant", "drink"][i % 2])}</span>`).join("");
      return `
      <footer class="footer" data-screen-label="20 Footer">
        <div class="wrap f-top">
          <div>
            <div class="f-logo" aria-label="knead">knead</div>
            <p class="f-tag">${f.tagline}</p>
            <div class="f-icons" aria-hidden="true">${["croissant", "toast", "drink", "sandwich"].map(ico).join("")}</div>
          </div>
          <div class="f-cols">${f.cols.map(c => `<div><h5>${c.h}</h5><ul>${c.links.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>`).join("")}</div>
        </div>
        <div class="wrap f-legal"><span>${f.legal}</span><nav aria-label="Legal">${f.legalLinks.map(([l, h]) => `<a href="${h}">${l}</a>`).join("")}</nav></div>
        <div class="f-mq" aria-label="No Knead to Panic. Try knead!"><div class="marquee" style="--mq:34s"><div>${one.repeat(3)}</div><div aria-hidden="true">${one.repeat(3)}</div></div></div>
      </footer>`;
    }
  };

  /* ---------- mount ---------- */
  $("#app").innerHTML =
    C.Announce() + C.Nav() +
    `<main id="top">` +
    C.Hero() + C.Ticker() + C.Favorites() + C.Feature() + C.Craft() + C.Flavors() + C.Menu() + C.More() +
    C.Who() + C.Stats() + C.Featured() + C.Eat() + C.Testimonials() + C.Journal() + C.Insta() +
    C.Locations() + C.Newsletter() + C.FinalCta() +
    `</main>` + C.Footer();

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* faint line-art icon pattern for fallbacks (built from KNEAD_ICONS, no extra files) */
  const tile = col => {
    const at = (n, x, y, s, r) => I[n].replace("<svg ", `<svg x="${x}" y="${y}" width="${s}" height="${s}" `).replace("<svg ", "<svg ") + "";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" color="${col}">${at("croissant", 18, 22, 46)}${at("drink", 128, 70, 40)}${at("toast", 54, 132, 40)}${at("cup", 150, 168, 34)}</svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  };
  document.documentElement.style.setProperty("--pat-m", tile("rgba(123,30,58,.09)"));
  document.documentElement.style.setProperty("--pat-b", tile("rgba(243,237,166,.10)"));
  /* ?slots in the URL labels every image with its slot id (handy for briefing the photographer) */
  if (/[?&]slots\b/.test(location.search)) document.documentElement.classList.add("show-slots");
  /* mark images that finished loading before their onload attribute could fire */
  const markLoaded = (r = document) => $$(".pic img", r).forEach(im => { if (im.complete) im.closest(".pic").classList.add(im.naturalWidth ? "ok" : "err"); });
  markLoaded();
  requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add("loaded")));

  /* reveals */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -10% 0px", threshold: .08 });
  $$(".rv,.rv-img").forEach(el => io.observe(el));
  /* tag full-bleed sections when on screen (slow cinematic push-in) */
  const bio = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("live", e.isIntersecting)), { threshold: .15 });
  $$(".feature-in,.stats-in,.cta-in").forEach(el => bio.observe(el));

  /* sticky nav shrink */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 60);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* mobile menu */
  const mm = $("#mmenu"), bg = $(".burger");
  const setMenu = o => { mm.classList.toggle("open", o); mm.setAttribute("aria-hidden", !o); bg.setAttribute("aria-expanded", o); document.body.style.overflow = o ? "hidden" : ""; };
  bg.onclick = () => setMenu(true);
  $(".mmenu-close").onclick = () => setMenu(false);
  $$("#mmenu a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  addEventListener("keydown", e => e.key === "Escape" && setMenu(false));

  /* parallax */
  const pars = $$(".par");
  if (!reduce) {
    let tick = false;
    const run = () => {
      const vh = innerHeight;
      pars.forEach(el => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0,${(-p * (parseFloat(el.dataset.speed) || .1) * 100).toFixed(2)}%,0)`;
      });
      tick = false;
    };
    addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(run); } }, { passive: true });
    run();
  }

  /* card tilt */
  if (!reduce && matchMedia("(hover:hover)").matches) {
    $$(".tilt").forEach(c => {
      c.addEventListener("mousemove", e => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        c.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-6px)`;
      });
      c.addEventListener("mouseleave", () => { c.style.transform = ""; });
    });
  }

  /* flavor list hover reveal (desktop follows cursor; mobile tap-expands) */
  const rimg = $(".reveal-img"), phs = $$(".ph", rimg);
  let mx = 0, my = 0, cx = 0, cy = 0, raf;
  const follow = () => { cx += (mx - cx) * .14; cy += (my - cy) * .14; rimg.style.left = cx + "px"; rimg.style.top = cy + "px"; raf = requestAnimationFrame(follow); };
  $$(".frow").forEach(row => {
    const i = +row.dataset.i;
    row.addEventListener("mouseenter", e => { cx = mx = e.clientX; cy = my = e.clientY; phs.forEach((p, k) => p.style.opacity = k === i ? 1 : 0); rimg.classList.add("on"); cancelAnimationFrame(raf); follow(); });
    row.addEventListener("mousemove", e => { mx = e.clientX + 40; my = e.clientY; });
    row.addEventListener("mouseleave", () => { rimg.classList.remove("on"); setTimeout(() => cancelAnimationFrame(raf), 500); });
    row.addEventListener("click", () => { if (innerWidth < 768) { $$(".frow").forEach(r => r !== row && r.classList.remove("open")); row.classList.toggle("open"); } else location.hash = "#menu"; });
    row.addEventListener("keydown", e => { if (e.key === "Enter") row.click(); });
  });

  /* menu tabs */
  const M = D.menu, tabs = $$(".tab"), pill = $(".tab-pill"), rows = $("#mrows");
  const movePill = t => { pill.style.width = t.offsetWidth + "px"; pill.style.transform = `translateX(${t.offsetLeft}px)`; };
  let cur = -1;
  const show = (i, instant) => {
    if (i === cur) return; cur = i;
    const t = M.tabs[i];
    tabs.forEach((b, k) => b.setAttribute("aria-selected", k === i));
    movePill(tabs[i]);
    const paint = () => {
      $("#mcat-h").textContent = t.label; $("#mcat-t").textContent = t.tag;
      $("#mcat-img").innerHTML = pic(t.slot);
      $("#menu-panel").setAttribute("aria-labelledby", "tab-" + t.id);
      markLoaded($("#mcat-img"));
      rows.innerHTML = t.items.map((x, k) => `<li class="mrow" style="--i:${k}"><h4>${x.name}</h4><span class="price">${money(x.price)}</span><span class="notes">${x.notes}</span></li>`).join("");
      rows.classList.remove("out", "show"); void rows.offsetWidth; rows.classList.add("show");
    };
    if (instant) paint(); else { rows.classList.add("out"); setTimeout(paint, 260); }
  };
  tabs.forEach((b, i) => {
    b.onclick = () => show(i);
    b.onkeydown = e => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { const n = (i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length; tabs[n].focus(); show(n); } };
  });
  show(0, true);
  addEventListener("resize", () => movePill(tabs[cur]));
  document.fonts && document.fonts.ready.then(() => movePill(tabs[cur]));

  /* testimonial stack */
  const cards = $$(".tcard"), N = cards.length, cnt = $(".t-count");
  let ti = 0, timer;
  const layout = () => cards.forEach((c, k) => {
    const d = (k - ti + N) % N;
    c.style.zIndex = N - d;
    c.style.opacity = d > 2 ? 0 : 1 - d * .12;
    c.style.transform = `translateY(${-d * 18}px) scale(${1 - d * .05})`;
    c.setAttribute("aria-hidden", d !== 0);
  });
  const go = s => { ti = (ti + s + N) % N; cnt.textContent = `0${ti + 1} / 0${N}`; layout(); };
  $(".t-next").onclick = () => { go(1); restart(); };
  $(".t-prev").onclick = () => { go(-1); restart(); };
  const restart = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => go(1), 6000); };
  layout(); restart();

  /* stats count-up */
  const sio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; sio.unobserve(e.target);
    const el = e.target, raw = el.dataset.count, m = raw.match(/^(\d+)(.*)$/);
    if (!m || reduce || raw.includes("/")) return;
    const end = +m[1], pad = m[1].length, suf = m[2], t0 = performance.now();
    const step = t => { const p = Math.min(1, (t - t0) / 1400), v = Math.round(end * (1 - Math.pow(1 - p, 3))); el.textContent = String(v).padStart(pad, "0") + suf; if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), { threshold: .6 });
  $$("[data-count]").forEach(el => sio.observe(el));

  /* newsletter */
  $(".nform").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.currentTarget, inp = $("input", f);
    if (!/^\S+@\S+\.\S+$/.test(inp.value)) { inp.focus(); $(".msg", f).textContent = "Please enter a valid email."; return; }
    f.classList.add("done"); $(".field", f).style.display = "none"; $(".msg", f).style.display = "none";
  });
})();
