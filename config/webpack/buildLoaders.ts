import { RuleSetRule } from "webpack";
import { BuildOptions } from "./buildTypes";
import { typescriptLoader } from "./loaders/typescriptLoader";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options

  return [typescriptLoader]
}