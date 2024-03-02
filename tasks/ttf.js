const folders = require("./folder").folders;

const { src, dest } = require("gulp");
const changed = require("gulp-changed");
const ttf2woff2 = require("gulp-ttftowoff2");
const ttf2woff = require("gulp-ttf2woff");

module.exports = function ttf(done) {
  src("src/assets/fonts/**/*.ttf")
    .pipe(
      changed(folders.fonts, {
        extension: ".woff2",
        hasChanged: changed.compareLastModifiedTime,
      })
    )
    .pipe(ttf2woff2())
    .pipe(dest("build/fonts"));

  src("src/assets/fonts/**/*.ttf")
    .pipe(
      changed(folders.fonts, {
        extension: "woff",
        hasChanged: changed.compareLastModifiedTime,
      })
    )
    .pipe(ttf2woff())
    .pipe(dest(folders.fonts));
  done();
};
