"use strict";

const { doesNotMatch } = require("assert");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const addVersionString = require("gulp-rev-all");
const debug = require("gulp-debug");

const versionConfig = {
  value: "%DT%",
  append: {
    key: "v",
    to: ["css", "js"],
  },
  dontRenameFile: [/^\/favicon.ico$/g, ".html"],
};

function buildStyles() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./css"));
}

function buildCSSDist() {
  return gulp
    .src(["./css/**/*.css", "./css/**/*.map"])
    .pipe(debug({ minimal: false }))
    .pipe(gulp.dest("./build/css/"));
}

function buildHTMLDist() {
  return gulp.src("./*.html").pipe(debug()).pipe(gulp.dest("./build/"));
}

function versionFiles() {
  return gulp.src("./build/**/*").pipe(addVersionString.revision(versionConfig)).pipe(debug()).pipe(gulp.dest("./build/"));
}

exports.buildStyles = gulp.series(buildStyles, buildHTMLDist, buildCSSDist, versionFiles);
exports.watch = function () {
  gulp.watch("./sass/**/*.scss", buildStyles);
};
