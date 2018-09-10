<?php
/**
 * The template for displaying the footer.php of the swbtheme
 *
 *
 *
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage footer template
 * @version 3.2
 */
?>
	<footer class="np-footer">
		<div class="np-footer__hero">
			<?php
			if(is_home()) {
				$pageId = get_option( 'page_for_posts' );
			} else {
				$pageId = get_the_ID();
			}

			$footerHeroID = get_post_meta( $pageId, '_np_footer_image', true );
			if( $footerHeroID ) :
				$footerHeroSrc = wp_get_attachment_image_src($footerHeroID, 'fullbackground');
				$footerHeroAlt = get_post_meta( $footerHeroID, '_wp_attachment_image_alt', true);
			else :
				$footerDefaultHeroID = get_option('options__np_default_footer_image');
				$footerHeroSrc = wp_get_attachment_image_src($footerDefaultHeroID, 'fullbackground');
				$footerHeroAlt = get_post_meta( $footerDefaultHeroID, '_wp_attachment_image_alt', true);
			endif;
				
			?>
			<div class="np-footer__hero--container">
				<img src="<?php echo esc_url( $footerHeroSrc[0] ); ?>" alt="<?php echo esc_attr( $footerHeroAlt ); ?>" />
			</div>
		</div>

		<?php
			$logoId = get_option('options__np_en_footer_logo');
			$logoSrc = wp_get_attachment_image_src($logoId, 'contained');
			$logoAlt = get_post_meta( $logoId, '_wp_attachment_image_alt', true);
		?>

		<div class="np-footer__bottom">
			<div class="np-footer__wrapper">
				<div class="np-footer__logo">
					<img src="<?php echo esc_url($logoSrc[0]); ?>" alt="<?php echo esc_attr($logoAlt); ?>" />
				</div>
				<div class="np-footer__menu">
					<?php swb_footer_nav_menu_header(); ?>
				</div>
				<div class="np-footer__copy">
					<p>Copyright &copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. Made in Airdrie. <span>Designed and developed by <a title="Switchback Creative Inc." target="_blank" href="http://switchbackcreative.ca">Switchback Creative Inc.</a></span></p>
				</div>
			</div>
		</div>
			

	</footer>

	<?php wp_footer(); ?>
		</div><!-- Website Wrapper -->
	</body>
</html>
