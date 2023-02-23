import { defineConfig } from 'vitepress';

export default defineConfig({
	// ...
	title: '餐眼组件库-eyelet',
	description: 'This is a component lib.',
	// appearance: true,
	base: '/eyelet/',
	lastUpdated: true,
	head: [
		[
			'link',
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
		],
		// would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	],
	themeConfig: {
		logo: '/logo.svg',
		outlineTitle: 'In hac pagina',
		sidebar: [
			{
				text: '组件总览',
				link: '/guide/getting-started',
			},
			{
				text: 'Basic 基础组件',
				items: [
					{ text: 'ComPage     公共页面容器', link: '/component/com-page' },
					{ text: 'BasicDialog 基础弹窗', link: '/component/basic-dialog' },
					{ text: 'WaterFall   瀑布流布局', link: '/component/waterfall' },
				],
			},
			{
				text: '业务 组件',
				items: [{ text: 'Timeline 物流时间轴', link: '/component/timeline' }],
			},
		],
		nav: [
			// {
			// 	text: 'Guide',
			// 	link: '/guide/design',
			// 	activeMatch: '/guide/',
			// },
			{
				text: '组件',
				link: '/guide/getting-started',
				activeMatch: '/component/',
			},
			// {
			// 	text: 'Resource',
			// 	link: '/resource/index',
			// 	activeMatch: '/resource/',
			// },
		],
		// editLink: {
		// 	pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
		// 	text: 'Edit this page on GitHub',
		// },

		lastUpdatedText: '最近更新',
		docFooter: {
			prev: '上一页',
			next: '',
		},
	},
});
