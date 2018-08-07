<?php

function swb_quantity_container_opening() {
  echo '<div class="quantity-input-container"><p class="quantity-text">Quantity</p>';
}

add_action( 'woocommerce_before_add_to_cart_button', 'swb_quantity_container_opening', 25 );

function swb_quantity_container_closing() {
  echo '</div>';
}

add_action( 'woocommerce_after_add_to_cart_form', 'swb_quantity_container_closing', 35 );
