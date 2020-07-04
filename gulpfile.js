const gulp = require('gulp')
const sass = require ('gulp-sass')

sass.compiler = require('node-sass')
const { watch, series } = require('gulp');



gulp.task('sass', () => {
    return gulp.src('src/scss/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('sass', sass.logError))
            .pipe(gulp.dest('src/css/'))
})

gulp.task('dist', ()=>{
    return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('sass', sass.logError))
            .pipe(gulp.dest('src/css/'))
})

gulp.task('default', () =>{
    gulp.watch('src/scss/*.scss', gulp.series('sass'))
})