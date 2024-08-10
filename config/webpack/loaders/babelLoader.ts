import { RuleSetRule } from "webpack";

export const babelLoader: RuleSetRule = {
  test: /\.(js|ts|jsx|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ['@babel/preset-env']
    }
  }
}