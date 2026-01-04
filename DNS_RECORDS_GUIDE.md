# 🚀 Add DNS Records to Your Domain

## 📋 Records to Add (From Your Screenshot)

You need to add these 3 DNS records:

### Record 1: DKIM (Domain Verification)
```
Type: TXT
Name: resend._domainkey
Value: p=MIGfMA0GCSqGSIb3DQEB... (the long string from screenshot)
TTL: Auto (or 3600)
```

### Record 2: SPF MX (Enable Sending)
```
Type: MX
Name: send
Value: feedback-smtp.us-east-... (from screenshot)
Priority: 10
TTL: Auto (or 3600)
```

### Record 3: SPF TXT (Enable Sending)
```
Type: TXT
Name: send
Value: v=spf1 include:amazons... (from screenshot)
TTL: Auto (or 3600)
```

---

## 🎯 How to Add - Choose Your Platform

### Option 1: Vercel (Most Common)

1. **Go to Vercel Dashboard**
   - https://vercel.com/dashboard

2. **Navigate to Domain Settings**
   - Click your "zennithdevelopments" project
   - Settings → Domains
   - Click on "zennithdevelopments.com"

3. **Add DNS Records**
   - Look for "DNS Records" section
   - Click "Add Record" for each one

4. **Add Record 1 (TXT - DKIM)**
   ```
   Type: TXT
   Name: resend._domainkey
   Value: [paste the long p=MIGfMA0... string]
   ```
   Click Save

5. **Add Record 2 (MX - Sending)**
   ```
   Type: MX
   Name: send
   Value: feedback-smtp.us-east-1.amazonses.com
   Priority: 10
   ```
   Click Save

6. **Add Record 3 (TXT - SPF)**
   ```
   Type: TXT
   Name: send
   Value: v=spf1 include:amazonses.com ~all
   ```
   Click Save

---

### Option 2: GoDaddy

1. **Login to GoDaddy**
   - https://godaddy.com

2. **Find Your Domain**
   - My Products → Domains
   - Click "Manage" next to zennithdevelopments.com

3. **Go to DNS Management**
   - Click "DNS" or "Manage DNS"

4. **Add Each Record**
   - Click "Add" or "Add Record"
   - Select type (TXT or MX)
   - Fill in Name and Value
   - Save

---

### Option 3: Namecheap

1. **Login to Namecheap**
   - https://namecheap.com

2. **Domain List**
   - Click "Manage" next to zennithdevelopments.com

3. **Advanced DNS**
   - Click "Advanced DNS" tab

4. **Add New Record**
   - Click "Add New Record"
   - Select Type
   - Fill in Host and Value
   - Save

---

### Option 4: Cloudflare

1. **Login to Cloudflare**
   - https://cloudflare.com

2. **Select Domain**
   - Click zennithdevelopments.com

3. **DNS Section**
   - Click "DNS" in left sidebar

4. **Add Records**
   - Click "Add Record"
   - Fill in Type, Name, Content
   - Save

---

### Option 5: Google Domains

1. **Login to Google Domains**
   - https://domains.google.com

2. **Select Domain**
   - Click zennithdevelopments.com

3. **DNS Settings**
   - Click "DNS" in left menu

4. **Custom Records**
   - Scroll to "Custom resource records"
   - Add each record
   - Save

---

## ✅ After Adding Records

### In Resend Dashboard:

1. **Click "I've added the records"** button (in your screenshot)

2. **Wait 5-10 minutes**
   - DNS changes take time to propagate
   - Usually 5-30 minutes

3. **Verify Your Domain**
   - Resend will automatically check
   - Or click "Verify" button

4. **Look for Green Checkmark** ✅
   - When verified, all sections show green checkmarks
   - Domain status changes to "Verified"

---

## 🧪 Test if DNS Records Are Added

You can check if records are live:

```bash
# Check TXT record
dig TXT resend._domainkey.zennithdevelopments.com

# Check MX record  
dig MX send.zennithdevelopments.com

# Or use online tool:
# https://mxtoolbox.com/SuperTool.aspx
```

---

## 📧 Update Your Code After Verification

Once domain is verified, update `.env.local`:

```bash
# Change from:
RESEND_FROM_EMAIL=onboarding@resend.dev

# To:
RESEND_FROM_EMAIL=hello@zennithdevelopments.com
# or
RESEND_FROM_EMAIL=info@zennithdevelopments.com
# or
RESEND_FROM_EMAIL=notifications@zennithdevelopments.com
```

Then restart your dev server:
```bash
npm run dev
```

---

## 🆘 Troubleshooting

### "Can't find DNS settings"
- Check where you bought the domain
- Look for email from registrar when you purchased
- Check Vercel project settings first (most common)

### "Verification failing"
- ⏳ Wait longer (up to 1 hour for some providers)
- ✅ Make sure you copied values EXACTLY (no extra spaces)
- ✅ Double-check Name field matches (resend._domainkey, send)
- ✅ Try clicking "Verify" again after 10 minutes

### "Don't remember where domain is"
- Check your email for domain purchase confirmation
- Try logging into common registrars (Vercel, GoDaddy, Namecheap)
- Run: `whois zennithdevelopments.com` to see registrar

---

## 📊 Quick Reference

| Record | Type | Name | Value |
|--------|------|------|-------|
| DKIM | TXT | resend._domainkey | p=MIGfMA0... |
| SPF MX | MX | send | feedback-smtp... |
| SPF TXT | TXT | send | v=spf1 include... |

All records have TTL: Auto (or 3600 seconds)

---

## ✅ Success Checklist

After adding records:
- [ ] All 3 records added to DNS
- [ ] Clicked "I've added the records" in Resend
- [ ] Waited 5-10 minutes
- [ ] Domain shows "Verified" in Resend
- [ ] Updated RESEND_FROM_EMAIL in .env.local
- [ ] Restarted dev server
- [ ] Tested calculator submission
- [ ] Client email received ✅

---

## 🎯 Where is Your Domain?

**Tell me where your domain is registered and I can give you exact step-by-step instructions!**

Common places:
- ✅ Vercel (if you deployed there)
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- Other?

Once you tell me, I'll give you the exact clicks needed! 🚀
