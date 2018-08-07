var gulp = require( 'gulp' ),
	connect = require( 'gulp-connect-php' ),
	browserSync = require( 'browser-sync' ),
	concat = require( 'gulp-concat' ),
	sass = require( 'gulp-sass' ),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	notify = require('gulp-notify'),
	del = require('del'),
	runSequence  = require('run-sequence'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	minifyCss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	babel  = require('gulp-babel'),
	rename = require('gulp-rename'),
	spritesmith = require('gulp.spritesmith'),
	scssLint = require('gulp-scss-lint'),
	jshint = require('gulp-jshint'),
	gulpIf = require('gulp-if'),
	jscs = require('gulp-jscs'),
	webpack = require('gulp-webpack'),
	webpackStream = require('webpack-stream'),
	webpackConfig = require('./webpack.config.js'),
	webpackProdConfig = require('./webpack.prod.config.js');

// Start our local server for the devlopment. // 
gulp.task('connect', function(){
	connect.server( {}, function (){
    	browserSync({
     		proxy: 'localhost/nutritionpartners/'
    	});
	});
});

// Give a custom error message for any errors on gulp watch. //
function customPlumber(errTitle) {
	return plumber({
		errorHandler: notify.onError({
			title: errTitle || "Error running Gulp",
			message: "Error: <%= error.message %>",
			sound: "Purr",
		})
	});
}

// Clean up and delete the files so we start clean. //
gulp.task('clean:dev', function(){
	del( [
		'./assets/dist/css/*.css', // Delete all the css files that are in the css folder in our theme.
		'./assets/dist/js/myscripts.js', // Delete the main js file that are in the css folder in our theme.
	], { force: true } );
});

/*
 *
 *   sass and css Tasks
 * 
 */
// These are the tasks for all the scss and css files. //
// Gulp Sass task. //
gulp.task('sass', function(){
	return gulp.src('./assets/src/sass/**/*.scss')
		.pipe( customPlumber('Error Running Sass'))
		.pipe( sourcemaps.init() ) 
		.pipe( sass() )
		.pipe( autoprefixer( {
			browsers: ['> 1%', 'ie 8-11', 'last 20 versions']
		} ) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest('./assets/dist/css/') )
		.pipe( browserSync.reload({
			stream: true
		} ) )
});

// If there are mulitpule css files we will concat them together. //
gulp.task('concatCss', ['sass'], function() {
	gulp.src( [ './assets/dist/css/style.css' ] )
	.pipe( concat('style.css'))
	.pipe( gulp.dest('./assets/dist/css') )
	.pipe( browserSync.reload({
			stream: true
		} ) )
});

gulp.task('minifyCss', function(){
	return gulp.src( './assets/dist/css/style.css' )
		.pipe( minifyCss( { processImport: false, keepSpecialComments : 1 } ) )
		.pipe( gulp.dest( './assets/dist/css') )
});

// Lint my sass. //

gulp.task('lint:sass', function() {
	return gulp.src('src/sass/**/*.scss')
		.pipe(scssLint({
			config: '.scss-lint.yml'
		}))
});

/*
 *
 *   JavaScript Tasks
 * 
 */

gulp.task('webpack', function(){
	return gulp.src('./assets/src/js/myscripts.js')
	.pipe( webpackStream( webpackConfig ), webpack )
	.pipe( gulp.dest( './assets/dist/js/' ) );
});

// Minify the main javascript file. //

gulp.task( 'minifyScripts', function(){
	gulp.src('./assets/dist/js/myscripts.js')
		.pipe( webpackStream( webpackProdConfig ), webpack )
		.pipe(gulp.dest('./assets/dist/js'));
});

/*
 *
 *   Image Tasks
 * 
 */

// Image optimization //
gulp.task('images', function() {
	return gulp.src('assets/src/img/**/*.+(png|jpg|jpeg|gif|svg)')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		optimizationLevels: 5,
		multipass: true,
		verbose: true,
	}), {name: 'swbtheme'}))
	.pipe(gulp.dest('./assets/dist/img/images'))
});

gulp.task('cache:clear', function(callback) {
	return cache.clearAll(callback)
});

// Build the sprite sheet. //

gulp.task('sprites', function() {
	gulp.src('./assets/src/img/sprites/**/*')
		.pipe(spritesmith({
			cssName: '_sprites.scss',
			imgName: 'sprites.png',
			imgPath: '../img/sprites.png'
		}))
		.pipe( gulpIf( '*.png', gulp.dest( './assets/dist/img' ) ) )
		.pipe( gulpIf( '*.scss', gulp.dest( 'src/sass/utilities' ) ) )
});


gulp.task('watch', function(){
	gulp.watch('**/*.php').on('change', function() { browserSync.reload(); });
	gulp.watch('assets/src/sass/**/*.scss', ['sass', 'concatCss']);
	//gulp.watch('assets/src/js/**/*.js', ['webpack'])
	//gulp.watch('assets/src/js/**/*.js', browserSync.reload);
	gulp.watch('assets/src/js/**/*.js', () => { runSequence( 'webpack', browserSync.reload )})
});


gulp.task('default', function(callback){
	runSequence(
		['clean:dev'],
		['sprites'],
		['sass'],
		['webpack'],
		['concatCss'],
		['connect', 'watch'],
		callback
	)
});

gulp.task('production', function(callback){
	runSequence(
		['minifyScripts', 'minifyCss'],
		callback
		)
});




