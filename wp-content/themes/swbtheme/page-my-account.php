<?php
/**
 * This is the page-account custom template
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage page-account template
 * @version 3.1
 */
get_header(); ?>
  <main class="woo-accountpage">
    <?php if(have_posts() ) : while(have_posts() ) : the_post(); ?> 
      <section class="woo-account">
        <div class="container">
          <div class="woo-account__content swbtheme-wysiwyg swb-full-content-md">
            <h1><?php the_title(); ?></h1>
            <?php the_content(); ?>
          </div>
        </div>
      </section>
    <?php endwhile; endif; ?>
  </main>
<?php get_footer(); ?>