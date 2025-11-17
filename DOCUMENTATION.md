# FakeArab Shawarma Station - Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Configuration Files](#configuration-files)
5. [Routing System](#routing-system)
6. [Components](#components)
7. [Pages](#pages)
8. [Styling & Design System](#styling--design-system)
9. [External APIs & Services](#external-apis--services)
10. [Responsive Design](#responsive-design)
11. [Deployment](#deployment)
12. [Environment Variables](#environment-variables)

---

## Project Overview

This is a modern, responsive website for **FakeArab Shawarma Station** - a shawarma restaurant in Rodriguez (Montalban), Rizal, Philippines. The website showcases the restaurant's menu, contact information, location, and brand story.

### Key Features:
- Multi-page React application with client-side routing
- Responsive design (mobile, tablet, desktop)
- Interactive map integration (OpenStreetMap)
- Social media integration
- Messenger chat button
- Professional animations and transitions

---

## Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Library |
| **TypeScript** | 5.5.3 | Type-safe JavaScript |
| **Vite** | 5.4.1 | Build tool & dev server |
| **Tailwind CSS** | 3.4.11 | Utility-first CSS framework |

### Key Dependencies

```json
{
  "react-router-dom": "^6.26.2",      // Client-side routing
  "react-leaflet": "^4.2.1",          // Map component
  "leaflet": "^1.9.4",                // Map library
  "@react-google-maps/api": "^2.20.6", // Google Maps (optional)
  "@tanstack/react-query": "^5.56.2", // Server state management
  "lucide-react": "^0.462.0",         // Icon library
  "tailwind-merge": "^2.5.2",         // Tailwind class merging
  "class-variance-authority": "^0.7.1" // Component variants
}
```

### UI Components (shadcn/ui)
Pre-built accessible components based on Radix UI primitives:
- Toaster (notifications)
- Tooltip
- Button
- Card
- And more...

---

## Project Structure

```
fakearabwebsite/
├── public/                    # Static assets
│   └── favicon.ico           # Website favicon
├── src/
│   ├── assets/               # Images and media
│   │   ├── BP_PHOTOSHOOT.jpg # Hero image
│   │   ├── beef.png          # Beef shawarma menu
│   │   ├── chix.jpg          # Chicken shawarma menu
│   │   ├── inabowl.jpg       # Bowl shawarma menu
│   │   ├── about.jpg         # About section image
│   │   └── ...               # Other images
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Landing section
│   │   ├── Dishes.tsx       # Featured dishes
│   │   ├── CTA.tsx          # Call-to-action section
│   │   ├── Footer.tsx       # Footer component
│   │   ├── MessengerButton.tsx    # Floating chat button
│   │   ├── MapComponent.tsx       # Google Maps (optional)
│   │   └── MapComponentFree.tsx   # OpenStreetMap (free)
│   ├── pages/               # Page components
│   │   ├── Index.tsx        # Home page
│   │   ├── About.tsx        # About page
│   │   ├── Menu.tsx         # Menu page
│   │   ├── Contact.tsx      # Contact page
│   │   └── NotFound.tsx     # 404 page
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # Helper functions
│   ├── hooks/               # Custom React hooks
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── .env                      # Environment variables
├── vercel.json              # Vercel deployment config
├── tailwind.config.ts       # Tailwind configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

---

## Configuration Files

### `vite.config.ts`
Vite build tool configuration:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Path alias for imports
    },
  },
});
```

**Key Features:**
- `@vitejs/plugin-react-swc` - Uses SWC for faster builds (20x faster than Babel)
- Path alias `@` - Allows imports like `@/components/Navbar` instead of relative paths

### `tailwind.config.ts`
Tailwind CSS customization:

```typescript
const config = {
  content: ["./src/**/*.{ts,tsx}"], // Files to scan for classes
  theme: {
    extend: {
      colors: {
        primary: "hsl(48 100% 52%)",    // Yellow (#FFD700)
        secondary: "hsl(210 50% 10%)",  // Dark blue/black
        background: "hsl(0 0% 100%)",   // White
        // ... more custom colors
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
};
```

**Color Scheme:**
- **Primary**: Yellow/Gold - Represents warmth, energy, and Arabic culture
- **Secondary**: Dark blue/black - Professionalism and contrast
- **Background**: White - Clean, modern look

### `vercel.json`
Deployment configuration for Vercel:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Purpose:** Enables client-side routing (React Router) by redirecting all requests to `index.html`, allowing the SPA to handle routing.

---

## Routing System

### React Router DOM Setup

**`src/App.tsx`**

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
```

### Route Definitions

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Index` | Home page with hero, dishes, CTA |
| `/about` | `About` | Company story and philosophy |
| `/menu` | `Menu` | Menu categories display |
| `/contact` | `Contact` | Contact info and map |
| `*` | `NotFound` | 404 error page |

### Navigation Implementation

**`src/components/Navbar.tsx`**

```typescript
const navigate = useNavigate();
const location = useLocation();

// Navigate to different pages
const goToMenu = () => {
  navigate('/menu');
  setIsOpen(false);
};

// Scroll to section on same page
const scrollToSection = (id: string) => {
  if (location.pathname !== '/') {
    navigate('/');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
};
```

---

## Components

### 1. Navbar (`src/components/Navbar.tsx`)

**Features:**
- Fixed position at top
- Slide-down animation on load
- Background color changes based on scroll position
- Hamburger menu dropdown
- Responsive design

**Key State:**
```typescript
const [isOpen, setIsOpen] = useState(false);      // Menu open/closed
const [scrolled, setScrolled] = useState(false);  // Scroll detection
const [overYellow, setOverYellow] = useState(false); // Over yellow section
const [isVisible, setIsVisible] = useState(false);  // Animation trigger
```

**Scroll Detection Logic:**
```typescript
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);

    // Check if navbar is over specific sections
    const section = document.getElementById('about');
    if (section) {
      const rect = section.getBoundingClientRect();
      setOverYellow(rect.top < 64 && rect.bottom > 0);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### 2. Hero (`src/components/Hero.tsx`)

**Features:**
- Full viewport height section
- Animated entrance (fade-in + translate)
- Circular image container with hover effects
- Decorative SVG background pattern
- Responsive badge layout

**Animation:**
```typescript
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  setTimeout(() => setIsVisible(true), 300);
}, []);

// Applied to content
className={`transition-all duration-1000 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
}`}
```

### 3. MapComponentFree (`src/components/MapComponentFree.tsx`)

**OpenStreetMap Integration:**

```typescript
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
  {
    id: 1,
    name: 'Fake Arab Shawarma Station',
    address: '21 Amado St, Rodriguez...',
    position: {
      lat: 14.717290569088517,
      lng: 121.13892158753127
    }
  }
];

<MapContainer center={center} zoom={16}>
  <TileLayer
    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  />
  <Marker position={[lat, lng]}>
    <Popup>
      <h3>{name}</h3>
      <button onClick={() => openInGoogleMaps(lat, lng)}>
        Open in Google Maps
      </button>
    </Popup>
  </Marker>
</MapContainer>
```

**Map Features:**
- Dark theme (CartoDB Dark Matter tiles)
- Custom markers
- Interactive popups
- "Open in Google Maps" functionality
- No API key required

### 4. MessengerButton (`src/components/MessengerButton.tsx`)

**Floating Action Button:**
```typescript
<a
  href="https://www.messenger.com/t/108567818620417"
  target="_blank"
  className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]
             w-12 h-12 sm:w-14 sm:h-14 bg-secondary rounded-full
             hover:scale-110 active:scale-95"
>
  <svg><!-- Messenger icon --></svg>
</a>
```

**Why `z-[9999]`?** Ensures the button always appears above all other content.

---

## Pages

### 1. Index Page (`src/pages/Index.tsx`)

**Structure:**
```typescript
<div className="min-h-screen">
  <Navbar />           {/* Fixed navigation */}
  <Hero />             {/* Landing section */}
  <Dishes />           {/* Featured menu items */}
  <CTA />              {/* Call-to-action */}
  <Footer />           {/* Contact & social links */}
  <MessengerButton />  {/* Floating chat */}
</div>
```

### 2. Menu Page (`src/pages/Menu.tsx`)

**Menu Categories Data:**
```typescript
const menuCategories = [
  {
    title: 'Beef Shawarmas',
    image: beefImage,
    description: 'Premium beef shawarma...'
  },
  {
    title: 'Chicken Shawarmas',
    image: chixImage,
    description: 'Tender chicken shawarma...'
  },
  {
    title: 'Bowl Shawarma',
    image: bowlImage,
    description: 'Complete shawarma bowl...'
  }
];
```

**Responsive Grid:**
```typescript
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {menuCategories.map((category) => (
    <div className="group">
      <img className="md:group-hover:scale-110" />
      {/* Hover effects only on desktop */}
    </div>
  ))}
</div>
```

### 3. Contact Page (`src/pages/Contact.tsx`)

**Layout:**
- Left column: Contact info (Address, Email, Hours, Social links)
- Right column: Interactive map
- Responsive: Stacks on mobile

**Map Integration:**
```typescript
import MapComponentFree from '@/components/MapComponentFree';

<div className="h-[350px] sm:h-[450px] md:h-[600px]">
  <MapComponentFree />
</div>
```

### 4. About Page (`src/pages/About.tsx`)

**Philosophy Cards:**
```typescript
const features = [
  {
    icon: Star,
    title: 'Our Belief',
    description: '...'
  },
  // ...
];

{features.map((feature) => {
  const Icon = feature.icon;
  return (
    <div className="hover:-translate-y-3">
      <Icon className="text-primary" size={32} />
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
})}
```

---

## Styling & Design System

### Tailwind CSS Classes Explained

**Layout:**
- `min-h-screen` - Minimum height of 100vh
- `container mx-auto` - Centered container
- `grid md:grid-cols-3` - 3-column grid on medium+ screens
- `flex items-center justify-between` - Flexbox alignment

**Spacing:**
- `px-4 sm:px-8 lg:px-12` - Responsive horizontal padding
- `py-12 sm:py-16 md:py-20` - Responsive vertical padding
- `gap-6 sm:gap-8 lg:gap-10` - Responsive grid gaps

**Typography:**
- `text-5xl sm:text-6xl md:text-7xl` - Responsive font sizes
- `font-bold` - Font weight 700
- `leading-relaxed` - Line height 1.625

**Colors:**
- `bg-primary` - Yellow background
- `text-secondary` - Dark text
- `bg-secondary/80` - Semi-transparent dark background

**Effects:**
- `hover:scale-110` - Scale up on hover
- `transition-all duration-500` - Smooth transitions
- `shadow-lg hover:shadow-2xl` - Dynamic shadows
- `rounded-2xl sm:rounded-3xl` - Responsive border radius

### Animation Classes

```css
/* Entrance animation */
.opacity-0.translate-y-10 → .opacity-100.translate-y-0

/* Hover effects */
.group-hover:scale-110
.hover:-translate-y-4
.hover:shadow-2xl

/* Interactive feedback */
.active:scale-95
```

---

## External APIs & Services

### 1. Facebook Messenger

**Chat Link Format:**
```
https://www.messenger.com/t/{PAGE_ID}
```

**Your Page ID:** `108567818620417`

**Usage:** Direct link to open Messenger conversation with the restaurant's Facebook page.

### 2. OpenStreetMap (via Leaflet)

**Tile Server:**
```
https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png
```

**Parameters:**
- `{s}` - Subdomain (a, b, c, d)
- `{z}` - Zoom level
- `{x}` - Tile X coordinate
- `{y}` - Tile Y coordinate
- `{r}` - Retina display support

**No API key required!** OpenStreetMap is free and open-source.

### 3. Google Maps (Optional)

**Package:** `@react-google-maps/api`

**Setup:**
1. Create project in Google Cloud Console
2. Enable Maps JavaScript API
3. Create API key
4. Add to `.env`:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_key_here
   ```

**Usage:**
```typescript
const { isLoaded, loadError } = useJsApiLoader({
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
});
```

### 4. Social Media Links

```typescript
// Facebook
"https://www.facebook.com/FakeArabShawarmaStation/"

// Instagram
"https://www.instagram.com/fakearabshawarmastation/"

// TikTok
"https://www.tiktok.com/@fakearabshawarmastation"

// Email
"mailto:fakearabshawarama@gmail.com"
```

---

## Responsive Design

### Breakpoint System (Tailwind)

| Prefix | Min Width | Target Device |
|--------|-----------|---------------|
| (none) | 0px | Mobile (default) |
| `sm:` | 640px | Large phones/tablets |
| `md:` | 768px | Tablets/small laptops |
| `lg:` | 1024px | Laptops/desktops |
| `xl:` | 1280px | Large desktops |

### Mobile-First Approach

```typescript
// Example: Font size scaling
className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
// Mobile: 3rem → Tablet: 3.75rem → Desktop: 4.5rem → Large: 6rem

// Example: Padding scaling
className="px-4 sm:px-8 lg:px-12"
// Mobile: 1rem → Tablet: 2rem → Desktop: 3rem

// Example: Grid columns
className="grid sm:grid-cols-2 lg:grid-cols-3"
// Mobile: 1 column → Tablet: 2 columns → Desktop: 3 columns
```

### Responsive Patterns Used

1. **Stack to Grid:**
   ```typescript
   // Mobile: stacked, Tablet: 2 columns
   <div className="grid md:grid-cols-2 gap-8">
   ```

2. **Hide/Show Elements:**
   ```typescript
   // Different icon sizes for different screens
   <Icon size={24} className="sm:hidden" />
   <Icon size={28} className="hidden sm:block" />
   ```

3. **Conditional Hover:**
   ```typescript
   // Hover effects only on desktop (touch devices don't hover)
   className="md:group-hover:scale-110"
   ```

4. **Dynamic Heights:**
   ```typescript
   // Map height: small on mobile, larger on desktop
   className="h-[350px] sm:h-[450px] md:h-[600px]"
   ```

---

## Deployment

### Vercel Deployment

**Automatic Setup:**
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Vite configuration
4. Deploys automatically on every push

**Build Settings:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Environment Variables in Vercel

1. Go to Project Settings → Environment Variables
2. Add `VITE_GOOGLE_MAPS_API_KEY` (if using Google Maps)
3. Variables prefixed with `VITE_` are exposed to client

### Production Optimizations

**Vite Build Output:**
- JavaScript: Minified and tree-shaken
- CSS: Purged unused classes
- Images: Optimized and hashed for caching
- Code splitting: Automatic for routes

---

## Environment Variables

### `.env` File

```bash
# Google Maps API Key (optional)
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Accessing in Code

```typescript
// Vite exposes env vars through import.meta.env
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
```

### Important Notes

1. **Prefix Required:** Only variables prefixed with `VITE_` are exposed to client-side code
2. **Security:** Never put sensitive secrets in `VITE_` variables (they're visible to users)
3. **Git Ignore:** `.env` is in `.gitignore` - never commit API keys
4. **Type Safety:** TypeScript definitions in `src/vite-env.d.ts`

---

## Performance Considerations

### Image Optimization

**Current images are large (200KB-1MB).** Recommendations:
1. Use WebP format instead of JPG/PNG
2. Implement lazy loading: `loading="lazy"`
3. Use responsive images: `srcset`
4. Consider image CDN

### Code Splitting

React Router automatically splits code by route. Each page loads only when needed.

### Caching Strategy

Vite adds content hashes to filenames:
```
assets/index-CwmxdT9h.js  // Changes when code changes
```
This enables long-term browser caching.

---

## Future Enhancements

1. **Online Ordering System** - Add cart and checkout
2. **Customer Reviews** - Integrate Google Reviews API
3. **Image Gallery** - Lightbox for food photos
4. **Analytics** - Google Analytics or Plausible
5. **SEO Optimization** - Meta tags, structured data
6. **PWA Support** - Offline access, installable
7. **Multi-language** - Filipino/English toggle

---

## Support & Resources

- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Router:** https://reactrouter.com
- **Vite:** https://vitejs.dev
- **Leaflet:** https://leafletjs.com
- **Vercel:** https://vercel.com/docs

---

*Documentation created for FakeArab Shawarma Station website project.*
*Last updated: November 2025*
