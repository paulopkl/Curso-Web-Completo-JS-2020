const { series } = require('gulp');
const { parallel } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function def(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({ comments: false, presets: ['env'] }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('code.min.js'))
        .pipe(gulp.dest('build'))
    // return cb();
}

function end(cb) {
    console.log('END');
    return cb();
}

// exports.default = series(def, end);
exports.default = parallel(def, end);