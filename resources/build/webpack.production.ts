/**
 * The external dependencies.
 */
import { Configuration as WebpackConfiguration, ProvidePlugin, WatchIgnorePlugin } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ImageminWebpackPlugin  from "imagemin-webpack-plugin";
// .default
import { WebpackManifestPlugin } from "webpack-manifest-plugin";

interface Configuration extends WebpackConfiguration {}

/**
 * The internal dependencies.
 */
import * as utils from './lib/utils';
import configLoader from "./config-loader";
import spriteSmith from "./spritesmith";
import spriteSvg from "./spritesvg";
import postcss from "./postcss";

/**
 * Setup the env.
 */
const env = utils.detectEnv();

/**
 * Setup babel loader.
 */
const babelLoader = {
  loader: 'babel-loader',
  options: {
  //   cacheDirectory: false,
  //   comments: false,
  //   presets: [
  //     'env',
  //     // airbnb not included as stage-2 already covers it
  //     'stage-2',
  //   ],
  // },
}
};

/**
 * Setup webpack plugins.
 */
const plugins = [
  new WatchIgnorePlugin({
    paths: [utils.distImagesPath('sprite.png'),
    utils.distImagesPath('sprite@2x.png'), ]
  }),
  new ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
  new MiniCssExtractPlugin({
    filename: `styles/[name]${env.filenameSuffix}.css`,
  }),
  spriteSmith,
  spriteSvg,
  new ImageminWebpackPlugin({
    optipng: {
      optimizationLevel: 7,
    },
    gifsicle: {
      optimizationLevel: 3,
    },
    svgo: {
      plugins: [
        { cleanupAttrs: true },
        { removeDoctype: true },
        { removeXMLProcInst: true },
        { removeComments: true },
        { removeMetadata: true },
        { removeUselessDefs: true },
        { removeEditorsNSData: true },
        { removeEmptyAttrs: true },
        { removeHiddenElems: false },
        { removeEmptyText: true },
        { removeEmptyContainers: true },
        { cleanupEnableBackground: true },
        { removeViewBox: true },
        { cleanupIDs: false },
        { convertStyleToAttrs: true },
      ],
    },
    plugins: [
      require('imagemin-mozjpeg')({
        quality: 100,
      }),
    ],
  }),
  new WebpackManifestPlugin(),
];

// When doing a combined build, only clean up the first time.
if (process.env.WPEMERGE_COMBINED_BUILD && env.isDebug) {
  plugins.push( new CleanWebpackPlugin() )
}


// if (process.env.WPEMERGE_COMBINED_BUILD && env.isDebug) {
//   plugins.push(new CleanWebpackPlugin(utils.distPath(), {
//     root: utils.rootPath(),
//   }));
// }

/**
 * Export the configuration.
 */
const productionConfig: Configuration = {
  /**
   * The input.
   */
  entry: require('./webpack/entry'),

  /**
   * The output.
   */
  output: require('./webpack/output'),

  /**
   * Resolve utilities.
   */
  resolve: require('./webpack/resolve'),

  /**
   * Resolve the dependencies that are available in the global scope.
   */
  externals: require('./webpack/externals'),

  /**
   * Setup the transformations.
   */
  module: {
    rules: [
      /**
       * Add support for blogs in import statements.
       */
      {
        enforce: 'pre',
        test: /\.(js|jsx|css|scss|sass|ts|tsx)$/,
        use: 'import-glob',
      },

      /**
       * Handle config.json.
       */
      {
        type: 'javascript/auto',
        test: utils.rootPath('config.json'),
        use: configLoader,
      },

      /**
       * Handle scripts.
       */
      {
        test: utils.tests.scripts,
        exclude: /node_modules/,
        use: babelLoader,
      },

      /**
       * Handle styles.
       */
      {
        test: utils.tests.styles,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: postcss,
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: env.isDebug ? 'compact' : 'compressed',
              },
            },
          },
        ],
      },

      /**
       * Handle images.
       */
      {
        test: utils.tests.images,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: file => `[name].${utils.filehash(file).substr(0, 10)}.[ext]`,
              outputPath: 'images',
            },
          },
        ],
      },

      /**
       * Handle SVG sprites.
       */
      {
        test: utils.tests.spriteSvgs,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'images/sprite.svg',
            },
          },
        ],
      },

      /**
       * Handle fonts.
       */
      {
        test: utils.tests.fonts,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: file => `[name].${utils.filehash(file).substr(0, 10)}.[ext]`,
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },

  /**
   * Setup the transformations.
   */
  plugins,

  /**
   * Setup optimizations.
   */
  optimization: {
    minimize: env.minify,
  },

  /**
   * Setup the development tools.
   */
  mode: 'production',
  cache: false,
  bail: false,
  watch: false,
  devtool: false,
};
export default productionConfig