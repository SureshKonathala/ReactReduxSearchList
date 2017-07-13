var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname,'src');
var BUILD_DIR = path.resolve(__dirname,'dist');

var config = {
  entry: ['webpack-dev-server/client?http://localhost:5000',  //Webpack dev server for hot load
          'webpack/hot/only-dev-server',
          APP_DIR+'/index.js'     // App's entry point
        ],
  output: {
    path: BUILD_DIR,
    publicPath: "dist/",
    filename: "bundle.min.js"
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", '.jsx','scss','sass']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
      loaders: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            exclude: /(node_modules)/
          },
          { test: /\.css$/,
            loader: "style-loader!css-loader"
          },
          { test: /\.(scss|sass)$/,
            loaders: ["style-loader","css-loader","postcss-loader"]
          },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "react-hot-loader"
          },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            query: {
              presets: ['react', 'es2015', 'stage-0'],
              plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
          }
      ],

  },
  // postcss: function(){
  //   return [autoprefixer,precss];
  // },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM"
  // }

};

module.exports = config;
