<?php
/**
 * Web Routes.
 * WARNING: Do not use \GameplayBlocks::route()->all() here, otherwise you will override
 * ALL web requests which you most likely do not want to.
 *
 * @link https://docs.wpemerge.com/#/framework/routing/methods
 *
 * @package GameplayBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Using our ExampleController to handle the homepage, for example.
// phpcs:ignore
// \GameplayBlocks::route()->get()->url( '/' )->handle( 'ExampleController@home' );

// If we do not want to hardcode a url, we can use one of the available route conditions instead.
// phpcs:ignore
// \GameplayBlocks::route()->get()->where( 'post_id', get_option( 'page_on_front' ) )->handle( 'ExampleController@home' );
