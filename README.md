[![Build Status](https://secure.travis-ci.org/joelpurra/bespoke-jumpy.png?branch=master)](https://travis-ci.org/joelpurra/bespoke-jumpy) [![Coverage Status](https://coveralls.io/repos/joelpurra/bespoke-jumpy/badge.png)](https://coveralls.io/r/joelpurra/bespoke-jumpy)

# [bespoke-jumpy](https://github.com/joelpurra/bespoke-jumpy)

**Check out the [presentation/demo.](https://joelpurra.github.io/bespoke-jumpy/demo/)**

Keyboard shortcuts to jump straight to a specific slide in [bespoke.js][bespoke.js], using <kbd>Home</kbd>, <kbd>End</kbd> and the digit keys.

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/joelpurra/bespoke-jumpy/master/dist/bespoke-jumpy.min.js
[max]: https://raw.github.com/joelpurra/bespoke-jumpy/master/dist/bespoke-jumpy.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  jumpy = require('bespoke-jumpy');

bespoke.from('#presentation', [
  jumpy()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.plugins.jumpy()
]);
```

- Keys <kbd>1</kbd>-<kbd>9</kbd>, <kbd>0</kbd>: jump to slide 1-9 and 10 respectively.
- Keys <kbd>Home</kbd>, <kbd>End</kbd>: jump to the first/last slide respectively.

## Package managers

### npm

```bash
$ npm install bespoke-jumpy
```

### Bower

```bash
$ bower install bespoke-jumpy
```

## Credits

[Mark Dalgleish](https://markdalgleish.com/) for [bespoke.js][bespoke.js] and related tools. This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

Scott Kraft, [sakraft1 on flickr](https://secure.flickr.com/photos/sakraft1/), for his upload [From the Library of Congress: Man on a tame zebra jumping a fence in East Africa](https://secure.flickr.com/photos/sakraft1/2649955918/) ([CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)).

My best friend, [bespoke-convenient](https://github.com/joelpurra/bespoke-convenient), for continued support - rain and shine. I love you, man.


## License

Copyright (c) 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, [Joel Purra](https://joelpurra.com/) All rights reserved.

When using bespoke-jumpy, comply to the [MIT license](https://joelpurra.mit-license.org/2013-2014). Please see the LICENSE file for details, and the [MIT License on Wikipedia](https://en.wikipedia.org/wiki/MIT_License).

[bespoke.js]: https://github.com/markdalgleish/bespoke.js
[default-events]: https://github.com/markdalgleish/bespoke.js#events
