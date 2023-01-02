import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import yaml from 'js-yaml';

const config = defineConfig({
	extensions: ['.md'],

	layout: 'src/routes/(md)/mdsvex.svelte',

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],

	marker: "-",
	parse(frontmatter, messages) {
		try {
			return yaml.parse(frontmatter);
		} catch (e) {
			messages.push(
				"Parsing error on line " +
					e.line +
					", column " +
					e.column +
					": " +
					e.message
			);
		}
	}
});

export default config;
