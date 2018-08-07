<?php
/**
 * This is the social media modular template.
 *
 * 
 * This theme was built using the Switchback WordPress Framework.
 *
 * 
 * @author Switchback Creative Inc.
 * @package swbtheme
 * @subpackage social media modular template
 * @version 3.2
 */
?>
<?php
		$facebook   = get_option( 'options_swb_theme_options_facebook' );
		$twitter    = get_option( 'options_swb_theme_options_twitter' );
		$instagram  = get_option( 'options_swb_theme_options_instagram' );
		$googleplus = get_option( 'options_swb_theme_options_google_plus' );
		$linkedin   = get_option( 'options_swb_theme_options_linkedin' );
		$pinterest  = get_option( 'options_swb_theme_options_pintrest' );
		$youtube    = get_option( 'options_swb_theme_options_youtube' );
		$snapchat   = get_option( 'options_swb_theme_options_snapchat' );
		$swbEmail   = get_option( 'options_swb_theme_options_email_address' );
		
	if( $facebook || $twitter || $instagram || $googleplus || $linkedin || $pinterest || $youtube || $snapchat || $swbEmail ) {

?>
<div class="socialmedia">
	<ul class="socialmedia__menu socialmedia__menu--footer">
	
	<?php if($facebook) { ?>
		<li class="socialmedia__menu--facebook"><a itemprop="sameAs" target="_blank" title="<?php echo bloginfo( 'name' ); ?>'s Facebook" href="<?php echo esc_url($facebook); ?>"></a></li>
	<?php } ?>

	<?php if($twitter) { ?>
		<li class="socialmedia__menu--twitter"><a itemprop="sameAs" target="_blank" title="<?php echo bloginfo( 'name' ); ?>'s Twitter Account" href="<?php echo esc_url($twitter); ?>"></a></li>
	<?php } ?>

	<?php if($instagram) { ?>
		<li class="socialmedia__menu--instagram"><a itemprop="sameAs" target="_blank" title="<?php echo bloginfo( 'name' ); ?>'s Instagram Account" href="<?php echo esc_url($instagram); ?>"></a></li>
	<?php } ?>

	<?php if($googleplus) { ?>
		<li class="socialmedia__menu--googleplus"><a itemprop="sameAs" target="_blank" title="<?php echo bloginfo( 'name' ); ?>'s Google Plus Account" href="<?php echo esc_url($googleplus); ?>"></a></li>
	<?php } ?>
	
	<?php if($linkedin) { ?>
		<li class="socialmedia__menu--linkedin"><a itemprop="sameAs" target="_blank" title="<?php echo bloginfo( 'name' ); ?>'s Linkedin Account" href="<?php echo esc_url($linkedin); ?>"></a></li>
	<?php } ?>

	<?php if($pinterest) { ?>
		<li class="socialmedia__menu--pinterest"><a itemprop="sameAs" target="_blank" title="<?php echo bloginfo( 'name' ); ?>'s pinterest Account" href="<?php echo esc_url($pinterest); ?>"></a></li>
	<?php } ?>

	<?php if($youtube) { ?>
		<li class="socialmedia__menu--youtube"><a itemprop="sameAs" target="_blank" title="<?php echo bloginfo( 'name' ); ?>'s youtube Account" href="<?php echo esc_url($youtube); ?>"></a></li>
	<?php } ?>

	<?php if($snapchat) { ?>
		<li class="socialmedia__menu--snapchat"><a itemprop="sameAs" target="_blank" title="<?php echo bloginfo( 'name' ); ?>'s snapchat Account" href="<?php echo esc_url($snapchat); ?>"></a></li>

	<?php } ?>

	<?php if($swbEmail) { ?>
		<li class="socialmedia__menu--email"><a title="" href="<?php echo antispambot( $swbEmail ); ?>"></a></li>
	<?php } ?>
		
	</ul>
</div>

<?php } ?>