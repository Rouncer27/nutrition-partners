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
				<section class="swb-page__content--wrapper swbtheme-wysiwyg coopolicy">
					<h1>Disclaimer</h1>	
					<p>The information contained in this website is for general information purposes only. This website makes no representations or warranties, express or implied. <?php echo bloginfo( 'name' ); ?> makes no representations or warranties related to this website or the information and materials provided on this website. <?php echo bloginfo( 'name' ); ?> does not warrant that this website will be available at any or all times, or that the information contained on this website is accurate, complete, non-misleading or true. No information on this website is intended as advice of any kind. <?php echo bloginfo( 'name' ); ?> makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
					<p><?php echo bloginfo( 'name' ); ?> assumes no liability in relation to the contents of, or use of this website including any indirect, special or consequential loss or for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</p>
					<p>The materials on <?php echo bloginfo( 'name' ); ?> website are provided on an ‘as is’ basis. <?php echo bloginfo( 'name' ); ?> makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
					<p>Further, <?php echo bloginfo( 'name' ); ?> does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
					<p>Through this website you are able to link to other websites which are not under the control of “<?php echo bloginfo( 'name' ); ?>”. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
					<p>Your use of this website signifies your agreement that the exclusions and limitations of liability set out in this website disclaimer are reasonable. If you find anything within this disclaimer to be unreasonable you must not use this website.</p>
					<h2>Copyright</h2>
					<p>Copyright © <?php echo bloginfo( 'name' ); ?> All Rights Reserved. All text, images, graphics, and other materials on this website are subject to the copyright and other intellectual property rights of <?php echo bloginfo( 'name' ); ?>, unless otherwise stated. These materials may not be reproduced, distributed, modified or reposted to other websites without the express written permission of <?php echo bloginfo( 'name' ); ?></p>
				</section>
			</div>	
		</article>
		<?php

			endwhile; else : 

			get_template_part('content/template-parts/content', 'missing');

			endif; 
		?>
	</main>
<?php get_footer(); ?>