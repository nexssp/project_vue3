let mix = require("laravel-mix");

mix.disableSuccessNotifications();
// const tailwindcss = require("tailwindcss");
mix
  .setPublicPath("dist")
  .js("src/app.js", "dist/")
  .vue({ version: 3, extractStyles: true, globalStyles: false })
  // .alias({ "@": "resources/js" })
  .sass("src/css/app.scss", "dist/")
  .options({
    processCssUrls: false,
    // postCss: [tailwindcss("./tailwind.config.js")],
  })
  .copy("src/index.html", "dist/");

//   .version();

mix.browserSync({
  host: "127.0.0.1",
  proxy: "localhost:8080",
  open: false,
  // files: [
  //   "app/**/*.php",
  //   "resources/views/**/*.php",
  //   "public/js/**/*.js",
  //   "public/css/**/*.css",
  // ],
  watchOptions: {
    usePolling: true,
    interval: 500,
  },
});
