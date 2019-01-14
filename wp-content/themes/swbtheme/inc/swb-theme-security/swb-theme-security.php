<?php
/**
* Switchback Creative Custom Theme Security file. 
* @author Switchback Creative Inc.
* @package swbtheme
* @subpackage functions
* @version 1.0.6
*/

/*@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);*/

function my_htaccess_contents( $rules ) {
    // echo '<pre>'. $rules .'</pre>';
    // exit();
    return $rules . '

#### swb-theme addition ####

<ifModule mod_headers.c>

	ServerSignature Off
	Header unset X-Powered-By
	Header always unset X-Powered-By

	# Turn on IE8-IE9 XSS prevention tools
	Header set X-XSS-Protection "1; mode=block"

	# prevent mime based attacks
	Header set X-Content-Type-Options "nosniff"

	# Prevent from Clickjacking attack
	Header set X-Frame-Options DENY

</ifModule>	

# Content Security Policy for the site.
# Header set Content-Security-Policy "default-src \'self\'; img-src \'self\' data: http: https: *.gravatar.com; script-src \'self\' \'unsafe-inline\' http: https: *.google-analytics.com ajax.googleapis.com; style-src \'self\' \'unsafe-inline\' fonts.googleapis.com; font-src \'self\' data: \'unsafe-inline\' http: https: fonts.googleapis.com;

# remove the Content Security Policy for the login page.
<FilesMatch "wp-login.php">
	Header unset Content-Security-Policy
</FilesMatch>

# Disable directory browsing
Options All -Indexes

# Deny access to the wp-config.php file Protect wp-config.php
<files wp-config.php>
order allow,deny
deny from all
</files>

# Deny access to the .htaccess file
<files .htaccess>
order allow,deny
deny from all
</files>

# Prevent anyone from loging in except from my IP address.
# <Files wp-login.php>
# order deny,allow
# Deny from all
# allow access from my IP address
# allow from 50.66.56.117
# </Files>

# swb-theme addition END

	';
}


add_filter('mod_rewrite_rules', 'my_htaccess_contents');























