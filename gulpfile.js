const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');

const tsProject = ts.createProject('tsconfig.json');


gulp.task('clean',()=>{
    return gulp.src('dist',{read:false}).pipe(clean({force:true}));
});

gulp.task('scripts',['clean'] ,()=>{

    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('copyHtml',()=>{
    return gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts', 'copyHtml'],()=>{
    
    gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('default', ['scripts','copyHtml']);