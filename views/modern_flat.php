<?php

global $post;

/* Setup the query */
$posts_list_query = new \WP_Query(
    array(
        'posts_per_page'      => $attributes['postsToShow'],
        'post_status'         => 'publish',
        'ignore_sticky_posts' => 1,
        'post__not_in'        => array( $post->ID ), // Exclude the current post from the grid.
    )
);

$html = '<section class="postslist-block ' . ( isset( $attributes['className'] ) ? $attributes['className'] : '' ) . ' ' . ( isset( $attributes['align'] ) ? 'align' . $attributes['align'] : '' ) . '">';

/* Start the loop */
if ( $posts_list_query->have_posts() ) {
    while ( $posts_list_query->have_posts() ) {
        $posts_list_query->the_post();

        /* Setup the post ID */
        $post_id = get_the_ID();

        /* Setup the featured image ID */
        $post_thumb_id = get_post_thumbnail_id( $post_id );

        /* Get the post title */
        $title = get_the_title( $post_id );

        if ( ! $title ) {
            $title = __( 'Untitled', 'block-builder' );
        }

        /* Get the post excerpy */
        $excerpt = apply_filters(
            'the_excerpt',
            get_post_field(
                'post_excerpt',
                $post_id,
                'display'
            )
        );

        if ( empty( $excerpt ) ) {
            $excerpt = apply_filters(
                'the_excerpt',
                wp_trim_words(
                    preg_replace(
                        array(
                            '/\<figcaption>.*\<\/figcaption>/',
                            '/\[caption.*\[\/caption\]/',
                        ),
                        '',
                        get_the_content()
                    ),
                    55
                )
            );
        }

        if ( ! $excerpt ) {
            $excerpt = null;
        }

        $post_classes = '';

        /* Add sticky class */
        if ( is_sticky( $post_id ) ) {
            $post_classes .= ' sticky';
        } else {
            $post_classes .= null;
        }
        /* Join classes together */
        $post_classes = join( ' ', get_post_class( $post_classes, $post_id ) );

        $html .= sprintf(
            '<article id="post-%1$s" class="%2$s">',
            esc_attr( $post_id ),
            esc_attr( $post_classes )
        );

        $html .= '<header class="entry-header">';
        $html .= sprintf(
            '<h2><a href="%1$s" rel="bookmark">%2$s</a></h2>',
            esc_url( get_permalink( $post_id ) ),
            esc_html( $title )
        );
        $html .= '<div class="entry-meta">';
        $html .= sprintf(
            '<span class="post-author" itemprop="author" itemtype="https://schema.org/Person"><a href="%2$s" itemprop="url" rel="author"><span itemprop="name">%1$s</span></a></span>',
            esc_html( get_the_author_meta( 'display_name', get_the_author_meta( 'ID' ) ) ),
            esc_html( get_author_posts_url( get_the_author_meta( 'ID' ) ) )
        );
        $html .= sprintf(
            '<time datetime="%1$s" class="entry-date published" itemprop="datePublished"><a href="%2$s" itemprop="url">%3$s</a></time>',
            esc_attr( get_the_date( 'c', $post_id ) ),
            esc_url( get_permalink( $post_id ) ),
            esc_html( get_the_date( '', $post_id ) )
        );
        $html .= '</div>';

        $html .= '</header>';

        if ( $post_thumb_id ) {

            /* Display the featured image */
            $html .= sprintf(
                '<div class="entry-media"><a href="%1$s" class="post-thumbnail" rel="bookmark" aria-hidden="true" tabindex="-1">%2$s</a></div>',
                esc_url( get_permalink( $post_id ) ),
                wp_get_attachment_image( $post_thumb_id, 'full' )
            );
        }

        $html .= '<div class="entry-summary">';
        $html .= wp_kses_post( $excerpt );
        $html .= '</div>';
        $html .= '</article>';
    }

    /* Restore original post data */
    wp_reset_postdata();
}

$html .= '</section>';

// var_dump($html);