import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";

export type MergedConfigs = Configuration & DevServerConfiguration;
export interface Env {
  WEBPACK_BUILD?: string,
  WEBPACK_SERVE?: string,
}