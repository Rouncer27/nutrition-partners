jQuery(document).ready(function($){
	'use strict';
	// Smooth scroll to id of elements. //

	const wooProductsPage = document.querySelector('.singlepro');

	if( wooProductsPage == null ) {

		$(function() {
			$('a[href*="#"]:not([href="#"])').click(function() {

				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

					var target = $(this.hash);

					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

					if (target.length) {
						$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);

					return false;
					}
				}
			});
		});

	}


	// The tabs section for WooCommerce Products to display the description and reviews. //

	const wooTabs = [...document.querySelectorAll('.tabs.wc-tabs li a')];
	const wooTabsLists = [...document.querySelectorAll('.tabs.wc-tabs li')];
	const wooTabsPanels = [...document.querySelectorAll('.woocommerce-Tabs-panel')];

	function toggleItem() {
		for (var i = 0; i < wooTabs.length; i++) {
			wooTabs[i].addEventListener("click", function(e) {
				e.preventDefault();
				var current = this;

				for (var i = 0; i < wooTabsLists.length; i++) {
					wooTabsLists[i].classList.remove('active');
					current.parentNode.classList.add('active');

					if( wooTabsLists[i].classList.contains('active') ) {

						wooTabsPanels[i].style.display = 'block';

					} else {

						wooTabsPanels[i].style.display = 'none';

					}
				}
			});
		};
	}

	toggleItem();


	const wooTabsDescription = document.querySelector('.woocommerce-Tabs-panel--description');
	
	if( wooTabsDescription != null ) {
		wooTabsDescription.classList.add('swbtheme-wysiwyg');
	}

	const wooShortDescription = document.querySelector('.woocommerce-product-details__short-description');

	if( wooShortDescription != null ) {
		wooShortDescription.classList.add('swbtheme-wysiwyg');
	}



	// Review Stars

	const reviewStars = [...document.querySelectorAll('.stars span a')];
	let madeSelection;

	function fillStarBarUp() {
		for( var i = 0; i < reviewStars.length; i++ ) {

			reviewStars[i].addEventListener("mouseleave", function(e) {
				madeSelection = document.querySelectorAll('.stars span a.active');
				if( madeSelection.length == 0 ) {
					emptyStarBar();
				} else if(  madeSelection.length >= 0 ) {
					partfullStarBar();
				}


			});

			reviewStars[i].addEventListener("mouseenter", function(e) {
				this.classList.add('swb-star-fill-activate');
				fillStars();
			});

			reviewStars[i].addEventListener("click", function(e) {	

				for( var i = 0; i < reviewStars.length; i++ ) {
					reviewStars[i].classList.remove('active');
				}

				this.classList.add('active');
				partfullStarBar();

			});
		}
	};

	function fillStars() {
		for( var i = 0; i < reviewStars.length; i++ ) {
			if( reviewStars[i].classList.contains('swb-star-fill-activate') ) {
				reviewStars[i].classList.add('swb-star-fill');
				return;
			} else {
				reviewStars[i].classList.add('swb-star-fill');
			}
		}
	}

	function partfullStarBar() {

		let pastActiveStar = false;

		for( var i = 0; i < reviewStars.length; i++ ) {

			if( pastActiveStar ) {
				reviewStars[i].classList.remove('swb-star-fill');
				reviewStars[i].classList.remove('swb-star-fill-activate');
			} else if( reviewStars[i].classList.contains('active') ) {
				reviewStars[i].classList.remove('swb-star-fill');
				reviewStars[i].classList.remove('swb-star-fill-activate');
				pastActiveStar = true;
			} else {
				reviewStars[i].classList.remove('swb-star-fill-activate');
				pastActiveStar = false;
			}

		}
	}

	function emptyStarBar() {
		for( var i = 0; i < reviewStars.length; i++ ) {
			reviewStars[i].classList.remove('swb-star-fill');
			reviewStars[i].classList.remove('swb-star-fill-activate');
		}
	};

	fillStarBarUp();


});
