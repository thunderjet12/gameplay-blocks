<?php


namespace  GameplayBlocks\gameplay_blocks;

use stdClass;

// use Timber\Timber;


// if ( ! defined( 'ABSPATH' ) ) {
// 	exit;
// }




/**
 * Loads the plugin language files.
 *
 * @access public
 * @since 1.0.0
 * @return void
 */
function load_textdomain() {
	load_plugin_textdomain( 'block-builder', false, dirname( plugin_basename( plugin_dir_path( __FILE__ ) ) ) . '/languages/' );
}

add_action( 'plugins_loaded', __NAMESPACE__ . '\load_textdomain', 99 );


// $sbc_get_absolute_plugins_dir_path = WP_PLUGIN_DIR . "/gameplay-blocks";
// var_dump( $sbc_get_absolute_plugins_dir_path );


// ======================= Client =======================
function client_gameplay () {
	// ob_start(); // Turn on output buffering 
$client_js = 'frontend.min.js';
$script_asset = array(
	'dependencies' => array( 'wp-blocks', 'wp-data' ),
	'version' => ['9.7']
);
global $post;
$sbc_get_absolute_plugins_dir_path = WP_PLUGIN_DIR . "/gameplay-blocks";
$sbc_current_post_data = new stdClass();

$sbc_current_post_data->absolutePluginsDirPath = $sbc_get_absolute_plugins_dir_path;
$sbc_current_post_data-> currentPostId = $post->ID;
$sbc_current_post_data-> currentPostName = $post->post_name;
$sbc_current_post_data_encoded = json_encode( $sbc_current_post_data );

wp_register_script(
	'gameplay-frontend-client',
	WP_PLUGIN_URL ."/gameplay-blocks/resources/dist/" . $client_js,
	$script_asset['dependencies'],
	$script_asset['version'],
	true
);

wp_enqueue_script('gameplay-frontend-client');
wp_localize_script( "gameplay-blocks-editor" , "absolutePluginsDirPath", $sbc_current_post_data_encoded );
}


add_action( 'wp_enqueue_scripts',  __NAMESPACE__ . '\client_gameplay' );

// $output = ob_get_contents(); // collect output
// ob_end_clean(); // Turn off ouput buffer

// return $output; // Print output


/**
 * Enqueue localization data for our blocks.
 *
 * @access public
 */
function block_localization() {
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'block-builder' );
	}
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_localization' );

/**
 * Enqueue block assets for use within Gutenberg.
 *
 * @access public
 */
function block_assets() {

	// Styles.
	wp_enqueue_style(
		'gameplay-blocks-frontend',
		plugins_url( '/resources/dist/styles/frontend.min.css', __FILE__ ),
		array(),
		asset_file( 'style-index', 'version' )
	);
}

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\block_assets' );

/**
 * Enqueue block assets for use within Gutenberg.
 *
 * @access public
 */
function editor_assets() {

	if ( ! is_admin() ) {
		return;
	}

	// Styles.
	wp_enqueue_style(
		'gameplay-blocks-editor',
		plugins_url( '/resources/dist/styles/admin.min.css', __FILE__ ),
		array(),
		asset_file( 'index', 'version' )
	);

	// Scripts.
	wp_register_script(
		'gameplay-blocks-editor',
		plugins_url( '/resources/dist/admin.min.js', __FILE__ ),
		array_merge( asset_file( 'index', 'dependencies' ) ),
		asset_file( 'index', 'version' ),
		false
	);
	wp_enqueue_script(
		'gameplay-blocks-editor'
	);
	wp_localize_script( 'gameplay-blocks-editor', 'wpApiSettings', array( 
		'root' => esc_url_raw( rest_url() ),
		'nonce' => wp_create_nonce( 'wp_rest' ) 
		) 
	);

}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\editor_assets' );

/**
 * Get asset file.
 *
 * @param string $handle Asset handle to reference.
 * @param string $key What do we want to return: version or dependencies.
 */
function asset_file( $handle, $key ) {
	$default_asset_file = array(
		'dependencies' => array(),
		'version'      => '1.0',
	);

	$asset_filepath = plugin_dir_path( __FILE__ ) . "/resources/dist/{$handle}.asset.php";
	$asset_file     = file_exists( $asset_filepath ) ? include $asset_filepath : $default_asset_file;

	if ( 'version' === $key ) {
		return $asset_file['version'];
	}

	if ( 'dependencies' === $key ) {
		return $asset_file['dependencies'];
	}
}

// Register server-side code for individual blocks.
foreach ( glob( dirname( __FILE__ ) . '/src/super-blocks/*/index.php' ) as $block_logic ) {
	require_once $block_logic;
}

// ob_start(); // Turn on output buffering 

// $output = ob_get_contents(); // collect output
// ob_end_clean(); // Turn off ouput buffer

// return $output; // Print output

// ==================== SBird Core ====================

// $sbc_get_absolute_plugins_dir_path = WP_PLUGIN_DIR . "/gameplay-blocks";
// var_dump( $sbc_get_absolute_plugins_dir_path );

// wp_localize_script( "gameplay-blocks-editor" , "absolutePluginsDirPath", array($sbc_get_absolute_plugins_dir_path) );

// ==================== SBird Core End ====================

// test 
$sbc_blueprints_dir_path = WP_PLUGIN_DIR . "/gameplay-blocks/blueprints/";
$blueprint_data = file_get_contents( $sbc_blueprints_dir_path . '/test.json' );
$blueprint_data_decode = json_decode( $blueprint_data, true );
// var_dump( $blueprint_data_decode );
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
// return file_put_contents( $sbc_blueprints_path, $blueprint_data  );
