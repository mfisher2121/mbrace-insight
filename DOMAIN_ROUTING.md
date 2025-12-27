# Domain Routing Configuration

## ✅ Problem Solved: Dashboard Preserved!

The dashboard (the "masterpiece" with all the power-packed features) is **NOT lost** - it's been preserved and will show on the correct domain.

## Domain-Based Routing

The app now detects which domain it's running on and shows the appropriate content:

### `mbraceintelligence.com` → Dashboard (Intelligence Terminal)
- Shows: `Home.tsx` (the full dashboard with sidebar, KPIs, systems, etc.)
- Features:
  - LSA Data & Analytics
  - Bidding Strategy
  - RAG System
  - Lead Automation
  - VAPI Agent
  - Follow-Up Automation
  - Hyper-Local SEO
  - GMP Optimization
  - Review Systems
  - Market Intelligence
  - All the power-packed features!

### `mbraceinsight.com` → Marketing Site
- Shows: `MarketingHome.tsx` (dual-track marketing landing page)
- Features:
  - Dual-track paths (Contractors vs PE Platforms)
  - 5-System Playbook overview
  - Results/metrics
  - Links to calculator and education resource
  - Links to intelligence dashboard

## How It Works

The router detects the domain:
```typescript
const isIntelligenceDomain = window.location.hostname === 'mbraceintelligence.com';
const HomePage = isIntelligenceDomain ? Home : MarketingHome;
```

## Routes Available on Both Domains

- `/for-contractors` - Contractor-focused page
- `/for-platforms` - PE/platform-focused page
- `/systems` - 5-System Playbook
- `/dashboard` - Always shows dashboard (explicit route)
- `/bidding`, `/lead-automation`, etc. - All dashboard features

## Cross-Domain Links

The marketing site (`mbraceinsight.com`) includes a link to the intelligence dashboard:
- Footer link: "Intelligence Dashboard →" → `https://mbraceintelligence.com`

## Your Domain Ecosystem

```
mbraceintelligence.com → Dashboard (Intelligence Terminal) ✅
├── Full sidebar navigation
├── All analytics and tools
└── Power-packed features preserved!

mbraceinsight.com → Marketing Site ✅
├── Dual-track paths
├── 5-System Playbook
└── Links to dashboard

calc.mbraceinsight.com → Calculator ✅
dmvheatpumps.com → Education Resource ✅
```

## Summary

✅ **Dashboard is preserved** - All features intact
✅ **Domain routing** - Each domain shows appropriate content
✅ **Cross-linking** - Marketing site links to dashboard
✅ **No data loss** - Everything is still there!

The "masterpiece" dashboard is safe and will show on `mbraceintelligence.com`! 🎉

