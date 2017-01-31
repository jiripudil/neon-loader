# neon-loader for webpack

[![Build Status](https://img.shields.io/travis/jiripudil/neon-loader.svg)](https://travis-ci.org/jiripudil/neon-loader)
[![npm version](https://img.shields.io/npm/v/neon-loader.svg)](https://npmjs.com/package/neon-loader)
[![npm monthly downloads](https://img.shields.io/npm/dm/neon-loader.svg)](https://npmjs.com/package/neon-loader)
[![npm downloads](https://img.shields.io/npm/dt/neon-loader.svg)](https://npmjs.com/package/neon-loader)


[Neon](https://ne-on.org/) loader for [webpack](https://webpack.github.io/) using David Matějka's [neon-js](https://github.com/matej21/neon-js).


## Installation

```sh
npm install neon-loader
```


## Usage

### Configuration

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.neon$/,
				use: 'neon-loader'
			}
		]
	}
}
```

```js
import config from 'config.neon';
```


### CLI

```sh
webpack --module-bind 'neon=neon-loader'
```

```js
import config from 'config.neon';
```


### Inline

```js
import config from 'neon-loader!config.neon');
```



## Options

### `forceObject`

By default, `neon-js` detects if the loaded file contains a list and returns a JS array if so. You can use this option to force 'neon-js' to transform lists into objects:

```js
import listObject from 'neon-loader?forceObject!list.neon';
```


## License

MIT (http://www.opensource.org/licenses/mit-license.php)
