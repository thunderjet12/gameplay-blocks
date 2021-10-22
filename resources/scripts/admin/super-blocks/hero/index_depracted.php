<?php

namespace  gameplayblocks\gameplay_blocks\hero;

function render_hero_block ( $attributes, $content ) {
	
	ob_start(); // Turn on output buffering 
	// include plugin_dir_path( __FILE__ ) . '/block.json';
	// $metadata = json_decode( ob_get_clean(), true );
	// wp_localize_script( 'gameplay-frontend-client', 'hero', $metadata );
	
	?>
    
	<section class="hero-wrapper">
	
	<section>

	<?php
	
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer

	return $output; // Print output
}


function register_hero_block() {
	// Return early if this function does not exist.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	// Load attributes from block.json.
	ob_start();
	include plugin_dir_path( __FILE__ ) . '/block.json';
	$metadata = json_decode( ob_get_clean(), true );
	register_block_type(
		$metadata['name'],
		array(
			'editor_script'   => 'hero-block-editor',
			'script'   => 		 'hero-block-client',
			'editor_style'    => 'hero-block-editor-css',
			'style'           => 'hero-block-frontend',
			'attributes'      => $metadata['attributes'],
			'render_callback' => __NAMESPACE__ . '\render_hero_block',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\register_hero_block', 99 );

