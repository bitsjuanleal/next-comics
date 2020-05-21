const withStyles = require("@webdeb/next-styles");
const withFonts = require("next-fonts");

module.exports = withFonts({
  enableSvg: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
});
module.exports = withStyles({
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
});
