/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
// import HologramNewsCalouselTemplate from './templates/hologramNewsCalouselTemplate';

interface propsTypes {
	
	attributes: {	
		className: string;
		content: any;

	};
	setAttributes: any;

}

/**
 * Block edit function
 */
class Edit extends Component <propsTypes> {

	constructor( props: propsTypes ) {
		super(props);
	}

	render() {
		const { className } = this.props.attributes;

		return (
			<div className={className}>
				<InnerBlocks
					// renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>
				{/* <HologramNewsCalouselTemplate /> */}
			</div>
		);
	}
}

export default Edit;
