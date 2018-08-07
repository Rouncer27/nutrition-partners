<?php
function swbtheme_add_dashboard_links() {
	wp_add_dashboard_widget( 'swbtheme_dashboard_links', 'Useful Links & Tips', 'swbtheme_add_links_widget' );
}

function swbtheme_add_links_widget() { ?>
	<h3>Links</h3>
	<p>Remember to refer back to our manual you received durring the training session, but here are some helpful links if you get lost along the way!</p>
	<ul>
		<li>If you are needing to add a post, check this out - <a target="_blank" href="http://www.wpbeginner.com/beginners-guide/how-to-add-a-new-post-in-wordpress-and-utilize-all-the-features/">How to Add a New Post in WordPress and Utilize all the Features</a></li>
		<li>This same website is a very good resource to learn a lot about your new Content Management System, check if out - <a target="_blank" href="http://www.wpbeginner.com">WP Beginner</a></li>
		<li>If you are having trouble sleeping... or very text savy <a target="_blank" href="http://wordpress.org">The WordPress Codex</a></li>
	</ul>
	<h3>Tips</h3>
	<p>This new site is your baby, it is a represents your company, so it needs regular love and attention to keep doing its job. Its like getting my new mountian bike! I want to keep it all shiny and new and working like the day I bought it.</p>
	<p><b>Clean Your Bike</b></p>
	<ul style="list-style-type:disc; list-style-position:inside;">
		<li><b>File backup - </b>You’ll want a backup of all the images and files you upload. There’s several ways to do it, with lots of good information on the WordPress website. For your site, I have set up an automatic monthly backup of your files. If you are not getting a monthly email, check with me.</li>
		<li><b>Update your WordPress core - </b>The most important advice I can give anyone who manages websites is to ensure they are updating their software. When you’re done updating, check everything again, and update some more!</li>
		<li><b>Update plugins - </b>Everything is working just fine, why should I touch plugins? The same reason you’d updating any other software — even more so with plugins — because they don’t necessarily go through the same vetting and testing as WordPress core.</li>
		<li><b>Remove disabled plugins and inactive themes.</b></li>
		<li><b>Keep your computer up-to-date - </b> Ensure you’re patching or installing updates regularly. Automatic Updates are good. Most OS vendors are patching security issues often, it’s important to stay updated.</li>
		<li><b>Safe Browsing - </b> Just because your website is a super ninja doesn’t mean others are too. Most desktop viruses and malware these days are passed via infected websites. If it doesn’t look right, it probably isn’t.</li>
	</ul>
	<p style="margin-top:50px;"><b>Don't Leave the Garage Door Open</b></p>
	<p>Let me ask you this, are your passwords strong enough to ward off an attack long enough to disinterest an attacker? Hackers aren’t sitting around all afternoon randomly typing passwords. They automate attacks using a technique called the dictionary attack. They create a large list of common passwords and automate an attack trying each one until they find what they’re looking for. Here are a few things to help you fight password attacks:</p>
	<ul style="list-style-type:disc; list-style-position:inside;">
		<li><b>Change your passwords often - </b> The longer you use the same password, the more time you’re giving hackers to try and crack it. If you change it frequently, you shorten the window of attack.</li>
		<li><b>Don’t share passwords - </b> Passwords are like toothbrushes, you should keep them to yourself. And discard them, and get a new one, if they have been used by others.</li>
		<li><b>Don’t write your passwords down - </b> This is as bad as me leaving my bike outside. Anyone can take it, and run with it.</li>
		<li><b>Use Passphrases - </b> Passphrases are basically long passwords, something with a meaning. For example: F0urScoR3&s3v3NYeAr$aG0Now – this passphrase is pretty complex, but you’ll see that it contains 3-4 words, uppercase, lowercase, numbers and symbols. You don’t have to go crazy like the example, but the idea is to use a more complex set of characters that would be very difficult to guess.</li>
	</ul>
<?php }

add_action( 'wp_dashboard_setup', 'swbtheme_add_dashboard_links');
?>