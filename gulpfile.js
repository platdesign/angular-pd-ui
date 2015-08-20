'use strict';

var gulp = require('gulp');



// Load sass generator
var sass = require('pd-gulp-sass')(gulp);

sass.register({
	example: {
		src: './example/assets/scss/*.scss',
		dest: './example/public/css'
	}
},{
	watch: {
		watch: [
			'./example/assets/scss/**/*.scss',
			'./src/**/*.scss'
		]
	}
});



// Load js generator
var js = require('pd-gulp-js')(gulp);

js.register({
	example: {
		src: './example/assets/js/*.js',
		dest: './example/public/js'
	}
});



