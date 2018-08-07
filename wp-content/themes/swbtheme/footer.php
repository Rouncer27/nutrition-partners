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
	<footer class="mainfooter">
		<div class="mainfooter__wrapper flex-containers">
			<?php get_template_part('/content/components/social/social', 'footer') ?>
			<div class="mainfooter__copy">
				<p>Copyright &copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. Made in Airdrie. <span>Designed and developed by <a title="Switchback Creative Inc." target="_blank" href="http://switchbackcreative.ca">Switchback Creative Inc.</a></span></p>
			</div>
		</div>
	</footer>

	<?php wp_footer(); ?>
		</div><!-- Website Wrapper -->
	</body>
</html>
