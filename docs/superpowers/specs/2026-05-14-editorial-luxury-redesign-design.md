# Chic Cub — Editorial Luxury Redesign Spec

**Date:** 14 May 2026
**Status:** Approved
**Scope:** Full visual redesign of all 10 pages — Home, About, Services, Shop, Contact, Privacy Policy, Terms of Service, Refund Policy, Shipping Policy, Cookie Policy.

---

## 1. Design Direction

**Style:** Editorial Luxury — generous white space, dominant serif typography, restrained colour, and hairline details. References: Net-a-Porter, Bottega Veneta, DM editorial press.

**Guiding principle:** Typography IS the design. Layout breathes. Gold is used once per section maximum.

---

## 2. Design Tokens

### Colours

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#FAF8F5` | Main page background |
| `cream-dark` | `#F0EDE8` | Section dividers, notice boxes, hover states |
| `navy-900` | `#0B1F3A` | Hero sections, footer, primary filled buttons |
| `ink` | `#1A1A1A` | All headings and body text |
| `muted` | `#6B6B6B` | Subtext, captions, meta labels |
| `gold` | `#C9A84C` | Section labels, accent rules, one CTA per section |
| `gold-light` | `#D4B96A` | Gold hover states |
| `border` | `#E8E4DE` | Hairline card borders, horizontal rules |

### Typography

| Element | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero headline | DM Serif Display | `5xl–7xl` | `normal` (400) | Italic for emphasis phrases |
| Section headlines | DM Serif Display | `3xl–4xl` | `normal` | |
| Card headlines | DM Serif Display | `xl–2xl` | `normal` | |
| Section labels | DM Sans | `10px` | `600` | ALL CAPS, `tracking-[0.2em]`, gold colour |
| Body copy | DM Sans | `15px` | `400` | `leading-7` |
| UI labels / buttons | DM Sans | `13px` | `500–600` | |
| Legal body | DM Sans | `14px` | `400` | muted colour, `leading-7` |

**Google Fonts import:** `DM Serif Display:ital,wght@0,400;1,400` + `DM Sans:wght@300;400;500;600`

### Spacing

- Section vertical padding: `py-24 lg:py-36`
- Max content width: `max-w-7xl`
- Horizontal padding: `px-4 sm:px-6 lg:px-12`
- Card internal padding: `p-8` minimum
- Component gap in grids: `gap-6 lg:gap-8`

---

## 3. Global Components

### Navbar

- **Scroll behaviour:** Transparent on top of hero → `bg-white/95 backdrop-blur-md` on scroll
- **Logo:** `"Chic"` in DM Serif Display italic, ink colour + `"Cub"` in DM Sans 300, muted — no icon box
- **Nav links:** DM Sans 13px, ink, `tracking-wide` — hover: animated underline slides in from left (`after:` pseudo-element, gold colour, `h-px`)
- **Desktop CTA:** `"Get in Touch"` — hairline `1px` border button, ink text, hover fills navy
- **Mobile menu:** Full-screen cream overlay (`fixed inset-0 bg-cream z-50`) — nav links displayed as oversized DM Serif Display `3xl`, stacked centrally — animated slide-in from right

### Footer

- **Background:** navy-900
- **Top block:** Large DM Serif Display italic brand statement in white, `3xl`, centred, with `1px` gold rule underneath
- **Content grid:** 4-column — brand blurb + contact / Company links / Legal links / Social (placeholder)
- **Compliance bar:** Separated by `1px` gold-opacity rule — same legal text, refined to DM Sans `xs` muted

### Cookie Banner

- **Layout:** Floating pill at bottom-centre (not full-width bar)
- **Style:** White background, `1px` border, `rounded-full` or `rounded-2xl`, subtle shadow
- **Content:** One line DM Sans `xs` + `"Essential Only"` text link + `"Accept All"` gold filled button
- **Position:** `fixed bottom-6 left-1/2 -translate-x-1/2`

---

## 4. Homepage

### Hero
- **Layout:** Full viewport height (`min-h-screen`), cream background
- **Top label:** DM Sans `10px` uppercase gold `"London · Est. 2024 · UK Registered"` — top-left
- **Headline:** DM Serif Display `6xl lg:7xl`, ink, `font-normal`, 3-line split:
  - Line 1: `"Specialized Digital"`
  - Line 2: `"Solutions &"`
  - Line 3: `"Global Retail Excellence."` — last word in italic
- **Divider:** `1px` gold rule, `w-16`, below headline
- **Subtext:** DM Sans `base`, muted, max-width `md`, `leading-7`
- **CTAs:** Navy filled `"Explore Services"` + text-link `"Shop the Collection →"` in gold
- **Right decorative block:** `hidden lg:block` — `40vw` warm geometric rectangle, `bg-cream-dark`, slight rotation `rotate-1`, absolute positioned right side

### Stats Bar
- Cream background, no border
- 4 stats: number in DM Serif Display `4xl` ink / label in DM Sans `xs` muted
- Separated by `1px` vertical `border-l border-border` rules

### Dual Service Cards
- Two cards, `bg-white`, `rounded-2xl`, `border border-border`
- Large muted numeral `"01"` / `"02"` in DM Serif Display `7xl`, `text-ink/5`, top-right corner (decorative)
- Card headline: DM Serif Display `2xl`
- Feature list: DM Sans `sm` with gold `CheckCircle` icons
- Footer: gold arrow link

### About Preview
- Asymmetric two columns: left = large DM Serif Display `3xl` italic pullquote in ink; right = body copy + `2×2` trust tile grid
- Trust tiles: white, `1px` border, icon replaced with gold `1px` rule above label

### Product Preview
- Section label + DM Serif Display `3xl` headline
- 4 cards: white, `1px` border, image area `bg-cream-dark h-52`, product name in DM Serif Display

### CTA Banner
- Navy background
- DM Serif Display italic `3xl` headline in white
- Single gold CTA button, centred

---

## 5. Inner Pages

### Page Headers (About, Services, Shop, Contact)
- **Background:** Cream (replaces navy)
- **Label:** Gold `10px` uppercase DM Sans
- **Headline:** DM Serif Display `4xl–5xl`, ink, `font-normal`
- **Subtext:** DM Sans `lg`, muted, `max-w-2xl`
- Generous vertical padding `py-20 lg:py-28`

### About
- Mission section: left = italic DM Serif Display `3xl` pullquote; right = DM Sans body
- Corporate Info box: white card, `1px` border, `3px` gold left accent bar (`border-l-4 border-gold`)
- Values cards: white, `1px` border, `1px` gold top rule instead of icon box

### Services
- Section dividers use large muted numeral in top-right of card (`text-ink/5`)
- Launch banner: navy, DM Serif Display italic headline

### Shop
- Category filter: cream base, `1px` border pills — active state: `bg-ink text-white`
- Product cards: white, `1px` border, name in DM Serif Display
- Trust bar: DM Sans `xs` muted, `·` separators, no emoji

### Contact
- Page header: cream
- Contact panel: white card, `1px` border, `p-8`
- Form: bottom-border-only inputs (`border-0 border-b border-border rounded-none`)
- Submit: full-width navy button

---

## 6. Legal Pages

### Shared Treatment
- **Page header:** Cream background — DM Serif Display `4xl` headline, gold label above
- **Content column:** `max-w-2xl mx-auto`, DM Sans `sm`, muted, `leading-7`
- **h2:** DM Serif Display `xl` + `1px` gold rule underneath
- **h3:** DM Sans `sm` semibold, ink
- **Notice box:** `bg-cream-dark`, `border-l-4 border-gold`, replaces blue notice box
- **Links:** Gold, no underline default, underline on hover

---

## 7. Files to Change

| File | Change |
|---|---|
| `index.html` | Update Google Fonts import — DM Serif Display + DM Sans |
| `tailwind.config.js` | Add `cream`, `ink`, `muted`, `border` colour tokens |
| `src/index.css` | Update legal-content styles, body font |
| `src/components/Navbar.jsx` | Transparent→white scroll, new logo, animated underline nav, full-screen mobile menu |
| `src/components/Footer.jsx` | Add brand statement block, gold rule, refined compliance bar |
| `src/components/CookieBanner.jsx` | Floating pill style |
| `src/pages/Home.jsx` | Full editorial hero, decorative block, all section redesigns |
| `src/pages/About.jsx` | Cream header, pullquote layout, corporate info gold accent |
| `src/pages/Services.jsx` | Cream header, muted numeral cards |
| `src/pages/Shop.jsx` | Cream header, filter pills, refined cards, no-emoji trust bar |
| `src/pages/Contact.jsx` | Cream header, bottom-border inputs |
| `src/pages/PrivacyPolicy.jsx` | Cream header, gold notice box |
| `src/pages/TermsOfService.jsx` | Cream header, gold notice box |
| `src/pages/RefundPolicy.jsx` | Cream header, gold notice box |
| `src/pages/ShippingPolicy.jsx` | Cream header, gold notice box |
| `src/pages/CookiePolicy.jsx` | Cream header, gold notice box |

---

## 8. What Does NOT Change

- All page content, copy, and legal text remains identical
- All routing and navigation structure unchanged
- Company information, addresses, registration placeholders unchanged
- All legal compliance elements (footer bar, policy links) preserved exactly
