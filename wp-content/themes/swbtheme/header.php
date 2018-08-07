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
				echo $langSet;
				break;
			}
		?>
		<div data-browserlang="<?php echo esc_attr( $langSet ); ?>" class="swbwrapper"><!-- Website Wrapper -->
			<header class="siteheader" itemscope itemtype="http://schema.org/WPHeader">
				<div class="siteheader__meta" itemscope itemtype="http://schema.org/LocalBusiness">
					<?php get_template_part( 'content/components/logos/logo', 'main'); ?>
					<?php get_template_part( 'content/components/meta/meta', 'main'); ?>
				</div>

				<nav class="swbmainnav" itemscope itemtype="http://schema.org/SiteNavigationElement">
					<input type="checkbox" class="swbmainnav__checkbox" id="navi-toggle">
					<label for="navi-toggle" class="swbmainnav__button">
										<span class="swbmainnav__icon">&nbsp;</span>
					</label>
					<div class="swbmainnav__container">
						<?php get_template_part( 'content/components/logos/logo', 'main'); ?>
						<?php swb_nav_menu_header(); ?>
						<div class="mobile-background"></div>
					</div>
				</nav>
				<div id="lang-btn">
				</div>
			</header>

			