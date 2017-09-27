const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      pug = require('gulp-pug');

gulp.task('default', () =>{
  browserSync.init({
    server: './'
  });
  gulp.watch('./*.html').on('change',browserSync.reload);
  gulp.watch('./css/*.css').on('change',browserSync.reload);
  gulp.watch('./sass/*.sass', ['sass']);//.on('change', )
  gulp.watch('./pug/*.pug', ['pug']);//.on('change', )
})
gulp.task('sass', () =>{
  gulp.src('./sass/*.sass')
    .pipe(sass())
    .pipe(autoprefixer({
      versions: ['last 2 browers']
    }))
    .pipe(gulp.dest('./css'))
})
gulp.task('pug', ()=>{
  gulp.src('./pug/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'))
})
