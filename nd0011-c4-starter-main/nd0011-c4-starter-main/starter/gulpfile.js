import gulp from "gulp";
import gulpShell from "gulp-shell";

// Task لتشغيل Parcel
gulp.task("parcel", gulpShell.task([
  "npx parcel index.html"
]));

// Task افتراضي يشغل Parcel مباشرة عند كتابة `npm run gulp`
gulp.task("default", gulp.series("parcel"));
