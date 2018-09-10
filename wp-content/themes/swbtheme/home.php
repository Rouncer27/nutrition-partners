<?php
/**
 * This is the home.php template
 * This is what will be used for the main blog display page.
 * This template file is being styled with some basic css in the sass file partials/_blog.scss
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage home template
 * @version 3.1
 */
get_header('react'); ?>
	<?php if( is_home() ) { $pageId = get_option( 'page_for_posts' ); } else { $pageId = get_the_ID(); } ?>
	<div data-pageid="<?php echo esc_attr($pageId); ?>" class='blogpage swb-blog-page'>
		<div id="root"></div>
	</div>	
<?php get_footer('react'); ?>