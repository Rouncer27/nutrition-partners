<?php

// Remove the backend product tages meta box that are just not needed.

function swb_remove_metaboxes() {
  remove_meta_box( 'tagsdiv-product_tag','product','side' );
}

add_action( 'add_meta_boxes' , 'swb_remove_metaboxes', 10 );

?>