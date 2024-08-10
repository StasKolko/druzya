import { RuleSetRule } from "webpack";
import { BuildOptions } from "./buildTypes";
import { typescriptLoader } from "./loaders/typescriptLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { svgLoader } from "./loaders/svgLoader";
import { fileLoader } from "./loaders/fileLoader";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {

  const cssLoader = buildCssLoader(options)

  return [fileLoader, svgLoader, typescriptLoader, cssLoader]
}