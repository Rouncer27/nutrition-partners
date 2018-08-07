<?php

 
function swb_custom_override_checkout_fields( $fields ) {
    //unset($fields['billing']['billing_first_name']);
    //unset($fields['billing']['billing_last_name']);
    unset($fields['billing']['billing_company']);
    //unset($fields['billing']['billing_address_1']);
    //unset($fields['billing']['billing_address_2']);
    //unset($fields['billing']['billing_city']);
    //unset($fields['billing']['billing_postcode']);
    //unset($fields['billing']['billing_country']);
    //unset($fields['billing']['billing_state']);
    //unset($fields['billing']['billing_phone']);
    //unset($fields['order']['order_comments']);
    //unset($fields['billing']['billing_address_2']);
    //unset($fields['billing']['billing_postcode']);
    //unset($fields['billing']['billing_email']);
    //unset($fields['billing']['billing_city']);
    //unset($fields['shipping']['shipping_first_name']);
  //unset($fields['shipping']['shipping_last_name']);
  //unset($fields['shipping']['shipping_company']);
  //unset($fields['shipping']['shipping_address_1']);
  //unset($fields['shipping']['shipping_address_2']);
  //unset($fields['shipping']['shipping_city']);
  //unset($fields['shipping']['shipping_postcode']);
  //unset($fields['shipping']['shipping_country']);
  //unset($fields['shipping']['shipping_state']);

    return $fields;
}

add_filter( 'woocommerce_checkout_fields' , 'swb_custom_override_checkout_fields' );


?>