export default {
  test: /\.tsx?$/,
  use: {
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/]
    }
  }
}