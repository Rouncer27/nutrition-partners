<?php
//hook the administrative header output
add_action('wp_before_admin_bar_render', 'swbtheme_dashboard_top_logo');
function swbtheme_dashboard_top_logo() {
	global $wp_admin_bar; $wp_admin_bar->add_menu(array
		( 'id' => 'switchback-theme',
		  'title' => "Switchback Creative Loves Its Clients", 
		  'href' => '' 
		));
}

?>