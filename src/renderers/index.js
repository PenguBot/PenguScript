const { readdirSync } = require('fs');

for (const file of readdirSync(`${__dirname}/`)) {
	for (const [k, v] of Object.entries(require(`./${file}`))) {
		exports[k] = v;
	}
}

