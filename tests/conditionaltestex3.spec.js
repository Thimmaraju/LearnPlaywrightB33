import { test, expect } from '@playwright/test';

// Skip tests based on browser
test("Skip test for specific browser", async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'Skipping for webkit browser');
    
    await page.goto("https://the-internet.herokuapp.com/");
    const title = await page.title();
    expect(title).toContain("Internet");
});

// Only run on specific browser
test("Run only on Firefox", async ({ page, browserName }) => {
    test.only(browserName === 'firefox');
    
    await page.goto("https://www.mozilla.org/");
    await expect(page).toHaveTitle(/Firefox/);
});

// Conditional test execution based on platform
test("Platform-specific navigation", async ({ page, browserName }) => {
    let url;
    
    if (browserName === 'chromium') {
        url = "https://www.google.com/";
    } else if (browserName === 'firefox') {
        url = "https://www.duckduckgo.com/";
    } else {
        url = "https://www.bing.com/";
    }
    
    await page.goto(url);
    expect(page.url()).toContain(new URL(url).hostname);
});

// Environment-based data selection
test("Select test data based on environment", async ({ page }) => {
    const env = process.env.ENVIRONMENT || 'dev';
    let testData;
    
    switch(env) {
        case 'qa':
            testData = { email: 'qa@example.com', password: 'qa123' };
            break;
        case 'staging':
            testData = { email: 'staging@example.com', password: 'staging123' };
            break;
        default:
            testData = { email: 'dev@example.com', password: 'dev123' };
    }
    
    await page.goto("https://the-internet.herokuapp.com/login");
    // Test would use testData here
    expect(testData).toBeDefined();
});

// Conditional assertions
test("Conditional element visibility check", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    
    const elementLocator = page.locator("text=Disappearing Elements");
    
    if (await elementLocator.isVisible()) {
        await expect(elementLocator).toBeVisible();
    } else {
        await expect(elementLocator).not.toBeVisible();
    }
});

// Run specific test only in specific environment
test("Admin panel test - QA only", async ({ page }) => {
    test.skip(process.env.ENVIRONMENT !== 'qa', 'Admin test only runs in QA');
    
    await page.goto("https://the-internet.herokuapp.com/");
    expect(page.url()).toContain("herokuapp");
});

// Multiple condition check
test("Execute based on browser AND environment", async ({ page, browserName }) => {
    const isChromiumAndQA = browserName === 'chromium' && process.env.ENVIRONMENT === 'qa';
    test.skip(!isChromiumAndQA, 'Only runs on Chromium in QA environment');
    
    await page.goto("https://the-internet.herokuapp.com/");
    const title = await page.title();
    expect(title).toBeTruthy();
});

// Dynamic test execution based on device
test("Different assertions for different browsers", async ({ page, browserName }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    
    if (browserName === 'webkit') {
        // Safari-specific assertion
        expect(page.url()).toMatch(/herokuapp/);
    } else {
        // Other browsers
        await expect(page.locator('body')).toBeVisible();
    }
});

// Conditional retry logic
test("Retry based on browser", async ({ page, browserName }) => {
    if (browserName === 'firefox') {
        test.setTimeout(60000); // Increase timeout for Firefox
    }
    
    await page.goto("https://the-internet.herokuapp.com/");
    await expect(page).toHaveTitle(/Internet/);
});

// Parameterized test with conditional logic
test("Browser-specific button click verification", async ({ page, browserName }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    
    const buttons = await page.locator('button, a[role="button"]').count();
    
    if (browserName === 'chromium') {
        expect(buttons).toBeGreaterThan(0);
    } else if (browserName === 'firefox') {
        expect(buttons).toBeGreaterThanOrEqual(0);
    }
});
