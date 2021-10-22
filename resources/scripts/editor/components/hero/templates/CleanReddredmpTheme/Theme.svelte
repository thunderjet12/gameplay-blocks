<script lang="typescript">
    import IconifyIcon from '@iconify/svelte';
 // Icons
import  arrowCircleRight  from "@iconify-icons/heroicons-solid/arrow-circle-right";
import  arrowCircleLeft  from "@iconify-icons/heroicons-solid/arrow-circle-left";
import playCircle from '@iconify/icons-jam/play-circle';
// import { onMount } from 'svelte';

// export let ComponentTypeName ;
// export let ComponentStyle ;
// let ComponentType ;
// let templateJson ;
// let templateJsonDecoded ;
// let templateStyle ;


// switch ( ComponentTypeName ) {
//     case "portal": 
//     onMount( async () => {
//        try {
        
//          ComponentType =  await import( `./${ComponentTypeName}-type/styles/index.svelte` ) 
//        } catch ( e ) {
//           // handle erors
//           console.log( e )
//           ComponentType = "Error404"
//        }
//     } 
//     )
//        break;
 
//     default:
//        break;
//  }
import ComponentType from "./portal-type/index.svelte";


</script>

<div>
    <svelte:component this={ ComponentType }   />
</div>