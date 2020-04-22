'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),//
    del = require('del');//

gulp.task('del', function() {
    return del('build/');
});

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.stream());
});

gulp.task('img', function () {
    return gulp.src('./src/img/**/*.*')
        .pipe(gulp.dest('./build/img/'))
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
});

gulp.task('script', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
});

gulp.task('copyOther', function() {
    return gulp.src('src/*.json')
        .pipe(gulp.dest('build/'));
});

gulp.task('libs', function() {
    return gulp.src('src/vendors/**/*.*')
        .pipe(gulp.dest('build/vendors'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "build/"
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('src/js/**/*.js*', gulp.parallel('script'));
    gulp.watch('src/*.html', gulp.parallel('html'));
});

gulp.task('default', gulp.series('del', gulp.parallel('sass', 'script', 'html', 'img', 'libs', 'copyOther', 'browser-sync', 'watch')));