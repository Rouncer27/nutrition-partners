<?php
/**
 * This is the index template
 * This is the catch all template for the theme.
 * This template file is being styled with some basic css in the sass file WordPress/_wpindex.scss
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage index template
 * @version 3.1
 */
get_header(); ?>
		<main class="swb-index">
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<article id="post-<?php the_ID(); ?>" <?php post_class( 'swb-index__content' ); ?>>
				<div class="flex-containers">
					<header>
						<h1><?php the_title(); ?></h1>
						<?php if ( has_post_thumbnail() ) { ?>
						<div class="swb-index__content--image">
							<?php the_post_thumbnail( 'contained' ); ?>
						</div>
						<?php } ?>
					</header>
					<section class="swbtheme-wysiwyg">
						<?php the_content(); ?>
					</section>
				</div>
			</article>

			<?php if ( comments_open() || get_comments_number() ) get_template_part( 'content/comment-template' ); ?>
			<?php if(is_active_sidebar( 'footer_sidebar' ) ) get_sidebar(); ?>

			<?php endwhile; else :

				get_template_part('content/template-parts/content', 'missing');	

				endif;
			?>
		</main>
<?php get_footer(); ?>			