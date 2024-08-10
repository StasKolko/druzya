import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from 'webpack';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './buildTypes';

export const buildPlugins = (options: BuildOptions):
  WebpackPluginInstance[] => {
  const { isDev, paths } = options;

  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash:8].css',
      chunkFilename: 'css/[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
    plugins.push(
      new ProgressPlugin(),
      new HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
};
