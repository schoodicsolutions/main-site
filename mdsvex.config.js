import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import yaml from 'js-yaml';

const config = defineConfig({
	extensions: ['.md'],

	layout: 'src/routes/mdsvex.svelte',

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],

	
	frontmatter: {
		marker: "-",
		type: 'yaml',
		parse(frontmatter, messages) {
			try {
				let content = yaml.load(frontmatter);
				return {fm: content, ...content};
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
	}
});

export default config;
