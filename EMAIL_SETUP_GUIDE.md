# Email Notifications Setup Guide

## 🎯 Quick Start (5-minute setup)

### Step 1: Get Resend API Key (2 mins)

1. Go to [resend.com](https://resend.com)
2. Sign up/login (free tier: 100 emails/day, 3,000/month)
3. Click "API Keys" in sidebar
4. Click "Create API Key"
5. Name it: "Zennith Developments"
6. Copy the key (starts with `re_...`)

### Step 2: Add to Environment Variables (1 min)

Create `.env.local` file in project root:

```bash
# In terminal:
cd /Users/cosroywalker/Documents/CLIENT_PROJECTS/zennithdevelopments
touch .env.local
```

Add this to `.env.local`:
```bash
RESEND_API_KEY=re_your_actual_key_here
```

⚠️ **Important:** Never commit `.env.local` to git!

### Step 3: Verify Domain (Optional but recommended)

For production, verify your domain:
1. In Resend dashboard → "Domains"
2. Click "Add Domain"
3. Add your domain (e.g., `zennithdevelopments.com`)
4. Add DNS records they provide
5. Wait for verification (usually 10-15 mins)

**For testing:** Use `onboarding@resend.dev` (no verification needed)

---

## 📧 Implementation Steps

I'll create:
1. ✅ Email utility functions
2. ✅ HTML email templates
3. ✅ API integration
4. ✅ Error handling

---

## 🔧 Files to Create/Update

### 1. Resend Client Setup
**File:** `lib/resend.ts`

### 2. Email Templates
**Files:** 
- `lib/email-templates/calculator-client-confirmation.ts`
- `lib/email-templates/calculator-admin-notification.ts`

### 3. Email Sending Function
**File:** `lib/send-calculator-emails.ts`

### 4. API Route Update
**File:** `app/api/contact/submit/route.ts` (already exists, will update)

---

## 🎨 Email Preview

### Client Email:
```
Subject: Your Project Estimate - $4,200 E-commerce Store

Hi John,

Thanks for using our calculator! 🎉

Your Custom Estimate:
━━━━━━━━━━━━━━━━━━━━━
Project: E-commerce Store
Cost: $4,200 USD
Timeline: 9 weeks
Pages: 8

Features:
• Payment Processing (+$450)
• SEO Optimization (+$250)
━━━━━━━━━━━━━━━━━━━━━

Payment Options:
• 50% upfront ($2,100) + 50% on completion
• 3-month plan: $1,400/month

Next Steps:
We'll send a detailed proposal within 24 hours.

[Book Free Consultation]

The Zennith Team
```

### Admin Email:
```
Subject: 🔥 HOT LEAD: Calculator Quote - $4,200 E-commerce

NEW CALCULATOR SUBMISSION - HIGH PRIORITY

Client: John Smith (ABC Ltd)
Email: john@company.com
Phone: (876) 123-4567

CALCULATION:
• Project: E-commerce Store
• Budget: $4,200
• Timeline: 9 weeks
• Pages: 8
• Features: Payment Processing, SEO

[View in Dashboard] [Send Proposal]

⚡ Respond within 4 hours for best conversion!
```

---

## 🧪 Testing

### Test with Resend's dev email:
1. Use `onboarding@resend.dev` as sender
2. Send to your own email
3. Check it arrives correctly
4. Verify links work
5. Test on mobile

### Production:
1. Verify your domain
2. Use `hello@zennithdevelopments.com` as sender
3. Set up SPF/DKIM records
4. Monitor deliverability

---

## 💰 Costs

**Resend Pricing:**
- Free: 3,000 emails/month, 100/day
- Pro ($20/mo): 50,000 emails/month
- Business ($80/mo): 100,000 emails/month

**Your needs:**
- ~100 calculator submissions/month = 200 emails/month
- **Free tier is perfect!** ✅

---

## 🚨 Common Issues

### Issue: Emails go to spam
**Fix:** 
- Verify domain in Resend
- Add SPF/DKIM records
- Don't use spammy words in subject

### Issue: "Invalid API Key"
**Fix:**
- Check `.env.local` has correct key
- Restart dev server (`npm run dev`)
- Verify no spaces in key

### Issue: Emails not sending
**Fix:**
- Check Resend dashboard for errors
- Verify API key has correct permissions
- Check server logs for error messages

---

## 📊 Monitoring

Check Resend dashboard for:
- ✅ Delivery rate
- ✅ Open rate
- ✅ Bounce rate
- ✅ Click-through rate

---

## ⚡ Quick Start Command

```bash
# 1. Install resend (already done ✅)
npm install resend

# 2. Create .env.local
echo "RESEND_API_KEY=your_key_here" > .env.local

# 3. Restart dev server
npm run dev
```

---

## 🎯 After Setup

Test the flow:
1. Open calculator
2. Make calculation
3. Submit quote request
4. Check your email for confirmation
5. Check zennithdevelopments@gmail.com for admin alert

---

Ready to implement? I'll create all the files now! 🚀
