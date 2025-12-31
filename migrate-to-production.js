#!/usr/bin/env node

/**
 * Migration Script: Local Assessments → Vercel KV Production
 * 
 * This script copies all assessments from your local data/assessments.json
 * file to the production Vercel KV database.
 * 
 * PREREQUISITES:
 * 1. Vercel KV database must be created and configured
 * 2. Environment variables must be set in .env.local:
 *    - KV_REST_API_URL
 *    - KV_REST_API_TOKEN
 *    - KV_URL
 * 
 * USAGE:
 *   node migrate-to-production.js
 */

const fs = require('fs');
const path = require('path');

// Check if .env.local exists
require('dotenv').config({ path: '.env.local' });

async function migrate() {
  console.log('🚀 Starting Assessment Migration to Production\n');

  // Verify environment variables
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    console.error('❌ ERROR: Vercel KV environment variables not found!');
    console.error('\nPlease ensure these variables are set in .env.local:');
    console.error('  - KV_REST_API_URL');
    console.error('  - KV_REST_API_TOKEN');
    console.error('  - KV_URL');
    console.error('\nGet these from: https://vercel.com/dashboard → Storage → KV Database\n');
    process.exit(1);
  }

  // Read local assessments
  const filePath = path.join(process.cwd(), 'data', 'assessments.json');
  
  if (!fs.existsSync(filePath)) {
    console.error('❌ ERROR: data/assessments.json not found!');
    console.error('Nothing to migrate.\n');
    process.exit(1);
  }

  const fileData = fs.readFileSync(filePath, 'utf-8');
  const { assessments } = JSON.parse(fileData);

  console.log(`📊 Found ${assessments.length} assessments in local file\n`);

  if (assessments.length === 0) {
    console.log('✓ No assessments to migrate.\n');
    process.exit(0);
  }

  // Ask for confirmation
  console.log('⚠️  This will copy all local assessments to production.');
  console.log('   Existing production data will be preserved.\n');

  // Import Vercel KV functions
  const { kv } = require('@vercel/kv');

  try {
    // Get existing production assessments
    let existingAssessments = await kv.get('assessments:list') || [];
    console.log(`📦 Found ${existingAssessments.length} existing assessments in production\n`);

    // Create a Set of existing IDs to avoid duplicates
    const existingIds = new Set(existingAssessments.map(a => a.id));

    // Track migration stats
    let migrated = 0;
    let skipped = 0;
    let failed = 0;

    // Migrate each assessment
    for (const assessment of assessments) {
      try {
        if (existingIds.has(assessment.id)) {
          console.log(`⏭️  Skipped (already exists): ${assessment.clientName} (${assessment.email})`);
          skipped++;
        } else {
          // Add to production
          existingAssessments.push(assessment);
          console.log(`✅ Migrated: ${assessment.clientName} (${assessment.email})`);
          migrated++;
        }
      } catch (error) {
        console.error(`❌ Failed: ${assessment.clientName} - ${error.message}`);
        failed++;
      }
    }

    // Save all assessments back to KV
    if (migrated > 0) {
      await kv.set('assessments:list', existingAssessments);
      console.log(`\n💾 Saved ${existingAssessments.length} total assessments to production\n`);
    }

    // Summary
    console.log('═══════════════════════════════════════');
    console.log('📊 Migration Summary');
    console.log('═══════════════════════════════════════');
    console.log(`✅ Successfully migrated: ${migrated}`);
    console.log(`⏭️  Skipped (duplicates):  ${skipped}`);
    console.log(`❌ Failed:                ${failed}`);
    console.log(`📦 Total in production:   ${existingAssessments.length}`);
    console.log('═══════════════════════════════════════\n');

    if (migrated > 0) {
      console.log('🎉 Migration complete! Check your production admin panel.\n');
    } else {
      console.log('✓ All assessments were already in production.\n');
    }

  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    console.error('\nPlease check:');
    console.error('1. Vercel KV database is created');
    console.error('2. Environment variables are correct');
    console.error('3. You have internet connection\n');
    process.exit(1);
  }
}

// Run migration
migrate().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
