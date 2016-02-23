var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var reload = browserSync.reload;

gulp.task('browserSync', function() {

    var files = [
        './app/*.css',
        './app/*.php',
        './app/*.html'
    ];

    browserSync.init(files, {
        // server: {
        //     baseDir: 'app'
        // },
        proxy: 'localhost/tdi2/app',
        notify: 'false'
    });
});

gulp.task('sass', function() {
    gulp.src('app/style/main.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({
            basename: 'thedanceicon',
            suffix: '.min'
        }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/')) //output the file at root (app/)
        .pipe(reload({stream: true}));
});

gulp.task('js', function() {
    return gulp.src([
            './app/js/*.js'
        ])
        .pipe(plumber())
        .pipe(rename({
            basename: 'thedanceicon'
        }))
        .pipe(uglify())
        .pipe(rename({
            basename: 'thedanceicon',
            suffix: '.min'
        }))
        .pipe(gulp.dest('app/'))
        .pipe(reload({ stream: true }));
});

gulp.task('default', ['sass', 'js', 'browserSync'], function() {
    gulp.watch('app/style/**/*.scss', ['sass']);
    gulp.watch('app/style/*.scss', ['sass']);
    gulp.watch('app/js/*.js', ['js']);
});