const bs = require("browser-sync").create();

bs.init({
  server: "html",
  files: ['html/**'],
});
