'use strict';
const gulp = require('gulp');
const runSequence = require('run-sequence');
const xo = require('gulp-xo');
// const ava = require('gulp-ava');

gulp.task('default', callback => {
	runSequence([
		'lint'
		// 'test'
	], callback);
});

gulp.task('lint', () => {
	return gulp.src([
		'gulpfile.js',
		'test/unit/*.js',
		'lib/*.js'
	]).pipe(xo({quiet: true}));
});

// gulp.task('test', () => {
// 	return gulp.src([
// 		'test/unit/**/*.js'
// 	]).pipe(ava({verbose: true}));
// });
