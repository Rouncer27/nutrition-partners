<?php
function swbtheme_footer_admin () {
	echo '<p>Fueled by <a href="http://www.wordpress.org" target="_blank">WordPress</a> | Designed & Created by <a href="http://www.switchbackcreative.ca" target="_blank">Switchback Creative</a></p>';
}
add_filter('admin_footer_text', 'swbtheme_footer_admin');
?>