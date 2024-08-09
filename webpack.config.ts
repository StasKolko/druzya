import path from 'path';

import { BuildEnv, BuildMode, BuildPaths } from './config/webpack/buildTypes';
import { buildConfig } from './config/webpack/buildConfig';
import { Configuration } from 'webpack';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "dist"),
    src: path.resolve(__dirname, "src"),
    html: path.resolve(__dirname, "public", "index.html"),
  }

  const port: number = env.port || 3000

  const mode: BuildMode = env.mode || "development"
  const isDev: boolean = mode === "development"

  const config: Configuration = buildConfig({ port, mode, paths, isDev })

  return config;
};