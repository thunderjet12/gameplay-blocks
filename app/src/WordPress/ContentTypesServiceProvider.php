<?php

namespace GameplayBlocks\WordPress;

use WPEmerge\ServiceProviders\ServiceProviderInterface;

/**
 * Register widgets and sidebars.
 */
class ContentTypesServiceProvider implements ServiceProviderInterface
{
	/**
	 * {@inheritDoc}
	 */
	public function register( $container ) {
		// Nothing to register.
		add_action( 'block_categories_all', [$this, 'registerCategories'] );
	}

	/**
	 * {@inheritDoc}
	 */
	public function bootstrap( $container ) {
		add_action( 'init', [$this, 'registerPostTypes'] );
		add_action( 'init', [$this, 'registerTaxonomies'] );
		
	}

	/**
	 * Register post types.
	 *
	 * @return void
	 */
	public function registerPostTypes() {
		// phpcs:disable
		/*
		register_post_type(
			'gameplay_blocks_custom_post_type',
			array(
				'labels'              => array(
					'name'               => __( 'Custom Types', 'gameplay_blocks' ),
					'singular_name'      => __( 'Custom Type', 'gameplay_blocks' ),
					'add_new'            => __( 'Add New', 'gameplay_blocks' ),
					'add_new_item'       => __( 'Add new Custom Type', 'gameplay_blocks' ),
					'view_item'          => __( 'View Custom Type', 'gameplay_blocks' ),
					'edit_item'          => __( 'Edit Custom Type', 'gameplay_blocks' ),
					'new_item'           => __( 'New Custom Type', 'gameplay_blocks' ),
					'search_items'       => __( 'Search Custom Types', 'gameplay_blocks' ),
					'not_found'          => __( 'No custom types found', 'gameplay_blocks' ),
					'not_found_in_trash' => __( 'No custom types found in trash', 'gameplay_blocks' ),
				),
				'public'              => true,
				'exclude_from_search' => false,
				'show_ui'             => true,
				'capability_type'     => 'post',
				'hierarchical'        => false,
				'query_var'           => true,
				'menu_icon'           => 'dashicons-admin-post',
				'supports'            => array( 'title', 'editor', 'page-attributes' ),
				'rewrite'             => array(
					'slug'       => 'custom-post-type',
					'with_front' => false,
				),
			)
		);
		*/
		// phpcs:enable
	}

	/**
	 * Register taxonomies.
	 *
	 * @return void
	 */
	public function registerTaxonomies() {
		// phpcs:disable
		/*
		register_taxonomy(
			'gameplay_blocks_custom_taxonomy',
			array( 'post_type' ),
			array(
				'labels'            => array(
					'name'              => __( 'Custom Taxonomies', 'gameplay_blocks' ),
					'singular_name'     => __( 'Custom Taxonomy', 'gameplay_blocks' ),
					'search_items'      => __( 'Search Custom Taxonomies', 'gameplay_blocks' ),
					'all_items'         => __( 'All Custom Taxonomies', 'gameplay_blocks' ),
					'parent_item'       => __( 'Parent Custom Taxonomy', 'gameplay_blocks' ),
					'parent_item_colon' => __( 'Parent Custom Taxonomy:', 'gameplay_blocks' ),
					'view_item'         => __( 'View Custom Taxonomy', 'gameplay_blocks' ),
					'edit_item'         => __( 'Edit Custom Taxonomy', 'gameplay_blocks' ),
					'update_item'       => __( 'Update Custom Taxonomy', 'gameplay_blocks' ),
					'add_new_item'      => __( 'Add New Custom Taxonomy', 'gameplay_blocks' ),
					'new_item_name'     => __( 'New Custom Taxonomy Name', 'gameplay_blocks' ),
					'menu_name'         => __( 'Custom Taxonomies', 'gameplay_blocks' ),
				),
				'hierarchical'      => true,
				'show_ui'           => true,
				'show_admin_column' => true,
				'query_var'         => true,
				'rewrite'           => array( 'slug' => 'custom-taxonomy' ),
			)
		);
		*/
		// phpcs:enable
	}

	public function registerCategories ( $categories ) {
		$categories_slugs = wp_list_pluck( $categories, 'slug' );

		return in_array(
			//validated  if category exists
			'gameplay-super-blocks', $categories_slugs, true
			) ? $categories : 
			array_merge(

					[
						array(
						'slug' => 'gameplay-super-blocks',
						'title' => __( 'Gameplay Super Blocks', 'gameplay-super-blocks' ),
						'icon' => ''
						)
					],
					[
						array(
						'slug' => 'gameplay-mini-blocks',
						'title' => __( 'Gameplay Mini Blocks', 'gameplay-mini-blocks' ),
						'icon' => ''
						)
					],
					$categories

			);

		// 	echo '<pre>';
		// print_r( $result );
		// wp_die();


	}

}
