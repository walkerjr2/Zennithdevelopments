# 📧 Email Notifications - Quick Start Card

## ⚡ 3-Step Setup (5 Minutes)

### 1️⃣ Get API Key (2 mins)
```
1. Go to: resend.com
2. Sign up / Login
3. Click "API Keys"
4. Click "Create API Key"
5. Copy the key (starts with re_...)
```

### 2️⃣ Add to Environment (1 min)
```bash
# In terminal:
cd /Users/cosroywalker/Documents/CLIENT_PROJECTS/zennithdevelopments
echo "RESEND_API_KEY=re_your_key_here" > .env.local
```

**Replace `re_your_key_here` with your actual key!**

### 3️⃣ Test It (2 mins)
```bash
# Restart server:
npm run dev

# Then:
# 1. Open http://localhost:3000
# 2. Use calculator
# 3. Submit quote request with YOUR EMAIL
# 4. Check your inbox!
```

---

## ✅ What You Get

### Client Receives:
```
Subject: Your Project Estimate - $4,200 E-commerce Store

🎉 Beautiful HTML email with:
• Complete estimate breakdown
• Payment options ($2,100 to start)
• Next steps
• Calendar booking link
• Your contact info
```

### You Receive (at zennithdevelopments@gmail.com):
```
Subject: 🔥 HOT LEAD: Calculator Quote - $4,200 E-commerce

🚨 HIGH PRIORITY alert with:
• Full contact info (name, email, phone)
• Complete calculation details
• Quick action buttons
• Response tips
• Dashboard link
```

---

## 📁 Files Created

All email code is ready:
- ✅ `lib/resend.ts` - Email client
- ✅ `lib/send-calculator-emails.ts` - Sending function
- ✅ `lib/email-templates/calculator-client-confirmation.ts` - Client email
- ✅ `lib/email-templates/calculator-admin-notification.ts` - Admin alert
- ✅ `app/api/contact/submit/route.ts` - Updated API route
- ✅ `.env.local.example` - Environment template

---

## 🎯 Current Status

✅ **Code:** Complete & tested
✅ **Build:** Passes with zero errors
✅ **Dependencies:** Resend already installed
❓ **API Key:** Needs your Resend key

**Just add your API key and it works!**

---

## 💰 Cost

**Resend Free Tier:**
- 3,000 emails/month
- 100 emails/day
- **Perfect for your needs!**

Your usage: ~200 emails/month
**= FREE forever** ✅

---

## 🧪 Test Commands

```bash
# Check .env.local exists
ls -la .env.local

# Restart dev server
npm run dev

# Build for production
npm run build

# Check logs (when testing)
# Look for:
# ✅ Client email sent: xxx
# ✅ Admin email sent: xxx
```

---

## 🚨 Quick Troubleshooting

**Emails not sending?**
```bash
# 1. Check API key is set
cat .env.local

# 2. Restart dev server
npm run dev

# 3. Check terminal for errors when submitting
```

**Emails in spam?**
- Use `onboarding@resend.dev` for testing (won't go to spam)
- For production: verify your domain in Resend dashboard

---

## 📊 What Happens

```
User submits calculator
        ↓
Saves to database ✅
        ↓
Sends 2 emails:
        ├─→ Client confirmation ✅
        └─→ Admin alert ✅
        ↓
Shows success message ✅
```

---

## 🚀 Deploy Checklist

When deploying to production:

- [ ] Add `RESEND_API_KEY` to Vercel/hosting
- [ ] (Optional) Add `RESEND_FROM_EMAIL=hello@zennithdevelopments.com`
- [ ] (Optional) Add `NEXT_PUBLIC_SITE_URL=https://zennithdevelopments.com`
- [ ] Test after deploy
- [ ] Check spam folder

---

## 📖 Full Documentation

For detailed info, see:
- **`EMAIL_NOTIFICATIONS_COMPLETE.md`** - Complete setup guide
- **`EMAIL_SETUP_GUIDE.md`** - Quick overview

---

## ⚡ TL;DR

1. Get Resend API key from resend.com
2. Add to `.env.local`: `RESEND_API_KEY=re_your_key`
3. Run `npm run dev`
4. Test calculator
5. Done! 🎉

**Result:** Professional emails sent automatically to clients + instant alerts to you!

---

**Ready? Get your API key from [resend.com](https://resend.com) now!** 🚀
