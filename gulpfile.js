var { src, dest, watch } = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

function connectServer() {
    connect.server({
        root: 'public',
        livereload: true,
        host: '0.0.0.0'
    });
};

function scss() {
    return src('./sass/*.scss')
        .pipe(sass({ errLogToConsole: true, outputStyle: 'compressed' }))
        .pipe(dest('./public/css'));
};

function livereload() {
    return src('./public/**/*')
        .pipe(connect.reload());
};

exports.default = function () {
    connectServer();
    watch('./sass/**/*.scss', scss);
    watch('./public/**/*', livereload);
    scss();
};
