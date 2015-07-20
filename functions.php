<?php
/**
 * eGroup functions and definitions
 *
 * @package eGroup
 */

/**
 * Enqueue scripts and styles.
 */
function egroup_scripts() {
	wp_enqueue_style( 'egroup-style', get_stylesheet_directory_uri() . '/assets/css/main.css' );
  	wp_enqueue_script( 'egroup-theme', get_template_directory_uri() . '/assets/js/dist/theme.js', array('jquery'), '0.0.1' );
 
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'egroup_scripts' );

/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Theme Setup file.
 */
require get_template_directory() . '/inc/theme-setup.php';
