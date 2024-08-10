import { RuleSetRule } from "webpack";

export const fileLoader: RuleSetRule = {
  test: /\.(png|jpe?g|gif|webp|woff|woff2|ttf)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
}