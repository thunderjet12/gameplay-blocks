<script>

</script>


<style global lang="scss" >
    .container-fluid {

    }
    // // .container-lg {
    // //     @apply tw-container
    // // }

    // // navbar
    // .gp-navbar {
    //     @apply tw-flex;
    //     @apply tw-items-center;


    // }

    // .gp-navbar--main {
        
    //     // @extend .fixed-top;
    // }

    // .gp-container-fluid {
    //     @extend .container-fluid;
    // }

    // .gp-container-lg {
    //     @extend .container-fluid;
    // }

    // .gp-navbar__brand {
    //     @apply tw-flex-shrink-0;
        
    // }

    // @screen lg {
    //     .gp-navbar__brand {
    //         @apply tw-w-1/5;
    //     }
    // }

    // .gp-collapse {
    //     @apply tw-hidden;
    // }

    // @screen md {
    //     .gp-collapse {
    //         @apply tw-block;
    //     }
    // }

    // .gp-collapse--navbar {
    //     // @extend .navbar-collapse;
    // }

    // .gp-nav__item {
    //     @apply tw-inline-flex;
    //     @apply tw-items-center;
    //     // @apply tw-group;
    //     @apply tw-px-3;
    //     @apply tw-py-2;
    // }

    // .gp-nav__link {
    //     @apply tw-inline-flex;
    //     @apply tw-items-center;
    //     @apply tw-text-gray-700;
    // }



    // // cards
    // .gp-card { 
    //     @apply tw-block;
    //     @apply tw-relative;
    //     background-color: transparent;
    //     border: none;
    // }



    // .gp-card__body { 
    //     // @apply tw-absolute;
    // }

    // .gp-card__img {
    //     object-fit: cover;
    // }

    // .gp-card__img--fluid {
        
    // }


    // .gp-card__more {

    // }

    // .gp-card__overlay {
    //     //  @extend .card-img-overlay;
    //     @apply tw-flex;
    //     @apply tw-flex-col;
    // }

    // .gp-card__date {
    
    // }

    // .gp-sticky {
    //     position: fixed;
    //     transition: 1s ease;
    //     top: 10vh;
    //     top: calc( var(--vh, 1vh ) * 6 );
    //     right: 0;
    //     left: 0;
    //     z-index: 1030;
    //     height: calc( var(--vh, 1vh ) * 8 );

    // }




    // .gp-carousel {
    //     // @extend .carousel;
    //     @apply tw-w-full;
    // }

    // .gp-carousel__item {
    //     // @extend .carousel-item;
    //     height: 100vh;
    //     height: calc( var(--vh, 1vh ) * 100 );
    //     background: no-repeat center center scroll;
    //     -webkit-background-size: cover;
    //     background-size: cover;

    // }

    // .gp-carousel__img {
    //     width: 100vw;
    //     height: 100vh;
    // }

    // .gp-carousel__inner {
    //     // @extend .carousel-inner;
    // }

    // // .gp-accordion {
    // //     @extend .accordion;
    // // }

    // .gp-accordion__item {
    //     // @extend .accordion-item;
        
    // }



    // .gp-accordion__img {
    //     object-fit: cover;
    //     width: 100%;
    //     height: 100%;
        
    // }

    // .gp-accordion-collapse {
    //     // @extend .accordion-collapse;
    // }


    // .gp-accordion-body {
    //     // @extend .accordion-body;
    // }






    // .gp-logo {
    //     width: 30vw;
    //     width: calc( var(--vw, 1vw ) * 30 );
    // }

    .gp-cover-container {
        overflow: hidden;
        position: relative;
    }

    .gp-cover {
        max-width: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    // .gp-position-center {
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     // width: -webkit-max-content;
    //     // width: -moz-max-content;
    //     // width: max-content;
    //     max-width: 100%;
    //     box-sizing: border-box;
    // }

    // .gp-position-top-left {
    //     top: 0;
    //     left: 0;
    //     // width: -webkit-max-content;
    //     // width: -moz-max-content;
    //     // width: max-content;
    //     // position: absolute !important;
    //     max-width: 100%;
    //     box-sizing: border-box;
    // }

    // .gp-position-top-center {
    //     bottom: 0;
    //     left: 50%;
    //     transform: translateX(-50%);
    //     width: -webkit-max-content;
    //     width: -moz-max-content;
    //     width: max-content;
    //     // position: absolute !important;
    //     max-width: 100%;
    //     box-sizing: border-box;

    // }

    // .gp-position-top-right {
    //     top: 0;
    //     right: 0;
    //     transform: translate(-50%, -50%);
    //     // width: -webkit-max-content;
    //     // width: -moz-max-content;
    //     // width: max-content;
    //     // position: absolute !important;
    //     max-width: 100%;
    //     box-sizing: border-box;
    // }



    // .gp-position-center-left {
    //     left: 0;
    //     top: 50%;
    //     transform: translateY(-50%);
    //     width: -webkit-max-content;
    //     width: -moz-max-content;
    //     width: max-content;
    //     // position: absolute !important;
    //     max-width: 100%;
    // }

    // .gp-position-center-right {
    //     right: 0;
    //     top: 50%;
    //     transform: translateY(-50%);
    //     width: -webkit-max-content;
    //     width: -moz-max-content;
    //     width: max-content;
    //     // position: absolute !important;
    //     max-width: 100%;
    // }




    // .gp-position-bottom-right {
    //     bottom: 0;
    //     right: 0;
    //     transform: translate(-50%, -50%);
    //     width: -webkit-max-content;
    //     width: -moz-max-content;
    //     width: max-content;
    //     max-width: 100%;
    //     // position: absolute !important;
    //     box-sizing: border-box;
    // }


    // .gp-position-bottom-center {
    //     bottom: 0;
    //     left: 50%;
    //     transform: translateX(-50%);
    //     width: -webkit-max-content;
    //     width: -moz-max-content;
    //     width: max-content;
    //     max-width: 100%;
    //     // position: absolute !important;
    //     box-sizing: border-box;

    // }

    // .gp-position-bottom-left {
    //     bottom: 0;
    //     left: 0;
    //     transform: translate(-50%, -50%);
    //     width: -webkit-max-content;
    //     width: -moz-max-content;
    //     width: max-content;
    //     max-width: 100%;
    //     // position: absolute !important;
    //     box-sizing: border-box;
    // }

    // .gp-section {
    //     display: flow-root;
    //     box-sizing: border-box;
    //     @apply tw-mt-8;
    // }
    // .gp-section--main-content {
    //     @apply tw-mt-20;
    // }


    // .gp-user {
    //     @apply tw-flex;
    //     @apply tw-gap-2;
    // }

    // .gp-user__img {
    //     @apply tw-rounded-full ;
    //     @apply tw-border-4;
    //     @apply tw-border-red-600;
    //     width: 3rem;
    //     height: 3rem;
        
    // }

    // .gp-user--navbar {
    //     @apply tw-justify-center;
    //     @apply tw-items-center;
    // }


    // // forms

    // .gp-right-navbar  {
    //     @apply  tw-flex;
    //     @apply  tw-w-20vw;
    //     @apply  tw-border-0;
    //     @apply  tw-mr-2;
    // }

    // .gp-right-navbar--navbar {
    //     @apply tw-ml-auto;
    // }

    // .gp-form__input {
    //     // @extend .form-control;
    //     // @apply tw-border-2;
    // }
    // .gp-form__input--navbar {
    //     background: rgba(255, 0, 0, 0.64);
    //     width: 12rem;
    //     height: 33px;
    //     &::placeholder {
    //         color: rgba(255, 255, 255, 1);
    //     }
    // }

    // .gp-form__search {
    //     @apply  tw-flex;
    //     @apply  tw-w-20vw;
    //     @apply  tw-border-0;
    //     @apply  tw-mr-2;
    //     @apply tw-justify-center;
    //     @apply tw-items-center;
    // }

    // .gp-form__search--navbar {
    //     // @extend .ms-auto;
    //     @apply tw-ml-auto;
    // }



    // .gp-btn {
    //     // @extend .btn;
    //     @apply tw-w-10;
    //     @apply tw-h-3;
    //     @apply tw-flex;
    //     @apply tw-bg-white-1;
    //     @apply tw-justify-center;
    //     @apply tw-align-middle;
    //     @apply tw-items-center;
    //     @apply tw-rounded-sm;
    // }
    // .gp-btn__outline--danger {
    //     // @extend .btn-outline-danger;
    //     height: 33px;
    //     background-color: rgba(255, 101, 101, 0.64);
    // }

</style>