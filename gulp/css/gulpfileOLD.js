const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');

gulp.task('copiarHtml', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})

gulp.task('default', 
    // () => {
    //     gulp.src('src/index.html')
    //         .pipe(gulp.dest('build'))
    // }, 
    () => {
        gulp.src('src/sass/index.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(uglifyCss({ "uglyComments": true }))
            .pipe(concat('estilo.min.css'))
            .pipe(gulp.dest('build/css'))
})

