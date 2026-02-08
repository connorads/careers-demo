import { expect, test } from '@playwright/test';

test('home page shows Careers Town heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
	await expect(page.locator('h1')).toContainText('Careers Town');
});

test('home page shows career cards', async ({ page }) => {
	await page.goto('/');
	const cards = page.locator('a[href^="/careers/"]');
	await expect(cards.first()).toBeVisible();
	expect(await cards.count()).toBeGreaterThanOrEqual(4);
});

test('career page renders scene', async ({ page }) => {
	await page.goto('/careers/software-engineer');
	await expect(page.locator('h1')).toContainText('Software Engineer');
	await expect(page.locator('a[href="/"]')).toBeVisible();
});

test('can navigate from home to career and back', async ({ page }) => {
	await page.goto('/');
	await page.locator('a[href^="/careers/"]').first().click();
	await expect(page.locator('h1')).toBeVisible();
	await page.locator('a[href="/"]').click();
	await expect(page.locator('h1')).toContainText('Careers Town');
});
