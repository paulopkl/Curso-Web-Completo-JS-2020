const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const uglify = require('gulp-uglify');

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject()) // Esse pipe compila para TypeScript
        .pipe(uglify())
        .pipe(gulp.dest('build'))
})