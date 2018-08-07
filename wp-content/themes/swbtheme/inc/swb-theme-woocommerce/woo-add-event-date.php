<?php
function swb_add_event_date() {
  $eventDate = get_post_meta( get_the_id(), '_swb_theme_products_date', true );
  if(!empty($eventDate) ) {
    	echo '<div class="swbtheme-event-date">';
    	echo '<h3>Date of Event</h3>';
    	echo '<p>' . date( 'l', $eventDate ) . ', ' . date( 'F', $eventDate ) . ' ' . date( 'j', $eventDate ) . ', ' . date( 'Y', $eventDate ) . '</p>';
    	echo '<p>Be at location at ' . date( 'g:i:s A', $eventDate ) . '</p>';
    	echo '</div>';
  }
}
add_action( 'woocommerce_single_product_summary' , 'swb_add_event_date', 20 );
 
?>