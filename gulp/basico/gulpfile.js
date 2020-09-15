const gulp = require('gulp');

const { series, parallel } = require('gulp');
// const series = gulp.series;

const before1 =  cb => {
    console.log('Task before 1');
    return cb();
}

const before2 =  cb => {
    console.log('Task before 2');
    return cb();
}

function copy(callback) {
    // console.log('Copy Task!');
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        // .pipe(transform1())
        // .pipe(transform2())
        // .pipe(transform3())
        // .pipe(transform4())
        // .pipe(transform5())
        .pipe(gulp.dest('pastaB'))
    return callback();
}

function end(cb) {
    console.log('End Task!!');
    return cb()
}

module.exports.default = series(
    parallel(before1, before2),
    copy,
    end
);