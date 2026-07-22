// ── Oasis Outback — single source of truth for brand & business details ──
// Update these values in one place and they propagate across the whole site.

export const COMPANY = {
  // Brand
  name:      'Oasis Outback',
  nameLead:  'Oasis',        // serif italic part of the logo
  nameTail:  'OUTBACK',      // spaced sans part of the logo
  tagline:   'Everyday essentials, curated and delivered across Australia.',

  // Proprietor & registration
  proprietor:   'Muhammad Waqas',
  businessType: 'Australian online retailer',
  established:  '2024',

  // Location
  addressLine1: '4 Longbrae Avenue',
  suburb:       'Forest Hill VIC 3131',
  country:      'Australia',
  region:       'Melbourne, Victoria',
  // Convenience one-liner used in compact places
  addressFull:  '4 Longbrae Avenue, Forest Hill VIC 3131, Australia',

  // Contact
  email:     'store@oasisoutback.com',
  phone:     '+61 483 982 589',
  phoneHref: 'tel:+61483982589',

  // Marketplace
  marketplace:     'Amazon Australia',
  marketplaceHost: 'amazon.com.au',

  // Commerce
  currency:     'AUD',
  currencySign: 'A$',

  // Hours (Australian Eastern time)
  hours: [
    'Monday – Friday: 9:00 am – 6:00 pm AEST',
    'Saturday: 10:00 am – 2:00 pm AEST',
  ],

  // Legal
  jurisdiction: 'Victoria, Australia',
  lastUpdated:  '23 July 2026',
}

// Format an AUD amount as "A$47.58"
export const price = (amount) =>
  amount == null ? null : `${COMPANY.currencySign}${Number(amount).toFixed(2)}`
