# Gulp Lesshint Stylish reporter

Stylish reporter for [gulp-lesshint](https://github.com/lesshint/gulp-lesshint), uses [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) to do the actual reporting:


## Install

```bash
$ npm install --save-dev gulp-lesshint-stylish
```


## Usage

```js
var lesshint = require('gulp-lesshint');
var noop = function () {};
var stylish = require('gulp-lesshint-stylish');

gulp.task('default', function () {
	gulp.src([ 'file.less' ])
		.pipe(lesshint())      // enforce style guide
		.on('error', noop) // don't stop on error
		.pipe(stylish());  // log style errors
});
```


## Credits

Based on the work of [Christoph Werner](http://twitter.com/gonsfx): [gulp-jscs-stylish](https://github.com/gonsfx/gulp-jscs-stylish)
