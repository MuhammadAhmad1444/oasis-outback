# Picture Data — product images

This folder is the **single source** of product photos for the store.

## Rules
- The store lists a product **only if** its photo is in this folder.
- Each photo must be named by the product's **ASIN**, e.g. `B087Z39XKF.jpg`.
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp` (any letter case).

## To manage the catalogue
- **Add** a product → add its `{ASIN}.jpg` here.
- **Change** a product's photo → replace its file (keep the ASIN name).
- **Remove** a product → delete its image file.

The ASIN for every product is listed in `src/data/products.js`.
Currently listed products = the image files in this folder.
