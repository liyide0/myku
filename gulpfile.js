let gulp = require('gulp');//等价于HTML代码：<script src='gulp.js'>
//合并
let concat = require('gulp-concat');
//压缩js
// let uglify = require('gulp-uglify');
//重命名
// let rename = require('gulp-rename');
//压缩css
let minfyCss = require('gulp-minify-css');
//图片
// let imagemin = require('gulp-imagemin');
//sass
// let sass = require('gulp-sass');

//这个任务：把当前目录下的index.html文件拷贝到服务器目录
// gulp.task("copy-html", async ()=>{
// 	gulp.src("oppo/*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo"));
// });
// gulp.task("copy-css", async ()=>{
// 	gulp.src("oppo/css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\css"));
// });
gulp.task("copy-img", async ()=>{
	gulp.src("imgs/**/*.{jpg,png}").pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\imgs"));
});
//建立一个监听的任务
gulp.task("watchall",async ()=>{
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo"));
	});
	gulp.watch("css/*.css",async ()=>{
		gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\css"));
	});
	gulp.watch("php/*.php",async ()=>{
		gulp.src("php/*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\php"));
	});
	gulp.watch("imgs/**/*.{jpg,png}",async ()=>{
		gulp.src("imgs/**/*.{jpg,png}").pipe(gulp.dest("D:\\phpStudy\\WWW\oppo\\imgs"));
	});
	gulp.watch(["js/*.js"],async ()=>{
		gulp.src("js/*.js")
		// .pipe(uglify())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\js"));
	});
	gulp.watch("css/*.css",async ()=>{
		gulp.src("css/*.css")
		.pipe(minfyCss())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\css"));
	});
// 	gulp.watch("sass/**/*.scss",async ()=>{
// 		gulp.src("sass/**/*.scss")
// 		.pipe(sass())
// 		.pipe(gulp.dest("D:\\phpStudy\\WWW\\oppo\\css"));
// 	});
});