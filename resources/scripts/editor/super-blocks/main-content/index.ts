/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';


/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import Save from './save'

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
	title: __( 'Main Content', 'gameplayblocks' ),
	description: __(
		'Display posts list with defined number of items to be shown.',
		'gameplayblocks'
	),
	icon: 'excerpt-view',
	keywords: [
		__( 'posts', 'gameplayblocks' ),
		__( 'post', 'gameplayblocks' ),
		__( 'blog', 'gameplayblocks' ),
	],
	attributes,
	supports,
	edit: Edit,
	save: Save,
};
export { name, category, settings };
