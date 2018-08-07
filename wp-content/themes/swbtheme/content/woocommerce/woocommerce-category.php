<?php get_header(); ?>
<main id="post-<?php the_ID(); ?>" class="swbtheme-catshop swbpages">
	<section class="categoryshop">
		<div class="container">
		<?php woocommerce_content(); ?>
		</div>  
	</section>
</main>
 <?php get_footer(); ?>