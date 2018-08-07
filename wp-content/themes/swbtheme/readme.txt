=== swbtheme ===

Contributors: Switchback Creative Inc
Tags: custom-theme, original-theme, one-of-a-kind

Requires at least: 4.0
Tested up to: 4.9
Stable tag: 3.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==

I'm a custom built framework build by Switchback Creative. I am used to create amazing original custom websites for the awesome clients with Switchback Creative.

== Changelog ==

= 3.1 Major Update - November 17, 2017 +
* another overhaul with the theme now. We are now using Gulp with Webpack for all our task-running and file packaging.
* Big clean up of all the code on the theme. 
* removed all use of bower and now everything is imported with node_modules.
* removed all page-{slug}.php files and are now building in a new direction of using tpl-swb-{name}.php template files. This is to help end users have the ability to make new repeatable pages.
* add the page-disclaimer.php and the page-privacy-policy.php and made them dynamic.

= 2.0 MAJOR UPDATE - July 5, 2017 =
* This is a major overhaul of the framework.
* This version no longer used susy for its grid system.
* This version no longer used floats for its grid system it now used flexbox.
* Changes to every template, including a new 404.php template.

= 1.2 - April 13, 2017 =
* I added the new page template for the switchback Theme. This template is template-swb-one-page.php and is labeled Switchback Creative Template #1. This is the first of 2 templates that I will be adding to our framework to package for our website and clients.
* I added some new styles to the backend of the theme to make it easier to use acf fields and metaboxes.
* I re-organized the way the functions file works and the /inc/ folder to make it much easier to use and understand.
* template-swb-one-page.php - Added
* swb-theme-acf-styles.css - Added
* swb-theme-wysiwyg-one.css - Added
* swb-theme-acf-init.php - Renamed
* swb-theme-admin-init.php - Renamed
* swb-theme-clean-dashboard.php - Renamed
* swb-theme-dashboard-footer.php - Renamed
* swb-theme-dashboard-top-logo.php - Renamed
* swb-theme-links-tips.php - Renamed
* swb-theme-login-logo.php - Renamed
* swb-theme-welcome-mat.php - Renamed
* swb-theme-custom-fields-styles.php - Added
* swb-theme-editor-style-detect.php - Added
* swb-theme-functions-init.php - Renamed
* _template-one.scss - Added
* template-swb-one-page.php - Added

= 1.1 - March 12, 2017 =
* _swbtheme.scss - added the editor styles to the file. I attached the class .wp-editor to the wysiwyg styles so users can see the styles on the backend.
* functions.php - I added the time stamp on the css and js files so changes appear right away when the site is being developed. These time stamps are to be deleted once the website is finished.
* Woocommerce. - I added the whole scss folder and files for the woocommerce plugin. This includeds _account.scss, _cart.scss, _checkout.scss, _index.scss, _main.scss, _prouctcat.scss, _shopnav.scss, _singlepro.scss, _woorelated.scss, _wootabs.scss
* Woocommerce. - Added the template files required for woocommerce support. woocommerce.php, page-account.php, page-cart.php, page-checkout.php and added the template parts in the content folder. /content/woocommerce/woocommerce-{slug}.php
* Woocommerce. - Added the functions.php required files and functions. added to the functions.php file and added /inc/woocommerce/swb-theme-woocommerce/{file-required}
* functions.php - Fixed the image sizes to now generate less images per upload.
* functions.php - Added the function to control the jpeg quality that WordPress creates.
* functions.php - Organized the functions and removed the old way of contact information and social media and added new acf options page.
* inc folder - Organized the inc folder and renamed all files to match new functions.php file.
* functions.php - moved the editor styles and the jpeg quality functions into the new inc/swb-theme-functions folder.
* font awesome - removed the bower package for fontawesome and now I am just including the font awesome files in the fonts folder and making one call to load the fonts in the _fonts.scss file.
* _config.scss - Added the larger breakpoint sizes.
* _sitewide-class - added the larger container styles and also added the new content sizes.

= 1.0.7 - December 18, 2016 =
* _header.scss - Cleaning up the scss and conforming the theme to follow smacss properties.
* _404.scss - Cleaning up the scss and conforming the theme to follow smacss properties.
* _archive.scss - Cleaning up the scss and conforming the theme to follow smacss properties.
* _footer.scss - Cleaning up the scss and conforming the theme to follow smacss properties.
* _page.scss - Cleaning up the scss and conforming the theme to follow smacss properties.
* _search.scss - Cleaning up the scss and conforming the theme to follow smacss properties.
* _swbtheme.scss - Cleaning up the scss and conforming the theme to follow smacss properties.
* _wpindex.scss - Cleaning up the scss and conforming the theme to follow smacss properties.
* _helpers.scss - Cleaning up the scss and conforming the theme to follow smacss properties.
* _mixin.scss - Cleaning up the scss and conforming the theme to follow smacss properties.
* _blog.scss - Cleaning up the scss and conforming the theme to follow smacss properties.
* _social.scss - Cleaning up the scss and conforming the theme to follow smacss properties.

= 1.0.6 - November 18, 2016 =
* functions.php - added the new swb-theme-optimization file and folder. Here is where I moved all the optimization functions.
* swb-theme-optimization.php - added code to help optimize the theme. Removed version numbers from css and js files. Removed the version number from WordPress. Removed the js files and put them in the footer. Removed the WordPress Emoji scripts and styles.
* functions.php - added the new swb-theme-css-options.php file. This will give the options of changing the css with inline css.
* swb-theme-css-options.php - new file added.
* functions.php - added the new call for the swb-theme-security.php file. This is for al the .htaccess rules.
* swb-theme-security.php - added this file to the theme and added all the needed security headers and Content Security Policy for the theme.
* fonts - I cleaned up the fonts files on the theme. We now will download all the font files from Google-fonts then I will call them in our style sheet. I have moved the font.scss file into the Utilities folder and renamed it _fonts.scss. Now it is the first scss sheet called in the style.scss file.
* font-awesome - removed the version number for the font-awesome style sheets for perfomance purposes.
* _config.scss - changed the default fonts to raleway.
* gulpfile.js - removed the font.css file from the concat task.
* updated version numbers on all changed files.
* Created new content/blog folder for the blog home page.
* Created new file blog-content.php for the blog home page.
* home.php made changes to grab new file that we created. Also cleaned up file to make easier to read.
* home.php - added rich snippets.
* blog-content.php - added rich snippets.
* header.php - added new rich snippets.
* modulars - added new modular files for the header.php file.
* Added more options for the theme options page. added new admin styles.

= 1.0.5 - July 4, 2016 =
* functions.php - added the theme options page.
* /inc/theme-options.php - added the theme options page for social media URLs so I don't have to add everytime using ACF.
* functions.php - added the get_template_directory() to the require_once function.
* header.php - fixed the favicon (again!) and removed the meta tag that was causing errors for the html validation.
* _header.scss - Fix the overflow issue on safari.
* /content/template-parts/content.php - added the WordPress function wp_link_pages() to the file.
* archive.php, single.php, 404.php, _archive.scss, _single.scss, _404.scss, footer.php, _footer.scss, _sitewide-class.scss, page.php, _page.scss, page-contact.php, _contact.scss, header.php, _header.scss, page-home.php, page-about.php, _home.scss, search.php, _search.scss, home.php, _blog.scss, index.php, _wpindex.scss - Removed the extend for the container and made it one common class. This will cut down on file size when building.
* style.scss, /base/_index.scss, /utilities/_index.scss, /utilities/_normalize.scss - Moved the normalized sass file to the utilities folder so it gets called first and resets all styles before adding anything new. Also moved where the utilities files get called in the style.scss file.
* content/template-parts/content.php - added the_time() function instead of the_date() and added the_modified_time() as well.
* content/template-parts/content.php, _single.scss - added the_author_posts_link().
* function.php, inc/css/login.css - added new custom login styles for the theme.
* socialshare.php, _social.scss - added the code for contitional social media accounts.
* searchform.php, _swbtheme.scss - added the new searchform template and changes the classes for the styles in the css.
* search.php, _search.scss - added the_search_query() function to the title of the search results page. Also styled it to be highlighted a different colour.
* /content/navigation/navigation.php, _swbtheme.scss - combinded the two types of navigation into one file with a conditional statement.
* search.php - added the navagation to this file.
* General Cleanup of the files to make sure all version numbers are up to date.


= 1.0.4 - June 1, 2016 =
* functions.php - removed the RDS link (Real Simple Discovery)
* functions.php - removed the WLW link (Windows Live Writer)
* content/template-parts/content.php - added edit button on content file for logged-in user to quick edit.
* header.php - change doctype to DOCTYPE.
* header.php - added the favicon back to the header and also added the apple link for icons.


= 1.0.3 - May 23, 2016 =
* style.css - Added the version number and Tags to make the theme more complete.
* functions.php - added code to remove the WordPress core version number.
* functions.php - add the four default image sizes that are used on most custom websites created by swb.
* /src/ - added blank index.php to folder.
* /js/ - added blank index.php to folder.
* /inc/ - added blank index.php to folder.
* /img/ - added blank index.php to folder.
* /fonts/ - added blank index.php to folder.
* /css/ - added blank index.php to folder.
* /content/ - added blank index.php to folder.
* footer.php - removed the <ul> and <div> around the social media icons are this is redundant. The inc file already wraps in a <ul>.
* _extends.scss - removed all the extends and put them in the _swbtheme.scss file. this was for ease of finding styles.
* _swbtheme.scss - Added all the extends styles as regular css styles for the classes in the _swbtheme file.
* _helper.scss - Added the %squish-text extend and reorganize this file.
* _sitewide-class.scss - created this file as I need it on every custom website
* _utilities/index.scss - added the @import rule for the new scss file _sitewide-class.scss.
* page-contact.php - added the new class contactformstyles so the default styles are added to the contact form.
* _contact.scss - removed the old extend styles from the file as it is now styled with a class.

= 1.0.2 - April 25, 2016 =
* function.php - Changed the include file structor to just be called inc, much easer to read.
* header.php - Removed the stray </div> that has been left over from last theme.
* header.php - Removed the favicon from the header as WordPress 4.5 outputs this for the theme.
* _header.scss - Add the sass to hide the superfly menu on desktop and tablet size devices.
* _config.scss, _helpers.scss, _base.scss - removed the variable for the third font family. If the theme needs it we can add it on a website by website bases. Not needed on every site.
* inc/login-logo.php - had to add !important to the style for the custom login logo. This was because of the update to WordPress 4.5.
* _extends.scss - fixed the li so Suzy likes them :)
* header.php - added default rich snippets to the header.

= 1.0.1 - March 7, 2016 =
* _helpers.scss - Absolute position for the contact form 7 plugin for the auto-reply for required fields.
* _helpers.scss - Changed the textarea for contact forms to a height of 125px and removed border radius.
* function.php - Added the image size slector for wysiwyg for posts.
* header.php - added the pollyfill for matchMedia.
* _social.scss - fixed so icons are centered on ie10.
* _search.scss - added the fontAwesome icon to the title, and centered and made smaller the main content displayed.
* includes/login-logo.php - Changed the code to call a different logo for the login then use the swbtheme.png logo.
* _header.scss - Changed the arrow icons to use fontAwesone font icons for dropdown menus.

= 1.0 - February 28, 2016 =
* Initial release.

== Credits ==
I want to try and give credit to some (I'll try and mention all) authors of code, plugins or libraries I used to help make my life easier while making this framework. If I forgot to give credit, I'm sorry. This is not all but I will try over time to get everyone. Thanks web commuinity! you guys rock.

* [GPLv2 or later](https://www.gnu.org/licenses/gpl-2.0.html)
* normalize.css http://necolas.github.io/normalize.css/, (C) 2012-2016 Nicolas Gallagher and Jonathan Neal, [MIT](http://opensource.org/licenses/MIT)
* Font Awesome by @davegandy - http://fontawesome.io - @fontawesome License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
