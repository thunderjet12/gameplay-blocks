<script lang="ts" >
  import IconifyIcon from '@iconify/svelte';
// Icons
import  arrowCircleRight  from "@iconify-icons/heroicons-solid/arrow-circle-right";
import  arrowCircleLeft  from "@iconify-icons/heroicons-solid/arrow-circle-left";
import playCircle from '@iconify/icons-jam/play-circle';
import { onMount } from 'svelte';
import { fade, blur } from "svelte/transition";
import { getClient, operationStore, query } from "@urql/svelte";
let isActive = true;

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
import Theme from "./templates/mobi-glass-theme/Theme.svelte";
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
    <div >
      {#if isActive}
          <div class="sb-hero" transition:blur />
      {/if}
      <div class="gp-card gp-cover-container">
          <img class="card-img" src="./images/assassins_creed_odessy.svg" alt="Assassin creed Ads" />
          <div class="card-img-overlay tw-absolute gp-position-bottom-right tw-pr-2">
              <button on:click={() => (isActive = !isActive)} class="buy-btn">{#if isActive}add to cart {:else} remove from cart{/if}</button>
          </div>                 
      </div>
    </div>

   <p>Paragraph</p>
 </section> 
 <!-- Hersvelte co Section END --> 

 <!-- <style lang="scss">

   p {
     background: red;
   } --> 
<style>
 </style>