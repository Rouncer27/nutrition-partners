<?php
/**
* Switchback Creative Custom Theme functions and definitions
*
* @author Switchback Creative Inc.
* @package swbtheme
* @subpackage functions
* @version 1.1
*/

function swb_add_date_location_main_page_container_before() {
	echo '<div class="swb-image-container">';
}

add_action( 'woocommerce_before_shop_loop_item_title', 'swb_add_date_location_main_page_container_before', 5 );



function swb_add_date_location_main_page_after() {
	$eventDate = get_post_meta( get_the_id(), '_swb_theme_products_date', true );

	if(!empty($eventDate) ) {
		$date          = date_create( $eventDate );
		$eventMonth    = date_format( $date,"F" );
		$eventDayThree = date_format( $date,"D" );
		$eventDay      = date_format( $date,"j" );
		$eventYear     = date_format( $date,"Y" );
		echo '<div class="swbtheme-main-event-date">';
		echo '<p><span class="swb-event-day">' . $eventDayThree . '.</span><span class="swb-event-month">' . $eventMonth . ' ' . $eventDay . '</span><span class="swb-event-year">' . $eventYear . '</span></p>';
		echo '</div>';
	}
}

add_action( 'woocommerce_before_shop_loop_item_title', 'swb_add_date_location_main_page_after', 15 );


function swb_add_date_location_main_page_container_after() {
	echo '</div>';
}

add_action( 'woocommerce_before_shop_loop_item_title', 'swb_add_date_location_main_page_container_after', 20 );