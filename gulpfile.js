const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

const DIST_PATH = './public/dist';
const CSS_PATH = './public/css/**/*.css';
const SCSS_PATH = './public/scss/**/*.scss';
const SCRIPTS_PATH = './public/scripts/**/*.js';

gulp.task('styles', () => {
  console.log('Running styles task');
  return gulp
    .src(['./public/css/reset.css', CSS_PATH, SCSS_PATH])
    .pipe(plumber(err => handleError(err, 'styles')))
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
    )
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    .pipe(cleanCSS({ compatability: 'ie8' }))
    .pipe(gulp.dest(DIST_PATH + '/css'));
});

gulp.task('scripts', () => {
  console.log('Running scripts task');
  return gulp
    .src(SCRIPTS_PATH)
    .pipe(plumber(err => handleError(err, 'scripts')))
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(DIST_PATH + '/js'));
});

gulp.task('default', ['styles', 'scripts'], () => {
  console.log('Running default task');
});

gulp.task('watch', ['default'], () => {
  console.log('Running watch task');
  gulp.watch(CSS_PATH, ['styles']);
  gulp.watch(SCSS_PATH, ['styles']);
  gulp.watch(SCRIPTS_PATH, ['scripts']);
});

function handleError(err, taskNameStr) {
  console.log(`${taskNameStr} task error`);
  console.log(err);
  gulp.emit('end');
}
