<?php
/**
 * This is the single.php template
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage single template
 * @version 3.1
 */
get_header('react'); ?>
  <?php if( is_home() ) { $pageId = get_option( 'page_for_posts' ); } else { $pageId = get_the_ID(); } ?>
	<main data-pageid="<?php echo esc_attr($pageId); ?>" class="swb-single-blog-post">
    <div id="root"></div>
	</main>
<?php get_footer('react'); ?>