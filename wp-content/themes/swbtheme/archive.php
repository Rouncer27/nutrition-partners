<?php
/**
 * This is the archive template
 * This is what will be used when looking at the categories, tags, author, date achives of the site.
 * This template file is being styled with some basic css in the sass file WordPress/_archive.scss
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage archive template
 * @version 3.1
 */
get_header(); ?>

	<main id="post-<?php the_ID(); ?>" <?php post_class('archivepage'); ?> >
		<section class='flex-containers'>
			<header class="archivepage__header">
				<h1>

					<?php if ( is_day() ) : ?>Daily archives for <span><?php echo get_the_date(); ?></span>

					<?php elseif ( is_month() ) : ?>Monthly archives for <span><?php echo get_the_date( 'F Y' ); ?></span>

					<?php elseif ( is_year() ) : ?>Yearly archives for <span><?php echo get_the_date( 'Y' ); ?></span>

					<?php elseif ( is_category() ) : ?>Currently viewing all posts in the <span><?php single_cat_title(); ?></span> category

					<?php elseif ( is_tag() ) : ?>Currently browsing posts tagged <span><?php single_tag_title( '' ); ?></span>

					<?php else : ?>

					Archives Page
					
					<?php endif; ?>

				</h1>
			</header>
			<div class="archivepage__wrapper">
				<div class="archivepage__wrapper--items">
					<?php if( have_posts() ) : while( have_posts() ) : the_post(); ?>

					<div class="archivepage__excerpt">
						<h2><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" ><?php the_title(); ?></a></h2>
						<p class="arch-date"><?php the_date( 'l, F j, Y' ); ?></p>
						<?php the_excerpt(); ?>
						<a class="arch-readmore" href="<?php echo the_permalink(); ?>">Read More</a>
					</div>

					<?php endwhile; else: get_template_part('content/template-parts/content', 'missing'); endif; ?>
				</div>
				<?php
					if(is_active_sidebar( 'archive_sidebar' ) ) :
						echo '<div class="archivepage__sidebar">';
							get_sidebar('archive');
						echo '</div>';	
					endif;
				?>
			</div>
			<?php swb_theme_pagination_nav(); ?>
		</section>
	</main>
		 
<?php get_footer(); ?>