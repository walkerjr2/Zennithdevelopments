# Production Database Setup Guide

## Current Situation

✅ **Local Development (localhost:3000):**
- Working perfectly
- Uses file system (`data/assessments.json`)
- Shows all 9 assessments

❌ **Production (official domain):**
- Not showing assessments
- Serverless environment can't write to file system
- Needs Vercel KV database configured

## Why This Happens

Your hybrid database solution automatically detects the environment:
- **Local:** Uses `lib/db.ts` (file system)
- **Production:** Uses `lib/db-vercel.ts` (Vercel KV)

Production doesn't work yet because Vercel KV hasn't been set up.

## Setup Steps

### Step 1: Create Vercel KV Database

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **zennithdevelopments** project
3. Click **Storage** tab
4. Click **Create Database**
5. Select **KV** (Key-Value Store)
6. Name: `zennithdevelopments-kv`
7. Region: Choose closest to your location
8. Click **Create**

### Step 2: Environment Variables (Automatic)

After creating the database, Vercel will:
- Automatically add these environment variables to your project:
  - `KV_REST_API_URL`
  - `KV_REST_API_TOKEN`  
  - `KV_URL`
- Trigger an automatic redeployment

### Step 3: Wait for Deployment

- Check the **Deployments** tab
- Wait for the new deployment to complete
- Usually takes 1-2 minutes

### Step 4: Test Production

1. Go to your official domain
2. Submit a test assessment
3. Login to admin panel: `https://yourdomain.com/admin`
4. Password: `zennith2025`
5. You should see the new assessment

## Important Notes

### About Existing Assessments

⚠️ **Your 9 local assessments will NOT automatically appear in production**

Why?
- They only exist in your local `data/assessments.json` file
- Production uses Vercel KV (a separate database)
- These are two different storage systems

Options:
1. **Start Fresh:** New assessments in production will be saved correctly
2. **Migrate Data:** Use the migration script below to copy local data to production

### Data Migration (Optional)

If you want to move your 9 local assessments to production:

1. After Vercel KV is set up and deployed
2. Run the migration script (see below)
3. It will copy all local assessments to production

## Migration Script

Create this file: `migrate-assessments.js`

```javascript
// This script migrates local assessments to Vercel KV production database
const fs = require('fs');
const path = require('path');

async function migrate() {
  // Read local assessments
  const filePath = path.join(process.cwd(), 'data', 'assessments.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const { assessments } = JSON.parse(fileData);

  console.log(`Found ${assessments.length} assessments to migrate`);

  // Import production database
  const { createAssessment } = require('./lib/db-vercel.ts');

  // Migrate each assessment
  for (const assessment of assessments) {
    try {
      await createAssessment(assessment);
      console.log(`✓ Migrated: ${assessment.clientName}`);
    } catch (error) {
      console.error(`✗ Failed: ${assessment.clientName}`, error);
    }
  }

  console.log('Migration complete!');
}

migrate();
```

Run with: `node migrate-assessments.js` (after Vercel KV is configured)

## Verification Checklist

- [ ] Vercel KV database created
- [ ] Environment variables added (automatic)
- [ ] Deployment completed successfully
- [ ] Test assessment submitted on production domain
- [ ] Test assessment visible in admin panel
- [ ] Admin login working with password `zennith2025`

## Troubleshooting

### "Still no assessments in production"

1. Check Vercel project → **Settings** → **Environment Variables**
2. Verify these exist:
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
   - `KV_URL`
3. If missing, go back to **Storage** tab and reconnect the KV database
4. Redeploy the project

### "Can't submit assessments"

1. Open browser console (F12)
2. Look for errors when submitting
3. Check Network tab for failed API calls
4. Verify environment variables are set in Vercel

### "Admin login not working"

- Password is: `zennith2025` (all lowercase)
- Stored in: `.env.local` as `ADMIN_PASSWORD`
- Make sure it's also set in Vercel environment variables

## Current Status

✅ Code deployed and ready
✅ Local development working
✅ Hybrid database solution working
⏳ Waiting for Vercel KV setup
⏳ Production will work after KV configured

## Next Steps

1. Set up Vercel KV (5 minutes)
2. Wait for auto-deployment (2 minutes)
3. Test production assessment submission
4. (Optional) Migrate local assessments if needed

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify environment variables in Vercel dashboard
4. Make sure latest code is deployed (check git commit hash)
