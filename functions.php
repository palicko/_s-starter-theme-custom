<?php
/**
 * eGroup functions and definitions
 *
 * @package eGroup
 */

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

/**
 * Load Assets file.
 */
require get_template_directory() . '/inc/assets.php';