import { RuleSetRule } from "webpack";
import { BuildOptions } from "../buildTypes";

export const buildCssLoader = (options: BuildOptions): RuleSetRule => {
  const { isDev } = options

  return {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => Boolean(resourcePath.includes(".module.")),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:5]"
          }
        }
      },
      "sass-loader",
    ],
  }
}