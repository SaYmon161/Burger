'use strict';

const gulp = require('gulp');

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const groupMediaQueries = require('gulp-group-css-media-queries');
const nodeNormalizeScss = require('node-normalize-scss');
const cleanCSS = require('gulp-cleancss');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const del = require('del');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

const paths =  {
    src: './dev/',              // paths.src
    build: './prod/'           // paths.build
  };
  
  function styles() {
    return gulp.src(paths.src + 'scss/main.scss')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sass({
         includePaths: nodeNormalizeScss.includePaths
      }))
      .pipe(groupMediaQueries())
      .pipe(postcss([
        autoprefixer({browsers: ['last 9 version']}),
      ]))
      .pipe(cleanCSS())
      .pipe(rename({ suffix: ".min" }))
      .pipe(sourcemaps.write('/'))
      .pipe(gulp.dest(paths.build + 'css/'))
  }
  
  function scripts() {
    return gulp.src(paths.src + 'js/*.js')
      .pipe(plumber())
      .pipe(babel({
        presets: ['env']
      }))
      .pipe(uglify())
      .pipe(concat('index.min.js'))
      .pipe(gulp.dest(paths.build + 'js/'))
  }
  
  function htmls() {
    return gulp.src(paths.src + '*.html')
      .pipe(plumber())
      .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
      .pipe(gulp.dest(paths.build));
  }

  function images() {
    return gulp.src(paths.src + 'img/**/*.*')
      .pipe(plumber())
      .pipe(gulp.dest(paths.build + 'img/'));
  }

  function fonts() {
    return gulp.src(paths.src + 'fonts/**/*.*')
      .pipe(plumber())
      .pipe(gulp.dest(paths.build + 'fonts/'));
  }
  
  function clean() {
    return del('prod/')
  }
  
  function watch() {
    gulp.watch(paths.src + 'scss/**/*.scss', styles);
    gulp.watch(paths.src + 'js/**/*.js', scripts);
    gulp.watch(paths.src + '*.html', htmls);
  }
  
  function serve() {
    browserSync.init({
      server: {
        baseDir: paths.build
      }
    });
    browserSync.watch(paths.build + '**/*.*', browserSync.reload);
  }
  
  exports.styles = styles;
  exports.scripts = scripts;
  exports.htmls = htmls;
  exports.images = images;
  exports.fonts = fonts;
  exports.clean = clean;
  exports.watch = watch;
  
  gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, scripts, htmls, images, fonts)
  ));
  
  gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, scripts, htmls, images, fonts),
    gulp.parallel(watch, serve)
  ));
  