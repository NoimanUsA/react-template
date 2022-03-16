import * as path from 'path';
import { merge } from 'webpack-merge';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import common from './webpack.common.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
});
