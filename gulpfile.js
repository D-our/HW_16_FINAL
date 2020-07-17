var gulp = require('gulp');
    postcss = require('gulp-postcss');
    autoprefixer = require('autoprefixer');

gulp.task('css', function () {
    return gulp.src('src/styles/styles.css')
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('htmlWorker', function () {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('imgWorker', function () {
    return gulp.src('src/img/*')
     .pipe(gulp.dest('build/img'));
});

gulp.task('build', gulp.series(['css', 'htmlWorker', 'imgWorker']));





