module.exports = {
	argslen: {
		requiresValue: false,
		process: (input, _value, data) => input.replace('{argslen}', data.args.length)
	}
};
