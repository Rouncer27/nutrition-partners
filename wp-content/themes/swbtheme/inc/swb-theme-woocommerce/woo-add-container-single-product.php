<?php

// Need to wrap the top information in a container <div> to make sure that everything stays seperated. //

function swb_add_container_single_product_opening() {
  echo '<div class="container">';
}

add_action( 'woocommerce_before_single_product_summary', 'swb_add_container_single_product_opening', 1 );

function swb_add_container_single_product_closing() {
  echo '</div>';
}

add_action( 'woocommerce_single_product_summary', 'swb_add_container_single_product_closing', 99 );

?>