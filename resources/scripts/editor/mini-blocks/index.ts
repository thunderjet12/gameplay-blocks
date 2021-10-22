/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

// Register Mini Blocks
import * as latestnews from './latest-news';
import * as mostpopular from './most-popular';
// import * as gpmaincontent from './dynamic-gp-main-content';

export function registerBlocks() {
	[ latestnews, mostpopular ].forEach( ( block ) => {
		if ( ! block ) {
			// return;
		}
		const { name, category, settings }: any = block;
		registerBlockType( `${ name }`, { category, ...settings } );
	} );
}
registerBlocks();
