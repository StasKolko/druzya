import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./buildTypes";

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const { isDev, paths } = options;

  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: "css/[contenthash:8].css",
      chunkFilename: "css/[contenthash:8].css",
    })
  ]

  if (isDev) {
    plugins.push(
      new ProgressPlugin()
    )
  }

  return plugins;
}