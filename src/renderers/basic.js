module.exports = {
	uppercase: {
		requiresValue: true,
		process: (_input, value) => value.toUpperCase()
	},

	lowercase: {
		requiresValue: true,
		process: (_input, value) => value.toLowerCase()
	},

	choices: {
		requiresValue: true,
		process: (_input, value) => {
			const choices = value.split('|');
			return choices[Math.floor(Math.random() * choices.length)];
		}
	}
};
