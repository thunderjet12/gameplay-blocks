<script>
  import { setClient } from "@urql/svelte";
  import GameplayClient from "./apollo/apolloClient.js";

  import  HeroBlock from './blocks/hero/HeroBlock.svelte';
  import MainContentBlock from './blocks/main-content/MainContentBlock.svelte';
  import "./Layout.svelte";
  setClient( GameplayClient );

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty( '--vh', `${vh}px` );



let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty( '--vw', `${vw}px` );


if( vw > vh ) {
    document.documentElement.style.setProperty( '--vmin', `${vw}px` );
} else  {
    document.documentElement.style.setProperty( '--vmin', `${vh}px` );
}
  
</script>

<div >
  <HeroBlock />
  <MainContentBlock />
  
</div>


<style global lang="scss"   >



</style>

