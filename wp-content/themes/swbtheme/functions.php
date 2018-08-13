<?php
/**
* Switchback Creative Custom Theme functions and definitions
*
* @author Switchback Creative Inc.
* @package swbtheme
* @subpackage functions
* @version 3.1
*/

if ( ! function_exists( 'SWB_theme_setup' ) ) :

function SWB_theme_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 */
	load_theme_textdomain('swbtheme', get_template_directory() . '/languages');

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );
	//  ***  Setup images sizes on the swbtheme.  ***  //
	//  ***  Add image sizes. true is cropped images.  ***  //

	// *** Theme default images. *** //

	// *** CROPPED IMAGES *** //
	add_image_size( 'sqaurecropped', 1000, 1000, true );
	add_image_size( 'halfsquarecropped', 500, 500, true );

	// *** NOT CROPPED *** //
	// Need a full big background image for background images on screens larger than 1600px wide. //
	add_image_size( 'herofull', 2400, 4000, false);
	// Need an image for screen sizes 1024px by 1599px that is not contained by the 1000px container. //
	add_image_size( 'fullbackground', 1600, 4000, false);
	// Need an image for background images or images that are full size of the 1000px container. //
	add_image_size( 'contained', 1000, 4000, false );
	// Need a image for half sized images on a mobile device. Screens smaller than 768px. //
	add_image_size( 'mobilehalf', 500, 1000, false );

	// *** Custom Image sizes here. *** //

	/**
	*
	* This function was added to give more options to the wysiwyg editor for users uploading images
	* @since 1.0.1
	*
	*/
	add_filter( 'image_size_names_choose', 'swbtheme_image_sizes' );

	function swbtheme_image_sizes( $sizes ) {

	    $addsizes = array(
	        'main' => 'Blog Home Page 1000px by 440px',
			'bloghome' => 'A 500px by 500px square image.',
	    );

	    $newsizes = array_merge($sizes, $addsizes);

	    return $newsizes;
	}

	// This theme uses wp_nav_menu() in two locations.
	//   ***   Create the menus   ***   //
	register_nav_menus( array(
		'SWB-main-menu' => 'SWB Menu',
		'SWB-footer-nav'	=>	'SWB Footer Nav',
	) );


	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'comment-list',
		'comment-form',
		'search-form',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 *
	 * See: https://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		// 'aside',
		// 'image',
		// 'video',
		// 'quote',
		// 'link',
		// 'gallery',
		// 'status',
		// 'audio',
		// 'chat',
	) );
	
	add_theme_support( 'woocommerce' );	    

} //End of the theme setup.

endif; // Switchback Theme Setup.

add_action( 'after_setup_theme', 'SWB_theme_setup' );

/**
 * Sets the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 *
 * @since Switchback Creative Custom Theme 1.0
 */
function swbtheme_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'swbtheme_content_width', 960 );
}
add_action( 'after_setup_theme', 'swbtheme_content_width', 0 );



/**
 * Registers a widget area.
 *
 * @link https://developer.wordpress.org/reference/functions/register_sidebar/
 *
 * @since Switchback Creative Custom Theme 1.0
 */
//   ***   swbtheme site Sidebars   ***   //
function swb_register_sidebars() {
	register_sidebar( array(
		'name'	=>	'Footer Sidebar',
		'id'	=>	'footer_sidebar',
		'description'   => 'This is the sidebar that will be displayed at the bottom of the default page.php template and the index.php template.',
		'before_widget'	=>	'<div class="swbsidebar__item">',
		'after_widget'	=>	'</div>',
		'before_title'	=>	'<h3>',
		'after_title'	=>	'</h3>'
		) );

	register_sidebar( array(
		'name'	=>	'Archive Page Sidebar',
		'id'	=>	'archive_sidebar',
		'description'   => 'This is the sidebar that will be displayed on the archive page.',
		'before_widget'	=>	'',
		'after_widget'	=>	'',
		'before_title'	=>	'<h3>',
		'after_title'	=>	'</h3>'
		) );
}
add_action( 'widgets_init', 'swb_register_sidebars' );


/**
 * Enqueues scripts and styles.
 *
 * @since Switchback Creative Custom Theme 1.0
 */
//   ***   These are where we include style sheets that are need for our project.   ***   //
function switchback_styles() { 
	wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/dist/css/style.css?ver='.time(), null, null );
	//wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/dist/css/style.css', null, null );
}
add_action( 'wp_enqueue_scripts', 'switchback_styles' );

//   ***   This is where we will include more script files that may be need for our project.   ***   //
function switchback_scripts() { 
	wp_enqueue_script( 'themejs', get_template_directory_uri() . '/assets/dist/js/myscripts.js?ver='.time(), array( 'jquery' ), null, true);
	//wp_enqueue_script( 'themejs', get_template_directory_uri() . '/assets/dist/js/myscripts.js', array( 'jquery' ), null, true);
}
add_action( 'wp_enqueue_scripts', 'switchback_scripts' );


/**
 * Required files, functions and styles to make the swbtheme better.
 *
 * @since Switchback Creative Custom Theme 1.0
 */

/*
 * Admin Area  
 */

require_once(get_template_directory() . '/inc/swb-theme-admin-area/swb-theme-admin-init.php');

/*
 * Functions
 */

require_once(get_template_directory() . '/inc/swb-theme-functions/swb-theme-functions-init.php');

/*
 * Advanced Custom Fields
 */

require_once( get_template_directory() . '/inc/swb-theme-acf/swb-theme-acf-init.php'  );

/*
 * WooCommerce
 */

require_once(get_template_directory() . '/inc/swb-theme-woocommerce/woocommerce-init.php');

/*
 * Theme optimization
 */

/*require_once(get_template_directory() . '/inc/swb-theme-optimization/swb-theme-optimization.php');*/

/*
 * Theme security
 */

/*require_once(get_template_directory() . '/inc/swb-theme-security/swb-theme-security.php');*/


// Enable the option show in rest
add_filter( 'acf/rest_api/field_settings/show_in_rest', '__return_true' );

// Enable the option edit in rest
// add_filter( 'acf/rest_api/field_settings/edit_in_rest', '__return_true' );


// function swb_theme_get_menu() {
// 	# Change 'menu' to your own navigation slug.
// 	return wp_get_nav_menu_items('swb_np_menu');
// }

// add_action( 'rest_api_init', function () {
// 			register_rest_route( 'myroutes', '/menu', array(
// 			'methods' => 'GET',
// 			'callback' => 'swb_theme_get_menu',
// 	) );
// } );
