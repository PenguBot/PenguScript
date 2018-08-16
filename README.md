# Stitchscript

Stitchscript is a heavily WIP text parser, made for Discord bots.

# Usage

Calling the parse function on a tag will parse it and return the parsed input. Parse is an **async** function.

```js
const parse = require('stitchscript');

async function run() {
    console.log(await parse('The sin of 30 is {sin:30}', data));
}

run();

// the sin of 30 is 0.50
```

# Data

Discord renderers require data to be passed to the parse function. Currently, the **only** required data is `args`: an array of arguments used in the context, `guild`: the guild instance this was run in, and `user`: the user executing the command.

# Args

To use args with the parser, attach an array of args to the data object.

```js
console.log(await parser.parse('The sin of {arg1} is {sin:arg1}.'), {
    args: [30]
});

// the sin of 30 is 0.50
```

# Contributing

To contribute, open a pull request. Ensure it follows the ESLint rules according to the eslintrc file, and your code is clean and well commented.

# Other

While stitchscript was primarily made for Discord bots, it can be used by other applications too. Currently, the only "external" renderers are the math ones, but more will be added soon.