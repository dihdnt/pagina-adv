var tap = require('gulp-tap');
var stylish = typeof require('jshint-stylish') === 'string' ? require(require('jshint-stylish')) : require('jshint-stylish');

function tapLesshint (action) {
	return function () {
		return tap(function (file) {
			if (!file.lesshint || file.lesshint.success) {
				return;
			}
			action(file);
		});
	};
}

function toJshint (file) {
	return file.lesshint.errors.map(function (error) {
		return {
			file: file.base + error.file,
			error: {
				character: error.column,
				code: 'W ' + error.linter,
				line: error.line,
				reason: error.message
			}
		}
	});
}

module.exports = tapLesshint(function (file) {
	stylish.reporter(toJshint(file));
});
