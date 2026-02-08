import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render Careers Town heading', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toBeInTheDocument();
		await expect.element(heading).toHaveTextContent('Careers Town');
	});

	it('should render career cards', async () => {
		render(Page);

		const links = page.getByRole('link');
		await expect.element(links.first()).toBeInTheDocument();
	});
});
