import { merge } from "webpack-merge";
import { MergedConfigs as Configuration, Env } from "./.webpack/types";
import development from "./.webpack/webpack.config.development";
import common from "./.webpack/webpack.config.common";
import production from "./.webpack/webpack.config.production";

export default (env: Env) => {
  const isProduction = !!env.WEBPACK_BUILD;

  if (isProduction) {
    return merge<Configuration>(common, production);
  }
  return merge<Configuration>(common, development);
};
