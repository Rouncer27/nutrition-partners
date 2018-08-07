<?php

function swb_theme_pagination_nav() {
	global $wp_query;
 
    $total_pages = $wp_query->max_num_pages;
 
    if ($total_pages > 1){
    	echo '<nav class="postnav">';
        $current_page = max(1, get_query_var('paged'));
 
        echo paginate_links(array(
            'base' => get_pagenum_link(1) . '%_%',
            'format' => '/page/%#%',
            'prev_text' => __('« Newer Posts'),
			'next_text' => __('Older Posts »'),
            'current' => $current_page,
            'total' => $total_pages,
        ));
        echo '</nav>';
    }
}
