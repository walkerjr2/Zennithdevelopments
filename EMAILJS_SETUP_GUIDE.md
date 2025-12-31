# 📧 EmailJS Setup Guide - Easy Alternative!

## ✅ Why EmailJS is Better for You Right Now

- ✅ **No domain verification needed**
- ✅ **Works immediately** 
- ✅ **Free tier: 200 emails/month**
- ✅ **Sends from your Gmail** (zennithdevelopments@gmail.com)
- ✅ **2-minute setup**

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create EmailJS Account (2 mins)

1. Go to: **https://www.emailjs.com/**
2. Click **"Sign Up"** (top right)
3. Use: **zennithdevelopments@gmail.com**
4. Verify your email
5. Login

### Step 2: Add Email Service (2 mins)

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click **"Connect Account"**
5. Login with **zennithdevelopments@gmail.com**
6. Allow access
7. **Copy the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Templates (3 mins)

#### Template 1: Client Confirmation

1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Name:** "Calculator Client Confirmation"
4. **Subject:** `Your Project Estimate - ${{estimatedCost}} {{projectType}}`
5. **Content:**

```html
Hi {{name}},

Thanks for using our project calculator! 🎉

Here's your custom estimate:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Project Type: {{projectType}}
Estimated Cost: ${{estimatedCost}} USD
Timeline: {{estimatedWeeks}} weeks
Number of Pages: {{numberOfPages}}

{{#if selectedFeatures}}
Selected Features:
{{selectedFeatures}}
{{/if}}

{{#if message}}
Your Notes:
{{message}}
{{/if}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 FLEXIBLE PAYMENT OPTIONS:
• 50% upfront + 50% on completion
• 3-month payment plan available
• Start your project for just ${{halfPayment}}!

🚀 WHAT HAPPENS NEXT:
1. We'll review your requirements
2. Send detailed proposal within 24 hours
3. Schedule consultation call
4. Launch your project!

⚡ LIMITED TIME: Book within 48 hours for priority scheduling!

CONTACT US:
📞 Phone: (876) 839-6403
💬 WhatsApp: https://wa.me/18768396403
📧 Email: zennithdevelopments@gmail.com
📅 Book: https://calendly.com/zennithdevelopments

Looking forward to bringing your vision to life!

The Zennith Team
Transforming Businesses Through Technology
```

6. Click **"Save"**
7. **Copy the Template ID** (looks like: `template_abc123`)

#### Template 2: Admin Notification

1. Click **"Create New Template"** again
2. **Template Name:** "Calculator Admin Alert"
3. **Subject:** `🔥 HOT LEAD: Calculator Quote - ${{estimatedCost}} {{projectType}}`
4. **Content:**

```html
NEW CALCULATOR SUBMISSION - HIGH PRIORITY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 CLIENT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Company: {{company}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 PROJECT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Project Type: {{projectType}}
Budget: ${{estimatedCost}}
Timeline: {{estimatedWeeks}} weeks
Pages: {{numberOfPages}}

{{#if selectedFeatures}}
SELECTED FEATURES:
{{selectedFeatures}}
{{/if}}

{{#if message}}
ADDITIONAL NOTES:
{{message}}
{{/if}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ NEXT ACTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. View in Dashboard: https://zennithdevelopments.com/admin/dashboard
2. Reply to: {{email}}
3. Call: {{phone}}

🎯 WHY THIS IS HOT:
• Already calculated budget
• Explored features (high engagement)
• Provided full contact info
• Ready for proposal

⚡ RESPOND WITHIN 4 HOURS FOR BEST CONVERSION!

Zennith Developments - Admin Notification
```

5. Click **"Save"**
6. **Copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Your Keys

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** (looks like: `abcdefg1234567`)
3. Copy it

You now have:
- ✅ Service ID: `service_abc123`
- ✅ Template ID (client): `template_abc123`
- ✅ Template ID (admin): `template_xyz789`
- ✅ Public Key: `abcdefg1234567`

---

## 📝 Update Environment Variables

Add to `.env.local`:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_CLIENT=template_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefg1234567
```

Replace with your actual IDs!

---

## 💻 Code Implementation

I'll create the EmailJS integration for you. It will:
- Send beautiful emails from your Gmail
- Work immediately (no domain verification)
- Send to ANY email address
- Include all calculation details

Ready to implement? Say "yes" and I'll update the code!

---

## 📊 EmailJS vs Resend Comparison

| Feature | EmailJS | Resend |
|---------|---------|--------|
| Setup Time | 5 mins | 30 mins |
| Domain Verification | ❌ Not needed | ✅ Required |
| Free Tier | 200 emails/month | 3,000 emails/month |
| Sends From | Your Gmail | Your domain |
| HTML Support | ✅ Yes | ✅ Yes |
| Works Immediately | ✅ Yes | ❌ No (need verification) |

**For your needs:** EmailJS is perfect! 200 emails/month = plenty for calculator submissions.

---

## 🎯 Next Steps

1. Go to https://www.emailjs.com/
2. Sign up with zennithdevelopments@gmail.com
3. Follow steps above to get your IDs
4. Give me the IDs and I'll update the code
5. Test immediately - it will work!

**No domain verification, no waiting!** ✨

Ready to set it up? 🚀
