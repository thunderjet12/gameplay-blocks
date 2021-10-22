<?php

namespace GameplayBlocks\WordPress;

use WPEmerge\ServiceProviders\ServiceProviderInterface;

/**
 * Register and enqueues assets.
 */
class AssetsServiceProvider implements ServiceProviderInterface
{
	/**
	 * {@inheritDoc}
	 */
	public function register( $container ) {
		// Nothing to register.
	}

	public function asset_file( $handle, $key ) {
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

	/**
	 * {@inheritDoc}
	 */
	public function bootstrap( $container ) {
		add_action( 'wp_enqueue_scripts', [$this, 'enqueueFrontendAssets'] );
		// deactivated until final build and should create sperate editor bundle
		// add_action( 'admin_enqueue_scripts', [$this, 'enqueueAdminAssets'] );
		add_action( 'enqueue_block_editor_assets', [$this, 'enqueueEditorStyles'] );
		add_action( 'enqueue_block_editor_assets', [$this, 'enqueueEditorAssets'] );
		add_action( 'wp_footer', [$this, 'loadSvgSprite'] );
	}
	
	/**
	 * Enqueue frontend assets.
	 *
	 * @return void
	 */
	public function enqueueFrontendAssets() {
		// Enqueue the built-in comment-reply script for singular pages.
		if ( is_singular() ) {
			wp_enqueue_script( 'comment-reply' );
		}

		// Enqueue scripts.
		\GameplayBlocks::core()->assets()->enqueueScript(
			'plugin-js-bundle',
			// \GameplayBlocks::core()->assets()->getBundleUrl( 'frontend', '.js' ),
			plugins_url( '/gameplay-blocks/resources/dist/frontend.min.js' ),
			$this->asset_file( 'frontend', 'dependencies' ),
			$this->asset_file( 'frontend', 'version' ),
			true
		);

		// Enqueue styles.
		// $style = \GameplayBlocks::core()->assets()->getBundleUrl( 'frontend', '.css' );
		$style = plugins_url( '/gameplay-blocks/resources/dist/styles/frontend.min.css' );
		if ( $style ) {
			\GameplayBlocks::core()->assets()->enqueueStyle(
				'plugin-css-bundle',
				$style
			);
		}
	}

	/**
	 * Enqueue admin assets.
	 *
	 * @return void
	 */
	public function enqueueAdminAssets() {
		// Enqueue scripts.
		// \GameplayBlocks::core()->assets()->enqueueScript(
		// 	'plugin-admin-js-bundle',
		// 	// \GameplayBlocks::core()->assets()->getBundleUrl( 'admin', '.js' ),
		// 	plugins_url( '/gameplay-blocks/resources/dist/admin.min.js' ),
		// 	$this->asset_file( 'admin', 'dependencies' ),
		// 	$this->asset_file( 'admin', 'version' ),
		// 	false
		// );
		
		// // enqueue web components
		// $components = [
		// 	'header',
		// 	'navigation'
		// ];

		// foreach ( $components as $component  ) {

		// 	// enqueue  js files
		// 	\GameplayBlocks::core()->assets()->enqueueScript(
		// 		$component .'-web-component',
		// 		// \GameplayBlocks::core()->assets()->getBundleUrl( 'admin', '.js' ),
		// 		plugins_url( '/gameplay-blocks/resources/dist/'. $component .'.min.js' ),
		// 		$this->asset_file( $component, 'dependencies' ),
		// 		$this->asset_file( $component, 'version' ),
		// 		false
		// 	);

		// }

		// Enqueue styles.
		// $style = \GameplayBlocks::core()->assets()->getBundleUrl( 'admin', '.css' );
		$admin_style = plugins_url( '/gameplay-blocks/resources/dist/styles/admin.min.css' );

		// if ( $admin_style ) {
		// 	\GameplayBlocks::core()->assets()->enqueueStyle(
		// 		'plugin-admin-css-bundle',
		// 		$admin_style
		// 	);
		// }
	}

		/**
	 * Enqueue admin assets.
	 *
	 * @return void
	 */
	public function enqueueEditorAssets() {
		// Enqueue scripts.
		\GameplayBlocks::core()->assets()->enqueueScript(
			'plugin-editor-js-bundle',
			// \GameplayBlocks::core()->assets()->getBundleUrl( 'admin', '.js' ),
			plugins_url( '/gameplay-blocks/resources/dist/editor.min.js' ),
			$this->asset_file( 'editor', 'dependencies' ),
			$this->asset_file( 'editor', 'version' ),
			false
		);
		


	}

	public function enqueueEditorStyles() {
		// Enqueue styles.
		// $style = \GameplayBlocks::core()->assets()->getBundleUrl( 'editor', '.css' );
		$editor_style = plugins_url( '/gameplay-blocks/resources/dist/styles/editor.min.css' );

		if ( $editor_style ) {
			\GameplayBlocks::core()->assets()->enqueueStyle(
				'plugin-editor-css-bundle',
				$editor_style
			);
		}
	}

	/**
	 * Load SVG sprite.
	 *
	 * @return void
	 */
	public function loadSvgSprite() {
		$file_path = implode(
			DIRECTORY_SEPARATOR,
			array_filter(
				[
					plugin_dir_url( GAMEPLAY_BLOCKS_PLUGIN_FILE ),
					'dist',
					'images',
					'sprite.svg'
				]
			)
		);

		if ( ! file_exists( $file_path ) ) {
			return;
		}

		readfile( $file_path );
	}
}
