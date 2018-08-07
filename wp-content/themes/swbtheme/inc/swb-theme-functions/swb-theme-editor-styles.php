<?php
function swb_add_editor_style() {
	add_editor_style( '/css/style.css' );
}

add_action( 'after_setup_theme', 'swb_add_editor_style' );
?>