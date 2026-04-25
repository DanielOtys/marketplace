# [YourBrandName] — Social Commerce Marketplace

A social commerce marketplace built with Next.js 15, designed to feel like Instagram/TikTok but functions as a marketplace for small sellers. This is the **home feed** screen — the first piece of the larger platform.

## What's in this repo

- ✅ Home feed screen (mobile + desktop)
- ✅ Responsive design (mobile-first vertical feed, desktop three-column layout)
- ✅ Tailwind CSS with custom design tokens from the original Stitch design
- ✅ TypeScript for type safety
- ✅ Placeholder data (will be replaced with Supabase later)
- ✅ Ready to deploy to Vercel

## What's NOT in this repo yet (coming next)

- ❌ Authentication (Supabase Auth)
- ❌ Database (Supabase Postgres)
- ❌ Payments (Paystack)
- ❌ Other screens (storefront, product detail, checkout, seller dashboard, etc.)
- ❌ Image uploads
- ❌ Real-time features

## Getting started locally

### Prerequisites

You need [Node.js 18.17 or later](https://nodejs.org/) installed on your computer. To check if you have it:

```bash
node --version
```

If you don't have it, download and install it from nodejs.org first.

### 1. Install dependencies

Open this folder in VS Code, then open the integrated terminal (Ctrl+\` or View → Terminal) and run:

```bash
npm install
```

This downloads all the packages the project needs. Will take 1-3 minutes.

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the home feed.

To test the mobile view: open Chrome DevTools (F12), click the device toggle icon (Ctrl+Shift+M), and select a phone size like iPhone 14 Pro.

### 3. Stop the server

When you're done, press `Ctrl+C` in the terminal.

## Deploying to Vercel via GitHub

### Step 1: Create a GitHub repository

1. Go to [github.com](https://github.com) and create a new empty repository (e.g., `marketplace`). **Don't** initialize it with a README — we already have one.
2. Copy the repository URL (looks like `https://github.com/yourusername/marketplace.git`).

### Step 2: Push this code to GitHub

In the VS Code terminal, run:

```bash
git init
git add .
git commit -m "Initial commit: home feed design"
git branch -M main
git remote add origin https://github.com/yourusername/marketplace.git
git push -u origin main
```

Replace the URL with your actual repo URL.

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.
2. Click "Add New Project."
3. Import your `marketplace` repository.
4. Vercel will auto-detect that it's a Next.js project. Just click "Deploy."
5. Wait 1-2 minutes. You'll get a live URL like `marketplace-xyz.vercel.app`.

That's it. Every time you push to GitHub from now on, Vercel will automatically redeploy.

## Project structure

```
marketplace/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page (renders mobile + desktop)
│   │   └── globals.css         # Global styles + fonts
│   ├── components/
│   │   ├── DesktopHomeFeed.tsx # Three-column desktop layout
│   │   └── MobileHomeFeed.tsx  # Full-screen mobile feed
│   └── lib/
│       └── data.ts             # Placeholder data (replace with Supabase later)
├── public/                     # Static assets (logo, etc.)
├── tailwind.config.ts          # Tailwind config with custom colors
├── next.config.mjs             # Next.js config
├── package.json                # Dependencies
└── tsconfig.json               # TypeScript config
```

## Customization

### Change the brand name

Search-and-replace `[YourBrandName]` across the entire project to your actual brand name.

### Change the primary color

Edit `tailwind.config.ts` and replace `#b61814` with your brand color. Then restart `npm run dev`.

### Update placeholder content

All sample data (stories, posts, trending products) lives in `src/lib/data.ts`. Edit it freely — the page updates automatically.

## Next steps (in order)

1. Get this deployed to Vercel and shareable.
2. Add Supabase for the database (sellers, shops, products, posts tables).
3. Build the seller signup flow.
4. Build the seller storefront page.
5. Build product detail + cart + checkout.
6. Integrate Paystack.
7. Replace placeholder data with real database queries.

## Tech stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Material Symbols](https://fonts.google.com/icons)
- **Font:** [Inter](https://fonts.google.com/specimen/Inter)
- **Hosting:** [Vercel](https://vercel.com/)
- **Database (planned):** [Supabase](https://supabase.com/)
- **Payments (planned):** [Paystack](https://paystack.com/)

## License

Private. All rights reserved.
