[js-selection](http://aureooms.github.io/js-selection)
==

Selection code bricks for JavaScript. Parent is
[aureooms/js-sort](https://github.com/aureooms/js-sort).

```js
let quickselect = selection.singletco( partition.hoare ) ;
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-selection.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-selection/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-selection.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-selection)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-selection.svg?style=flat)](http://bower.io/search/?q=aureooms-js-selection)
[![Build Status](http://img.shields.io/travis/aureooms/js-selection.svg?style=flat)](https://travis-ci.org/aureooms/js-selection)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-selection.svg?style=flat)](https://coveralls.io/r/aureooms/js-selection)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-selection.svg?style=flat)](https://david-dm.org/aureooms/js-selection#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-selection.svg?style=flat)](https://david-dm.org/aureooms/js-selection#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-selection.svg?style=flat)](https://codeclimate.com/github/aureooms/js-selection)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-selection.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-selection)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-selection.svg?style=flat)](https://github.com/aureooms/js-selection/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-selection.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-selection)


Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-selection
# or
jspm install npm:aureooms-js-selection
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-selection
```

### bower
```terminal
bower install aureooms-js-selection
```

### ender
```terminal
ender add aureooms-js-selection
```

### jam
```terminal
jam install aureooms-js-selection
```

### spm
```terminal
spm install aureooms-js-selection --save
```

### npm
```terminal
npm install aureooms-js-selection --save
```

## Require
### jspm
```js
let selection = require( "github:aureooms/js-selection" ) ;
// or
import selection from 'aureooms-js-selection' ;
```
### duo
```js
let selection = require( "aureooms/js-selection" ) ;
```

### component, ender, spm, npm
```js
let selection = require( "aureooms-js-selection" ) ;
```

### bower
The script tag exposes the global variable `selection`.
```html
<script src="bower_components/aureooms-js-selection/js/dist/selection.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-selection" ] , function ( selection ) { ... } ) ;
```


## Use

```js
let partition = require( "aureooms-js-partition" ) ;
let compare = require( "aureooms-js-compare" ) ;

/** recursive single pivot quickselect using Hoare's partitioning algorithm*/
let select = selection.single( partition.hoare ) ;

let a = [ 1 , 6 , 5 , 3 , 2 , 4 ] ;

select( compare.increasing , a , 0 , a.length , 3 ) ;

a ; // [ . , . , . , 4 , . , . ]

select( compare.decreasing , a , 0 , a.length , 2 ) ;

a ; // [ . , 5 , . , . , . , . ]

// but also

/** recursive single pivot quickselect using Lomuto's partitioning algorithm */
let select = selection.single( partition.lomuto ) ;

/** with explicit tail call optimization */
let select = selection.singletco( partition.hoare ) ;
let select = selection.singletco( partition.lomuto ) ;
```
