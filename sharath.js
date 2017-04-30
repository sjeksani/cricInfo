var express = require('express');
var gulp = require('gulp');


var app = express();
app.use('/', express.static('public'));


gulp.task('express', function() {
    var server = app.listen(3000, function() {
        console.log("Hello, its started");
    });
});



gulp.task('default', ['express']);
