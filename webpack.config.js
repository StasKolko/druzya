const path = require('path');

module.exports = (env) => {
  const paths = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: path.resolve(__dirname, "dist"),
    src: path.resolve(__dirname, "src"),
    html: path.resolve(__dirname, "public", "index.html"),
  }

  const port = env.port || 3000

  const mode = env.mode || "development"
  const isDev = mode === "development"

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash:5].js',
      path: paths.output,
      clean: true
    },
  };
};