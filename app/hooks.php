<?php
/**
 * Declare any actions and filters here.
 * In most cases you should use a service provider, but in cases where you
 * just need to add an action/filter and forget about it you can add it here.
 *
 * @package GameplayBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// phpcs:ignore
// add_action( 'some_action', 'some_function' );

// Graphqil endpoint

$graphql_post_types_raw = get_post_types( array( 'show_in_rest' => true, ), 'names' );


if ( $graphql_post_types_raw["wp_block"]  ) {
	unset( $graphql_post_types_raw["wp_block"] );
}

$graphql_post_types_values = array_values( $graphql_post_types_raw ) ;



// var_dump( $graphql_post_types_values );

$param = 'post_type';
$operator = '==';

foreach ( $graphql_post_types_values as $graphql_post_type ) { 
	
		$post_type['param'] = $param;
		$post_type['operator'] = $operator;
		$post_type['value']  = $graphql_post_type;
		// var_dump($post_type);
}

// function gameplay_super_blocks_category( $categories, $post ) {
// 	return array_merge(
// 		$categories,
// 		array(
// 			array(
// 				'slug' => 'gameplay-super-blocks',
// 				'title' => __( 'Gameplay Super Blocks', 'gameplay-super-blocks' ),
// 			),
// 		)
// 	);	
// }
// add_action( 'block_categories', 'gameplay_super_blocks_category', 0, 2);

// function gameplay_mini_blocks_category( $categories, $post ) {
// 	return array_merge(
// 		$categories,
// 		array(
// 			array(
// 				'slug' => 'gameplay-mini-blocks',
// 				'title' => __( 'Gameplay Mini Blocks', 'gameplay-mini-blocks' ),
// 			),
// 		)
// 	);
// }
// add_filter( 'block_categories', 'gameplay_mini_blocks_category', 10, 2);


define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', '!ME~&*HR?9-J<@3ZTL*&%UYAG`w6YGa[H|dc}`D(?]L`B :S3`h]<w`Z8fV[sud,' );

// define('AUTH_KEY',         'J17)M)k:l;{Xr]#m$]c]PH+c8Y@k7ok}3i%;x+OljCs@D2A:8A-k;+ QR_qi0m>6');
// define('SECURE_AUTH_KEY',  '(^m~>+S0c~fJ_`MX^(x6=f797#z9UB,CQ#<mVUor}@w/H5*#<x+d&X+?%g8A`V5o');
// define('LOGGED_IN_KEY',    'SbD~vh|VH@0o5Bc7_BFVQ+n(E%JdF@Ohoz`]=KJn+Y<goQJb|f~MEZ-HV0eJ,Ue?');
// define('NONCE_KEY',        'g%J9;V&,!;v)Ah|3p`JUVs$|_0ZDgx.VN+OtJ~f+jc4{U6|CN!VxBjH=tV-PS@j$');
// define('AUTH_SALT',        ':FCf$!*fbVjv)_!9wkg9 5Jt,gtWXrI8/t1O9WV?k;E#tzwnacj+2:3ZWK1@6(Nn');
// define('SECURE_AUTH_SALT', '?X7-on,rMD>x%A8W+-_[<d|7<9bzRyC .gF_Q<a+pB*-P_=yNA=ialp7SG4_S[V#');
// define('LOGGED_IN_SALT',   'd$+`yN1!CpH-!KxY&jrmnz*?vtALX}XgZf$:sI#9>RSn<&@~P&A&+u Lr[yUJaD%');
// define('NONCE_SALT',       'i}36s-mh]L{()^;SD/)+Ww#)RhR{VvhGWiJ{;qN[Fn#fAZ3insM<pnf75CDp-=bc');

	// handle ajax request 




// add_filter( 'graphql_jwt_auth_secret_key', function() {
// 	return '!el^D.X+(X&vm#=CI9T}l*<zr&0U%;L;jY<u?@j1UbgOv=C8jU4,[rtHC&&@i22C';
// });

// function absolute_plugins_dir_path() {
// 	$sbc_get_absolute_plugins_dir_path = WP_PLUGIN_DIR . "/gameplay-blocks";
// 	// var_dump( $sbc_get_absolute_plugins_dir_path );
	
// 	wp_localize_script( "gameplay-blocks-editor" , "absolutePluginsDirPath", array($sbc_get_absolute_plugins_dir_path) );
// 	}
	
	// add_action( 'init', function() {

	
	
	// } );

	// // ajax get Blueprints data on gutenberg saving post or template
// add_Action( 'wp_ajax_blueprint_data', 'blueprint_data' );
// add_Action( 'wp_ajax_nopriv_blueprint_data', 'blueprint_data' );


	function blueprint_data( \WP_REST_Request $request ) {
		$sbc_blueprints_dir_path = WP_PLUGIN_DIR . "/gameplay-blocks/blueprints/";
		$blueprint_data = json_encode($request['blueprint'] );
		// $blueprint_title = $blueprint_data['currentPostTitle'];
		$blueprint_data_decode = json_decode( $blueprint_data, true );
		$blueprint_title = $blueprint_data_decode['currentPostTitle'];
		$blueprint_content_type = $blueprint_data_decode['currentPostType'];
		
		$sbc_blueprint_full_path = $sbc_blueprints_dir_path . $blueprint_content_type . "/" . $blueprint_title . '.json';
		
		if ( ! file_exists( $sbc_blueprints_dir_path . $blueprint_content_type ) ) {
			$sbc_blueprints_content_type_path = $sbc_blueprints_dir_path . $blueprint_content_type;
			return mkdir( $sbc_blueprints_content_type_path );
		
		} else {
			
		}
		
		$blueprint_open = fopen( $sbc_blueprint_full_path, "w" );
		if (  $blueprint_open  ) {
			return fwrite( $blueprint_open, $blueprint_data );
			fclose( $blueprint_open );
		}
	
	}


	function sbc_blueprints_permission() {
		return current_user_can( 'edit_others_posts' );	
	}



	add_action( 'rest_api_init', function() {

		register_rest_route( 'blueprints/v2', '/blueprint', array(
			'methods' => 'any',
			'callback' => 'blueprint_data',
			'methods' => WP_REST_Server::ALLMETHODS,
			'permission_callback' => 'sbc_blueprints_permission'
		) );


	} );