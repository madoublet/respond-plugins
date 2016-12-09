var gulp = require('gulp');
const zip = require('gulp-zip');

// all plugins
var plugins = ['fetch', 'news-block']
var release = 'rc2';

// package the theme for distribution
gulp.task('package', function(done) {

  var x;

  // package individual themes
  for(x=0; x<plugins.length; x++) {

    gulp.src(plugins[x] + '/**/*', {base: './', follow: true})
  		.pipe(zip(plugins[x] + '-' + release + '.zip'))
  		.pipe(gulp.dest('./dist/' + release));

  }

  done();

});

// run tasks
gulp.task('default', gulp.series(['package']));