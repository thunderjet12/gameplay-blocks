/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { Fragment, Component } from '@wordpress/element';
import { PanelBody, RangeControl } from '@wordpress/components';

interface propsTypes {
	
	attributes: {
		className: string;
		postsToShow: number;	
		content: string;
		
	};
	setAttributes: any;

}

/**
 * Inspector controls
 */
class Inspector extends Component < propsTypes > {
	render() {
		const { attributes, setAttributes } = this.props;

		const { postsToShow } = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Post Settings', 'block-builder' ) }>
						<RangeControl
							label={ __( 'Number of posts', 'block-builder' ) }
							help={ __(
								'Change the number of posts displayed.',
								'block-builder'
							) }
							value={ postsToShow }
							onChange={ ( value ) =>
								setAttributes( { postsToShow: value } )
							}
							min={ 2 }
							max={ 20 }
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;
