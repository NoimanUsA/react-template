import stylesRules from './modules/styles';
import { MergedConfigs as Configuration } from './types';

export default {
  mode: 'development',
  devServer: {
    static: '../dist',
    port: 1337,
    compress: true,
    hot: true,
    liveReload: false,
    historyApiFallback: true,
  },
  module: {
    rules: [
      stylesRules.dev,
    ]
  },
  stats: {
    errorDetails: true
  },
} as Configuration;
