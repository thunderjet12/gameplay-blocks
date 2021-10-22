<script lang="ts">
    import IconifyIcon from '@iconify/svelte';
 // Icons
import  arrowCircleRight  from "@iconify-icons/heroicons-solid/arrow-circle-right";
import  arrowCircleLeft  from "@iconify-icons/heroicons-solid/arrow-circle-left";
import playCircle from '@iconify/icons-jam/play-circle';
export let ComponentTheme ;
export let ComponentType ;
export let ComponentStyle ;



// import images 
// import reddeadRedemption from ""

</script>


    <!-- TODO SECTION : Hero  -->


        <div class="gp-hero__grid" >

                    <div class="gp-card gp-card--hero  gp-card--hero__main" >
                            
                        <img class="gp-card__img gp-card__img--hero" src="http://gameplay.test/wp-content/uploads/2021/05/reddead-redemption.jpg" alt="" />
                        
                            <div class="gp-card__img__overlay gp-card__img__overlay--hero ">
                                    <span class="gp-tag gp-tag--news">News</span>
                                    <a class="gp-card__title gp-card__title--hero" href="posts/reddredmp_post.html" > Red Dead Redemption 2 release date</a> 
                            </div>

                    </div>
                            
                    <div class="gp-card gp-card--hero  gp-card--hero__other" >
                        <img class="gp-card__img gp-card__img--hero" src="./images/just-cause4.jpg" alt="" />
                        
                        <div class="gp-card__img__overlay gp-card__img__overlay--hero  ">
                            <span class="gp-tag  gp-tag--report">Report</span>
                            <a class="gp-card__title gp-card__title--hero" href="http://localhost:5000/">Just Cause 5</a>
                        </div>
                    </div> 

                    <div class="gp-card gp-card--hero  gp-card--hero__other"  >
                        <img class="gp-card__img gp-card__img--hero" src="./images/CitizenCon-2948-Keynote.jpg" alt="" />
                    
                        <div class="gp-card__img__overlay gp-card__img__overlay--hero ">
                            <a class="gp-card__play" href="http://localhost:5000/"><IconifyIcon  icon={ playCircle }  class="gp-card__play__icon" /> </a>
                            <h3 class="gp-card__title gp-card__title--hero" >Citzen Con 2948</h3> 
                        </div>
                    </div>
                            

        
        </div> 
        <!-- grid End -->

                <!--  game ads  -->
        <div class="tw-flex tw-mt-5vmin" >
            <div class="gp-card gp-cover-container">
                <img class="card-img" src="./images/assassins_creed_odessy.svg" alt="Assassin creed Ads" />
                <div class="card-img-overlay tw-absolute gp-position-bottom-right tw-pr-2">
                    <button class="buy-btn"><a href="https://example.com" >Buy Now</a></button>
                </div>                 
            </div>
        </div> 
        <!-- game ads End -->


    <!-- Hero Section END --> 

    <!-- <style lang="scss"  >
       @import "./hero.scss" ;
    </style> -->

    <svelte:component this={ ComponentTheme } type={ ComponentType } style={ ComponentStyle } />
