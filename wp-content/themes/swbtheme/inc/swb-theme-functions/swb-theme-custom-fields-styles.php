<?php
/**
* Switchback Creative Custom Theme options css styles.
*
* @author Switchback Creative Inc.
* @package swbtheme
* @subpackage Theme Options
* @version 1.0.6
*/


function swb_theme_custom_styles_help_messages() {
  echo '<link rel="stylesheet" href="' . get_stylesheet_directory_uri() . '/inc/css/swb-theme-acf-styles.css">';
}

if( is_admin() ) :

    add_action('admin_head', 'swb_theme_custom_styles_help_messages');

endif;