/* 
* @Author: Marte
* @Date:   2017-11-09 17:35:06
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-10 20:55:16
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
 
//创建任务
//运行任务(登录页面)
gulp.task('allSass',function(){
    //查找文件位置
    gulp.src('./src/sass/*.scss')

    .pipe(sass({outputStyle: 'expanded'}).on('sass',sass.logError))
    .pipe(gulp.dest('./src/css/'))
});

//创建监听文件的任务
gulp.task('listenSass',function(){
    gulp.watch('./src/sass/*.scss',['allSass']);
})