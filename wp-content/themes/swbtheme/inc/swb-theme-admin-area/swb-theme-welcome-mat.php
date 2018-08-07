<?php 

function swbtheme_add_dashboard_welcome_mat() {
	wp_add_dashboard_widget( 'swbthem_dashboard_welcome', 'Welcome, from Switchback Creative', 'swbtheme_add_welcome_widget' );
}

function swbtheme_add_welcome_widget() { ?>
	<h2>Welcome to your website!</h2>
	<p>This content Management system lets you edit the pages and posts on your website</p>
	<p>Your site consists of the following content, which you can access via the menu on the left:</p>
	<ul>
		<li>Pages - static pages which you can edit.</li>
		<li>Posts - news or blog articles - you can edit these and more.</li>
		<li>Media - images and documents which you can upload via the Media menu on the left or within each post or page.</li>
	</ul>
	<p>On eash editing screen there are instructions to help you add and edit content.</p>
	<p>It was an absolute pleasure to build your website. I want to thank you for choosing US! If you every have any questions, please do not hesitate to drop me a line.</p>
	<p>Trevor Rounce - Owner / Web Developer - Switchback Creative Inc.</p>
	<img src="<?php echo get_template_directory_uri(); ?>/img/logo/swbtheme.png" alt="Switchback Creative" title="Switchback Creative Loves it's clients." style="width:125px;" />
<?php }


add_action( 'wp_dashboard_setup', 'swbtheme_add_dashboard_welcome_mat');

?>