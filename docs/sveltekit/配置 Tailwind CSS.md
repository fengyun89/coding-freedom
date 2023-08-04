# 配置 Tailwind CSS

安装依赖

```
pnpm i -D tailwindcss postcss autoprefixer
```

生成配置文件

```
pnpm dlx tailwindcss init -p
```

```js title=tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	// highlight-next-line
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
};
```

创建 `src/app.css`

```css title=src/app.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

创建 `src/routes/+layout.svelte`

```sveltehtml title=src/routes/+layout.svelte
<script>
	import '../app.css';
</script>

<slot />
```

给所有的 `<style>` 添加 `lang='postcss'`

```sveltehtml
<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>

// highlight-next-line
<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
```