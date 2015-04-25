//
//require gulp module
//
var gulp = require('gulp');

//
//plugin
//
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var server = require( 'gulp-develop-server' );
var livereload = require( 'gulp-livereload' );

var options = {
    path: 'app.js'
};
 
var serverFiles = [
    'app.js',
    'routes/*.js'
];


//
//tasks
//
gulp.task('bundle-js', function () {
	return gulp.src('private/js/*.js')
		.pipe(concat('main.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('public/javascripts'))
})


//
// run server & restart server
//
gulp.task( 'server:start', function() {
    server.listen( options, livereload.listen );
});
 
gulp.task( 'server:restart', function() {
    gulp.watch( [ 'app.js' ], server.restart );
});


//
//watch
//
gulp.task('watch-js', function () {
    watch('private/js/*.js', batch(function () {
        gulp.start('bundle-js').start('watch-js');
    }));
});

//gulp.task('watch-routes', function () {
//    watch(['routes/*.js', 'app.js'], batch(function () {
//        gulp.start('watch-routes').start('server-restart');
//    }));
//});


//
//default
//
gulp.task('default', ['watch-js', 'server:start'], function() {
    
    function restart( file ) {
        server.changed( function( error ) {
            if( ! error ) livereload.changed( file.path );
        });
    }
 
    gulp.watch( serverFiles ).on( 'change', restart );
});