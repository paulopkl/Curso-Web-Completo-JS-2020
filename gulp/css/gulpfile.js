const gulp = require('gulp');
const { series } = require('gulp');
const { parallel } = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function transformCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(uglifycss({ "uglifyComments": true }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build'))
}

function copyHTML(cb) {
    gulp.src('src/**.html')
        .pipe(gulp.dest('build'))
    return cb();
}

function end(cb) {
    console.log("It's end :3");
    return cb();
}

// module.exports.default = series(transformCSS, copyHTML, end);
module.exports.default = parallel(transformCSS, copyHTML, end);