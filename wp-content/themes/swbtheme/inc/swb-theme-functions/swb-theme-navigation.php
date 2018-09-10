<?php

function swb_nav_menu_header() {
	$args = array(
			'theme_location' => 'SWB-main-menu',
			'menu_class' => 'swbmainnav__wrap',
			'echo' => true,
			'items_wrap' => '<ul id = "%1$s" class = "%2$s">%3$s</ul>',
			'depth' => 3,
			'link_before' => '<span>',
    		'link_after' => '</span>'
		);
	wp_nav_menu ( $args );
}

function swb_footer_nav_menu_header() {
	$args = array(
		'theme_location' => 'SWB-footer-nav',
		'menu' => 'menu-main-menu',
		'menu_class' => 'swbmainnav__wrap',
		'container' => 'ul',
		'echo' => true,
		'depth' => 3,
		'link_before' => '<span>',
		'link_after' => '</span>'
	);
	wp_nav_menu( $args );	
}
