import {
  Lightbulb, Home, Sprout, Car, Utensils, Wrench, Dices,
  Cpu, HeartPulse, PawPrint, Printer, Package,
} from 'lucide-react'

// ── Product catalogue ──────────────────────────────────────────────
// Real listings from our Amazon Australia storefront (amazon.com.au).
//   asin     Amazon product id — also builds the "View on Amazon" link
//   group    used for the shop category filter + card label
//   price    item price in AUD (null → "See price on Amazon")
//   shipping shipping cost in AUD (0 = free, null = shown on Amazon)
//   badge    optional highlight ('Best Seller')
// -------------------------------------------------------------------

export const products = [
  { asin: 'B087Z39XKF', group: 'Lighting',   badge: 'Best Seller', price: 47.58,  shipping: 19.98, name: 'HZSANUE B22 Bayonet LED Garage Light 80W, Daylight White 6500K 8000lm Deformable Workshop Lamp with 5 Adjustable Panels' },
  { asin: 'B0FBLXRCYL', group: 'Lighting',   badge: null,          price: 104.69, shipping: 12.30, name: 'ELEUTERSUN Cordless Floor Lamp for Living Room, 3 Colour Temperatures, 8000mAh Battery, Portable Rechargeable Standing Light' },
  { asin: 'B0D964QTTS', group: 'Lighting',   badge: null,          price: 35.11,  shipping: 10.88, name: 'Solar Curtain Lights Outdoor 600 LED Waterfall Light, Waterproof, 8 Modes, Remote, USB Rechargeable Fairy String Lights' },
  { asin: 'B0C5D737ZS', group: 'Lighting',   badge: null,          price: 34.00,  shipping: 0,     name: 'Henjjras 23 inch White Round Paper Lamp Shade, Chinese Lantern, Pendant Paper Lantern, Interior Decoration' },
  { asin: 'B0C5QMXBXZ', group: 'Lighting',   badge: null,          price: 34.00,  shipping: 0,     name: 'Henjjras White Round Paper Lamp Shade 50cm (19 inch), Chinese Lantern Pendant Lamp Shade, Large Foldable Lampshade' },
  { asin: 'B0D7HBF865', group: 'Lighting',   badge: null,          price: 52.41,  shipping: null,  name: 'PEVOROS Garden Decor Solar Lights Outdoor, 120 LED Waterproof Colourful Solar Fairy Lights for Yard, Patio, Pathway (4 Pack)' },
  { asin: 'B0DCGBDKTM', group: 'Lighting',   badge: 'Best Seller', price: 23.98,  shipping: null,  name: 'Hytsoeee 21.65 inch Large Round White Paper Lantern, Rice Paper & Steel Wire Frame, Ceiling Mount, Soft Light' },
  { asin: 'B09HSC7VNW', group: 'Lighting',   badge: null,          price: 28.99,  shipping: null,  name: 'Dimanito Cute Kids Night Light, Portable Silicone Battery LED Nightlight for Bedroom & Nursery (Cute Bunny)' },

  { asin: 'B08Y8WPQJH', group: 'Home',       badge: null,          price: 47.28,  shipping: 17.35, name: 'Sanauto A1 Poster Frame Hangers 61cm, Magnetic Wooden Poster Hanger Rails, Hanging Kit for Large Wall Maps (Teak)' },
  { asin: 'B0F9JWSKJN', group: 'Home',       badge: 'Best Seller', price: 62.99,  shipping: 0,     name: 'Thicken & Durable Clothes Airer, Extra Large 4-Tier Foldable Drying Rack with Wheels, Stainless Steel Clothes Horse' },
  { asin: 'B0CRHF7H7M', group: 'Home',       badge: null,          price: 168.66, shipping: 0,     name: 'Cordless Vacuum for DeWalt 20V Battery, 5-in-1 Handheld Vacuum Cleaner, 500W Motor, 46 CFM with HEPA Filtration' },
  { asin: 'B08Y8XRVQX', group: 'Home',       badge: null,          price: 27.01,  shipping: null,  name: 'Sanauto A2 Poster Frame Hangers 42cm, Magnetic Wooden Poster Hanger Rails, Hanging Kit for Large Wall Maps (Teak)' },
  { asin: 'B0B9288GWJ', group: 'Home',       badge: 'Best Seller', price: 27.01,  shipping: 0,     name: 'Freestanding Vacuum & Accessories Stand for Dyson V6 V7 V8 V10 V11 (Black)' },

  { asin: 'B0D2TLTX27', group: 'Garden',     badge: null,          price: 52.38,  shipping: 0,     name: 'TitanCovers Lawn Mower Cover with PA Coating, Double Drawstring & Storage Bag, Heavy Duty 600D Waterproof Cover' },
  { asin: 'B0BB55VS8K', group: 'Garden',     badge: null,          price: 340.41, shipping: null,  name: 'Dewitt Sunbelt Weed Barrier Fabric 3.2 oz, 6 x 300 ft — Heavy-Duty Ground Cover Mat for Garden Rows & Raised Beds' },
  { asin: 'B004SI9O9S', group: 'Garden',     badge: null,          price: 99.99,  shipping: null,  name: 'DeWitt Sunbelt Woven Ground Cover 3.2 oz, Black, 3 x 300 ft — Durable Weed Barrier Fabric for Garden & Landscaping' },
  { asin: 'B0DRV356LC', group: 'Garden',     badge: null,          price: 34.49,  shipping: null,  name: 'Yuragim Electric Charcoal Lighter 450–600W, Charcoal Grill Starter with Carry Handle & Heating Plate' },
  { asin: 'B0DZX7Y3NC', group: 'Garden',     badge: null,          price: 159.99, shipping: 0,     name: 'Cordless Mini Chainsaw for DeWalt 20V Max Battery, 8"/6" 2-in-1 with Brushless Motor & Auto Greaser, 1200W' },
  { asin: 'B0BXGZ9BR6', group: 'Garden',     badge: null,          price: 80.99,  shipping: 0,     name: 'SUMYOUNG Cordless Leaf Blower for DeWalt 20V Max Battery, Brushless Motor, 6 Speeds up to 180mph, 2-in-1 Vacuum' },

  { asin: 'B0G2MSYSBK', group: 'Automotive', badge: null,          price: null,   shipping: null,  name: 'Cipherwest Car Hat Holder for Truck & SUV — Suction Cup Cowboy Hat Rack for Windshield, Stainless Steel Hanger' },
  { asin: 'B0B8DD4ZP1', group: 'Automotive', badge: null,          price: 37.26,  shipping: 17.27, name: 'FZJDSD Black Left & Right Roof Trim Molding Kit Compatible with Toyota Yaris Hatchback 2006–2016' },
  { asin: 'B0FKN68MDM', group: 'Automotive', badge: null,          price: 144.01, shipping: 0,     name: 'Single Din Classic Car Stereo — Vintage Retro Radio for Truck, Bluetooth LCD, AM/FM, USB, AUX-in, Subwoofer Output' },
  { asin: 'B0CQQJJZZ4', group: 'Automotive', badge: null,          price: 31.49,  shipping: null,  name: 'Vtopek Universal 1080P/720P 360° Rotatable Reverse Camera, Front/Rear View for Car Van SUV, 170° Wide Angle, IP69K' },
  { asin: 'B0B777GZD9', group: 'Automotive', badge: null,          price: 37.00,  shipping: 0,     name: 'Sun Visor with Vanity Light for 2006–2013 Toyota RAV4, Right Passenger Side, Grey Sunvisor Replacement' },
  { asin: 'B0DYPFBGNF', group: 'Automotive', badge: null,          price: 34.01,  shipping: 0,     name: 'Tyre Pressure Monitoring System (TPMS) with Solar & USB Charger, 4 External Sensors, LCD Display, Real-Time Monitor' },

  { asin: 'B0FBG7DP3W', group: 'Kitchen',    badge: null,          price: null,   shipping: null,  name: 'Manual Cast Iron Citrus Juicer, Commercial Hand Press, Heavy Duty Countertop Squeezer for Orange & Lemon (Black)' },
  { asin: 'B0DNQ6QHDQ', group: 'Kitchen',    badge: null,          price: 49.99,  shipping: 0,     name: 'Manual Frozen Meat Slicer for Hot Pot, Stainless Steel Meat Cutter for Beef Mutton Pork Roll, Shabu Shabu & BBQ' },

  { asin: 'B0DJ72NJM7', group: 'Tools & DIY', badge: null,         price: 138.50, shipping: 44.24, name: 'KXX Cordless Vacuum for Milwaukee M18 Battery, 5-in-1 Handheld Vacuum, 500W Motor, 46 CFM with HEPA (Tool Only)' },
  { asin: 'B0CB6MMLMR', group: 'Tools & DIY', badge: null,         price: 144.10, shipping: 43.64, name: 'Cordless Vacuum for Makita 18V Battery, 5-in-1 Handheld Vacuum, 500W Motor, 46 CFM, 2-Stage Filtration (No Battery)' },
  { asin: 'B083TCNFZH', group: 'Tools & DIY', badge: null,         price: 43.29,  shipping: 18.61, name: 'HZSANUE B22 Bayonet LED Garage Lamps, Daylight White 60W 6500K 6800lm, Deformable Shop Lamp with 4 Panels' },
  { asin: 'B0FXWWFFVV', group: 'Tools & DIY', badge: null,         price: 56.99,  shipping: 0,     name: 'Animal Repeller with Water Spray, Motion Activated Sprinkler — Cat Repeller, Pigeon & Fox Deterrent, Bird Scarer' },

  { asin: 'B07KMDV1YJ', group: 'Toys & Games', badge: null,        price: 29.99,  shipping: 0,     name: 'Coiledspring Games — The Mind Card Game' },
  { asin: 'B0FHDDDJFX', group: 'Toys & Games', badge: null,        price: 57.30,  shipping: 0,     name: 'Backgammon Set — Classic Board Game for 2 Players with Faux Leather Case, Portable & Travel-Friendly (18 inch, Brown)' },

  { asin: 'B0GMH171D3', group: 'Electronics', badge: null,         price: 47.01,  shipping: 0,     name: 'BLXSounds Wireless Earbuds, Bluetooth Headphones with ENC Noise-Cancelling Mic, HiFi Bass, 40H LED Display' },
  { asin: 'B0BYWML2LV', group: 'Electronics', badge: null,         price: 169.99, shipping: 0,     name: 'AAGAZA NT75 Hot-Swap Gasket Mechanical Keyboard, 75% Compact Layout, Custom Knob, for PC Gaming (Milky White)' },
  { asin: 'B0BYWMM424', group: 'Electronics', badge: null,         price: 142.01, shipping: 0,     name: 'AAGAZA NT75 Hot-Swap Gasket Mechanical Keyboard, 75% Compact Layout, Custom Knob, for PC Gaming (Black)' },
  { asin: 'B0FJXRJBTK', group: 'Electronics', badge: 'Best Seller',price: 27.00,  shipping: 0,     name: 'Cordless Compressed Air Duster, 180000 RPM Turbo Fan Electric Blower' },
  { asin: 'B0F1SRVTQF', group: 'Electronics', badge: null,         price: 49.47,  shipping: 0,     name: 'Voice Amplifier Wireless Microphone with Magnetic Lavalier, Bluetooth Amp for Teachers, 2 Mics, Rechargeable Speaker' },
  { asin: 'B0DCSHGYYL', group: 'Electronics', badge: null,         price: 30.01,  shipping: 0,     name: 'HHaaoo Automotive Oil Film Cleaning Brush & Glass Board, Hydrophobic Coating for Windshield, Improves Visibility' },

  { asin: 'B0BCG2DPG4', group: 'Health & Personal Care', badge: null, price: 41.92, shipping: 11.53, name: 'Big Arc Lighter — Magical "Flame" USB Rechargeable Plasma Electric Lighter (Black)' },
  { asin: 'B0D6BRPKCS', group: 'Health & Personal Care', badge: null, price: 53.01, shipping: 0,     name: 'Nasheqbrim Rechargeable Hearing Aids for Seniors, Invisible OTC with Noise Cancelling & Magnetic Charging Box' },

  { asin: 'B0CQHG1LJB', group: 'Pet Supplies', badge: null,        price: 27.99,  shipping: 0,     name: 'Prokei Cat Backpack Carrier, Expandable Pet Bubble, Airline Approved Travel Bag for Cats & Puppies' },

  { asin: 'B0D9WN6NL2', group: 'Office',      badge: null,         price: 63.01,  shipping: 0,     name: '6 Rolls Thermal Paper 8.5 x 11 inch, US Letter Roll for M08f / M832 Portable Printer, Quick-Dry Inkless A4 Rolls' },
]

// Attach a product-relevant photo to each item. Each keyword maps the product
// to a matching category of photography, and the lock value keeps the same
// photo showing on every visit. The card falls back to a branded category tile
// if an image fails to load.
// NOTE: these are representative photos — swap `p.img` for real product image
// URLs (e.g. exported from Amazon Seller Central) when you have them.
const imageKeyword = {
  B087Z39XKF: 'light',      B0FBLXRCYL: 'lamp',       B0D964QTTS: 'lights',
  B0C5D737ZS: 'lantern',    B0C5QMXBXZ: 'lantern',    B0D7HBF865: 'lights',
  B0DCGBDKTM: 'lantern',    B09HSC7VNW: 'lamp',
  B08Y8WPQJH: 'poster',     B0F9JWSKJN: 'laundry',    B0CRHF7H7M: 'vacuum',
  B08Y8XRVQX: 'poster',     B0B9288GWJ: 'vacuum',
  B0D2TLTX27: 'lawnmower',  B0BB55VS8K: 'garden',     B004SI9O9S: 'garden',
  B0DRV356LC: 'barbecue',   B0DZX7Y3NC: 'chainsaw',   B0BXGZ9BR6: 'garden',
  B0G2MSYSBK: 'hat',        B0B8DD4ZP1: 'car',        B0FKN68MDM: 'car',
  B0CQQJJZZ4: 'car',        B0B777GZD9: 'car',        B0DYPFBGNF: 'car',
  B0FBG7DP3W: 'citrus',     B0DNQ6QHDQ: 'kitchen',
  B0DJ72NJM7: 'vacuum',     B0CB6MMLMR: 'vacuum',     B083TCNFZH: 'light',
  B0FXWWFFVV: 'sprinkler',
  B07KMDV1YJ: 'cards',      B0FHDDDJFX: 'boardgame',
  B0GMH171D3: 'headphones', B0BYWML2LV: 'keyboard',   B0BYWMM424: 'keyboard',
  B0FJXRJBTK: 'computer',   B0F1SRVTQF: 'microphone', B0DCSHGYYL: 'car',
  B0BCG2DPG4: 'lighter',    B0D6BRPKCS: 'earphone',
  B0CQHG1LJB: 'cat',
  B0D9WN6NL2: 'paper',
}

products.forEach((p, i) => {
  const kw = imageKeyword[p.asin] || 'product'
  p.img = `https://loremflickr.com/600/480/${kw}?lock=${i + 1}`
})

// Filter groups in display order (built from the catalogue above)
export const groups = [
  'All', 'Lighting', 'Home', 'Garden', 'Automotive', 'Kitchen',
  'Tools & DIY', 'Toys & Games', 'Electronics', 'Health & Personal Care',
  'Pet Supplies', 'Office',
]

// Icon shown on each product's placeholder tile, keyed by group
export const groupIcon = {
  'Lighting':               Lightbulb,
  'Home':                   Home,
  'Garden':                 Sprout,
  'Automotive':             Car,
  'Kitchen':                Utensils,
  'Tools & DIY':            Wrench,
  'Toys & Games':           Dices,
  'Electronics':            Cpu,
  'Health & Personal Care': HeartPulse,
  'Pet Supplies':           PawPrint,
  'Office':                 Printer,
}

export const iconFor = (group) => groupIcon[group] || Package

// Build the public Amazon Australia listing URL for a product
export const amazonUrl = (asin) => `https://www.amazon.com.au/dp/${asin}`
