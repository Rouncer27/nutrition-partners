<?php
/**
 * This is the page-cart custom template
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage page-cart template
 * @version 3.1
 */
get_header(); ?>
  <main class="cartpage">
    <?php if(have_posts() ) : while(have_posts() ) : the_post(); ?> 
      <section class="cartview">
        <div class="cartview__container container">
          <div class="cartview__container--content">
            <?php the_content(); ?>
          </div>
        </div>
      </section>
    <?php endwhile; endif; ?>
  </main>
<?php get_footer(); ?>