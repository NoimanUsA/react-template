export default [
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
      filename: 'fonts/[hash][ext]'
    }
  },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    parser: {
      dataUrlCondition: {
        maxSize: 8 * 1024
      }
    },
    generator: {
      filename: 'images/[name].[hash][ext]'
    }
  },
]