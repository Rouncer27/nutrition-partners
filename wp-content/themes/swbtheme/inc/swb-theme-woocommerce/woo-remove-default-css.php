<?php 

// Remove the default css that comes with the woocommerce plugin. We will make this our own! //
add_filter( 'woocommerce_enqueue_styles', '__return_false' );

?>