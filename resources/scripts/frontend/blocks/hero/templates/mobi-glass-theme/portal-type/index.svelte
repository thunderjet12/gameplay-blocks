<svelte:head>
    <script  src="https://code.iconify.design/samples.js"  />
</svelte:head>

<script lang="ts">

import { onMount } from 'svelte'
      import IconifyIcon from '@iconify/svelte';
// Icons
import  arrowCircleRight  from "@iconify-icons/heroicons-solid/arrow-circle-right";
import  arrowCircleLeft  from "@iconify-icons/heroicons-solid/arrow-circle-left";
import playCircle from '@iconify/icons-jam/play-circle';
import { fade, blur } from "svelte/transition";
import { getClient, operationStore, query } from "@urql/svelte";
let isActive = true;
// import "https://code.iconify.design/samples.js";

onMount(
    async () => {
    await import ("../../../components/icon-finder/index") 
    //   console.log( (() => await import ("../../../components/icon-finder/index") () ),
    }
);

const GET_HERO =  operationStore(
 `

    query MyQuery {
                    posts {
                        edges {
                        node {
                            id
                        }
                        }
                    }
                    blockEditorContentNodes {
                        edges {
                        node {
                            id
                            blocks {
                            attributesJSON
                            dynamicContent
                            originalContent
                            saveContent
                            }
                        }
                        }
                    }
                    }


` );
// const Client = getClient();

const Heros = query(  GET_HERO );
let promisetest =  new Promise((resolve, reject) => {
    resolve( Heros );
    console.log( Heros )
})
promisetest.then(res =>
    console.log( res , "test then" )
)
// $:  Heross = JSON.stringify(Heros)
// console.log( Heross );

</script>


<!-- TODO SECTION : Hero  -->



    {#await $Heros}
        <div><h1>Loadding ... </h1></div>
        {:then result}
        {JSON.stringify( result )}
        {:catch error }
        {error}
    {/await} 
            <!-- {#each Heros as Hero}
<section class="gp-section gp-hero tw-w-full" >

    <div class="gp-hero__grid" >

                <div class="gp-card sb-card--hero  sb-card--hero__main" >
                        
                    <img class="gp-card__img gp-card__img--hero" src="./images/reddead-redemption.jpg" alt="" />
                    
                        <div class="gp-card__img__overlay gp-card__img__overlay--hero ">
                                <span class="gp-tag gp-tag--news">News</span>
                                <a class="gp-card__title gp-card__title--hero" href="posts/reddredmp_post.html" > Red Dead Redemption 2 release date</a> 
                        </div>

                </div>
                        
                <div class="gp-card sb-card--hero  sb-card--hero__other"  >
                    
                    <img class="gp-card__img gp-card__img--hero" src= "./images/rtx2080ti.jpg" alt="" />
                
                    <div class="gp-card__img__overlay gp-card__img__overlay--hero  ">
                        <span class="gp-tag  gp-tag--hardware" >News</span>
                        <a class="gp-card__title gp-card__title--hero" href="posts/reddredmp_post.html" > Red Dead Redemption 2 release date</a>
                    </div>
                </div>
            
                <div class="gp-card sb-card--hero  sb-card--hero__other" >
                    <img class="gp-card__img gp-card__img--hero" src="./images/just-cause4.jpg" alt="" />
                    
                    <div class="gp-card__img__overlay gp-card__img__overlay--hero  ">
                        <span class="gp-tag  gp-tag--report">Report</span>
                        <a class="gp-card__title gp-card__title--hero" href="http://localhost:5000/">Just Cause 5</a>
                    </div>
                </div> 

                <div class="gp-card sb-card--hero  sb-card--hero__other"  >
                    <img class="gp-card__img gp-card__img--hero" src="./images/CitizenCon-2948-Keynote.jpg" alt="" />
                
                    <div class="gp-card__img__overlay gp-card__img__overlay--hero  ">
                        <a class="gp-card__play" href="http://localhost:5000/"><IconifyIcon  icon={ playCircle }  class="gp-card__play__icon" /> </a>
                        <h3 class="gp-card__title gp-card__title--hero" >Citzen Con 2948</h3> 
                    </div>
                </div>
                        
                <div class="gp-card sb-card--hero  sb-card--hero__other" >
                    
                    <img class="gp-card__img gp-card__img--hero" src="./images/legendofzelda.jpg" alt="" />
            
                    <div class="gp-card__img__overlay gp-card__img__overlay--hero">
                        <span class="gp-tag gp-tag--review">Review</span>
                        <a class="gp-card__title gp-card__title--hero" href="http://localhost:5000/" >Reveiw: Breath of the wield</a> 
                    </div>
                </div>
    
    </div> 
   grid End -->

            <!--  game ads  -->
    <div >
        <div id="container"></div>
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
    <!-- game ads End -->
    

<style type="text/scss" >

// @import "../../../components/style-iconify/style.scss" ;
//     .gp-cover-container {
//     overflow: hidden;
//     position: relative;
// }
$sb-hero__grid--width: 100%;
$sb-hero__grid--gap: 1rem;

$sb-card--hero--width: 100%;
$sb-card--hero--height: 100%;
$sb-card--hero--b-r: 0.375rem;
$sb-card--hero--b: 1px;
$sb-card--hero--b-color: rgba(153, 153, 153, 1);

$sb-card__img--hero--width: 100%;
$sb-card__img--hero--height: 100%;

$sb-card__title--hero--transition: 1s;

$sb-card--hero--font-size: 1.5rem;
$sb-card--hero--font-weight: 700;

$sb-card__title--hero--hover: rgba(251, 82, 82, 1);
.sb-hero {
    width: 100px;
    height: 100px;
    background-color: chartreuse;
}
    .gp-hero__grid {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        width: $sb-hero__grid--width;
        grid-auto-flow: row;
        gap: $sb-hero__grid--gap;
    }

    @media (min-width: 640px) { 
        .gp-hero__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: repeat(3, minmax(min( 60vh, 10rem ), 1fr));
        }

        .sb-card--hero__main {
            grid-row: span 3 / span 3;
            grid-column: span 1 / span 1;
        }

        .sb-card--hero__other {
            grid-column: span 1 / span 1;
            grid-row: span 1 / span 1;
        }
    }
    // @screen sm {
        
    // }  
    @media (min-width: 768px) {
        .gp-hero__grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-template-rows: repeat(2, minmax(min( 60vh, 10rem ), 1fr));
        }

        .sb-card--hero__main {
            grid-column: span 1 / span 1;
            grid-row: span 2 / span 2;
        }

        .sb-card--hero__other {
            grid-column: span 1 / span 1;
            grid-row: span 1 / span 1;
        }
     }
    // @screen md {

    // }  




    .sb-card--hero {
        @extend .gp-cover-container !optional;
        width: $sb-card--hero--width;
        height: $sb-card--hero--height;
        border-radius: $sb-card--hero--b-r;
        border: $sb-card--hero--b solid $sb-card--hero--b-color;
    }


    .gp-card__img--hero {
        width: $sb-card__img--hero--width;
        height: $sb-card__img--hero--height;
    }




    // .gp-card__img__overlay--hero {

    // }


    .gp-card__title--hero {
        align-items: center;
        @extend .gp-position-bottom-center !optional;
        vertical-align: text-bottom;
        position: absolute;
        margin-bottom: 0.75rem;
        // color: $secondry-color;
        transition: $sb-card__title--hero--transition;
    }

    .gp-card__title--hero:hover {
        color: $sb-card__title--hero--hover;
    }

    // typography

    .sb-card--hero {
        font-size: $sb-card--hero--font-size;
        font-weight: $sb-card--hero--font-weight;
    }

    .sb-card--hero__main {
        // font-size: rfs-fluid-value( 1rem);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 700;
        @apply tw-text-white-900;
    }

    .sb-card--hero__other {
        // font-size: rfs-fluid-value( 1rem);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 700;
        color: rgba(255, 255, 255, 1);
        @apply tw-text-white-900;
    }


</style>
