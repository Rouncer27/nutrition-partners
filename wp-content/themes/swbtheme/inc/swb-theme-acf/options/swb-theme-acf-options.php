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
