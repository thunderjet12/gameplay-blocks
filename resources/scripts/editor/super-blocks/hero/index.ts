/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import  metadata from './block.json';
import Edit from './edit';
import Save from './save';


/**
 * Style dependencies
 */
import './editor.scss';
import './style.scss';

/**
 * Block constants
 */
const { name, category, attributes, supports } = metadata;
// declare module  props {
// 	attributes: {
// 		className: string,
// 		content: string,
// 		currentTheme: string,
// 	};
// }
// function writeFile( filePath ) {
// 	const csvHeaders = 'name,quantity,price';
// 	fs.writeFile( filePath,  csvHeaders, { type: "application/json"} ,function(err) {
// 			if (err) throw err;
// 			fs.readFile(filePath, 'utf-8', function(err, data) {
// 				console.log(data);
// 			}	)
// 		}
// 	)
// }
// let filetest =  absolutePluginsDirPath + "/blueprints/test.json";
// console.log( filetest )
// writeFile( filetest )


const settings = {
	title: __( 'Hero', 'gameplay blocks' ),
	description: __( 'Hero block', 'gameplay blocks' ),
	icon: 'editor-kitchensink',
	keywords: [
		__( 'hero', 'gameplay-blocks' ),
		__( 'wrapper', 'block-builder' ),
		__( 'section', 'block-builder' ),
	],
	attributes,
	supports,
	edit: Edit,
	save: Save,
};
export { name, category, settings, attributes };
