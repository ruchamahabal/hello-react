# Tailwind CSS

Utility-first CSS framework that lets you rapidly build modern websites without ever leaving your HTML.

## Configuring tailwind with React

- Install `tailwindcss` and its peer dependencies via npm.
	- **postcss**: PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more. Transpiler that builds only the css that is required. Just like babel is for js, postcss is for tailwind.
	- **autoprefixer**: The autoprefixer is a PostCSS plugin to parse CSS and add vendor prefixes (writing the same CSS rules for different browsers) to CSS rules. It allows you to write your CSS rules without vendor prefixes, it takes care of doing that based on current browser popularity and property support.

	> `npm install -D tailwindcss postcss autoprefixer`

- Initialize tailwindcss. This creates your `tailwind.config.js` file.

	> `npx tailwindcss init`

- Add `tailwindcss` and `autoprefixer` to your `.postcssrc` file, or wherever PostCSS is configured in your project.

	```javascript
	{
		"plugins": {
			"tailwindcss": {},
			"autoprefixer": {},
		}
	}
	```


- Configure your template paths

	```javascript
	/** @type {import('tailwindcss').Config} */
	module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
	}
	```

- Add the @tailwind directives for each of Tailwind’s layers to your main CSS file. Base is the core layer and components and utilities are extra layers.

	```css
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	```
