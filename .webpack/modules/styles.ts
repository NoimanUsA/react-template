import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as path from 'path';

export default {
  dev: {
    test: /\.s[ac]ss$/i,
    use: [
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              "autoprefixer"
            ],
          },
        }
      },
      'sass-loader',
    ],
  },
  prod: {
    test: /\.s[ac]ss$/i,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: path.resolve(__dirname, '../../dist'),
        }
      },
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              "autoprefixer"
            ],
          },
        }
      },
      'sass-loader',
    ],
  },
}