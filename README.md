knead: No Knead to Panic

A modern bakery & café website concept. Fresh bakes, iced coffee and slow mornings, in a warm maroon and butter-yellow brand.

Live preview: https://am-oche.github.io/Knead---Progress/

Status: work in progress. Copy, images and details are still being refined.

Overview

knead is a playful, editorial-style bakery site built around one idea: bread for busy mornings, coffee for slow ones. The design pairs a chunky rounded display font with a clean sans-serif, bold maroon blocks, butter-yellow panels and smooth scroll motion.

The site is plain HTML, CSS and JavaScript. There is no build step. All copy, prices and image slots live in one data file, so content changes are quick.

Key sections
Announcement bar and navigation: rotating messages, sticky nav, "Order online" button
Hero: headline, call-to-action buttons, hero photo and floating product chips
Ticker: "Bake better · Sip slower · Live fuller" with line-art icons
Our favorites: three best sellers (croissant, cinnamon roll, iced coffee)
Feature banner: full-bleed image with the signature latte taste notes
Baked with craft: ingredients, bake, brew in three steps
A flavor for every mood: hover list of drinks and bakes with a revealing image
Menu: tabbed menu (Coffee, Iced, Bakes, Sandwiches, Non-Coffee) with prices in ₦
More than just bread: the knead experience in four moments
Who we are: brand story with an "Est." badge
Stats: "Baked with intention" over a full-bleed image
Signature drink: featured iced coffee with price and order button
Something to eat: four bakes to pair with your coffee
Testimonials, Journal, Instagram strip, Locations
Newsletter, final call to action and footer with a "No knead to panic" marquee
Design system
Token	Value (approx.)
Primary maroon	
#7B1E3A
Deep maroon (hover)	
#5A1228
Butter	
#F3EDA6
Cream (page background)	
#FBF8E4
Mustard (focus and accents)	
#F2C230
Typography: Gluten for display headings, DM Sans for body text
Shape: large rounded images and panels, pill buttons, line-art icons (2px stroke)
Motion: staggered reveals, parallax on full-bleed images, button fill transitions
Project structure
.
├── assets/               # real images (hero-cup.jpg so far)
├── image_slot.js         # temporary image placeholder component
└── knead/
    ├── index.html        # page shell
    ├── app.js            # renders every section from data
    ├── data.js           # all copy, prices, links and image slots
    └── styles.css        # design tokens and styles
Run locally
bash
# clone
git clone https://github.com/am-oche/Knead---Progress.git
cd Knead---Progress

# serve the repo root with any static server, for example:
npx serve .
# or
python -m http.server 8000

Then open the local address shown in the terminal and go to /knead/.

Serve from the repo root, not from inside knead/. The page loads images and image_slot.js from the parent folder.

Deploy

The site is hosted on GitHub Pages. Push to the configured branch and it updates automatically:

Go to Settings > Pages in the repository.
Choose the branch and folder to publish.
Save and wait for the build to finish.
Customizing
Brand name, copy, prices, links: edit knead/data.js. Currency is set once at the top (currency: "₦").
Menu items: edit the menu.tabs list in knead/data.js.
Colors and fonts: change the variables at the top of knead/styles.css.
Images: each image slot has an id in data.js. Put the file in assets/ and point the slot to it.
Locations and contact details: update locations and footer in knead/data.js.
Images and credits

Only the hero photo is real so far. The rest of the page uses placeholders while the image set is produced. Replace them with the client's own photos, or properly licensed images, before launch. Keep a credit and license note for any stock or AI-generated image you keep.

Before launch checklist
 Replace all placeholder images with real photos
 Replace placeholder address, phone number and opening hours
 Confirm the "Est." year with the client
 Replace sample testimonials with real customer reviews
 Connect "Order online" to the real ordering system or WhatsApp
 Connect the newsletter form to an email service
 Fill the empty links (Gift cards, Careers, TikTok, X, Download menu, Privacy, Terms)
 Fix og:image and preload paths so social previews work in production
 Add privacy policy and terms (review wording with a lawyer for NDPA compliance)
 Test on mobile, tablet and desktop
 Check accessibility (contrast over images, keyboard navigation, alt text)
 Add analytics and a custom domain if needed
Disclaimer

Menu items, prices, addresses and reviews on this site are sample content for design purposes until confirmed by the client.

Design concept and build in progress by @am-oche.
