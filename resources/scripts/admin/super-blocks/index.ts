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
import { registerBlockType } from  "@wordpress/blocks";

// Register Blocks
// import * as postslists from './dynamic-postslist';
import * as gpfooter from './footer';
import * as gpheader from './header';
import * as gpmaincontent from './main-content';
import * as gphero from './hero';


// You can specify which plugins you need
// import { Tooltip, Toast, Popover } from 'bootstrap';

// import "./scss/main.scss"

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty( '--vh', `${vh}px` );



let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty( '--vw', `${vw}px` );


if( vw > vh ) {
    document.documentElement.style.setProperty( '--vmin', `${vw}px` );
} else  {
    document.documentElement.style.setProperty( '--vmin', `${vh}px` );
}



export function registerBlocks() {
	[  gpheader, gpfooter, gpmaincontent, gphero ].forEach( ( block ) => {
		if ( ! block ) {
			// return;
		}
		const { name, category, settings }: any = block;
		registerBlockType( `${ name }`, { category: category, ...settings } );
	} );
	
	
}
registerBlocks();
