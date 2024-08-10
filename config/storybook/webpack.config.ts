import { RuleSetRule, Configuration } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../webpack/loaders/buildCssLoader';
import { svgLoader } from '../webpack/loaders/svgLoader';

export default ({ config }: { config: Configuration }) => {
  const src: string = path.resolve(__dirname, '..', '..', 'src');
  config.resolve.modules.push(src);
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module.rules.push(svgLoader);
  config.module.rules.push(buildCssLoader(true));

  return config;
};
