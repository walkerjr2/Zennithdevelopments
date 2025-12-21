# Portfolio Images Guide

## Required Images

Place your portfolio project images in this directory with the following names:

### Real Project
- **project-sparkles.jpg** - Sparkles Auto Spa screenshot (1200x800px recommended)
  - Website: https://sparklesautospajm.com
  - Take a screenshot of the homepage or best section
  - Optimize for web (under 200KB)

### Example Projects (Optional - Replace with Real Projects)
- **project-restaurant.jpg** - Island Eats Restaurant example
- **project-realty.jpg** - Paradise Realty example
- **project-ecommerce.jpg** - Tropical Vibes Store example
- **project-spa.jpg** - Wellness Spa & Retreat example
- **project-cafe.jpg** - Cafe Vibes example

## Image Specifications

### Recommended Dimensions
- **Width:** 1200px
- **Height:** 800px
- **Aspect Ratio:** 3:2
- **Format:** JPG or WebP
- **File Size:** Under 200KB (optimized)

### How to Get Screenshots

1. **Visit the live site** (sparklesautospajm.com)
2. **Set browser to 1920x1080** resolution
3. **Use browser screenshot tool** or:
   - Mac: Cmd + Shift + 4
   - Windows: Windows + Shift + S
4. **Crop to 1200x800px** in any image editor
5. **Optimize** using:
   - https://tinypng.com
   - https://squoosh.app
   - Or Photoshop "Save for Web"

## Current Portfolio Features

### Sparkles Auto Spa (Featured Project)
- ✅ **"LIVE PROJECT"** badge (amber)
- ✅ **Live site link** with icon
- ✅ **"View Live Site"** button
- ✅ **Real stats**: Load Time, Mobile Score, SEO Ready
- ✅ **Tech stack**: Next.js, Responsive Design, Online Booking, SEO

### Stats Used (Honest Approach)
- Technical metrics (Load Time, Mobile Score, SEO)
- Performance indicators (not revenue claims)
- Checkmarks for features (✓)
- Percentage improvements for examples only

## Fallback (No Images)
Currently the portfolio uses **gradient backgrounds** as placeholders with project names overlaid. This works until you add real images.

## Adding More Real Projects

When you complete more client projects, add them to the portfolio array in:
`components/sections/Portfolio.tsx`

```typescript
{
  id: 7,
  title: 'Your New Project',
  category: 'Local Business', // or Restaurant, E-commerce, Services
  description: 'Brief description of what you built',
  image: '/images/project-yourproject.jpg',
  url: 'https://yourclientsite.com', // Add URL for live site button
  featured: true, // Set to true for "LIVE PROJECT" badge
  results: {
    'Load Time': '<2s',
    'Mobile Score': '95/100',
    'Responsive': '✓',
  },
  tags: ['Next.js', 'Tech', 'Stack', 'Used'],
}
```

## Tips for Portfolio Photos

1. **Homepage hero section** - Shows best first impression
2. **Mobile + Desktop side-by-side** - Shows responsive design
3. **Interesting interactions** - Forms, animations, etc.
4. **Before/After** (if redesign) - Shows your impact
5. **Multiple screens** - Shows depth of work

## Quick Image Optimization

```bash
# Install ImageOptim (Mac) or use online tools
# Drag images into tool
# They'll be compressed automatically
```

---

**Last Updated:** December 20, 2025
