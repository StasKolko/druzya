import { ResolveOptions } from 'webpack';
import { BuildOptions } from './buildTypes';

export const buildResolves = ({ paths }: BuildOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  alias: {},
  modules: [paths.src, 'node_modules'],
  mainFiles: ['index'],
});
