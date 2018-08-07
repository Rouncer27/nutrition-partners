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
	<main class="swb-page">
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<article id="post-<?php the_ID(); ?>" <?php post_class( 'swb-page__content' ); ?>>
			<div class="flex-containers">
				<header>
					<h1><?php the_title(); ?></h1>
					<?php if ( has_post_thumbnail() ) { ?>
						<div class="swb-page__content--image">
							<?php the_post_thumbnail( 'contained' ); ?>
						</div>
					<?php } ?>
				</header>

				<section class="swb-page__content--wrapper swbtheme-wysiwyg">
					<?php 
					the_content();
					wp_link_pages( array(
						'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'swbtheme' ),
						'after'  => '</div>',
						) );
					?>		
				</section>
			</div>	
		</article>
		<?php

			if ( comments_open() || get_comments_number() ) get_template_part( 'content/comment-template' );
			if(is_active_sidebar( 'footer_sidebar' ) ) get_sidebar(); 

			endwhile; else : 

			get_template_part('content/template-parts/content', 'missing');

			endif; 
		?>
	</main>
<?php get_footer(); ?>