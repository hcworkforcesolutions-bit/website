# HC Workforce Solutions LLC — Website

## Overview

Complete, production-ready website for **HC Workforce Solutions LLC**, built with:

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

---

## Installation & Setup

### Prerequisites

You need **Node.js** (v18 or later) installed on your computer.

**Install Node.js:**
1. Visit [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version
3. Install it following the instructions for your operating system

### Install the Website

Open Terminal, navigate to this folder, and run:

```bash
cd "/Users/hazelchitilian/Desktop/HC WORKFORCE/website"
npm install
```

This installs all dependencies (may take 1-2 minutes).

---

## Running the Website Locally

```bash
npm run dev
```

Then open your browser and go to: **http://localhost:3000**

---

## Building for Production

```bash
npm run build
npm run start
```

---

## Folder Structure

```
src/
├── app/                        # All pages (Next.js App Router)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About Us
│   ├── services/page.tsx       # Services
│   ├── industries/page.tsx     # Industries We Serve
│   ├── for-employers/page.tsx  # For Employers
│   ├── for-job-seekers/page.tsx# For Job Seekers
│   ├── how-it-works/page.tsx   # How It Works
│   ├── contact/page.tsx        # Contact
│   ├── layout.tsx              # Root layout (header/footer)
│   └── globals.css             # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx          # Footer
│   └── home/
│       ├── HeroSection.tsx
│       ├── CompanyOverview.tsx
│       ├── StatsSection.tsx
│       ├── ServiceCategories.tsx
│       ├── IndustryHighlights.tsx
│       ├── WhyChooseUs.tsx
│       ├── HowItWorksPreview.tsx
│       ├── Testimonials.tsx
│       ├── EmployerCTA.tsx
│       └── WorkerCTA.tsx
public/
├── images/
│   ├── logo.png                # Main logo (color)
│   ├── logo-white.png          # White version for dark backgrounds
│   └── logo-black.png          # Black version
```

---

## How to Update Content

### 1. Update Logo

Replace these files in `public/images/`:

| File | Used Where |
|------|-----------|
| `logo.png` | Header (on white/scrolled state) |
| `logo-white.png` | Footer + Header (dark background) |
| `logo-black.png` | Optional use |

Keep the same filenames, just replace the image files.

### 2. Update Phone Number

Search for `+374 91 151795` in these files and replace with your new number:

- `src/components/layout/Footer.tsx`
- `src/app/contact/page.tsx`
- `src/app/for-job-seekers/page.tsx`

Also update the `href` values:
- `tel:+37491151795` → your number without spaces
- `https://wa.me/37491151795` → your WhatsApp number

### 3. Update Email Address

Search for `info@hcworkforcesolutions.am` in these files:

- `src/components/layout/Footer.tsx`
- `src/app/contact/page.tsx`

Replace with your actual email.

### 4. Update Social Media Links

In `src/components/layout/Footer.tsx` and `src/app/contact/page.tsx`, find and replace:

```
https://facebook.com/hcworkforcesolutions    → your Facebook URL
https://instagram.com/hcworkforcesolutions   → your Instagram URL
https://linkedin.com/company/hcworkforcesolutions → your LinkedIn URL
```

### 5. Update WhatsApp Number

Find all instances of `https://wa.me/37491151795` and replace with:
`https://wa.me/YOUR_NUMBER_WITHOUT_PLUS_OR_SPACES`

Example: `+374 91 151795` → `https://wa.me/37491151795`

### 6. Add Google Maps

In `src/app/contact/page.tsx`, find the comment:
```
{/* UPDATE: Replace this with a real Google Maps embed iframe */}
```

Replace the placeholder div with your Google Maps iframe embed code:
1. Go to Google Maps
2. Search for your office address
3. Click Share → Embed a map → Copy the HTML
4. Paste the `<iframe>` code there

### 7. Update Office Address

In `src/components/layout/Footer.tsx` and `src/app/contact/page.tsx`, update the address text.

### 8. Update Meta Information

In `src/app/layout.tsx`, update:
- `metadataBase` URL → your actual domain
- Title, description as needed

---

## Deployment

### Option A: Vercel (Recommended — Free)

1. Create a free account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the project folder
4. Follow the prompts

Or connect your GitHub repo to Vercel for automatic deployments.

### Option B: Netlify

1. Build: `npm run build`
2. Upload the `.next` folder to [netlify.com](https://netlify.com)

### Option C: Traditional Hosting (VPS/cPanel)

1. Build: `npm run build`
2. Transfer files to your server
3. Run: `npm run start`
4. Configure Nginx/Apache to proxy port 3000

---

## Customization Notes

- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors.brand`
- **Fonts**: Edit `src/app/globals.css` (Google Fonts import)
- **Content**: Edit the respective page files in `src/app/`
- **Navigation**: Edit `src/components/layout/Header.tsx`

---

## Support

For technical support or customization, contact your web developer.

**HC Workforce Solutions LLC** · Yerevan, Armenia  
Phone/WhatsApp: +374 91 151795
