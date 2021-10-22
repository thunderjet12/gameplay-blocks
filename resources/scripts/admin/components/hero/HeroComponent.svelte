<script lang="ts" >
   import IconifyIcon from '@iconify/svelte';
// Icons
import  arrowCircleRight  from "@iconify-icons/heroicons-solid/arrow-circle-right";
import  arrowCircleLeft  from "@iconify-icons/heroicons-solid/arrow-circle-left";
import playCircle from '@iconify/icons-jam/play-circle';
import { onMount } from 'svelte';
import { fade, scale } from "svelte/transition";
import { quintOut } from "svelte/easing";
    let show = false;
    setInterval(() => {
   //logic goes here
    }, 1000);

  // export let ComponentTheme = "CleanReddredmpTheme";
  export let ComponentTypeName  = "portal";
  export let ComponentStyle = "classic-clean-white-style";
//   let Theme = null;
  // let test2 = `./${ComponentTheme}/Theme.svelte` ;
  // console.log(  test2  )
  // console.log( typeof test2  )
  // import( `./${ComponentTheme}/Theme.svelte` ).then(
  //    res => test = res
  // )
//  switch ( ComponentTheme ) {
//     case "CleanReddredmpTheme": 
//    //  onMount( async () => {
//    //     try {
         
//    //        Theme =  ( await import( `./templates/${ComponentTheme}/Theme.svelte` ) ).default
//    //     } catch ( e ) {
//    //        // handle erors
//    //        console.log( e )
//    //        Theme = "Error404"
//    //     }
//    //  } 
//    //  )
//    onMount( () =>
//       import( `./templates/CleanReddredmpTheme/Theme.svelte` ).then(
//          res => Theme = res
//       )
//    )
//    console.log( Theme    )
//        break;
 
//     default:
//        break;
//  }
import Theme from "./templates/CleanReddredmpTheme/Theme.svelte";
// if ( ComponentTheme === "CleanReddredmpTheme") {

//    //  onMount( async () => {
//    //     try {
        
//    //       Theme =  await import( "./templates/CleanReddredmpTheme/Theme.svelte" ) 
//    //     } catch ( e ) {
//    //        // handle erors
//    //        console.log( e )
//    //        Theme = "Error404"
//    //     }
//    //  } 
//    //  )

//  } else {

//  }


 console.log( Theme )
  // let Theme = import( `./${ComponentTheme}-theme/Theme.svelte` )
// import images 
// import reddeadRedemption from ""

</script>


  <!-- TODO SECTION : Hero  -->
  <section class="gp-hero__grid gp-hero " >
    
     <!-- <svelte:component this={ Theme } type={ ComponentTypeName } style={ ComponentStyle } /> -->
     <button on:click={ () => show = !show }>click me</button>
     {#if show == true }
         <h1 in:scale out:fade >test</h1>
     {/if}
    <p>Paragraph</p>
  </section> 
  <!-- Hersvelte co Section END --> 

  <!-- <style lang="scss">

    p {
      background: red;
    } 
  </style> -->