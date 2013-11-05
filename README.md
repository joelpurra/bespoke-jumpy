[![Build Status](https://secure.travis-ci.org/joelpurra/bespoke-jumpy.png?branch=master)](https://travis-ci.org/joelpurra/bespoke-jumpy)

# bespoke-jumpy

Keyboard shortcuts to jump straight to a specific slide in bespoke.js

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/joelpurra/bespoke-jumpy/master/dist/bespoke-jumpy.min.js
[max]: https://raw.github.com/joelpurra/bespoke-jumpy/master/dist/bespoke-jumpy.js

## Usage

First, include both `bespoke.js` and `bespoke-jumpy.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.horizontal.from('article', {
  jumpy: true
});
```

## Package managers

### Bower

```bash
$ bower install bespoke-jumpy
```

### npm

```bash
$ npm install bespoke-jumpy
```

The bespoke-jumpy npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-jumpy');
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
