<?php
/**
* Switchback Creative Custom Theme options page
*
* @author Switchback Creative Inc.
* @package swbtheme
* @subpackage Theme Options
* @version 3.2
*/

	$logo = get_option('options_swb_theme_options_company_logo');
	if( $logo ) :		
		$imageSCR = wp_get_attachment_image_src( $logo, 'mobilefull' );
		$imageALT = get_post_meta( $logo, '_wp_attachment_image_alt', true);
	endif;

?>
<div class="mainlogo">
<?php if( is_home() || is_front_page() ) : ?>
	<h1 itemprop="name">
		<span><?php echo bloginfo("name"); ?></span>
		<a itemprop="url" href="<?php echo home_url(); ?>">
			<?php if( $logo ) : ?>
			<img itemprop="image" src="<?php echo esc_url( $imageSCR[0] ); ?>" alt="<?php echo esc_attr( $imageALT ); ?>"  />
			<?php else : get_template_part( 'content/components/logos/logo', 'default'); endif; ?>				
		</a>
	</h1>
	<?php if(get_bloginfo('description') != '' ) : ?>
	<p itemprop="description"><span><?php echo bloginfo('description'); ?></span></p>
	<?php endif; ?>

	<?php else: ?>

	<p itemprop="name">
		<span><?php echo bloginfo("name"); ?></span>
		<a itemprop="url" class="siteheader__logo--link" href="<?php echo home_url(); ?>">
			<?php if( $logo ) : ?>
			<img itemprop="image" src="<?php echo esc_url( $imageSCR[0] ); ?>" alt="<?php echo esc_attr( $imageALT ); ?>"  />
			<?php else : get_template_part( 'content/components/logos/logo', 'default'); endif; ?>		
		</a>
	</p>

	<?php if(get_bloginfo('description') != '' ) : ?>
	<p itemprop="description"><span><?php echo bloginfo('description'); ?></span></p>
	<?php endif; ?>

	<?php endif; ?>
</div>	