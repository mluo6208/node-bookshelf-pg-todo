var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , jshint = require('gulp-jshint')
 
gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint())
});

gulp.task('nodemon', function () {
    nodemon({
        script: './bin/www',
        ext: 'html js',
        env: { 'NODE_ENV': 'development' } ,
        nodeArgs: ['--debug']
    })/*.on('change', ['lint'])*/
        .on('restart', function () {
            console.log('restarted!');
        });
});

gulp.task('default', [
    //'lint',
    'nodemon',
]);


