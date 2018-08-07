<?php
/**
 * This is the search template
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage search template
 * @version 3.1
 */
get_header(); ?>
	<main class="swbsearch">
		<section class="flex-containers">
			<header>
				<h2>Search Results for <span><?php the_search_query(); ?></span></h2>
			</header>

			<section class="swbsearch__wrapper">
		
				<?php if(have_posts()): while(have_posts()): the_post(); ?>

				<section class="swbsearch__found">
					<h3><?php printf( '<a href="%s" title="%s" class="link">%s</a>', esc_url( get_permalink() ), esc_attr( the_title_attribute( 'echo=0' ) ), get_the_title() ); ?></h3>
					<?php the_excerpt(); ?>
					<a class="search-readmore" href="<?php echo the_permalink(); ?>">Read More</a>
				</section>

				<?php endwhile; else : ?>

				<section class="swbsearch__notfound">
					<p><?php
					_e('Sorry but your search did not have any results.', 'swbtheme');
					?></p>
				</section>

				<?php endif; ?>

			</section>

			<?php swb_theme_pagination_nav(); ?>

			<footer>
				<p>Not what you were looking for? Please try your search again.</p>
				<?php get_search_form(); ?>
			</footer>

		</section>

	</main>

<?php get_footer(); ?>
