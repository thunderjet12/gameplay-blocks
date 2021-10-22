/**
 * The internal dependencies.
 */
const  utils =  require('./resources/build/lib/utils.js');

const postcssImport = require('postcss-import');
const combineMediaQueries = require('./resources/build/lib/combine-media-queries');
const postcssDiscardComments = require('postcss-discard-comments');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
/**
 * Setup PostCSS plugins.
 */
// const plugins = [
//   postcssImport ,
//   [ "tailwindcss", { config: './resources/build/tailwind.config.js'} ],
//   ["autoprefixer", {
//   } ],
//   postcssDiscardComments,
//   combineMediaQueries
  

// ];

// /**
//  * Prepare the configuration.
//  */
// module.exports = {

//   plugins,
  
// };
// module.exports = {
//   plugins: {
//     'postcss-import': postcssImport,
//     tailwindcss: {},
//     autoprefixer: {},

//   },
// }

module.exports = {
  plugins: [
    () => postcssImport,
    // () => tailwindcss('./resources/build/tailwind.config.js'),
    () => autoprefixer,

  ],
}