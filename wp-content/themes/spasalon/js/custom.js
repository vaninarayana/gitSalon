/*Menu Dropdown Onhover Js*/

	jQuery(document).ready(function() {
	   jQuery('.nav li.dropdown').hover(function() {
		   jQuery(this).addClass('open');
	   }, function() {
		   jQuery(this).removeClass('open');
	   });

	});



/* Page Scroll onclick button Js */
	jQuery(document).ready(function () {

		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('.scrollup').fadeIn();
			} else {
				jQuery('.scrollup').fadeOut();
			}
		});

		jQuery('.scrollup').click(function () {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 500);
			return false;
		});

	});

		jQuery(document).ready(function () {
			jQuery('.flexslider').flexslider({
					animation:"fade",
					});
		});