// module.exports = {
//   jquery: 'jQuery',
// };

/**
 * Utility methods for use when generating build configuration objects.
 */
// import { join } from "path" ;

/**
 * Given a string, returns a new string with dash separators converted to
 * camel-case equivalent. This is not as aggressive as `_.camelCase`, which
 * which would also upper-case letters following numbers.
 *
 * @param {string} string Input dash-delimited string.
 *
 * @return {string} Camel-cased string.
 */
// const camelCaseDash = ( string: string ) => string.replace( /-([a-z])/g, ( match, letter ) => letter.toUpperCase() );

// /**
//  * Define externals to load components through the wp global.
//  */
// const externalsMain = [
// 	'components',
// 	'api-fetch',
// 	'edit-post',
// 	'element',
// 	'plugins',
// 	'editor',
// 	'block-editor',
// 	'blocks',
// 	'hooks',
// 	'utils',
// 	'date',
// 	'data',
// 	'i18n',
// ].reduce(
// 	( externals, name ) => ( {
// 		...externals,
// 		[ `@wordpress/${ name }` ]: [ `@wordpress/${ name }` ],
// 	} ),
// 	{
// 		wp: 'wp',
// 		ga: 'ga', // Old Google Analytics.
// 		gtag: 'gtag', // New Google Analytics.
// 		jquery: 'jQuery', // import $ from 'jquery'; // Use jQuery from WP after enqueuing it.
// 		lodash: 'lodash', // Lodash is there in Gutenberg.
// 		cgbGlobal: 'cgbGlobal', // import globals from 'cgbGlobal'; // Localized data.
// 	}
// );
// const externals = {
// 	// "@wordpress/element":"@wordpress/element",
// 	// "@wordpress/plugins":"@wordpress/plugins",
// 	// "@wordpress/api-fetch":"@wordpress/api-fetch",
// 	// "@wordpress/components":"@wordpress/components",
// 	// "@wordpress/edit-post":"@wordpress/edit-post",
// 	// "@wordpress/blocks":"@wordpress/blocks",
// 	// "@wordpress/block-editor":"@wordpress/block-editor",
// 	// "@wordpress/hooks":"@wordpress/hooks",
// 	// "@wordpress/media-utils ":"@wordpress/media-utils ",
// 	// "@wordpress/date":"@wordpress/date",
// 	// "@wordpress/data":"@wordpress/data",
// 	// "@wordpress/i18n":"@wordpress/i18n",
// 	// "@wordpress/compose":"@wordpress/compose",
// 	// "@wordpress/edit-site":"@wordpress/edit-site",
// 	// "@wordpress/editor":"@wordpress/editor",
// 	// "react": 'react',
//     // 'react-dom': 'react-dom'
// }

// (node:8779) [DEP_WEBPACK_EXTERNALS_FUNCTION_PARAMETERS] DeprecationWarning: The externals-function 
// should be defined like ({context, request}, cb) => { ... }

const externals= {} ;
export default externals;