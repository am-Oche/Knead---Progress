# knead · Client to-do before launch

Everything below is **placeholder** on the live build. Each item is visibly marked on the page (dashed "Placeholder" / "Sample" tags) so nobody mistakes it for real info.

## 1. Business facts (blocking)
| Where | Current placeholder | Need |
|---|---|---|
| Locations → knead Flagship | `12 Placeholder Street, Lekki Phase 1, Lagos` | Real address + Google Maps link (`href` in data.js → `locations.items[0].href`) |
| Locations → knead Studio | `48 Placeholder Avenue, Victoria Island, Lagos` | Real address + Maps link |
| Locations → hours (both) | `Mon–Fri 7:00–20:00 …` | Confirmed opening hours |
| Footer → Contact | `+234 000 000 0000` / `tel:+2340000000000` | Real phone number |
| Footer → Contact | `hello@knead.ng` | Confirm inbox exists |
| Who we are → badge | `Est. 2026` (marked "tbc") | Confirm founding year |
| Footer legal | `© 2026` | Confirm entity name |
| Domain | `https://knead.ng/` in `<link rel=canonical>`, `og:url`, `og:image`, JSON-LD | Real production domain (OG image **must** be an absolute URL) |

## 2. Testimonials (blocking: do not launch with these)
The three reviews are **sample copy written for layout**, not real customers. Each card shows a "Sample review · replace before launch" tag.
- "Maya R." · Regular since 2026
- "Jordan K." · Local
- "Elena M." · Neighbor

Need: 3 real reviews (Google / Instagram / in-store cards) **with written permission** to publish name + quote. Then set `sample: false` (or delete the key) in `data.js → testimonials.items`. Avatars stay as initials unless the customer also consents to a photo.

## 3. Stats (confirm or soften)
`12+ Fresh bakes · 08 Signature drinks · 24/7 Cravings`. Confirm counts match the actual menu ("24/7" is a joke, not opening hours; fine, but confirm you're happy with it).

## 4. Prices & menu
All ₦ prices and items in `data.js → menu` / `favorites` / `eat` / `featured` are draft. Confirm every price.
"Download menu" button links to `#`; supply a PDF.

## 5. Dead links (`href="#"`)
- "Meet the people behind knead"
- Journal: "All stories" + 3 article cards (no articles exist yet)
- Locations: "Get directions" ×2
- Footer: Gift cards, TikTok, X / Twitter, Careers, Privacy, Terms
- Instagram handle `@kneadbakery`: confirm it's yours

## 6. Ordering
"Order now" / "Order online" buttons scroll to the menu. There is no cart or checkout yet. Decide: Chowdeck / Glovo / own checkout / WhatsApp order link.

## 7. Newsletter
Form validates and shows a success message but **doesn't send anywhere**. Connect Mailchimp / Brevo / ConvertKit (form `action` or fetch in `app.js → newsletter`).

## 8. Photography
See **IMAGE_SHOTLIST.md**. 50 slots: 3 use the real hero photo, the rest show designed brand fallbacks. Must-be-real (not AI): both location photos, the baker (who-a), café interior, cap + cup, counter scene.
