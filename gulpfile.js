var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');

gulp.task('build', function() {
    gulp.src('src/*.js')
        .pipe(babel({
            presets:['react', 'es2015']
        }))
        .pipe(gulp.dest('lib'));
    gulp.src('lib/test.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
gulp.watch('src/*.js', ['build']);
});