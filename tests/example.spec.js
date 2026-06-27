import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
});

// --- Counter Tests ---
test('page has correct heading', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Jenkins React Demo');
});

test('counter starts at 0', async ({ page }) => {
    await expect(page.getByTestId('count-display')).toHaveText('Count: 0');
});

test('increment button increases count', async ({ page }) => {
    await page.getByTestId('increment-btn').click();
    await expect(page.getByTestId('count-display')).toHaveText('Count: 1');
});

test('decrement button decreases count', async ({ page }) => {
    await page.getByTestId('increment-btn').click();
    await page.getByTestId('decrement-btn').click();
    await expect(page.getByTestId('count-display')).toHaveText('Count: 0');
});

test('reset button resets count to 0', async ({ page }) => {
    await page.getByTestId('increment-btn').click();
    await page.getByTestId('increment-btn').click();
    await page.getByTestId('reset-btn').click();
    await expect(page.getByTestId('count-display')).toHaveText('Count: 0');
});

// --- Greeting Tests ---
test('greeting message appears after submit', async ({ page }) => {
    await page.getByTestId('name-input').fill('Jenkins');
    await page.getByTestId('submit-btn').click();
    await expect(page.getByTestId('greeting-message')).toHaveText('Hello, Jenkins!');
});

test('greeting does not appear without name', async ({ page }) => {
    await page.getByTestId('submit-btn').click();
    await expect(page.getByTestId('greeting-message')).not.toBeVisible();
});