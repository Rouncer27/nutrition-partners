<?php

function swb_remove_product_editor() {
  remove_post_type_support( 'product', 'editor' );
}
add_action( 'init', 'swb_remove_product_editor' );

?>