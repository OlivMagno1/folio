const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/index/main.js",
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    cafe: "src/cafe/main.js",
  }
});
