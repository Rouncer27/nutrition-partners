<?php
/**
 * This is the home.php template
 * This is what will be used for the main blog display page.
 * This template file is being styled with some basic css in the sass file partials/_blog.scss
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage home template
 * @version 3.1
 */
get_header(); ?>
	<main class='blogpage'>
		<section class="blogpage__articles" role="main" itemscope itemtype="https://schema.org/Blog">
			<h1 class="swb-blog-title">Blog Page</h1>
			<div class="blogpage__articles--wrapper flex-containers">
			<?php if( have_posts() ) : while( have_posts() ) : the_post(); ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class("blogitem"); ?>>
					<header class="blogitem__header article-header">
						<h2 class="entry-title">
							<a itemprop="url" href="<?php  esc_url( the_permalink() ); ?>" title="<?php echo the_title_attribute(); ?>"><span itemprop="headline"><?php the_title(); ?></span></a>
						</h2>
						<p>
							<span class="swb-author">Written by:
								<span itemprop="author"><?php the_author_posts_link(); ?></span>
								on: <span itemprop="datePublished" name="pubdate"><?php the_time( 'l, F j, Y' ); ?></span>
							</span>
							<span class="swb-meta">
								Article filed under:
								<span itemprop="about"><?php the_category(' &bull; '); ?></span>
								with <span class="swb-comments-count"><?php comments_number( 'no comments', 'one comment', '% comments' ); ?>.</span>
							</span>
							<span class="swb-pub">Published by
								<span  itemprop="publisher" itemtype="http://schema.org/Organization" itemscope>
									<span itemprop="name"><?php echo bloginfo( 'name' ); ?></span>
									<meta itemprop="logo" content="<?php echo get_template_directory_uri(); ?>/img/logo/swbtheme.svg"/>
								</span>
							</span>
						</p>
					</header>
					<section class="blogitem__content entry-content" name="description" itemprop="description">
						<?php the_excerpt(); ?>
						<div class="moretag">
							<a href="<?php echo the_permalink(); ?>"> Continue Reading</a>
						</div>	
					</section>
					<footer class="blogitem__footer article-footer">
						<?php get_template_part('/content/components/social/social', 'share') ?>
					</footer>
				</article>
			<?php endwhile; endif; ?>
			<?php swb_theme_pagination_nav(); ?>
			</div><!-- blog page wrapper -->
		</section>
	</main>
<?php get_footer(); ?>