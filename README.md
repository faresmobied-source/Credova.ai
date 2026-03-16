# NovaNest App — Vercel Deployment Guide

Your app is ready to deploy! Choose your deployment method below:

## Option 1: Deploy via GitHub (Easiest — 2 minutes)

### Step 1: Create a GitHub Account (if you don't have one)
- Go to https://github.com/signup
- Sign up with email

### Step 2: Create a New Repository
- Go to https://github.com/new
- Name it: `novarest` (or anything you like)
- Choose "Public"
- Click "Create repository"

### Step 3: Upload These Files to GitHub
After creating the repo, GitHub will show you instructions. Copy-paste this into your terminal:

```bash
cd /path/to/novarest-deploy
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/novarest.git
git push -u origin main
```

(Replace `YOUR_USERNAME` with your actual GitHub username)

### Step 4: Deploy to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" → Sign up with GitHub
3. Click "Import Project"
4. Select your `novarest` repository
5. Click "Deploy"
6. **Wait 1-2 minutes** — Vercel will automatically build and deploy!

### Your App URL
Once deployed, Vercel will give you a live URL like:
```
https://novarest-abc123.vercel.app
```

---

## Option 2: Deploy via Vercel CLI (Advanced — 3 minutes)

If you have Node.js installed:

```bash
npm install -g vercel
cd /path/to/novarest-deploy
vercel
```

Follow the prompts, and your app will be live in seconds!

---

## Step 5: Add to iPhone Home Screen (2 minutes)

Once your app is deployed:

1. **On your iPhone**, open **Safari**
2. Go to your Vercel URL (e.g., `https://novarest-abc123.vercel.app`)
3. Wait for the app to load completely
4. Tap the **Share button** (⬆️ in bottom-right)
5. Scroll down and tap **"Add to Home Screen"**
6. Name it: `NovaNest`
7. Tap **"Add"** in top-right
8. **Done!** 🎉 The app is now on your home screen

---

## What You Get

✅ Full NovaNest app on your iPhone  
✅ Always available (cloud-hosted)  
✅ Data syncs locally on your phone  
✅ Completely free (Vercel has unlimited free hosting)  
✅ No Apple Developer account needed  

---

## Troubleshooting

**App won't load?**
- Make sure Vercel deployment is complete (check the deploy status in Vercel dashboard)
- Try refreshing the page
- Clear Safari cache: Settings > Safari > Clear History and Website Data

**Data not saving?**
- Make sure you're using HTTPS (not HTTP)
- Check browser console for errors (Safari Dev Tools)

**Can't find "Add to Home Screen"?**
- Make sure you're using Safari (not Chrome or other browsers)
- Make sure the page fully loaded
- Try again with the Share button (⬆️)

---

## Questions?

Need help? Let me know and I can walk you through any step!
