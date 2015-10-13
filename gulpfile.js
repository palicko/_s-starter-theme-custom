// Gulp
var gulp = require('gulp');

// Plugins
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var prefix = require('gulp-autoprefixer');
var cssshrink = require('gulp-cssshrink');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
//var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var flatten = require('gulp-flatten');
var reload = browserSync({
        proxy: "egroup.dev"
    }).reload;

// Paths
var paths = {
    scripts: [
        'bower_components/modernizr/modernizr.js',
        'bower_components/fastclick/lib/fastclick.js',
        'bower_components/foundation/js/foundation/foundation.js',
        // 'bower_components/foundation/js/foundation/foundation.equalizer.js',
        'assets/js/skip-link-focus-fix.js',
        'assets/js/navigation.js',
        'assets/js/theme.js',
        ],
    copyScripts: [
        'assets/js/customizer.js',
    ],
    vendorScripts: [
    ],
    vendorStyles: [
    ],
    images: ['images/**'],
    fonts: ['fonts/**'],
    scss: [
        'assets/scss/*.scss',
        'assets/scss/components/*.scss',
        'assets/scss/media/*.scss',
        'assets/scss/layout/*.scss',
        ],
    php: [
      '*.php',
      '**/*.php'
    ]
};

// Compile Sass

gulp.task('sass', function() {
    gulp.src(paths.scss)
        .pipe(plumber())
        // .pipe(sourcemaps.init()) // Initialize sourcemap plugin
        .pipe(sass({
            includePaths: ['assets/scss', 'bower_components/foundation/scss'],
            outputStyle: 'expanded'
        }))
        .pipe(prefix({
            browsers: ["last 2 versions", "> 1%", "ie 8", "Firefox ESR"],
            remove: false
        }))
        .pipe(cssshrink())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({stream: true}));
});

// Copy scripts
gulp.task('copyScripts', function() {
    return gulp.src(paths.copyScripts)
        .pipe(flatten())
        .pipe(gulp.dest('dist/js/'));
});


// Copy vendor scripts
gulp.task('vendorScripts', function() {
    return gulp.src(paths.vendorScripts)
        .pipe(flatten())
        .pipe(gulp.dest('dist/js/vendor/'));
});

// Copy vendor styles
gulp.task('vendorStyles', function() {
    return gulp.src(paths.vendorStyles)
      .pipe(flatten())
        .pipe(gulp.dest('dist/css/vendor/'));
});


// Uglify JS
gulp.task('uglify', function() {
    gulp.src( ['assets/js/theme.js'] )
        .pipe(plumber())
        .pipe(uglify({
            outSourceMap: false
        }))
        .pipe(gulp.dest('dist/js/min/'));
});

// Concat
gulp.task('concat', function() {
  gulp.src( paths.scripts )
    .pipe(plumber())
    .pipe(concat('theme.js'))
    .pipe(uglify({
        outSourceMap: false
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({stream: true}));
});

gulp.task('reloadPHP', function() {
  gulp.src( paths.php );
  reload();
});

// Watch files
gulp.task('watch', function(event) {
    gulp.watch(paths.php, ['reloadPHP']);
    gulp.watch(paths.scss, ['sass']);
    gulp.watch(paths.scripts, ['concat']);
    gulp.watch(paths.copyScripts, ['copyScripts']);
});

gulp.task('default', [ 'sass', 'concat', 'copyScripts', 'vendorScripts', 'vendorStyles', 'watch' ]);
