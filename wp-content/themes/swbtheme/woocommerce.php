<?php
/**
* Switchback Creative Custom Theme functions and definitions
*
* @author Switchback Creative Inc.
* @package swbtheme
* @subpackage functions
* @version 3.1
*/


	if( is_shop() ) :
		
		get_template_part( '/content/woocommerce/woocommerce', 'shop' );

	elseif( is_product_category( ) ) : 	
	
		get_template_part( '/content/woocommerce/woocommerce', 'category' );
  
  	elseif( is_product() ) :

  		get_template_part( '/content/woocommerce/woocommerce', 'single' );

  	elseif( is_product_tag() ) :

  		get_template_part( '/content/woocommerce/woocommerce', 'tag' );

  	else :
    	
    	get_template_part( '/content/woocommerce/woocommerce', 'default' );
	
	endif;

?>