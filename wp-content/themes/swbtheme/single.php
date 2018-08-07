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
get_header(); ?>

	<main class="singlepost">
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<article id="post-<?php the_ID(); ?>" <?php post_class( 'postarticle' ); ?>>
				<div class="postarticle__wrapper flex-containers">
					<header class="postarticle__header">
						<h1><?php the_title(); ?></h1>
						<div class="entry-meta">
							<p class="date"><time datetime="<?php the_time('Y-m-j'); ?>"><?php the_time( 'l, F j, Y' ); ?></time> <time datetime="<?php the_modified_time('Y-m-j'); ?>">Post Modified: <?php the_modified_time('l, F j, Y'); ?>.</time> <span><a href="#swb-comments-section">Leave a comment</a></span></p>
							<p class="cats">Filed under: <?php echo get_the_category_list(', ' ); ?></p>
			        		<p class="tags">Taged with: <?php the_tags( ' ', ', '); ?></p>
					    </div>	

						<?php

						if ( has_post_thumbnail() ) :

							$image = the_post_thumbnail('blogsingle');
							printf('<div class="article--image">%s</div>', $image);

						endif;

						?>
					    
				    </header>

			      	<section class="postarticle__content swbtheme-wysiwyg">
			      		<?php edit_post_link('Edit', '', '&raquo;'); ?>
			      		<?php the_content(); ?>
			      		<?php wp_link_pages( array(
							'before' => '<div class="post-pages">Article Pages: ',
							'after' => '</div>',
							));
						?>
			      	</section>
					<?php get_template_part('/content/components/social/social', 'share-single') ?>
			   	</div>

		      	<footer class="postarticle__footer">
		      		<div class="flex-containers">
		      			<div class="post-author">
		      			<?php

		      				$img = get_avatar( get_the_author_meta( 'ID' ), 130 );
		      				$name = get_the_author_meta( 'display_name' );
		      				$bio = get_the_author_meta( 'description' );

		      				echo '<div class="post-author-image">' . $img . '</div>';

		      				echo '<div class="post-author-bio">';

		      				echo '<h5>' . $name . '</h5>';

		      				echo '<p>' . $bio . '</p>';
		      			?>
		      				
		      				<p class="author">Other posts by <?php the_author_posts_link(); ?></p>

		      			<?php	

		      				echo '</div>';

		      			?>

		      			</div>
			        </div>	
		      	</footer>
				
			</article>

			<?php

			    	if ( comments_open() || get_comments_number() ) :

			    		get_template_part( 'content/comment-template' );
			    		
					endif;

					endwhile; 

				else : 

				get_template_part('content/template-parts/content', 'missing');		

				endif; 
			?>
		
		<nav class="singlepost__pagination">
			<div class="flex-containers">
				<h5>More Articles</h5>
				<?php $prev_post = get_adjacent_post( false, '', true, 'category' ); ?>
				<?php if( !empty($prev_post) ) { ?>
					<p class="previous"><?php previous_post_link(); ?></p>
				<?php } ?>

				<?php $next_post = get_adjacent_post( false, '', false, 'category' ); ?>
				<?php if( !empty($next_post) ) { ?>
					<p class="next"><?php next_post_link(); ?></p>
				<?php } ?>
				
				<p class="back-home"><a href="<?php echo swb_theme_get_blog_posts_page_url(); ?>">Back to blog home page</a></p>
			</div>
		</nav>
	</main>
<?php get_footer(); ?>