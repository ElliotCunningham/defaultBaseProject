const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const isProd = process.env.NODE_ENV === 'production';

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(isProd === false)),
  __APPNAME__: 'Boiler plate'
});

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter((x) => {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach((mod) => {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const frontEnd = {
  entry: {
    main: ['babel-polyfill', `./front/app/Main.js`]
  },
  devServer: {
    inline: true,
    contentBase: `./front/build/app/public/`
  },
  devtool: 'eval',
  debug: true,
  output: {
    path: path.join(__dirname, '../', 'build', 'app', 'public'),
    filename: 'front.bundle.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    definePlugin,
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.IgnorePlugin(/vertx/), // https://github.com/webpack/webpack/issues/353
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   mangle: true
    // })
  ],

  resolve: {
    extensions: ['', '.js', '.css', '.ttf', '.eot', '.woff'],
    modulesDirectories: [
      'node_modules',
      'bower_components'
    ]
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css']},
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(jpg|png|gif|svg)/, loader: 'url-loader'},
      { test: /\.(eot|ttf|woff)/, loader: 'url-loader'}
    ]
  }
};

module.exports = [frontEnd];