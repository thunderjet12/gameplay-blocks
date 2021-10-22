/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
// import { InnerBlocks } from '@wordpress/block-editor';
import  {
    RichText,
    AlignmentToolbar,
    BlockControls,
} from "@wordpress/block-editor";

interface propsTypes {
	className: string;
	attributes: {};
	setAttributes: any;
}

/**
 * Block edit function
 */
class Save extends Component < propsTypes > {


	componentDidMount()
 {
		// let testt =  path.resolve('./blueprints/test.json');
		// console.log( testt )
		// async function writeFile( filePath ) {
		// 	try {
		// 		const csvHeaders = 'name,quantity,price';
		// 		await fs.writeFile( filePath,  csvHeaders )
		// 	} catch ( error ) {
		// 		console.error(`Got an error trying to write to a file: ${error.message}`);
		// 	}
		// }

		// writeFile( testt );
		// function writeFile( filePath ) {
		// 	const csvHeaders = 'name,quantity,price';
		// 	fs.writeFile( filePath,  csvHeaders, { type: "application/json"} ,function(err) {
		// 			if (err) throw err;
		// 			fs.readFile(filePath, 'utf-8', function(err, data) {
		// 				console.log(data);
		// 			}	)
		// 		}
		// 	)
		// }
		// let filetest =  absolutePluginsDirPath + +"/blueprints/test.json";
		// writeFile( filetest )

	}

	render() {
		// const { className  } = this.props;
		// let dictstring = JSON.stringify(dict);
		// // const blockProps = useBlockProps.save();
		// let dict = {"one" : [15, 4.5],
        //     "two" : [34, 3.3],
        //     "three" : [67, 5.0],
        //     "four" : [32, 4.1]};


		// let testt =  'blueprints/test.json';
		// console.log( testt )

	
		// wp.data.select("core/editor").getEditorBlocks()

		// // let fs = require("fs");

		// // fs.writeFile( testt , dictstring )
		// //  new File( ["hello working"], "blueprints/test.json",
		// //  	{ type: "application/json"},
		// //  )
		return (
			
			<section className="gp-hero-wrapper">
				
					
				
			</section>
		);
	}
}

export default Save;
