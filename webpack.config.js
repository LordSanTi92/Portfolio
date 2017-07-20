module.exports = {
  entry:['whatwg-fetch', "./js/components/app.jsx"],
  output: {
    filename: "./js/out.js"
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001
  },
  watch: true,
  module: {
    loaders: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2017','es2015','stage-2', 'react'] }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
          loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]',
              }
    },
    ]
  }
}
