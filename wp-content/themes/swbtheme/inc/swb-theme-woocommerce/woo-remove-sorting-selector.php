<?php

// remove the default sorting drop down option from the shop page. //
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );

?>