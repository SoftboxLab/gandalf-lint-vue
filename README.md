![npm](https://img.shields.io/npm/v/@softboxlab/eslint-config-gandalf-lint-vue)
![build](https://img.shields.io/travis/SoftboxLab/gandalf-lint-vue)
![size](https://img.shields.io/bundlephobia/min/@softboxlab/eslint-config-gandalf-lint-vue)
![dependencies](https://img.shields.io/david/peer/SoftboxLab/gandalf-lint-vue)
![license](https://img.shields.io/github/license/SoftboxLab/gandalf-lint-vue)

# gandalf-lint-vue

<p align="center">
	<img src="https://media.giphy.com/media/8abAbOrQ9rvLG/giphy.gif" />
</p>


<h3 align="center" style="font-weight: bold;">
  <b>BAD VUE CODE SHALL NOT PASS!</b>
</h3>

## Install
Install the most powerful linter of the middle-earth (and its dependencies):

Dependencies via NPM:
```bash
npm install --save-dev @softboxlab/eslint-config-gandalf-lint @softboxlab/eslint-config-gandalf-lint-vue eslint babel-eslint eslint-plugin-vue
```

or via yarn:
```bash
yarn add --dev @softboxlab/eslint-config-gandalf-lint @softboxlab/eslint-config-gandalf-lint-vue eslint babel-eslint eslint-plugin-vue
```

## Requirements

- [ESLint](http://eslint.org/) `^5.0.0`.
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) `^5.0.0`.
- [gandalf-lint](https://github.com/SoftboxLab/gandalf-lint) `^0.2.1`.
- Node.js `>=6.5.0`

## Configure
Call the white wizard by creating a `.eslintrc` file on your root project and writing in it:
```javascript
{
  "extends": [
    "@softboxlab/eslint-config-gandalf-lint-vue"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  }
}
```

Remember to add the `eslint` plugin on your favorite IDE, like this one: [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Usage
If you want you can create a script on your `package.json` file like so:
```json
"scripts": {
  "glint": "eslint {YOUR_SOURCE_FOLDER} --ext .js,.vue"
}
```

And use your magic script for shall not pass any bad code:
```bash
npm run glint
```

or using yarn:

```bash
yarn glint
```

## Tips

**To ignore some files from being linted just add them to a [.eslintignore](https://eslint.org/docs/user-guide/configuring#eslintignore) file**

## Autorun? Automatic lint?

**If you don't fell like creating any scripts, feel free to have your files linted on the fly by your IDE (did you remember to install the `eslint` plugin on your IDE?)**

---

<p align="center">
	<img src="https://media.giphy.com/media/TcdpZwYDPlWXC/giphy.gif"/><br/>
  Gandalf approves
</p>


# License

The MIT License (MIT)

[Copyright (c) Feross Aboukhadijeh](https://github.com/standard/eslint-config-standard)

[Copyright (c) 2012 Airbnb](https://github.com/airbnb/javascript)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

This project licence is also MIT.
