jQuery(document).ready(function($){ 
// This is to get dropdown menus to work on mobile touch screens. //
	$('li.menu-item-has-children').on('touchstart', function(e){
		var link = $(this);
		if(link.hasClass('active')) {
			return true;
		} else {
			link.addClass('active');
			$('li.menu-item-has-children').not(this).removeClass('active');
			e.preventDefault();
			return false
		}
	}); // End of the mobile touch screens jQuery. //

	// Main Menu Animations. //
	const mainMenu = document.querySelector('.swbmainnav__wrap');
	const mainMenuListItems = [...document.querySelectorAll('.swbmainnav__wrap li')];
	mainMenuListItems.forEach( listItem => {
		listItem.addEventListener( 'mouseenter', function(){
			listItem.classList.add( 'active' );
		});
		listItem.addEventListener( 'mouseleave', function(){
			listItem.classList.remove( 'active' );
		});
	});

});