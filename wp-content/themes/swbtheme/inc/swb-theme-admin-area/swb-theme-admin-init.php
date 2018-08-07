<?php

// 1) Change the logo and link on the login screen. //
require_once(get_template_directory() . '/inc/swb-theme-admin-area/swb-theme-login-logo.php');
// 2) Clean the dashboard for non-admin users. This makes it easier for our clients to navigate the backend. //
require_once(get_template_directory() . '/inc/swb-theme-admin-area/swb-theme-clean-dashboard.php');
// 3) Add the Switchback Creative logo to the top of the admin dashboard. //
require_once(get_template_directory() . '/inc/swb-theme-admin-area/swb-theme-dashboard-top-logo.php');
// 4) Add a welcome message and helpful info for our clients. //
require_once(get_template_directory() . '/inc/swb-theme-admin-area/swb-theme-welcome-mat.php');
// 5) Add some helpful links and tips for our clients. //
require_once(get_template_directory() . '/inc/swb-theme-admin-area/swb-theme-links-tips.php');
// 6) Change the footer of the backend admin area. //
require_once(get_template_directory() . '/inc/swb-theme-admin-area/swb-theme-dashboard-footer.php');

?>