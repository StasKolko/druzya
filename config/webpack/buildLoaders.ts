import { RuleSetRule } from "webpack";
import { BuildOptions } from "./buildTypes";
import { typescriptLoader } from "./loaders/typescriptLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options

  const cssLoader = buildCssLoader(options)

  return [typescriptLoader, cssLoader]
}