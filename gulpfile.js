'use strict';

var gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    gulpRev = require('gulp-rev'),
    gulpRevCollector = require('gulp-rev-collector'),
    gulpRevReplace = require('gulp-rev-replace'),
    gulpUglify = require('gulp-uglify'),
    gulpUniqueFiles = require('gulp-unique-files'),
    gulpUseRef = require('gulp-useref'),
    gulpCleanCSS = require('gulp-clean-css'),
    gulpResponsive = require('gulp-responsive'),
    gulpCheerio = require('gulp-cheerio'),
    del = require('del'),
    rename = require('rename'),

    dirs = {
  public: 'public',
  screenshots: 'public/build/screenshots'
};

gulp.task('useref', ['screenshot'], () => {
  var assets = gulpUseRef.assets({
    searchPath: 'public'
  });

  return gulp.src('public/**/*.html')
    .pipe(assets)
    .pipe(gulpUniqueFiles())
    .pipe(gulpIf('*.css', gulpCleanCSS()))
    .pipe(gulpIf('*.js', gulpUglify()))
    .pipe(gulpRev())
    .pipe(assets.restore())
    .pipe(gulpUseRef())
    .pipe(gulpRevReplace({
      prefix: '/'
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('screenshot:clean', () => 
  return del([dirs.screenshots + '/**/*']);
);

gulp.task('screenshot:rev', ['screenshot:clean'], () => {
  return gulp.src('public/themes/screenshots/*.png')
    .pipe(gulpRev())
    .pipe(gulp.dest(dirs.screenshots))
    .pipe(gulpRev.manifest())
    .pipe(gulp.dest(dirs.screenshots));
});

gulp.task('screenshot:revreplace', ['screenshot:rev'], () => {
  var destDir = '/build/screenshots';

  return gulp.src([dirs.screenshots + '/rev-manifest.json', 'public/themes/index.html'])
    .pipe(gulpRevCollector({
      replaceReved: true,
      dirReplacements: {
        '/themes/screenshots': destDir
      }
    }))
    .pipe(gulpCheerio(($, file) => {
      $('img.plugin-screenshot-img.lazyload').each(() => {
        var img = $(this),
            src = img.attr('data-src') || img.attr('data-org');
        if (!src) return;

        var jpgPath = replaceBackSlash(rename(src, {extname: '.jpg'})),
            jpg2xPath = replaceBackSlash(rename(jpgPath, {suffix: '@2x'})),
            srcset = [
          jpgPath,
          jpg2xPath + ' 2x'
        ].join(', ');

        img.attr('data-src', jpgPath)
          .attr('data-srcset', srcset)
          .attr('data-org', src);
      });
    }))
    .pipe(gulp.dest('public/themes'));
});

gulp.task('screenshot:resize', ['screenshot:rev'], () =>{
  return gulp.src(dirs.screenshots + '/*.png')
    .pipe(gulpResponsive({
      '*.png': [
        {
          width: '50%',
          rename: {
            extname: '.jpg'
          }
        },
        {
          rename: {
            suffix: '@2x',
            extname: '.jpg'
          }
        }
      ]
    }, {
      progressive: true,
      format: 'jpeg',
      quality: 70,
      stats: false
    }))
    .pipe(gulp.dest(dirs.screenshots));
});

gulp.task('screenshot', ['screenshot:rev', 'screenshot:resize', 'screenshot:revreplace']);
gulp.task('default', ['useref', 'screenshot']);

function replaceBackSlash(str) {
  return str.replace(/\\/g, '/');
}
