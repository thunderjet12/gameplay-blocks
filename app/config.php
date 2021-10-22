<?php
/**
 * WP Emerge configuration.
 *
 * @link https://docs.wpemerge.com/#/framework/configuration
 *
 * @package GameplayBlocks
 */

return [
	/**
	 * Array of service providers you wish to enable.
	 */
	'providers'           => [
		\WPEmergeAppCore\AppCore\AppCoreServiceProvider::class,
		\WPEmergeAppCore\Assets\AssetsServiceProvider::class,
		\WPEmergeAppCore\Avatar\AvatarServiceProvider::class,
		\WPEmergeAppCore\Config\ConfigServiceProvider::class,
		\WPEmergeAppCore\Image\ImageServiceProvider::class,
		\WPEmergeAppCore\Sidebar\SidebarServiceProvider::class,
		// \WPEmergeTwig\View\ServiceProvider::class,
		\GameplayBlocks\Routing\RouteConditionsServiceProvider::class,
		\GameplayBlocks\View\ViewServiceProvider::class,
		\GameplayBlocks\WordPress\AdminServiceProvider::class,
		\GameplayBlocks\WordPress\AssetsServiceProvider::class,
		\GameplayBlocks\WordPress\ContentTypesServiceProvider::class,
		\GameplayBlocks\WordPress\ShortcodesServiceProvider::class,
		\GameplayBlocks\WordPress\PluginServiceProvider::class,
		\GameplayBlocks\WordPress\WidgetsServiceProvider::class,
	],

	/**
	 * Array of route group definitions and default attributes.
	 * All of these are optional so if we are not using
	 * a certain group of routes we can skip it.
	 * If we are not using routing at all we can skip
	 * the entire 'routes' option.
	 */
	'routes'              => [
		'web'   => [
			'definitions' => __DIR__ . DIRECTORY_SEPARATOR . 'routes' . DIRECTORY_SEPARATOR . 'web.php',
			'attributes'  => [
				'namespace' => 'GameplayBlocks\\Controllers\\Web\\',
			],
		],
		'admin' => [
			'definitions' => __DIR__ . DIRECTORY_SEPARATOR . 'routes' . DIRECTORY_SEPARATOR . 'admin.php',
			'attributes'  => [
				'namespace' => 'GameplayBlocks\\Controllers\\Admin\\',
			],
		],
		'ajax'  => [
			'definitions' => __DIR__ . DIRECTORY_SEPARATOR . 'routes' . DIRECTORY_SEPARATOR . 'ajax.php',
			'attributes'  => [
				'namespace' => 'GameplayBlocks\\Controllers\\Ajax\\',
			],
		],
	],

	/**
	 * View Composers settings.
	 */
	'view_composers'      => [
		'namespace' => 'GameplayBlocks\\ViewComposers\\',
	],

	/**
	 * Register middleware class aliases.
	 * Use fully qualified middleware class names.
	 *
	 * Internal aliases that you should avoid overriding:
	 * - 'flash'
	 * - 'old_input'
	 * - 'csrf'
	 * - 'user.logged_in'
	 * - 'user.logged_out'
	 * - 'user.can'
	 */
	'middleware'          => [
		// phpcs:ignore
		// 'mymiddleware' => \GameplayBlocks\Middleware\MyMiddleware::class,
	],

	/**
	 * Register middleware groups.
	 * Use fully qualified middleware class names or registered aliases.
	 * There are a couple built-in groups that you may override:
	 * - 'web'      - Automatically applied to web routes.
	 * - 'admin'    - Automatically applied to admin routes.
	 * - 'ajax'     - Automatically applied to ajax routes.
	 * - 'global'   - Automatically applied to all of the above.
	 * - 'wpemerge' - Internal group applied the same way 'global' is.
	 *
	 * Warning: The 'wpemerge' group contains some internal WP Emerge
	 * middleware which you should avoid overriding.
	 */
	'middleware_groups'   => [
		'global' => [],
		'web'    => [],
		'ajax'   => [],
		'admin'  => [],
	],

	/**
	 * Optionally specify middleware execution order.
	 * Use fully qualified middleware class names.
	 */
	'middleware_priority' => [
		// phpcs:ignore
		// \GameplayBlocks\Middleware\MyMiddlewareThatShouldRunFirst::class,
		// \GameplayBlocks\Middleware\MyMiddlewareThatShouldRunSecond::class,
	],

	/**
	 * Custom directories to search for views.
	 * Use absolute paths or leave blank to disable.
	 * Applies only to the default PhpViewEngine.
	 */
	'views'               => [ dirname( __DIR__ ) . DIRECTORY_SEPARATOR . 'views' ],

	/**
	 * App Core configuration.
	 */
	'app_core'            => [
		'path' => dirname( __DIR__ ),
		'url'  => plugin_dir_url( GAMEPLAY_BLOCKS_PLUGIN_FILE ),
	],

	/**
	 * Other config goes after this comment.
	 */

	//  'twig' => [
	// 	// Automatically replace the default view engine for WP Emerge.
	// 	'replace_default_engine' => true,
	
	// 	// Pass .php views to the default view engine.
	// 	// replace_default_engine must be true for this to take effect.
	// 	'proxy_php_views' => true,
	
	// 	// One or more directories to search for views.
	// 	// Defaults to the main ['views'] key of the configuration.
	// 	'views' => [ plugin_dir_path(__DIR__) .'views' ],
	
	// 	// Options passed directly to Twig.
	// 	'options' => [
	// 		// 'cache' defaults to the main ['cache']['path'] key of the configuration.
	// 		'cache' => 'wp-content/uploads/wpemerge/cache/twig',
	// 	],
	// ],

];
