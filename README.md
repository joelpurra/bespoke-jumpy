[![Build Status](https://secure.travis-ci.org/joelpurra/bespoke-jumpy.png?branch=master)](https://travis-ci.org/joelpurra/bespoke-jumpy)

# bespoke-jumpy

Keyboard shortcuts to jump straight to a specific slide in [bespoke.js][bespoke.js], using <kbd>Home</kbd>, <kbd>End</kbd> and the digit keys.

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/joelpurra/bespoke-jumpy/master/dist/bespoke-jumpy.min.js
[max]: https://raw.github.com/joelpurra/bespoke-jumpy/master/dist/bespoke-jumpy.js

## Usage

First, include `bespoke.js`, `bespoke-convenient.js` and `bespoke-jumpy.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.horizontal.from('article', {
  convenient: true,
  jumpy: true
});
```

- Keys <kbd>1</kbd>-<kbd>9</kbd>, <kbd>0</kbd>: jump to slide 1-9 and 10 respectively.
- Keys <kbd>Home</kbd>, <kbd>End</kbd>: jump to the first/last slide respectively.


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
require('bespoke-convenient');
require('bespoke-jumpy');
```

## Credits

[Mark Dalgleish](http://markdalgleish.com/) for [bespoke.js][bespoke.js] and related tools. This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

Scott Kraft, [sakraft1 on flickr](https://secure.flickr.com/photos/sakraft1/), for his upload [From the Library of Congress: Man on a tame zebra jumping a fence in East Africa](https://secure.flickr.com/photos/sakraft1/2649955918/) ([CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)).

My best friend, [bespoke-convenient](https://github.com/joelpurra/bespoke-convenient), for continued support - rain and shine. I love you, man.


## License

Copyright (c) 2013, [Joel Purra](http://joelpurra.com/) All rights reserved.

When using bespoke-jumpy, comply to the [MIT license](http://joelpurra.mit-license.org/2013). Please see the LICENSE file for details, and the [MIT License on Wikipedia](http://en.wikipedia.org/wiki/MIT_License).

[bespoke.js]: https://github.com/markdalgleish/bespoke.js
[default-events]: https://github.com/markdalgleish/bespoke.js#events


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/joelpurra/bespoke-jumpy/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

