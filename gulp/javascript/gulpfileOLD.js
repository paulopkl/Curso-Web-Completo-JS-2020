const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('default', () => {
    gulp.src('src/**/*.js') // Pasta alvo, que sera escaneada tudo em src/ e tudo.js
        .pipe(babel({
            minified: true,
            comments: false, // Limpa os comentários
            presets: ["env"] // Pega todos os Ecma até 2020
        }))
        .pipe(uglify()) // Minifica o arquivo
        .on('error', function (err) { console.log(err) }) // Se der erro
        .pipe(concat('Codigo.min.js')) // Concatenar em um arquivo 'codigo.min.js'
        .pipe(gulp.dest('build')) // Pasta de Destino 'build'
});