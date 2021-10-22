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
	title: __( 'footer', 'gameplay blocks' ),
	description: __( 'provide outline container.', 'gameplay blocks' ),
	icon: 'editor-kitchensink',
	keywords: [
		__( 'container', 'block-builder' ),
		__( 'wrapper', 'block-builder' ),
		__( 'section', 'block-builder' ),
	],
	attributes,
	supports,
	edit: Edit,
	save: Save,
};
export { name, category, settings };
