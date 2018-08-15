const Parser = require('./lib/Parser');

module.exports = async (input, opts = {}) => {
	const parser = new Parser(input, opts);
	if (!await parser.check())
};
