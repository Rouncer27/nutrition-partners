<?php
/**
* Switchback Creative Custom Theme optimization file. 
* @author Switchback Creative Inc.
* @package swbtheme
* @subpackage functions
* @version 1.0.6
*/

/* Remove the WordPress version number meta tag */
function swb_remove_version() {
	return '';
	}

add_filter('the_generator', 'swb_remove_version');

/* Remove the WordPress version number meta tag */

function swb_theme_remove_header_info() {
	remove_action('wp_head', 'feed_links_extra', 3);
	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'start_post_rel_link');
	remove_action('wp_head', 'index_rel_link');
	remove_action('wp_head', 'parent_post_rel_link', 10, 0);
}

add_action( 'init', 'swb_theme_remove_header_info' );

// removes the version number string from the end of the js and css files. //

function swb_theme_remove_cssjs_ver( $src ) {

	if( strpos( $src, '?ver=' ) )

		$src = remove_query_arg( 'ver', $src );

	return $src;
}

add_filter( 'style_loader_src', 'swb_theme_remove_cssjs_ver', 10, 2 );
add_filter( 'script_loader_src', 'swb_theme_remove_cssjs_ver', 10, 2 );

// Remove the emoji code from the head of website. //

// REMOVE WP EMOJI
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );
