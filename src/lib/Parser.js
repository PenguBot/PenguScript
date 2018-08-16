const renderers = {};

module.exports = class Parser {

	constructor(input, options) {
		/**
		 * The regexp used for matching tags.
		 */
		this.regex = /{(.*?)}/g;

		/**
		 * The input this tag parses.
		 */
		this.input = input;

		/**
		 * Options defining custom behavior
		 */
		this.options = Object.assign({
			timeout: 20,
			noActions: false
		}, options);

		/**
		 * The actions this parser performs.
		 */
		this.actions = [];

		/**
		 * Renderers this parser uses.
		 */
		this.renderers = Object.assign(renderers, require('../renderers'));
	}

	async check() {
		if (!this.tags.length) return this.input;
		for (const tag of this.tags) {
			const [name, value] = tag.split(':');
			if (name && (!this.renderers[name] || typeof this.renderers[name] !== 'function')) return false;
			if (value && !this.renderers[name].requiresValue) throw `The renderer ${name} doesn't expect a value.`;
		}
		return this.input;
	}

	async parse(data) {
		let { input } = this;
		for (const tag of this.tags) {
			// eslint-disable-next-line prefer-const
			let [name, value] = tag.split(':');

			// custom args handling: there has to be a better way to do this
			if (name.includes('arg') && !value) {
				const [, number] = name.toLowerCase().split('arg');
				if (!data.args || !data.args[number - 1]) throw `At least ${number} args are required to use this tag.`;
				input = input.replace(`{${name}}`, data.args[number - 1]);
				continue;
			}

			const oldValue = value;
			if (!value && this.renderers[name].requiresValue) throw `The ${name} renderer requires a value.`;
			if (value && value.includes('arg')) {
				const [, number] = value.toLowerCase().split('arg');
				if (!data.args || !data.args[number - 1]) throw `At least ${number} args are required to use this tag.`;
				value = data.args[number - 1];
			}
			const toReplace = this.renderers[name].process(this.input, value, data);
			input = input.replace(`{${name}${oldValue ? `:${oldValue}` : ''}}`, toReplace);
		}
		return input;
	}

	static add(name, renderer) {
		renderers[name] = renderer;
	}

	get tags() {
		return this.input.match(this.regex).map(element => element.replace(/([{}])/g, ''));
	}

};
