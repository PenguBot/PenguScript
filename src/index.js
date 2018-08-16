const Parser = require('./lib/Parser');

module.exports = async (input, data = {}, opts = {}) => {
	const parser = new Parser(input, opts);
	return parser.parse(data);
};
