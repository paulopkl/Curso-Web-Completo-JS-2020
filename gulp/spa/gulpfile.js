const gulp = require('gulp');
const { series, parallel } = require('gulp');
// const sass = require('gulp-sass');
// const uglify = require('gulp-uglify');
// const babel = require('gulp-babel');
// const uglifycss = require('gulp-uglifycss');
// const concat = require('gulp-concat');

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app');
const { depsCSS, depsFonts } = require('./gulpTasks/deps');
const { monitorFiles, server } = require('./gulpTasks/server');

// function transformSASS(cb) {
//     gulp.src('src/assets/sass/index.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(uglifycss())
//         .pipe(concat('style.min.css'))
//         .pipe(gulp.dest('build/assets/css'))
//     return cb();
// }

// function transformJS(cb) {
//     gulp.src('src/assets/js/navegacao.js')
//         .pipe(babel({ comments: false, presets: ['es5'] }))
//         .pipe(uglify())
//         .pipe(gulp.dest('build/assets/js/'))
//     return cb();
// }

// function transformSASS(cb) {
//     gulp.src('src/assets/js/navegacao.js')
//         .pipe(gulp.dest('build/assets/js/'))
//     return cb();
// }

// function transformSASS(cb) {
//     gulp.src('src/assets/js/navegacao.js')
//         .pipe(gulp.dest('build/assets/js/'))
//     return cb();
// }

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    server,
    monitorFiles
);