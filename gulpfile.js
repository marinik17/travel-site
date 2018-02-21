var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    importcss = require('postcss-import');
  

gulp.task('default', function(){
   console.log('Hooray! You created a Gulp task.'); 
});

gulp.task('html', function(){
   console.log('Imagine something usefull being done with your HTML here.'); 
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([importcss, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
   watch('./app/index.html', function(){
       gulp.start('html'); 
   }) ;
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    }) ;  
});