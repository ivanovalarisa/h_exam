const gulp = require('gulp'); //
const babel = require('gulp-babel');//
const uglify = require('gulp-uglify');//
const concat = require('gulp-concat');//
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');//
const minify = require('gulp-clean-css');
const watch = require('gulp-watch');
// const browserSync = require('browser-sync');
const browserSync = require('browser-sync').create();

gulp.task('js', function() {
    gulp.src('./src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            "presets": ["@babel/preset-env"]
        }))
        // .pipe(uglify())
        // .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js/'))
        // .pipe(browserSync.stream());
        // .pipe(browserSync.reload({stream: true}))
});

gulp.task('js-product-build', function() {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            "presets": ["@babel/preset-env"]
        }))
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./build/js/'))
        .pipe(browserSync.stream());
    // .pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css/'))
        // .pipe(browserSync.stream());
    // .pipe(browserSync.reload({stream: true}))
});

gulp.task('img', function () {
    return gulp.src('./src/img/**/*.*')
        .pipe(gulp.dest('./build/img/'))
});

gulp.task('libs', function() {
    return gulp.src('src/vendors/**/*.*')
        .pipe(gulp.dest('build/vendors/'));
});

gulp.task('html', function () {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
        // .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function () {
    watch('./src/scss/**/*.scss', gulp.parallel('sass'));
    watch('./src/*.html', gulp.parallel('html'));
    watch('./src/js/*.js', gulp.parallel('js'))
});

gulp.task('brSync', () => {
    browserSync.init({
        server: {
            baseDir: 'build/' // здесь указываем корневую папку для локального сервера
        },
        // notify: false      // уведомления (false - отключение уведомлений)
    });
});

// gulp.task('product-build', gulp.parallel('js-product-build', 'sass', 'img', 'libs', 'html', 'watch'));
// gulp.task('product-build', gulp.parallel('js-product-build', 'sass', 'img', 'brSync', 'watch'));

gulp.task('default', gulp.parallel('js', 'sass', 'img', 'libs', 'html', 'watch'));
// gulp.task('default', gulp.parallel('js', 'sass', 'img', 'brSync', 'watch'));