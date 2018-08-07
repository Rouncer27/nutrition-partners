<?php
/**
 * This is the content-missing template part
 * Template part for displaying a message that posts cannot be found.
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage archive template
 * @version 1.0.0
 */
?>
<article class="container">
	<header>
		<h1>Oops, Post Not Found!</h1>
	</header>
	<section>
		<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'swbtheme' ); ?></p>
		<?php get_search_form(); ?>	
	</section>
</article>
