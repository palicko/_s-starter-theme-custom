<?php
/**
 * Enqueue scripts and styles.
 */
function egroup_scripts() {
	wp_enqueue_style( 'egroup-style', get_stylesheet_directory_uri() . '/dist/css/main.css' );
  	wp_enqueue_script( 'egroup-theme', get_template_directory_uri() . '/dist/js/theme.js', array('jquery'), '0.0.1' );
 
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'egroup_scripts' );