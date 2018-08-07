<?php
/*
*
* Add custom logo to the admin login screen.
* 
*
* swbtheme - version 1.0.5
* author - Switchback Creative Inc.
*
*/

// add a custom stylesheet to the login screen
function swbtheme_login_styles() {
	echo '<link rel="stylesheet" href="' . get_stylesheet_directory_uri() . '/inc/css/login.css">';
}
add_action('login_head', 'swbtheme_login_styles');

// Change the new login logo's link. //

function swbtheme_login_logo_url() {
	$swbtheme_url = 'http://switchbackcreative.ca';
    return $swbtheme_url;
}
add_filter( 'login_headerurl', 'swbtheme_login_logo_url');

// Change the new login logo's link title //

function swbtheme_login_logo_url_title() {
    return 'Proudly made by Switchback Creative Inc.';
}
add_filter( 'login_headertitle', 'swbtheme_login_logo_url_title' );

?>