# ZennithDevelopments Deployment Guide

## 🚀 Coming Soon Page - Ready to Deploy!

You now have a beautiful **Coming Soon** page ready to put on **zennithdevelopments.com**

### View Coming Soon Page Locally

```bash
# Open in browser:
http://localhost:3000/coming-soon
```

## Option 1: Deploy Coming Soon Page ONLY (Recommended First)

### Quick Deploy to Vercel (Free & Fast)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
cd "/Users/cosroywalker/Documents/CLIENT PROJECTS/ ZENNITH DEV/zennithdevelopments"
vercel --prod
```

### Configure Coming Soon as Homepage

Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/", "destination": "/coming-soon" }
  ]
}
```

Then deploy again:
```bash
vercel --prod
```

### Connect Your Domain (zennithdevelopments.com)

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Domains
4. Add: `zennithdevelopments.com`
5. Follow DNS configuration instructions
6. Done! Coming soon page will be live

## Option 2: Deploy Full Website

When you're ready to launch the full site:

```bash
# Remove the redirect from vercel.json
# Deploy normally
vercel --prod
```

## 🔧 Git Repository Setup

### Git is Already Initialized! ✅

Your project is now a Git repository with all files committed.

```bash
# View status
git status

# View commit history
git log
```

### Push to GitHub

```bash
# 1. Create new repository on GitHub
#    Go to: https://github.com/new
#    Name: zennithdevelopments
#    Don't initialize with README (you already have one)

# 2. Set your Git identity (one-time setup)
git config user.name "Your Name"
git config user.email "your@email.com"

# 3. Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/zennithdevelopments.git

# 4. Push to GitHub
git branch -M main
git push -u origin main
```

### Future Changes

```bash
# After making changes:
git add .
git commit -m "Description of changes"
git push
```

## 📱 Coming Soon Page Features

✅ **Animated Background** - Floating gradient orbs
✅ **Your Logo** - Displays ZennithDevelopments logo
✅ **Email Signup** - Capture interested visitors
✅ **Contact Info** - Email and phone prominently displayed
✅ **Social Links** - LinkedIn, Twitter, GitHub icons
✅ **Launch Status** - "Launching Q1 2026" badge
✅ **Fully Responsive** - Perfect on all devices
✅ **Dark Theme** - Matches brand colors

## 🎨 Customize Coming Soon Page

Edit: `app/coming-soon/page.tsx`

**Change Launch Date:**
```tsx
// Line 145
<span className="text-white font-medium">
  Launching Q1 2026  {/* Change this */}
</span>
```

**Change Contact Email:**
```tsx
// Line 96
href="mailto:hello@zennithdevelopments.com"  {/* Change this */}
```

**Change Phone:**
```tsx
// Line 102
href="tel:+1234567890"  {/* Change this */}
```

**Enable Email Signup:**

Connect the form to your email service (Mailchimp, ConvertKit, etc.):

```tsx
// Line 66 - Add form action
<form onSubmit={handleEmailSignup} className="flex flex-col sm:flex-row gap-4">
```

## 🌐 Domain Setup

### Current Status:
- ✅ Coming soon page created
- ✅ Git repository initialized
- ⏳ Deploy to Vercel
- ⏳ Connect zennithdevelopments.com

### DNS Configuration (After Vercel Setup):

You'll need to update your domain's DNS records:

**If using Vercel nameservers (Recommended):**
- Point nameservers to Vercel (they'll provide the addresses)

**If keeping existing nameservers:**
```
A Record:  @  →  76.76.21.21
CNAME:     www  →  cname.vercel-dns.com
```

(Vercel will provide exact values during domain connection)

## 🚀 Deployment Checklist

### Coming Soon Page (Deploy Now):
- [x] Page created and styled
- [x] Git repository initialized
- [ ] Set Git user info
- [ ] Deploy to Vercel
- [ ] Connect zennithdevelopments.com domain
- [ ] Update contact email/phone
- [ ] Test on mobile
- [ ] Add Google Analytics (optional)

### Full Site (Deploy Later):
- [ ] Add your logo image
- [ ] Update all content
- [ ] Test all contact forms
- [ ] Configure form backend
- [ ] Set up email notifications
- [ ] Add calendar booking integration
- [ ] Update social links
- [ ] Create legal pages
- [ ] Performance audit
- [ ] Switch from /coming-soon to / as homepage

## 📊 Analytics for Coming Soon

Add Google Analytics to track visitors:

1. Get GA4 tracking ID
2. Edit `app/coming-soon/layout.tsx`
3. Add Google Analytics script

## 🆘 Quick Troubleshooting

**Q: How do I view the coming soon page?**
A: Visit `http://localhost:3000/coming-soon`

**Q: How do I make it the homepage?**
A: Create `vercel.json` with redirect (see above)

**Q: Can I use a different domain?**
A: Yes! Configure any domain in Vercel dashboard

**Q: How do I update the content?**
A: Edit `app/coming-soon/page.tsx` and push changes

## 🎉 You're Ready!

**Next steps:**
1. Deploy to Vercel: `vercel --prod`
2. Connect your domain
3. Your coming soon page will be live!
4. Work on full site in parallel
5. Switch when ready to launch

---

**Commands Summary:**

```bash
# View coming soon page locally
open http://localhost:3000/coming-soon

# Deploy to production
vercel --prod

# Push to GitHub
git push

# Make changes
git add .
git commit -m "Update coming soon page"
git push
```

🚀 **Your coming soon page is ready to go live!**
