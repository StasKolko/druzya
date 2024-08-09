import { Configuration } from "webpack"
import { BuildOptions } from "./buildTypes";

import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

export const buildConfig = (options: BuildOptions): Configuration => {
  const { mode, port, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash:5].js',
      path: paths.output,
      clean: true
    },
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(options),
    resolve: buildResolves(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}