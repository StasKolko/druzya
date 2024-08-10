import { RuleSetRule } from "webpack";

export const svgLoader: RuleSetRule = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
}