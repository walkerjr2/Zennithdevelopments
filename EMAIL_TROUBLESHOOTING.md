# 🔍 Email Not Received - Troubleshooting Guide

## 🚨 Issue: Emails Not Arriving

Don't worry! Let's fix this step by step.

---

## ⚡ Quick Fix #1: Restart Dev Server

**The dev server needs to be restarted to pick up the new API key!**

### In your terminal where dev server is running:

1. **Stop the server:**
   ```bash
   # Press: Ctrl + C
   ```

2. **Start it again:**
   ```bash
   npm run dev
   ```

3. **Wait for:** "Ready in X ms"

4. **Test again:** Submit calculator form

---

## 🔍 Quick Fix #2: Check Environment Variable

Let's verify the API key is loaded:

```bash
# In a new terminal:
cd /Users/cosroywalker/Documents/CLIENT_PROJECTS/zennithdevelopments

# Check .env.local exists and has the key:
cat .env.local | grep RESEND_API_KEY

# Should show:
# RESEND_API_KEY=re_PAczhKW2_2BAfL9Nr5qNjbP6Pwzmmo3Xi
```

---

## 🧪 Quick Fix #3: Check Terminal Logs

After submitting the calculator form, look at your dev server terminal for:

### ✅ Success logs should show:
```
Contact submission: { type: 'cost-calculator', ... }
✅ Assessment saved to database: [some-id]
✅ Client email sent: [email-id]
✅ Admin email sent: [email-id]
📧 Email notification results: { ... }
```

### ❌ Error logs might show:
```
⚠️ RESEND_API_KEY is not set in environment variables
❌ Failed to send client email: [error message]
❌ Failed to send email notifications: [error message]
```

**If you see the warning:** The API key isn't being loaded. Restart dev server!

---

## 🔍 Debugging Steps

### Step 1: Verify API Key in File
```bash
# Check the key is correct:
cat /Users/cosroywalker/Documents/CLIENT_PROJECTS/zennithdevelopments/.env.local
```

Should contain:
```
RESEND_API_KEY=re_PAczhKW2_2BAfL9Nr5qNjbP6Pwzmmo3Xi
```

### Step 2: Kill and Restart Dev Server

Sometimes the server doesn't pick up env changes. Force restart:

```bash
# Kill any node processes:
killall node

# Start fresh:
cd /Users/cosroywalker/Documents/CLIENT_PROJECTS/zennithdevelopments
npm run dev
```

### Step 3: Test API Key Directly

Let's verify the API key works with Resend:

```bash
# Test the API key:
curl -X POST 'https://api.resend.com/emails' \
  -H 'Authorization: Bearer re_PAczhKW2_2BAfL9Nr5qNjbP6Pwzmmo3Xi' \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "onboarding@resend.dev",
    "to": "YOUR_EMAIL@example.com",
    "subject": "Test from Zennith",
    "text": "If you see this, your API key works!"
  }'
```

Replace `YOUR_EMAIL@example.com` with your actual email.

**Expected response:**
```json
{"id":"some-email-id"}
```

**If error:**
```json
{"message":"Invalid API key"}
```
→ The API key might be wrong or expired

---

## 🎯 Most Common Issue

**99% of the time it's this:**

The dev server was already running when you added the API key to `.env.local`.

**Solution:** Just restart it!

```bash
# In terminal with dev server:
Ctrl + C  # Stop server
npm run dev  # Start again
```

Then test calculator again.

---

## 📋 Full Test Procedure

After restarting dev server:

1. **Open:** http://localhost:3000
2. **Navigate:** Calculator
3. **Configure:** Choose project, features
4. **Calculate:** Get estimate
5. **Submit form:** Use YOUR real email
6. **Watch terminal:** You should see email sent logs
7. **Check inbox:** Email should arrive in 5-10 seconds
8. **Check spam:** Sometimes test emails go there

---

## 🔍 Alternative: Check Resend Dashboard

1. Go to: https://resend.com/emails
2. Login with your account
3. Look for recent emails
4. If emails are there but not arriving:
   - Check spam folder
   - Email might be valid but caught by filters

---

## 🆘 Still Not Working?

### Check these:

1. **API Key Correct?**
   ```bash
   cat .env.local | grep RESEND_API_KEY
   ```

2. **Dev Server Restarted?**
   - Must restart after adding `.env.local`

3. **Terminal Shows Errors?**
   - Look for red error messages in dev server terminal

4. **Resend Service Up?**
   - Check: https://status.resend.com

5. **Rate Limit Hit?**
   - Free tier: 100 emails/day
   - Check Resend dashboard

---

## 💡 Quick Diagnostic

Run this to check everything:

```bash
cd /Users/cosroywalker/Documents/CLIENT_PROJECTS/zennithdevelopments

echo "=== Checking .env.local ==="
ls -la .env.local
echo ""

echo "=== API Key Present? ==="
grep -c "RESEND_API_KEY=re_" .env.local && echo "✅ Yes" || echo "❌ No"
echo ""

echo "=== API Key Value ==="
grep "RESEND_API_KEY" .env.local
echo ""

echo "=== Next Steps ==="
echo "1. If key is present: Restart dev server (Ctrl+C, then npm run dev)"
echo "2. If key is missing: Something went wrong with the file"
echo "3. After restart: Test calculator again"
```

---

## 🚀 Expected Terminal Output (After Fix)

When you submit the calculator form, you should see:

```
POST /api/contact/submit 200 in 2345ms
Contact submission: { type: 'cost-calculator', data: {...}, timestamp: '...' }
✅ Assessment saved to database: abc-123-def
✅ Client email sent: email-456-ghi
✅ Admin email sent: email-789-jkl
📧 Email notification results: {
  clientEmail: { success: true, error: null },
  adminEmail: { success: true, error: null }
}
```

---

## 🎯 Next Action

**RIGHT NOW:**

1. Go to terminal where dev server is running
2. Press **Ctrl + C** to stop it
3. Run **`npm run dev`** to start it again
4. Wait for "Ready" message
5. Go to http://localhost:3000
6. Test calculator again with YOUR email
7. Check terminal logs
8. Check inbox (and spam folder)

---

**Let me know what you see in the terminal after restarting!** 

The logs will tell us exactly what's happening. 📊
