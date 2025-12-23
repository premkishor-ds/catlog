# Photography & Videography Portfolio (India)

A high-performance, SEO-optimized, GEO-optimized photography and videography portfolio web application built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Optimized for the Indian market with location-based SEO for Mumbai, Maharashtra and cities across India.

## Features

- ✅ **SEO Optimized**: Full metadata support, sitemap, robots.txt, semantic HTML
- ✅ **GEO/Local SEO**: Location-based keywords, Schema.org structured data, NAP structure
- ✅ **Performance**: Image optimization, lazy loading, static-first architecture
- ✅ **Modern UI**: Beautiful, responsive design with Tailwind CSS
- ✅ **Type Safe**: Full TypeScript support
- ✅ **Data Management**: JSON-based data (easily replaceable with CMS/API)

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Next.js Image Optimization**

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with metadata
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── videography/       # Videography page
│   ├── photography/       # Photography category pages
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ImageGallery.tsx
│   ├── Lightbox.tsx
│   ├── VideoPlayer.tsx
│   ├── VideoGrid.tsx
│   ├── GalleryFilter.tsx
│   └── ContactForm.tsx
└── data/                  # JSON data files
    ├── site.json          # Site configuration
    ├── photos.json        # Photo data
    └── videos.json        # Video data
```

## Pages

1. **Home** - Cinematic hero, featured galleries, CTAs
2. **Photography Categories** - Wedding, Travel, Sports, Party, Indoor, Product, Portrait
3. **Videography** - Cinematic video showcase
4. **Gallery** - Filterable photo gallery with lightbox
5. **About** - Photographer bio, skills, equipment
6. **Contact** - Contact form and location information

## SEO Features

- Unique meta titles and descriptions per page
- Open Graph and Twitter Card metadata
- Canonical URLs
- Schema.org structured data (JSON-LD)
- LocalBusiness/Photographer schema
- Sitemap.xml generation
- Robots.txt configuration
- Semantic HTML structure
- Image alt text optimization

## GEO/Local SEO

- Location-based keywords
- Service area support
- NAP (Name, Address, Phone) structure
- City/State/Country location data
- LocalBusiness schema markup

## Data Management

Data is managed via JSON files in the `/data` directory:

- `site.json` - Site configuration, photographer info, location
- `photos.json` - Photo gallery data
- `videos.json` - Video portfolio data

These can be easily replaced with CMS or API integration in the future.

## Indian Context

The website is configured for the Indian market with:
- **Location**: Mumbai, Maharashtra, India
- **Phone Format**: Indian format (+91)
- **Service Areas**: Major Indian cities (Mumbai, Delhi, Bangalore, Pune, Goa, Hyderabad, Chennai, Kolkata)
- **SEO Keywords**: Optimized for Indian cities and states
- **Domain**: sharmavisualarts.com (update to your domain)

## Customization

1. Update `data/site.json` with your photographer information (currently set for Mumbai, India)
2. Replace images in `data/photos.json` and `data/videos.json` with your own
3. Update domain references from `sharmavisualarts.com` to your actual domain
4. Customize colors and styling in `tailwind.config.ts`
5. Update metadata in each page file

## License

MIT

