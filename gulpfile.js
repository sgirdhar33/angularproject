var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('compress', function() {
  return gulp.src("dist/mindfire/**").pipe(zip("mindfire.zip"))
    .pipe(gulp.dest('./nexus/nexus-repo'));
});
