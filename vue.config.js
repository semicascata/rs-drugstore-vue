const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../src/public"),
  devServer: {
    proxy: {
      "/shelter/v1": {
        target: "http://localhost:3000"
      }
    }
  }
};
