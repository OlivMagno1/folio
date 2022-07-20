const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/index/main.js",
      title: 'Magno Oliveira - Portfolio',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    cafe: {
      entry: "src/cafe/main.js",
      title: 'Magno Oliveira - Cafe',
  }
});
