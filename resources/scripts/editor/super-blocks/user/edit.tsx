/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';

type SaveProps = {
	"className": string
}

/**
 * Block edit function
 */
class Edit extends Component < { className: string },
	{ ButtonBlockAppender:{ ButtonBlockAppender: string } },
	{ children: any } 
	> {
		
	render() {
		const { className } = this.props;

		return (
			<div className={ className }>
				<InnerBlocks
					// renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>
			</div>
		);
	}
}

export default Edit;
