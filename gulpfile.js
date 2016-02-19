var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
  gulp.src('app/style/main.scss')
  	.pipe(plumber())
  	.pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({
        basename : 'thedanceicon',
        suffix: '.min'
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/')) //output the file at root (app/)
    .pipe(browserSync.reload({
    	stream: true
    }));
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('app/style/main.scss', ['sass']);
});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		}
	})
});

gulp.task('default', ['sass', 'watch']);