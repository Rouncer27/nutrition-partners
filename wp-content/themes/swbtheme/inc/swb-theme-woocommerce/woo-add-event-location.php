<?php
function swb_add_event_location() {
  $eventLocation = get_post_meta( get_the_id(), '_swb_theme_products_location', true );
  if(!empty($eventLocation) ) {
    	echo '<div class="swbtheme-event-location">';
    	echo '<h3>Location of Event</h3>';
    	echo '<p>' . $eventLocation . '</p>';
  }
}
add_action( 'woocommerce_single_product_summary' , 'swb_add_event_location', 20 );
 
?>