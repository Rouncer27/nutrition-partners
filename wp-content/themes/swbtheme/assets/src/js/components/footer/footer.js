// Create a sticky footer. //
const websiteFooter = document.querySelector('.mainfooter');
if( websiteFooter != null ) {
	const findTheFooterHeight = function() {
		let browserHeight = window.innerHeight + 'px';
		let footerCurrentHeight = websiteFooter.offsetHeight + 'px';
		websiteFooter.style.position = 'absolute';
		document.body.style.minHeight = browserHeight;
		document.body.style.paddingBottom = footerCurrentHeight;
	}
	
	window.addEventListener('load', () => {
		findTheFooterHeight();
	});

	window.addEventListener( 'resize', () => {
		findTheFooterHeight();
	});
}