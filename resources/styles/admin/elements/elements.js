
@import   "./tags.scss";
@import   "./modal.scss";
@import   "./cards/cards.scss";
@import   "./buttons/buttons.scss";


// navbar
.gp-navbar {
    @extend .navbar;
}

.gp-navbar--main {
    @extend .navbar-expand-lg;
    @extend .fixed-top;
}

.gp-container-fluid {
    @extend .container-fluid;
}

.gp-container-lg {
    @extend .container-lg;
}

.gp-navbar__brand {
    @extend .navbar-brand;
    
}

@screen lg {
    .gp-navbar__brand {
        @apply tw-w-1/5;
    }
}

.gp-collapse {
    @extend .collapse;
}

.gp-collapse--navbar {
    @extend .navbar-collapse;
}

.gp-nav__item {
    @extend .nav-item;
}

.gp-nav__link {
    @extend .nav-link;
}



.gp-sticky {
    position: fixed;
    transition: 1s ease;
    top: 10vh;
    top: calc( var(--vh, 1vh ) * 6 );
    right: 0;
    left: 0;
    z-index: 1030;
    height: calc( var(--vh, 1vh ) * 8 );

}




.gp-carousel {
    @extend .carousel;
}

.gp-carousel__item {
    @extend .carousel-item;
    height: 100vh;
    height: calc( var(--vh, 1vh ) * 100 );
    background: no-repeat center center scroll;
    -webkit-background-size: cover;
    background-size: cover;

}

.gp-carousel__img {
    width: 100vw;
    height: 100vh;
}

.gp-carousel__inner {
    @extend .carousel-inner;
}

// .gp-accordion {
//     @extend .accordion;
// }

.gp-accordion__item {
    @extend .accordion-item;
    
}



.gp-accordion__img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    
}

.gp-accordion-collapse {
    @extend .accordion-collapse;
}


.gp-accordion-body {
    @extend .accordion-body;
}


.gp-search {

    @apply tw-ml-auto tw-w-25vw tw-border-0 tw-mr-2 ;

    &__input{
        background: rgba(255, 0, 0, 0.64);
        max-width: 156px;
        max-height: 33px;
        &::placeholder {
            color: rgba(255, 255, 255, 1);
        }
    }

}


.gp-card__title{
    // margin x axis
    @apply tw-mx-2vmin;
    // typography.scss
}
.gp-card-paragraph {
    @apply tw-mx-2vmin;
    // typography.scss

}



.gp-card__overlay {
    @apply tw-flex;

    &__a {
        @extend .gp-position-bottom-center ;
        @apply tw-align-text-bottom ;
        @apply tw-absolute;
        color: $secondry-color;
    }
    &__a:hover {
        @apply tw-via-black-1;
    }
}


.gp-logo {
    width: 30vw;
    width: calc( var(--vw, 1vw ) * 30 );
}

.gp-cover-container {
    overflow: hidden;
    position: relative;
}

.gp-cover {
    max-width: none;
    position: absolute;
    left: 50%;
    top: 50%;
    // transform: translate(-50%, -50%);
}
.gp-position-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // width: -webkit-max-content;
    // width: -moz-max-content;
    // width: max-content;
    max-width: 100%;
    box-sizing: border-box;
}

.gp-position-top-left {
    top: 0;
    left: 0;
    // width: -webkit-max-content;
    // width: -moz-max-content;
    // width: max-content;
    position: absolute !important;
    max-width: 100%;
    box-sizing: border-box;
}

.gp-position-top-center {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    position: absolute !important;
    max-width: 100%;
    box-sizing: border-box;

}

.gp-position-top-right {
    top: 0;
    right: 0;
    transform: translate(-50%, -50%);
    // width: -webkit-max-content;
    // width: -moz-max-content;
    // width: max-content;
    position: absolute !important;
    max-width: 100%;
    box-sizing: border-box;
}



.gp-position-center-left {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    position: absolute !important;
    max-width: 100%;
}

.gp-position-center-right {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    position: absolute !important;
    max-width: 100%;
}




.gp-position-bottom-right {
    bottom: 0;
    right: 0;
    transform: translate(-50%, -50%);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    max-width: 100%;
    position: absolute !important;
    box-sizing: border-box;
}


.gp-position-bottom-center {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    max-width: 100%;
    position: absolute !important;
    box-sizing: border-box;

}

.gp-position-bottom-left {
    bottom: 0;
    left: 0;
    transform: translate(-50%, -50%);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    max-width: 100%;
    position: absolute !important;
    box-sizing: border-box;
}

.gp-section {
    display: flow-root;
    box-sizing: border-box;
    margin-top: rfs-fluid-value( 2rem );
    margin-bottom: rfs-fluid-value( 2rem );
}


.gp-user {
    width: 3rem;
    height: 3rem;
}










