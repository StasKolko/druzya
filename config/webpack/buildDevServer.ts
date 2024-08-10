import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './buildTypes';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  const { port } = options;

  return {
    port,
    open: true,
    hot: true,
    historyApiFallback: true,
  };
};
