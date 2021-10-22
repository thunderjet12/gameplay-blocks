/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import Save from "./save"

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
	title: __( 'Gp Header', 'gameplay-blocks' ),
	description: __(
		'Display Header of any type ',
		'gameplay-blocks'
	),
	icon: 'excerpt-view',
	keywords: [
		__( 'Header', 'gameplay-blocks' ),
		__( 'site header', 'gameplay-blocks' ),
	],
	attributes,
	supports,
	edit: Edit,
	save: Save,
};
export { name, category, settings };
