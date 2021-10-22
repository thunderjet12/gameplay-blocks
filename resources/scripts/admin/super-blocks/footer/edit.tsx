/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';

// import { ApolloProvider } from '@apollo/client';

// import Outlineclient from '../../apollo/clients/OutlineClient';
// import { any, string } from 'prop-types';

interface propsTypes {
	
	attributes: {
		className: string;
		currentTheme: string;	
		content: string;
	};
	

}

/**
 * Block edit function
 */
class Edit extends Component < propsTypes > {
	constructor( props: propsTypes ) {
		super( props );
	}
	render() {
		const {  attributes } = this.props;
		const templates = {
			"cleanreddredmp": [
				[ 'gameplayblocks/postslist', { className: 'tw-bg-yellow-500' } ],
				[ 'gameplayblocks/gpmaincontent', { className: 'tw-bg-green-500' } ],
			],
			"modernflat": [
				[ 'gameplayblocks/postslist', { className: 'tw-bg-blue-500' } ],
				[ 'core/cover', { className: 'tw-bg-red-500' } ],
				[ 'gameplayblocks/gpmaincontent', { className: 'tw-bg-orange-500' } ],
			],
		};
		// const activeTemplate: string = templates[ attributes.currentTheme ];

		return (
			// <ApolloProvider  client={ Outlineclient } >
				<div className={ attributes.className }>
					<InnerBlocks
						
						templateInsertUpdatesSelection={ true } 
						// allowedBlocks={ true } 
						// template={ activeTemplate }
					/>
				</div>
			/* </ApolloProvider> */
		);
	}
}

export default Edit;
