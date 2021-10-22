/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import toReact from "svelte-adapter/react";
import Inspector from './Inspector';
import HeroComponent from  "../../../admin/components/hero/HeroComponent.svelte";

// declare module "svelte-adapter/react";
const baseStyle = {
	
  };
  
const SvelteInReact = toReact(HeroComponent, baseStyle, "div");

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
	HeaderWebComponent: any;
}

// interface WebComponentProps {
// 	question: string;
// 	fixedBonus: number;
// 	variableBonus: number;
// 	minInvest: number;
// 	maxInvest: number;
//  }

/**
 * Block edit function
 */
//"editorStyle": "file:../../../../dist/styles/editor.min.css"
class Edit extends Component < propsTypes > {
	constructor( props: propsTypes ) {
		super( props );
	}
	render() {
		const {  attributes, setAttributes } = this.props;
		
		return (
			<>
			{/* <Inspector attributes={attributes} setAttributes={ setAttributes } /> */}
			<div className={ attributes.className }>
				{/* <div className="gp-app-wrapper">

				</div> */}
				<SvelteInReact />
				
				{/* <InnerBlocks
					
				/> */}
			</div>
			</>
		);
	}
}

export default Edit;
