/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';

interface propsTypes {
	
	attributes: {	
		className: string;
		content: string;
		currentTheme: string;
		
	};
	

}

/**
 * Block edit function
 */
class Save extends Component < propsTypes > {
	constructor( props: propsTypes ) {
		super( props );
	}
	render() {
		// let blockProps <T>( arg: T ) = useBlockProps.save();
		return (
			<div  >
				<InnerBlocks.Content/>
			</div>

		)
	}
}

export default Save;
