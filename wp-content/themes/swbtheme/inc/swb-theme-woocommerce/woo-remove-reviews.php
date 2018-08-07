<?php
add_filter( 'woocommerce_product_tabs', 'swbtheme_woo_remove_reviews_tab', 98 );
    function swbtheme_woo_remove_reviews_tab($tabs) {
    unset($tabs['reviews']);
    return $tabs;
}