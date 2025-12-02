import gulp from "gulp";
import gulpShell from "gulp-shell";

// Task to build and run Parcel
gulp.task("parcel", gulpShell.task("npx parcel nd0011-c4-starter-main/starter/index.html"));
// Task to run Mocha unit tests
gulp.task("test", gulpShell.task("npx mocha"));

// Task to run Cypress e2e tests
gulp.task("cypress", gulpShell.task("npx cypress run"));

// Default task
gulp.task("default", gulp.series("parcel"));
