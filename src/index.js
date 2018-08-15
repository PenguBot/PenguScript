const Parser = require('./lib/Parser');

module.exports = async (input, data = {}, opts = {}) => {
	const parser = new Parser(input, opts);
	if (!await parser.check()) throw 'Invalid input string.';
	return parser.parse(data);
};
