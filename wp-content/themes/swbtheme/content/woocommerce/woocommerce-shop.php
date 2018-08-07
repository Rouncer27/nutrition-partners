<?php get_header(); ?>

<main id="post-<?php the_ID(); ?>" class="swbtheme-mainshop swbpages">
	<section class="woo-shop">
		<div class="woo-shop__wrapper container">
			<?php woocommerce_content(); ?>
		</div>  
	</section>  
</main>

<?php get_footer(); ?>