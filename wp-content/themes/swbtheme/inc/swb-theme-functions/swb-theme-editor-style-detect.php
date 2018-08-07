<?php
// function swb_add_editor_style() {
// 	add_editor_style( '/css/style.css' );
// }

// add_action( 'after_setup_theme', 'swb_add_editor_style' );

function wpse59547_add_editor_style() {
	

    global $post;
    if( $post ) :
    	$template = basename( get_page_template() );
	    $post_id = $post->post_name;
	    //echo '<h1>I am editing the ' . $post_id . ' page on contempos website.</h1>';
	    
	    if( $template == 'template-swb-one-page.php' ) :

	  		add_editor_style( 'inc/css/swb-theme-wysiwyg-one.css' );

		else :

			add_editor_style( '/css/style.css' );

		endif;

	endif;
}

add_action( 'admin_head', 'wpse59547_add_editor_style' );

?>