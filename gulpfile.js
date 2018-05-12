
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var cssnext = require('postcss-cssnext');
var notify = require('gulp-notify');
var purge = require('gulp-css-purge');
var livereload = require('gulp-livereload');


gulp.task('styles', function () {
	var processors = [
		cssnext({})
	];

	return gulp.src('style.scss')
		.pipe(sass())
		.pipe(postcss(processors))
		.pipe(purge())
		.pipe(notify("success"))
		.pipe(gulp.dest('.'))
		.pipe(livereload());
});


gulp.task('watch:styles', function () {
	livereload.listen();
	gulp.watch('**/*.scss', ['styles']);
});

