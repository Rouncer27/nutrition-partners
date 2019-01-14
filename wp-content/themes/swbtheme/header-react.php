<?php
/**
 * This is the main header for the swbtheme framework.
 * This header will be used for all the pages and posts on the site. 
 * This template file is being styled with some basic css in the sass file WordPress/_header.SCSS
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage header template
 * @version 3.2
 */
?>
<!DOCTYPE html>
 <html <?php language_attributes(); ?> class="no-js">
 <head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="HandheldFriendly" content="true">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="apple-touch-icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/dist/img/favicon/favicon.png" />
	<link rel="shortcut icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/dist/img/favicon/favicon.png" />
	<link rel="icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/dist/img/favicon/favicon.png" />
	<link rel='pingback' href='<?php bloginfo( 'pingback_url' ); ?>' />
	<?php wp_head(); ?>
</head>
	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<?php
			$languages = explode(',',$_SERVER['HTTP_ACCEPT_LANGUAGE']);
			foreach( $languages as $lang ) {
				$langSet = substr($lang, 0, 2);
				break;
			}
		?>
		<noscript>
			<style>
				.noscript-div {
					max-width: 500px;
					margin: 150px auto 50px;
				}

				.noscript-div p {
					text-align: center
				}
			</style>
			<div class="noscript-div">
      	<p>Nutrition Partners website requires JavaScript in order to use it properly. Please enable JavaScript on your browser to view this website.</p>
			</div>
    </noscript>
		<div data-browserlang="<?php echo esc_attr( $langSet ); ?>" class="swbwrapper"><!-- Website Wrapper -->			