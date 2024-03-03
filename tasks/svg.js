const folders = require("./folder").folders;

const { src, dest } = require("gulp");
const changed = require("gulp-changed");

const bs = require("browser-sync");

module.exports = function svg() {
  return src("src/assets/svg/**/*.svg")
    .pipe(changed(folders.svg))
    .pipe(dest(folders.svg))
    .pipe(bs.stream());
};
