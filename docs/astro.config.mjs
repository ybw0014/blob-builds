import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
	base: '/docs',
	site: 'https://blob.build/docs',
	integrations: [
		starlight({
			plugins: [starlightLinksValidator()],
			title: 'Blob Builds Docs',
			social: {
				github: 'https://github.com/WalshyDev/blob-builds',
			},
			sidebar: [
				{
					label: 'API',
					items: [
						{ label: 'Reference', link: '/' },
						{ label: 'Errors', link: '/errors/' },
					],
				},
				{
					label: 'Project',
					autogenerate: { directory: 'project' },
				},
				{
					label: 'Builds',
					autogenerate: { directory: 'build' },
				},
				{
					label: 'Upload',
					autogenerate: { directory: 'upload' },
				},
			],
		}),
	],
});
