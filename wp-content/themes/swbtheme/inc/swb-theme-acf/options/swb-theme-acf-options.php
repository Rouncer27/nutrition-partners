<?php

// Options page setup

if( function_exists('acf_add_options_page') ) {
  acf_add_options_page(array(
    'page_title'  => 'Site Wide Settings',
    'menu_title'  => 'Site Wide Settings',
    'menu_slug'   => 'site-wide-settings',
    'capability'  => 'edit_posts',
    'redirect'    => true,
    'position'      => '1.99',
    ));

  acf_add_options_sub_page(array(
    'page_title'  => 'Contact Information',
    'menu_title'  => 'Contact Information',
    'parent_slug' => 'site-wide-settings',
  ));

  acf_add_options_sub_page(array(
    'page_title'  => 'Social Media',
    'menu_title'  => 'Social Media',
    'parent_slug' => 'site-wide-settings',
  ));

  acf_add_options_sub_page(array(
    'page_title'  => 'Company Logo',
    'menu_title'  => 'Company Logo',
    'parent_slug' => 'site-wide-settings',
  ));

}

// Social Media Options. //

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array (
	'key' => 'group_58960ad343831',
	'title' => 'Site Wide Social Media',
	'fields' => array (
		array (
			'default_value' => '',
			'placeholder' => '',
			'key' => 'field_58960b11519d0',
			'label' => 'Facebook',
			'name' => 'swb_theme_options_facebook',
			'type' => 'url',
			'instructions' => 'Please enter the URL to your Facebook account and save.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'placeholder' => '',
			'key' => 'field_58960b8bae2a4',
			'label' => 'Twitter',
			'name' => 'swb_theme_options_twitter',
			'type' => 'url',
			'instructions' => 'Please enter the URL for your twitter account.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'placeholder' => '',
			'key' => 'field_58960bc5ae2a5',
			'label' => 'Instagram',
			'name' => 'swb_theme_options_instagram',
			'type' => 'url',
			'instructions' => 'Please enter the URL to your Instagram account here,',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'placeholder' => '',
			'key' => 'field_58960bf7ae2a6',
			'label' => 'Google Plus',
			'name' => 'swb_theme_options_google_plus',
			'type' => 'url',
			'instructions' => 'Please enter the URL to your Google Plus account here.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'placeholder' => '',
			'key' => 'field_58960c12ae2a7',
			'label' => 'Pintrest',
			'name' => 'swb_theme_options_pintrest',
			'type' => 'url',
			'instructions' => 'Please enter the URL to your Pintrest account.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'placeholder' => '',
			'key' => 'field_58960c35ae2a8',
			'label' => 'Linkedin',
			'name' => 'swb_theme_options_linkedin',
			'type' => 'url',
			'instructions' => 'Please enter the URL to your Linkedin account.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'placeholder' => '',
			'key' => 'field_58960c51ae2a9',
			'label' => 'Youtube',
			'name' => 'swb_theme_options_youtube',
			'type' => 'url',
			'instructions' => 'Please enter your Youtube account URL.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'placeholder' => '',
			'key' => 'field_58960c70ae2aa',
			'label' => 'Snapchat',
			'name' => 'swb_theme_options_snapchat',
			'type' => 'url',
			'instructions' => 'Please enter the URL to your Snapchat account.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
	),
	'location' => array (
		array (
			array (
				'param' => 'options_page',
				'operator' => '==',
				'value' => 'acf-options-social-media',
			),
		),
	),
	'menu_order' => 1,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => array (
		0 => 'the_content',
		1 => 'excerpt',
		2 => 'custom_fields',
		3 => 'discussion',
		4 => 'comments',
		5 => 'revisions',
		6 => 'slug',
		7 => 'author',
		8 => 'format',
		9 => 'page_attributes',
		10 => 'featured_image',
		11 => 'categories',
		12 => 'tags',
		13 => 'send-trackbacks',
	),
	'active' => 1,
	'description' => '',
));

endif;

// Contact Information //

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array (
	'key' => 'group_58960def07e6b',
	'title' => 'Contact Information',
	'fields' => array (
		array (
			'default_value' => '',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'key' => 'field_58960e1df9c33',
			'label' => 'Street Address',
			'name' => 'swb_theme_options_street_address',
			'type' => 'text',
			'instructions' => 'Please enter the street address for you business here.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'key' => 'field_58960e4df9c34',
			'label' => 'City',
			'name' => 'swb_theme_options_city',
			'type' => 'text',
			'instructions' => 'Please enter the city for your business here.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'key' => 'field_58960e63f9c35',
			'label' => 'Province',
			'name' => 'swb_theme_options_province',
			'type' => 'text',
			'instructions' => 'Please enter the Province for your business here.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'key' => 'field_58960e7af9c36',
			'label' => 'Postal Code',
			'name' => 'swb_theme_options_postal_code',
			'type' => 'text',
			'instructions' => 'Please enter the postal code for your business here.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'key' => 'field_58960e95f9c37',
			'label' => 'Country',
			'name' => 'swb_theme_options_country',
			'type' => 'text',
			'instructions' => 'Please enter the country for your business here.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'maxlength' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'key' => 'field_58960ebef9c38',
			'label' => 'Phone Number',
			'name' => 'swb_theme_options_phone_number',
			'type' => 'text',
			'instructions' => 'Please enter the phone number for your business here.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'key' => 'field_58960ee4f9c39',
			'label' => 'Email Address',
			'name' => 'swb_theme_options_email_address',
			'type' => 'email',
			'instructions' => 'Please enter the email address for you business here.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
	),
	'location' => array (
		array (
			array (
				'param' => 'options_page',
				'operator' => '==',
				'value' => 'acf-options-contact-information',
			),
		),
	),
	'menu_order' => 1,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => array (
		0 => 'permalink',
		1 => 'the_content',
		2 => 'excerpt',
		3 => 'custom_fields',
		4 => 'discussion',
		5 => 'comments',
		6 => 'revisions',
		7 => 'slug',
		8 => 'author',
		9 => 'format',
		10 => 'page_attributes',
		11 => 'featured_image',
		12 => 'categories',
		13 => 'tags',
		14 => 'send-trackbacks',
	),
	'active' => 1,
	'description' => 'These are the fields for the site wide contact information',
));

endif;


// Logo //

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array (
	'key' => 'group_5896118220eb9',
	'title' => 'Company Logo',
	'fields' => array (
		array (
			'return_format' => 'array',
			'preview_size' => 'medium',
			'library' => 'all',
			'min_width' => '',
			'min_height' => '',
			'min_size' => '',
			'max_width' => '',
			'max_height' => '',
			'max_size' => '',
			'mime_types' => '',
			'key' => 'field_589611c9ca679',
			'label' => 'Company Logo',
			'name' => 'swb_theme_options_company_logo',
			'type' => 'image',
			'instructions' => 'Please upload the main company logo for your website. This will change all instances of your logo. Please note that your logo should be around 700px wide to look good everywhere on your site.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
		array (
			'return_format' => 'array',
			'preview_size' => 'medium',
			'library' => 'all',
			'min_width' => '',
			'min_height' => '',
			'min_size' => '',
			'max_width' => '',
			'max_height' => '',
			'max_size' => '',
			'mime_types' => '',
			'key' => 'field_589611c9ca680',
			'label' => 'Company Footer Logo',
			'name' => 'swb_theme_options_company_footer_logo',
			'type' => 'image',
			'instructions' => 'Please upload the Footer company logo for your website. This will change all instances of your logo in the footer of the website. Please note that your logo should be around 400px wide to look good everywhere on your site.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
		),
	),
	'location' => array (
		array (
			array (
				'param' => 'options_page',
				'operator' => '==',
				'value' => 'acf-options-company-logo',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => 1,
	'description' => '',
));

endif;



