import apiFetch from "@wordpress/api-fetch";
import { Component, createElement } from "@wordpress/element";
import { registerPlugin }  from "@wordpress/plugins";
import { useSelect, useDispatch, withSelect } from "@wordpress/data";
import { compose } from "@wordpress/compose";
// import { FC } from "react";

// let data = wp.data.select("core/editor").getEditorBlocks();
// console.log( data )
// let fs = require("fs");

// fs.writeFile( testt , dictstring )
//  new File( data , absolutePluginsDirPath +"/blueprints/test.json",
//  	{ type: "application/json"},
//  )

// console.log( absolutePluginsDirPath );


// generic  ComponentType  {
// 	className: string;
// 	attributes: {};
// 	setAttributes: any;
// }
interface ComponentType {
  
}

 class SbirdThemeBuilder extends Component < ComponentType>  {
     constructor(props: any) {
         super(props);
    //      this.state = {
    //         test: '',
    //      }
    //      console.log("test working 1");
     }

         
    

     componentDidUpdate () {

        // console.log("test working 2");
        // const Page = useSelect(
        //     ( select ) => {
        //         return select( 'core/edit-site' ).getPage();    
        //     },
        //         []
        //     );

    //     let select = wp.data.select( 'core/editor' );
    //     let isSavingPost = select.isSavingPost();
    //     let isAutoSaving = select.isAutosavingPost();
    //     let didPostSaveRequestSucceed = select.didPostSaveRequestSucceed();
    //     if ( isSavingPost || isAutoSaving && didPostSaveRequestSucceed ) {
    //         console.log("isSavingPost && !isAutosavingPost && didPostSaveRequestSucceed");
    //         // unsubscribe();

    //         let currentPostId = wp.data.select("core/editor").getCurrentPostId();
    //         let currentPostTitle = wp.data.select("core/editor").getCurrentPost().title;
    //         let currentPostType = wp.data.select("core/editor").getCurrentPostType()
    //         let currentPostAttributes = wp.data.select("core/editor").getEditorBlocks();
    //         // wp.data.select( 'core/block-editor' ).getSettings()
    //         //bluePrint full
    //         let blueprintData = {
    //             currentPostId: currentPostId,
    //             currentPostTitle: currentPostTitle,
    //             currentPostType: currentPostType,
    //             postAttributes: currentPostAttributes,
    //         };

    //         console.log( blueprintData )

    //         apiFetch( { 
    //             path: '/blueprints/v2/blueprint',
    //             method: "POST",
    //             headers: { 
    //                 'Content-type': 'application/json',
    //                 'X-WP-Nonce': wpApiSettings.nonce
    //             },
    //             'credentials': 'same-origin',
    //             data: { blueprint: blueprintData }
    //         } )       
    //         .then( res => 
    //             console.log( res )
    //         ).catch( err => {
    //             console.log( err );
    //         } )

    //     }
     }
        
     
        // const unsubscribe = wp.data.subscribe( () => {
           
        // } )
                
        
 
    render() {
        return  (
            <>
            </>
            )
    }
}

// const { settings, templateType, page, deviceType } = useSelect(
//     ( select ) => {
//         const {
//             getSettings,
//             getEditedPostType,
//             getPage,
//             __experimentalGetPreviewDeviceType,
//         } = select( 'core/edit-site' );
//         return {
//             settings: getSettings( setIsInserterOpen ),
//             templateType: getEditedPostType(),
//             page: getPage(),
//             deviceType: __experimentalGetPreviewDeviceType(),
//         };
//     },
//     []
// );




// console.log(settings, templateType, page, deviceType);

// function Effect( props: any ) {

//     const Page = useSelect(
//         ( select ) => {
//             return select( 'core/edit-site' ).getPage();    
//         },
//             []
//         );
//         console.log( "test 3" );
//         return Page;
//     }

// function BlockCount() {
//     const count = useSelect( ( select ) => {
//       return select( 'core/block-editor' ).getBlockCount()
//     }, [] );
   
//     return count;
//   }

export default  compose([ withSelect( ( select, props ) => {
    console.log( select( 'core/block-editor' ).getBlockCount() )
    return select( 'core/block-editor' ).getBlockCount()
  } ), ]) (SbirdThemeBuilder) ;



registerPlugin( 'sbird-core-additions', {
    icon: "admin-appearance",
    render: SbirdThemeBuilder,
} )