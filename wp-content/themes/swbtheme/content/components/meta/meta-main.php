<?php
    $swbStreetAddress = get_option( 'options_swb_theme_options_street_address' );
	$swbCity          = get_option( 'options_swb_theme_options_city' );
	$swbPostalCode    = get_option( 'options_swb_theme_options_postal_code' );
	$swbCountry       = get_option( 'options_swb_theme_options_country' );
	$swbProvince      = get_option( 'options_swb_theme_options_province' );
	$swbPhone         = get_option( 'options_swb_theme_options_phone_number' );
    $swbEmail         = get_option( 'options_swb_theme_options_email_address' );
    
    if( $swbPhone ) echo '<meta itemprop="telephone" content="' . esc_html( $swbPhone ) . '">';
    if( $swbEmail ) echo '<meta itemprop="email" content="' . antispambot( $swbEmail ) . '">';

    if( $swbStreetAddress || $swbPostalCode || $swbCity || $swbCountry ) :
        
    echo '<div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">';
        if( $swbStreetAddress ) echo '<meta itemprop="streetAddress" content="' . esc_html( $swbStreetAddress ) . '">';
        if( $swbPostalCode ) echo '<meta itemprop="postalCode" content="' . esc_html( $swbPostalCode ) . '">';
        if( $swbCity ) echo '<meta itemprop="addressLocality" content="' . esc_html( $swbCity ) . '">';
        if( $swbCountry ) echo '<meta itemprop="addressCountry" content="' . esc_html( $swbCountry ) . '">';
    echo '</div>';

    endif;
?>