<?php
/**
* Switchback Creative Custom Theme functions and definitions
*
* @author Switchback Creative Inc.
* @package swbtheme
* @subpackage functions
* @version 1.1
*/

// How many products per page //
add_filter( 'loop_shop_per_page', create_function( '$cols', 'return 12;' ), 24 );

// Remove all the css that comes with woocommerce. We will add our own to it. //
require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-remove-default-css.php');

// Remove the main title from the main woocommerce shop page. //
require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-remove-main-title.php');

// Remove the "showing results" text at the top of the shop pages. //
require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-remove-showing-results.php');

// remove the default sorting drop down option from the shop page. //
require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-remove-sorting-selector.php');

// Single product remove meta box for the tags from the backend //
// require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-remove-backend-tag-meta-box.php');

// Single product remove meta box content editor for the main product description from the backend //
//require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-remove-content-editor-product.php');

// Remove the item image from the cart page. //
require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-remove-cart-item-image.php');

// Remove the fields from the checkout form that are not required. //
require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-remove-checkout-fields.php');

// Single product add a container <div>. //
require_once( get_template_directory() . '/inc/swb-theme-woocommerce/woo-add-container-single-product.php' );

// Single product add a Quantity title //
require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-add-quantity-title-single-product.php');

// Single product add the additional information display //
//require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-add-product-additional-information-display.php');

// Thank you page add the print button //
require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-add-print-button-thankyou-page.php');

// Thank you page Thank you message //
require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-add-message-thankyou-page.php');

// Remove the reviews. //
//require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-remove-reviews.php');

add_action( 'after_setup_theme', 'yourtheme_setup' );
 
function yourtheme_setup() {
	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' );
}


// Add main page event time details. //
//require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-add-main-loop-event-date.php');
// Add the event Location. ///
//require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-add-event-location.php');
// Add the event date. ///
//require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woo-add-event-date.php');


//add_action( 'woocommerce_single_product_summary', 'woocommerce_total_product_price', 31 );
function woocommerce_total_product_price() {
    global $woocommerce, $product;
    // let's setup our divs
    echo sprintf('<div id="product_total_price" style="margin-bottom:20px;">%s %s</div>',__('Product Total:','woocommerce'),'<span class="price">'.$product->get_price().'</span>');
    ?>
        <script>
            jQuery(function($){
                var price = <?php echo $product->get_price(); ?>,
                    currency = '<?php echo get_woocommerce_currency_symbol(); ?>';

                $('[name=quantity]').change(function(){
                    if (!(this.value < 1)) {

                        var product_total = parseFloat(price * this.value);

                        $('#product_total_price .price').html( currency + product_total.toFixed(2));

                    }
                });
            });
        </script>
    <?php
}







