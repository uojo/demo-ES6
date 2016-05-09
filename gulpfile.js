/**
 *@gulpfile.js
 *@uojo
 */
var gulp = require('gulp'),
		livereload = require('gulp-livereload'),
		babel = require('gulp-babel');


gulp.task('built', function(){
		gulp.src(['src/*.js'])
			.pipe(babel({presets: ['es2015']}))
			.pipe(gulp.dest("dist"));
});

gulp.task('wt', function(){
	// console.log("change");
	gulp.watch("src/*.js",["built"]);
	// gulp.src("test/index.js").pipe(livereload());
});

gulp.task('testIndex', function(){
	// console.log("change");

	gulp.src("dist/1.js").pipe(livereload());
});

gulp.task('test', function(){
	livereload.listen();
  gulp.watch(['*','*/*','*/*/*','*/*/*/*','*/*/*/*/*'], ["built","testIndex"]);
});
