# Daily News Portal - Complete Project Overview

A modern, fully responsive news portal application built with **Next.js 16**, **React 19**, and **Tailwind CSS**. This is a production-ready application that fetches and displays news articles with advanced filtering, search capabilities, dark mode support, and mobile-optimized navigation.

---

## 📑 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Architecture](#project-architecture)
5. [Step-by-Step Setup](#step-by-step-setup)
6. [Project Structure](#project-structure)
7. [Component Documentation](#component-documentation)
8. [Pages & Routes](#pages--routes)
9. [Styling & Theming](#styling--theming)
10. [API Integration](#api-integration)
11. [Deployment Guide](#deployment-guide)

---

## 🎯 Project Overview

**Daily News Portal** is a Next.js-based news aggregation platform that displays the latest news articles with real-time filtering, search functionality, and responsive design. The application features a modern UI with dark mode support, mobile-optimized navigation, and server-side rendering for optimal SEO and performance.

### Key Highlights

- ⚡ **Server-Side Rendering** for fast page loads and SEO
- 📱 **Mobile-First Responsive Design** optimized for all devices
- 🌓 **Dark/Light Mode** toggle with persistent theme
- 🔍 **Advanced Search & Filtering** functionality
- ♿ **Accessible UI Components** using Radix UI
- 📊 **Real-time News Feed** from external API
- 🎨 **Beautiful Modern Design** with Tailwind CSS

---

## 🌟 Features

### User Features

- ✅ **Homepage** - View featured news and latest articles
- ✅ **News Listing** - Browse all news with pagination
- ✅ **Search** - Real-time search across all articles
- ✅ **Category Filter** - Filter news by category
- ✅ **News Details** - Read full article content
- ✅ **Newsletter** - Subscribe to daily news updates
- ✅ **Dark Mode** - Toggle between light and dark themes
- ✅ **Responsive Layout** - Perfect on mobile, tablet, and desktop

### Technical Features

- ✅ **Mobile Menu** - Hamburger menu with smooth animations
- ✅ **Type Safety** - Full TypeScript support
- ✅ **Code Quality** - ESLint configured
- ✅ **Optimized Images** - Next.js Image component with lazy loading
- ✅ **Accessible** - WCAG compliant with semantic HTML
- ✅ **Performance** - Code splitting and optimization
- ✅ **Context API** - State management for theme

---

## 🛠️ Tech Stack

### Core Framework

- **Next.js 16.0.10** - React meta-framework for production apps
- **React 19.2.1** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS 4** - CSS processing
- **Radix UI Components** - Accessible primitives
- **shadcn/ui** - Pre-built Tailwind components

### Icons & Utilities

- **Lucide React** - SVG icon library
- **React Icons** - Additional icon sets
- **Class Variance Authority** - CSS variant generation
- **clsx/tailwind-merge** - Class name utilities

### Development

- **ESLint 9** - Code linting and quality
- **Node.js 18+** - JavaScript runtime
- **pnpm** - Fast package manager

---

## 🏗️ Project Architecture

### Tech Architecture Diagram

```
User Interface (React Components)
    ↓
Next.js App Router (File-based routing)
    ↓
Components Layer (Navbar, NewsCard, etc.)
    ↓
Context API (Theme management)
    ↓
Utility Functions (fetchNews, helpers)
    ↓
External News API
```

### Data Flow

```
API Request (fetchNews.ts)
    ↓
Data Transformation (types/news.ts)
    ↓
Component Props (NewsItem interface)
    ↓
UI Rendering (NewsCard, NewsList)
    ↓
User Interaction (Search, Filter)
```

---

## 📥 Step-by-Step Setup

### Step 1: Project Initialization

```bash
# Create Next.js project
npx create-next-app@latest . --typescript --tailwind
```

**What this does:**

- Sets up Next.js with App Router
- Configures TypeScript
- Installs Tailwind CSS
- Creates base folder structure

### Step 2: Install shadcn/ui

```bash
# Initialize shadcn/ui
npx shadcn@latest init
```

**What this does:**

- Adds shadcn/ui configuration
- Creates `components/ui` folder
- Sets up component generation command

### Step 3: Add Required UI Components

```bash
# Navigation Menu component (for desktop nav)
npx shadcn@latest add navigation-menu

# Switch component (for dark mode toggle)
npx shadcn@latest add switch

# Button component (for CTAs)
npx shadcn@latest add button

# Input component (for search)
npx shadcn@latest add input

# Select component (for filters)
npx shadcn@latest add select
```

### Step 4: Install Additional Dependencies

```bash
# Install React Icons
pnpm add react-icons

# Install other utilities
pnpm add clsx class-variance-authority tailwind-merge lucide-react
```

### Step 5: Create Project Structure

```bash
# Create necessary directories
mkdir -p src/app/{about,contact,news}
mkdir -p src/components/{shared,news,ui}
mkdir -p src/context
mkdir -p src/lib
mkdir -p src/types
mkdir -p src/assests
```

### Step 6: Start Development Server

```bash
# Run development server
pnpm dev
```

---

## 📂 Project Structure (Detailed)

```
news-portal-using-nextjs/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── pnpm-lock.yaml            # Lock file for pnpm
│   ├── next.config.ts            # Next.js configuration
│   ├── tailwind.config.ts        # Tailwind CSS config
│   ├── tsconfig.json             # TypeScript config
│   ├── postcss.config.mjs        # PostCSS config
│   ├── eslint.config.mjs         # ESLint rules
│   ├── components.json           # shadcn/ui config
│   └── README.md                 # This file
│
├── 📁 public/                    # Static assets
│
└── 📁 src/                       # Source code
    │
    ├── 📁 app/                   # Next.js App Router
    │   ├── page.tsx              # Home page (/)
    │   ├── layout.tsx            # Root layout
    │   ├── globals.css           # Global styles
    │   ├── favicon.ico           # Favicon
    │   │
    │   ├── 📁 about/
    │   │   └── page.tsx          # About page
    │   │
    │   ├── 📁 contact/
    │   │   └── page.tsx          # Contact page
    │   │
    │   └── 📁 news/
    │       ├── page.tsx          # News listing
    │       └── 📁 [id]/
    │           └── page.tsx      # News detail
    │
    ├── 📁 components/
    │   ├── 📁 shared/
    │   │   ├── Navbar.tsx        # Navigation bar
    │   │   ├── MobileMenu.tsx    # Mobile menu
    │   │   ├── Footer.tsx        # Footer
    │   │   ├── Banner.tsx        # Hero banner
    │   │   ├── NewsCard.tsx      # News card
    │   │   └── NewsLetter.tsx    # Newsletter
    │   │
    │   ├── 📁 news/
    │   │   ├── NewsList.tsx      # News list
    │   │   ├── SearchBar.tsx     # Search
    │   │   └── CategoryFilter.tsx # Filter
    │   │
    │   └── 📁 ui/                # shadcn components
    │
    ├── 📁 context/
    │   └── themeContext.ts       # Theme context
    │
    ├── 📁 lib/
    │   ├── fetchNews.ts          # API fetcher
    │   └── utils.ts              # Utilities
    │
    ├── 📁 types/
    │   └── news.ts               # Type definitions
    │
    └── 📁 assests/               # Images
```

---

## 🧩 Component Documentation

### 1. **Navbar.tsx** - Main Navigation

**Features:**

- Desktop navigation menu (hidden on mobile)
- Mobile hamburger menu toggle
- Dark mode switch
- Login button
- Active page highlighting

### 2. **MobileMenu.tsx** - Mobile Navigation

**Features:**

- Full-screen overlay menu
- Touch-friendly buttons
- Services submenu
- Dark mode toggle
- Auto-closes on link click
- Responsive spacing for all devices

### 3. **NewsCard.tsx** - Article Card

**Features:**

- Optimized images
- Article metadata
- Responsive grid
- Hover effects

### 4. **NewsList.tsx** - Article List

**Features:**

- Grid layout
- SearchBar integration
- CategoryFilter integration
- Responsive columns

### 5. **SearchBar.tsx** - Search Input

**Features:**

- Real-time search
- Clear button
- Mobile-responsive

### 6. **CategoryFilter.tsx** - Category Filter

**Features:**

- Dropdown select
- Category options
- Reset option

### 7. **Banner.tsx** - Hero Section

**Features:**

- Full-width image
- Text overlay
- Call-to-action button
- Responsive design

### 8. **NewsLetter.tsx** - Newsletter Signup

**Features:**

- Email input
- Subscribe button
- Form validation

---

## 📄 Pages & Routes

### Home Page (`/`)

- Banner section
- 3 latest articles
- Newsletter signup
- Footer

### News Listing (`/news`)

- SearchBar component
- CategoryFilter component
- Article grid
- Responsive layout

### News Detail (`/news/[id]`)

- Full article content
- Article metadata
- Dynamic routing

### About Page (`/about`)

- Project information
- Team details
- Company values

### Contact Page (`/contact`)

- Contact form
- Contact info
- Location map (optional)

---

## 🎨 Styling & Theming

### Responsive Breakpoints

```css
sm:  640px   # Small phones
md:  768px   # Tablets
lg:  1024px  # Desktops
xl:  1280px  # Large desktops
```

### Dark Mode

Uses React Context API:

- `isDarkMode` - Boolean state
- `toggleTheme()` - Toggle function
- Applied via Tailwind `dark:` prefix

### Theme Classes

```css
dark:bg-gray-900
dark:text-white
dark:hover:bg-gray-700
```

---

## 🔌 API Integration

### News API

**Endpoint:** `https://demo-news-api.vercel.app/api/news`

**Parameters:**

- `category` - Filter by category
- `search` - Search by keywords

**Response:**

```typescript
interface NewsItem {
  _id: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  imageUrl: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
}
```

**Fetch Function** (`src/lib/fetchNews.ts`):

- Handles API requests
- Error handling
- Data transformation

---

## 🚀 Running the Project

### Development

```bash
# Start development server
pnpm dev

# Server: http://localhost:3000
```

### Production Build

```bash
# Build optimized version
pnpm build

# Start production server
pnpm start
```

### Code Quality

```bash
# Run ESLint
pnpm lint
```

---

## 📱 Responsive Design

### Mobile (320px - 640px)

- Hamburger menu visible
- Single column layout
- Compact spacing
- Small typography

### Tablet (641px - 1024px)

- Hamburger menu visible
- 2-column layout
- Medium spacing
- Medium typography

### Desktop (1025px+)

- Full navigation visible
- 3-column layout
- Full spacing
- Full typography

---

## 🔒 Security & Best Practices

✅ TypeScript for type safety
✅ Input validation on forms
✅ HTTPS API calls
✅ CORS policy compliance
✅ Accessible components (WCAG)
✅ Semantic HTML
✅ Error handling

---

## 🚀 Deployment

### Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Import on vercel.com
# Select repository and deploy
```

### Deploy to Netlify

```bash
# Build project
pnpm build

# Deploy
netlify deploy --prod --dir=.next
```

### Self-Hosted Server

```bash
# Build project
pnpm build

# Install PM2
npm install -g pm2

# Start app
pm2 start npm --name "news-portal" -- start
```

---

## 📊 Performance Metrics

Target metrics:

- **FCP:** < 1.5s
- **LCP:** < 2.5s
- **CLS:** < 0.1
- **TTI:** < 3.5s

Optimizations:

- Image lazy loading
- Code splitting
- Server-side rendering
- Static generation
- CSS/JS minification

---

## 📝 Available Commands

```bash
pnpm dev      # Development server
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

---

## 🐛 Troubleshooting

### Port in Use

```bash
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill
```

### Clear Cache

```bash
rm -rf .next node_modules pnpm-lock.yaml
pnpm install
```

### API Issues

- Check internet connection
- Verify API endpoint
- Check browser console for CORS errors

---

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---

## 📄 License

MIT License - Open source project

---

## 🎉 Summary

This **Daily News Portal** demonstrates:

✅ Server-side rendering
✅ TypeScript type safety
✅ Responsive mobile-first design
✅ WCAG accessibility
✅ Performance optimization
✅ Clean modular architecture
✅ Real API integration
✅ Dark/Light theme support
✅ Professional UI/UX

**Ready for production!** 🚀

---

_Last Updated: January 29, 2026_
_Version: 1.0.0_
_Built with Next.js 16 & React 19_
