import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./buildTypes";

import HtmlWebpackPlugin from 'html-webpack-plugin';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const { isDev, paths } = options;

  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html
    })
  ]

  if (isDev) {
    plugins.push(
      new ProgressPlugin()
    )
  }

  return plugins;
}