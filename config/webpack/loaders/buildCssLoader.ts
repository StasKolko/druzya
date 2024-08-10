import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../buildTypes';

export const buildCssLoader = ({ isDev }: BuildOptions): RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
          localIdentName: isDev ? '[path][name]__[hash:base64:5]' : '[hash:base64:5]',
        },
      },
    },
    'sass-loader',
  ],
});
