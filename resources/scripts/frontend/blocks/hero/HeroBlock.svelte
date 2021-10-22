

<script lang="ts" >
    import { onMount } from 'svelte'
     let heroWrappers = document.querySelectorAll(".gp-hero-wrapper");
  import IconifyIcon from '@iconify/svelte';
// Icons
import  arrowCircleRight  from "@iconify-icons/heroicons-solid/arrow-circle-right";
import  arrowCircleLeft  from "@iconify-icons/heroicons-solid/arrow-circle-left";
import playCircle from '@iconify/icons-jam/play-circle';
// import Theme from 'resources/scripts/admin/components/hero/templates/CleanReddredmpTheme/Theme.svelte';
   import Theme from "./templates/mobi-glass-theme/portal-type/index.svelte";

// import Portal from "./templates/clean-reddredmp-theme/portal-type/index.svelte";
   let ComponentTheme = "CleanReddredmpTheme";
   let ComponentTypeName  = "portal";
   let ComponentStyle = "classic-clean-white-style";
   // let Theme ;
// import images 
// import reddeadRedemption from ""

// {#if ComponentTheme === "CleanReddredmpTheme" }

   //  onMount( async () => {
   //     try {
        
   //       Theme =  (await import( "./templates/mobi-glass-theme/portal-type/index.svelte" )).default
   //       console.log( Theme )
   //     } catch ( e ) {
   //        // handle erors
   //        console.log( e )
   //        Theme = "Error404"
   //     }
   //  } 
   //  )

//  {/if}

console.log( Theme )


</script>




  <!-- TODO SECTION : Hero  -->
  <svelte:component this={ Theme } />
  <!-- Hero Section END --> 

  <!-- <style lang="scss"  >
     @import "./hero.scss" ;
  </style> -->