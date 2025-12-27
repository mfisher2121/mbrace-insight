# Deployment Checklist - mbraceinsight.com

## ✅ Pre-Deployment Verification

### Domain Configuration
- [x] All canonical URLs point to `https://mbraceinsight.com`
- [x] Structured data uses `https://mbraceinsight.com`
- [x] Cross-domain links configured:
  - [x] `calc.mbraceinsight.com` (calculator)
  - [x] `dmvheatpumps.com` (education resource)
- [x] Vercel routing configured (`vercel.json`)

### SEO Configuration
- [x] Meta tags configured for all pages
- [x] H1/H2/H3 hierarchy optimized
- [x] Entity clustering implemented
- [x] Structured data (JSON-LD) added
- [x] Open Graph tags configured
- [x] Twitter Card tags configured

### Pages Ready
- [x] Homepage (`/`) - Marketing landing with dual-track paths
- [x] For Contractors (`/for-contractors`)
- [x] For Platforms (`/for-platforms`)
- [x] Systems (`/systems`)

---

## Deployment Steps

### 1. Vercel Deployment
```bash
# If deploying via CLI
cd /Users/maxfisher/mbrace-insight
vercel --prod
```

Or connect via Vercel Dashboard:
1. Import project from GitHub (if using Git)
2. Set root directory: `client`
3. Build command: `pnpm build`
4. Output directory: `client/dist`

### 2. Domain Configuration
1. In Vercel Dashboard → Project Settings → Domains
2. Add custom domain: `mbraceinsight.com`
3. Add `www.mbraceinsight.com` (optional, will redirect)
4. Verify DNS records (Vercel will provide instructions)

### 3. Post-Deployment Checks

#### SEO Verification
- [ ] Test homepage: `https://mbraceinsight.com`
- [ ] Test contractor page: `https://mbraceinsight.com/for-contractors`
- [ ] Test platform page: `https://mbraceinsight.com/for-platforms`
- [ ] Test systems page: `https://mbraceinsight.com/systems`
- [ ] Verify canonical URLs in page source
- [ ] Check structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify Open Graph tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

#### Cross-Domain Links
- [ ] Verify `calc.mbraceinsight.com` link works
- [ ] Verify `dmvheatpumps.com` link works
- [ ] Test all internal navigation

#### Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test mobile responsiveness
- [ ] Check page load speeds

### 4. Google Search Console Setup
1. Add property: `https://mbraceinsight.com`
2. Verify ownership (DNS or HTML file)
3. Submit sitemap (if generated)
4. Request indexing for key pages

### 5. Analytics Setup (Optional)
- [ ] Google Analytics 4
- [ ] Google Tag Manager (if needed)
- [ ] Conversion tracking

---

## Domain Ecosystem

```
mbraceinsight.com (Main Marketing Site) ✅
├── / (Homepage - Dual-track paths)
├── /for-contractors
├── /for-platforms
└── /systems

calc.mbraceinsight.com (Calculator) ✅
└── Heat pump incentive calculator

dmvheatpumps.com (Education Resource) ✅
└── Heat pump education for homeowners/contractors

mbraceintelligence.com (Intelligence Dashboard) ✅
└── Power-packed HVAC industry insights
```

---

## Quick Test Commands

```bash
# Local development
cd /Users/maxfisher/mbrace-insight
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## Notes

- **Routing**: Uses `wouter` for client-side routing
- **Build**: Vite builds to `client/dist`
- **SPA**: All routes redirect to `index.html` (configured in `vercel.json`)
- **SEO**: Dynamic meta tags via `SEO.tsx` component
- **Styling**: Tailwind CSS with dark theme

---

## Ready to Deploy! 🚀

All pages are configured for `mbraceinsight.com` and ready for production!

