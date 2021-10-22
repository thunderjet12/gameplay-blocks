/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';
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

const settings = {
	title: __( 'most-popular', 'gameplayblocks' ),
	description: __( 'Provide custom container.', 'gameplayblocks' ),
	icon: 'editor-kitchensink',
	keywords: [
		__( 'most-popular', 'gameplayblocks' ),
		__( 'wrapper', 'gameplayblocks' ),
		__( 'section', 'gameplayblocks' ),
	],
	attributes,
	supports,
	edit: Edit,
	save: Save,
};
export { name, category, settings };
