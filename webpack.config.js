// /* global require, module, __dirname */

const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

const { NODE_ENV } = process.env;
const IS_PROD = NODE_ENV === 'production';
const IS_DEV = NODE_ENV === 'development';
// const IS_GITHUB = NODE_ENV === 'github';

const ENV_DATA_MAP = {
  production: {
    indexFilename: '../index.html',
    cleanPath: 'dist',
    devServer: {
      contentBase: './dist/',
    },

    output: {
      publicPath: './dist/',
      path: 'dist',
    },
  },

  development: {
    indexFilename: '../index.html',
    cleanPath: 'dist',
    devServer: {
      contentBase: './dist',
    },

    output: {
      publicPath: '/',
      path: '/',
    },
  },

  github: {
    indexFilename: '../index.html',
    cleanPath: 'docs',
    devServer: {
      contentBase: './docs/',
    },

    output: {
      publicPath: './docs/',
      path: 'docs',
    },
  },
};

const DERIVED_ENV = (NODE_ENV && ENV_DATA_MAP[NODE_ENV]) ? NODE_ENV : 'production';
const ENV_DATA = { ...ENV_DATA_MAP[DERIVED_ENV] };

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.jsx'
    ],
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, ENV_DATA.output.path),
    publicPath: ENV_DATA.output.publicPath,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'css-hot-loader',
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: require.resolve('file-loader'),
              limit: 8000,
              name: 'images/[hash]-[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              // webp: {
              //   quality: 60,
              //   lossless: true,
              // },

              mozjpeg: {
                progressive: true,
                quality: 85
              },

              optipng: {
                enabled: false,
              },

              pngquant: {
                quality: '65-75',
                speed: 4
              }
            },
          }
        ]
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'files/[hash]-[name].[ext]'
            }
          },
        ]
      }
    ]
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      state: path.resolve(__dirname, 'src/state'),
      styles: path.resolve(__dirname, 'src/components/styles'),
      utils: path.resolve(__dirname, 'src/utils'),
      data: path.resolve(__dirname, 'src/data'),
      images: path.resolve(__dirname, 'src/assets/images'),
      files: path.resolve(__dirname, 'src/assets/files'),
    },
    extensions: ['.js', '.jsx', '.svg', '.png', '.jpg', '.pdf']
  },

  devServer: {
    contentBase: ENV_DATA.output.publicPath,
    historyApiFallback: true,
    hot: true,
    overlay: true,
  },

  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [ENV_DATA.cleanPath] }),
    new CopyWebpackPlugin({ patterns: [{ from: './src/assets/images', to: 'assets/images' }] }),
    new HtmlWebpackPlugin({
      title: 'ReactTemplate',
      filename: ENV_DATA.indexFilename,
      inject: true,
      chunks: ['app'],
      template: require('html-webpack-template'), // eslint-disable-line
      appMountId: 'content',
      meta: [
        { name: 'viewport', content: 'width=device-width' }
      ],
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      APP_CONFIG: {
        ENV: JSON.stringify(DERIVED_ENV),
        PROD: JSON.stringify('production'),
        DEV: JSON.stringify('development'),
        IS_PROD: JSON.stringify(IS_PROD),
        IS_DEV: JSON.stringify(IS_DEV),
      }
    }),
    new Dotenv({
      path: './.env',
    }),
  ]
};
