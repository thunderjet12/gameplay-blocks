# WP Emerge Twig

Enables the use of Twig views in [WP Emerge](https://github.com/htmlburger/wpemerge).

## Quickstart

1. Run `composer require htmlburger/wpemerge-twig` in your theme directory
2. Add `\WPEmergeTwig\View\ServiceProvider` to your array of providers when booting WPEmerge:
    ```php
    \App::make()->bootstrap( [
        'providers' => [
            \WPEmergeTwig\View\ServiceProvider::class,
        ],
    ] );
    ```

## Options

Default options:
```php
[
    // Automatically replace the default view engine for WP Emerge.
    'replace_default_engine' => true,

    // Pass .php views to the default view engine.
    // replace_default_engine must be true for this to take effect.
    'proxy_php_views' => true,

    // One or more directories to search for views.
    // Defaults to the main ['views'] key of the configuration.
    'views' => [get_stylesheet_directory(), get_template_directory()],

    // Options passed directly to Twig.
    'options' => [
        // 'cache' defaults to the main ['cache']['path'] key of the configuration.
        'cache' => 'wp-content/uploads/wpemerge/cache/twig',
    ],
]
```

You can change these options by specifying a `twig` key in your WP Emerge config array:
```php
\App::make()->bootstrap( [
    // ... other WP Emerge options
    'twig' => [
        // ... other WP Emerge Twig options
        'options' => [
            // ... other Twig options
            'cache' => false,
        ],
    ],
] );
```

More information on what Twig options are supported is available on [https://twig.symfony.com/doc/2.x/api.html](https://twig.symfony.com/doc/2.x/api.html).

## Extending Twig

You can use the following to extend twig with a custom filter, for example:
```php
$myfilter = new Twig_Filter( 'myfilter', function( $string ) {
    return strtoupper( $string );
} );

// \App::resolve() used for brevity's sake - use a Service Provider instead.
$twig = \App::resolve( WPEMERGETWIG_VIEW_TWIG_VIEW_ENGINE_KEY );
$twig->environment()->addFilter( $myfilter );
```
With this, you now have your very own custom Twig filter:
```twig
{{ 'hello world!' | myfilter }}
```

More information on how you can extend Twig is available on [https://twig.symfony.com/doc/2.x/advanced.html#creating-extensions](https://twig.symfony.com/doc/2.x/advanced.html#creating-extensions).
