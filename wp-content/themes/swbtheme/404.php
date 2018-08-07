<!DOCTYPE html>
 <html <?php language_attributes(); ?> class="no-js">
 <head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="HandheldFriendly" content="true">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<link rel="apple-touch-icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/img/favicon/favicon.png" />
	<link rel="shortcut icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/img/favicon/favicon.png" />
	<link rel="icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/img/favicon/favicon.png" />
	<link rel='pingback' href='<?php bloginfo( 'pingback_url' ); ?>' />
	<?php wp_head(); ?>
</head>
	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<div class="swbwrapper">
			<main class="swb404">
				<section class="flex-containers">
					<div class="swb404__wrapper">
						<div class="swb404__message">
							<h2>Looks Like You're Lost...</h2>
							<p>Stay where you are and we'll send someone to find you!</p>
						</div>	
						<div class="swb404__home">
							<a href="<?php echo esc_url( home_url() ); ?>">Return Home</a>	
						</div>
					</div>
					<div class="swb404__flag"></div>
					<div class="swb404__guy"></div>
				</section>
			</main>
			<?php wp_footer(); ?>
		</div>
	</body>
</html>