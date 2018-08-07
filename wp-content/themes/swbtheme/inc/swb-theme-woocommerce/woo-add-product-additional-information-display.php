<?php

function swb_woo_additional_information() {
  $additional = wpautop( esc_html ( get_post_meta( get_the_ID(), 'additional_information', true ) ) );

  if($additional) {

    echo '<div class="additional-information">';
    echo '<h3>Additional Information</h3>';
    echo $additional;
    echo '</div>';
  }
}

add_action('woocommerce_single_product_summary', 'swb_woo_additional_information', 35);


?>