// Gulp
var gulp = require('gulp');

// Plugins
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
//var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var reload = browserSync({
        proxy: "egroup.dev"
    }).reload;

// Paths
var paths = {
    scripts: [
        'bower_components/modernizr/modernizr.js',
        'bower_components/fastclick/lib/fastclick.js',
        'bower_components/foundation/js/foundation/foundation.js',
        //'bower_components/foundation/js/foundation/foundation.interchange.js',
        //'bower_components/foundation/js/foundation/foundation.tooltip.js',
        //'bower_components/foundation/js/foundation/foundation.equalizer.js',
        'assets/js/skip-link-focus-fix.js',
        'assets/js/navigation.js',
        'assets/js/theme.js'
        ],
    images: ['assets/images/**'],
    fonts: ['assets/fonts/**'],
    scss: [
        './assets/scss/*.scss',
        './assets/scss/components/*.scss',
        './assets/scss/media/*.scss',
        './assets/scss/layout/*.scss'
        ]
};

// Compile Sass

gulp.task('sass', function() {
    gulp.src(paths.scss)
        .pipe(plumber())
        .pipe(sass({
            includePaths: ['assets/scss', 'bower_components/foundation/scss'],
            outputStyle: 'expanded'
        }))
        .pipe(prefix(
            "last 2 versions", "> 1%", "ie 8"
        ))
        .pipe(minifycss())
        .pipe(gulp.dest('./assets/css'))
        .pipe(reload({stream: true}));;
});

// Uglify JS
gulp.task('uglify', function() {
    gulp.src( ['assets/js/theme.js'] )
        .pipe(plumber())
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest('assets/js/min/'));
});

// Concat
gulp.task('concat', function() {
  gulp.src( paths.scripts )
    .pipe(plumber())
    .pipe(concat('theme.js'))
    .pipe(uglify({
        outSourceMap: true
    }))
    .pipe(gulp.dest('assets/js/dist'))
    .pipe(reload({stream: true}));
});

// Watch files
gulp.task('watch', function(event) {

    gulp.watch(['*.php','**/*.php']).on('change', reload);

    gulp.watch(paths.scss, ['sass']);
    gulp.watch(paths.scripts, ['concat']);
});

gulp.task('default', [ 'sass', 'concat', 'watch' ]);
