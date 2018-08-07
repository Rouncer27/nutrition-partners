<?php
/**
 * This is the page-checkout custom template
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage page-checkout template
 * @version 3.1
 */
get_header(); ?>
  <main class="checkoutpage">
    <?php if(have_posts() ) : while(have_posts() ) : the_post(); ?> 
      <section class="checkoutview">
        <div class="checkoutview__container container">
          <div class="checkoutview__container--content">
            <?php the_content(); ?>
          </div>
        </div>
      </section>
    <?php endwhile; endif; ?>
  </main>
<?php get_footer(); ?>