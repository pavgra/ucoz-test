var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	browserify = require('gulp-browserify'),
	stringify = require('stringify');

var src = {
		fonts: [
			'bower_components/material-design-icons/iconfont/**/*',
		],
		scripts: 'resources/js/app.js',
		styles: 'resources/sass/app.scss'
	}

gulp.task('fonts', function() {
	return gulp.src(src.fonts)
		.pipe(gulp.dest('./public/fonts'));
});

gulp.task('styles', function() {
	return gulp.src(src.styles)
		.pipe(sass({
			includePaths: [
				'bower_components',
				'resources/sass'
			],
			outputStyle: 'compressed'
		}))
		.pipe(concat('app.css'))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {
	return gulp.src(src.scripts)
		.pipe(
			browserify({
				paths: [
					'resources/assets/js/app'
				],
				extensions: ['html'],
				transform: [stringify]
			})
		)
		//.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./public/js'));
});

function defaultTask() {
	gulp.start(
		'fonts',
		'styles',
		'scripts'
	);
}

gulp.task('watch', function() {
	defaultTask();

	gulp.watch('resources/js/**/*', ['scripts']);
	gulp.watch('resources/sass/**/*', ['styles']);
});

gulp.task('default', function() {
	defaultTask();
});