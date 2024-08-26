import { Configuration as WebpackConfig, RuleSetRule } from "webpack";

const cracoConfig = {
  webpack: {
    configure: (config: WebpackConfig): WebpackConfig => {
      const rules =
        config.module?.rules?.filter(
          (rule): rule is RuleSetRule => rule !== undefined
        ) || [];

      return {
        ...config,
        module: {
          ...config.module,
          rules: rules.map((rule: RuleSetRule) => {
            if (Array.isArray(rule.oneOf) && rule.oneOf.length > 0) {
              // eslint-disable-next-line no-param-reassign
              const lastOneOfRule = rule.oneOf[rule.oneOf.length - 1];
              if (lastOneOfRule) {
                lastOneOfRule.exclude = [
                  /\.(js|mjs|jsx|cjs|ts|tsx)$/,
                  /\.html$/,
                  /\.json$/,
                ];
              }
            }
            return rule;
          }),
        },
      };
    },
  },
};

export default cracoConfig;
