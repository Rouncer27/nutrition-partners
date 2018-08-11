<?php
/**
 * This is the page.php template
 * This is what will be used for all default pages on the swbtheme
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage page template
 * @version 3.1
 */
get_header(); ?>
  <?php
    if( is_home() ) {
      $pageId = get_option( 'page_for_posts' );
  } else {
      $pageId = get_the_ID();
  }
  ?>
	<main data-pageid="<?php echo esc_attr($pageId); ?>" class="swb-home-page">
		<?php the_post(); ?>
    <section class="lang-test">
      <div id="root"></div>
    </section>
  </main>
<?php get_footer(); ?>