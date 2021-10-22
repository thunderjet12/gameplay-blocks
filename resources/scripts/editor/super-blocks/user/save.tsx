/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Block edit function
 */

interface propsTypes {
	
	attributes: {	
		className: string;
		content: string;

	};
	setAttributes: any;

}

class Save extends Component < propsTypes > {
	constructor( props: propsTypes ) {
		super( props );
	}
	
	render() {
		
		const { className } = this.props.attributes
		return (
			<div className={ className }>
				<InnerBlocks.Content />
			</div>
		);
	}


}

export default Save;
