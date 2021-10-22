import {
    BlockControls,
    InspectorControls,
} from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker } from '@wordpress/components';
// import { more } from '@wordpress/icons';
// import { __experimentalGetSettings } from '@wordpress/date';
import { withState, compose } from '@wordpress/compose';

 
interface propsTypes {
	
	attributes: {	
		className: string;
		alignment: string;
		date: number;
		content: string;
		favoriteAnimal: string;
		myRichHeading: string;
		myRichText: string;
		toggle: boolean;
		favoriteColor: string;
		activateLasers: boolean;
	};
	setAttributes: any;

}


 const Inspector = ( props: propsTypes ) => {

    const { setAttributes, attributes } = props;

    

  return (
      <>
			<InspectorControls>
			<PanelBody
				title="Most awesome settings ever"
				initialOpen={true}
			>
				<PanelRow>
					<ToggleControl
						label="Toggle me"
						checked={attributes.toggle}
						onChange={(newval) => setAttributes({ toggle: newval })}
					/>
				</PanelRow>
				<PanelRow>
					<SelectControl
						label="What's your favorite animal?"
						value={attributes.favoriteAnimal}
						options={[
							{label: "Dogs", value: 'dogs'},
							{label: "Cats", value: 'cats'},
							{label: "Something else", value: 'weird_one'},
						]}
						onChange={(newval) => setAttributes({ favoriteAnimal: newval })}
					/>
				</PanelRow>
				<PanelRow>
					<ColorPicker
						color={attributes.favoriteColor}
						onChangeComplete={(newval) => setAttributes({ favoriteColor: newval.hex })}
						disableAlpha
					/>
				</PanelRow>
				<PanelRow>
					<CheckboxControl
						label="Activate lasers?"
						checked={attributes.activateLasers}
						onChange={(newval) => setAttributes({ activateLasers: newval })}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
      </>
  )
}

export default Inspector