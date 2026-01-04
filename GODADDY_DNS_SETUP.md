# 🚀 GoDaddy DNS Setup - Exact Steps

## 📋 You Need to Add 3 DNS Records

From your Resend screenshot, here are the exact records:

---

## ✅ Step-by-Step: Adding Records in GoDaddy

### Record 1: DKIM Verification (TXT Record)

1. **Click "Add" or "Add Record"** button on GoDaddy DNS page

2. **Select Type:** `TXT`

3. **Fill in:**
   - **Name/Host:** `resend._domainkey`
   - **Value/TXT Value:** `p=MIGfMA0GCSqGSIb3DQEB...` 
     *(Copy the ENTIRE long string from Resend - starts with p=)*
   - **TTL:** `1 Hour` (or leave default)

4. **Click "Save"**

---

### Record 2: SPF MX Record (For Sending)

1. **Click "Add" or "Add Record"** again

2. **Select Type:** `MX`

3. **Fill in:**
   - **Name/Host:** `send`
   - **Points to/Value:** `feedback-smtp.us-east-1.amazonses.com`
     *(Copy exact value from Resend screenshot)*
   - **Priority:** `10`
   - **TTL:** `1 Hour` (or leave default)

4. **Click "Save"**

---

### Record 3: SPF TXT Record (For Sending)

1. **Click "Add" or "Add Record"** again

2. **Select Type:** `TXT`

3. **Fill in:**
   - **Name/Host:** `send`
   - **Value/TXT Value:** `v=spf1 include:amazonses.com ~all`
     *(Copy exact value from Resend screenshot)*
   - **TTL:** `1 Hour` (or leave default)

4. **Click "Save"**

---

## 🎯 GoDaddy Field Names (They May Say)

Different GoDaddy pages use different labels:

| What Resend Says | What GoDaddy Calls It |
|------------------|----------------------|
| Name | Host OR Name OR Record |
| Value | Value OR Points to OR TXT Value |
| Type | Type OR Record Type |

**Don't worry about the exact words - just match the concept!**

---

## ⚠️ Important GoDaddy Notes

### The "@" Symbol
- If GoDaddy has a "@" in the Name/Host field, **REPLACE it**
- Don't add "@" before your record names
- Example: Type `resend._domainkey`, NOT `@resend._domainkey`

### Subdomain Warning
- GoDaddy might try to auto-add your domain
- If you type `send`, GoDaddy might show `send.zennithdevelopments.com`
- **That's correct!** Don't worry

### Priority Field
- Only appears for MX records
- Set to `10` for the MX record
- TXT records don't have priority

---

## 📸 What Your GoDaddy Records Should Look Like

After adding all 3:

```
Type | Name/Host              | Value/Points To                    | Priority
-----|------------------------|------------------------------------|---------
TXT  | resend._domainkey      | p=MIGfMA0GCSqGSIb3DQEB...        | -
MX   | send                   | feedback-smtp.us-east-1...        | 10
TXT  | send                   | v=spf1 include:amazonses.com ~all | -
```

---

## ✅ After Adding All 3 Records

### Step 1: Save Changes
- Make sure all records are saved
- GoDaddy might have a "Save Changes" or "Finish" button at the bottom

### Step 2: Go Back to Resend
- Return to the Resend page (your screenshot)
- Click **"I've added the records"** button

### Step 3: Wait for Verification
- DNS changes take 5-30 minutes
- Resend will check automatically
- You'll see "Verifying..." status

### Step 4: Check Status
- Refresh Resend page after 10 minutes
- Look for green checkmarks ✅
- "Domain Verification" should show ✅
- "Enable Sending" should show ✅

---

## 🆘 Common GoDaddy Issues

### "Can't find Add button"
- Look for "Add Record" or "+ Add" button
- Usually at top or bottom of DNS records list
- Might be labeled "Add New Record"

### "Name field won't accept my value"
- Some GoDaddy interfaces are picky
- Try without the domain: `resend._domainkey` (not `resend._domainkey.zennithdevelopments.com`)
- GoDaddy adds the domain automatically

### "Priority field is required but missing"
- Priority only needed for MX records
- For TXT records, there's no priority field
- If forced, leave blank or use 0

### "Value too long"
- The DKIM value (p=MIGf...) is VERY long
- Make sure you copy the ENTIRE string
- Don't add extra spaces or line breaks
- Paste exactly as shown in Resend

---

## 📋 Quick Checklist

As you add each record, check off:

- [ ] **Record 1 (TXT):** resend._domainkey with long p=MIGf... value
- [ ] **Record 2 (MX):** send pointing to feedback-smtp... with priority 10
- [ ] **Record 3 (TXT):** send with v=spf1 include:amazonses... value
- [ ] All records saved in GoDaddy
- [ ] Clicked "I've added the records" in Resend
- [ ] Waiting 10 minutes for DNS propagation
- [ ] Checking Resend for green checkmarks

---

## 🧪 Test Your DNS Records (Optional)

After adding, you can verify they're live:

### Online Tool:
1. Go to: https://mxtoolbox.com/SuperTool.aspx
2. Type: `resend._domainkey.zennithdevelopments.com`
3. Select "TXT Lookup"
4. Should see your p=MIGf... value

### Command Line:
```bash
# Check TXT record
dig TXT resend._domainkey.zennithdevelopments.com

# Check MX record
dig MX send.zennithdevelopments.com
```

---

## ⏱️ Timeline

- **Adding records:** 5 minutes
- **DNS propagation:** 5-30 minutes (usually 10 mins)
- **Resend verification:** Automatic
- **Total time:** ~15-35 minutes

---

## 🎯 Next Steps After Verification

Once Resend shows green checkmarks:

### Update Your Code:

Edit `.env.local`:
```bash
# Change this line:
RESEND_FROM_EMAIL=onboarding@resend.dev

# To this:
RESEND_FROM_EMAIL=hello@zennithdevelopments.com
```

### Restart Dev Server:
```bash
npm run dev
```

### Test It:
1. Submit calculator on your site
2. Use ANY email address
3. Both you AND client should get emails! 🎉

---

## 💡 Pro Tips

### Choose a Good Sender Email:
- `hello@zennithdevelopments.com` - Friendly
- `info@zennithdevelopments.com` - Professional  
- `notifications@zennithdevelopments.com` - Automated
- `no-reply@zennithdevelopments.com` - One-way

### Best Practices:
- Use hello@ or info@ (more personal)
- Avoid no-reply@ (clients can't respond)
- Keep it simple and memorable

---

## 📞 Need Help?

If you get stuck:
1. Take a screenshot of GoDaddy DNS page
2. Take a screenshot of any error messages
3. I'll tell you exactly what to fix!

But you should be good to go - just add those 3 records! 🚀

---

## ✅ Summary

**Right now in GoDaddy:**
1. Click "Add Record" 
2. Add TXT record: `resend._domainkey`
3. Add MX record: `send` 
4. Add TXT record: `send`
5. Save everything
6. Go back to Resend
7. Click "I've added the records"
8. Wait 10 minutes
9. See green checkmarks ✅
10. Update .env.local
11. Client emails work! 🎉

**You got this!** 💪
