<?php
/**
* Switchback Creative Custom Theme search form template.
*
* @author Switchback Creative Inc.
* @package swbtheme
* @subpackage functions
* @version 3.1
*/
?>
<form method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
	<label for="s" class="search-label">Search for:</label>
	<input name="s" type="text" class="search-input">
	<input type="submit" class="search-submit" value="Search">
</form>
