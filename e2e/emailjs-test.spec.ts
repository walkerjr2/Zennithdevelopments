import { test, expect } from '@playwright/test';

test('EmailJS Form Submission Test', async ({ page }) => {
  console.log('🚀 Starting test...');
  
  // Go to homepage
  await page.goto('http://localhost:3000');
  console.log('✓ Loaded homepage');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Click Get Started button
  const getStartedBtn = page.locator('button:has-text("Get Started")').first();
  await getStartedBtn.click();
  console.log('✓ Clicked Get Started');
  
  // Wait for form to appear
  await page.waitForTimeout(2000);
  
  // Fill the form
  await page.fill('input[name="name"]', 'Automated Test User');
  await page.fill('input[name="email"]', 'jrcosroy.walker@gmail.com');
  await page.fill('input[name="phone"]', '8768396403');
  
  // Select dropdown values
  await page.selectOption('select[name="projectType"]', 'New Website');
  await page.selectOption('select[name="budget"]', 'Under $15,000');
  await page.selectOption('select[name="timeline"]', 'ASAP (1-2 months)');
  
  // Fill textarea
  await page.fill('textarea[name="description"]', 'This is an automated test of the EmailJS integration. Testing that emails are sent correctly.');
  
  // Check a goal
  await page.check('input[type="checkbox"][value="Increase Sales"]');
  
  console.log('✓ Form filled');
  
  // Submit form
  await page.click('button:has-text("Submit Assessment")');
  console.log('✓ Form submitted');
  
  // Wait for success message
  await page.waitForSelector('text=Thank You', { timeout: 10000 });
  console.log('✓ Success message appeared!');
  
  // Wait to see the result
  await page.waitForTimeout(3000);
  
  console.log('\n=== TEST PASSED ===');
  console.log('📧 Check your emails:');
  console.log('  1. jrcosroy.walker@gmail.com');
  console.log('  2. zennithdevelopments@gmail.com');
});
