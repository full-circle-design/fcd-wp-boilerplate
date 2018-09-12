var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('sass', function(){
  return gulp.src('src/css/main.scss')
    .pipe(sass())
    .pipe(minify())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('dist/css/')
  )
});

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('watch', function() {
    gulp.watch('src/css/*.scss', ['sass'])
    gulp.watch('src/js/*.js', ['scripts'])
});
