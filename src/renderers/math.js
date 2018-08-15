module.exports = {
	sin: {
		requiresValue: true,
		execute: input => Math.sin(input * (Math.PI / 180)),
		process: (_input, value) => module.exports.sin.execute(value).toFixed(2)
	},

	cos: {
		execute: input => Math.cos(input * (Math.PI / 180)),
		process: (_input, value) => module.exports.cos.execute(value).toFixed(2)
	},

	tan: {
		execute: input => Math.tan(input * (Math.PI / 180)),
		process: (_input, value) => module.exports.tan.execute(value).toFixed(2)
	}
};
