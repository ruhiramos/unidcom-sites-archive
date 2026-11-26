/*==================================================================
	TABLE OF CONTENTS
====================================================================
	# SITE MENU
	# DATOS SLIDER
	# ACCORDION
	# SPEAKER POPUP
	# LOGOS SLIDER
	# FANCYBOX
*/

/*	# SITE MENU
=============================================== */

var opening;
jQuery(document).ready(function () {
	// OPEN MENU WHEN CLICK ON BARS
	jQuery('.bars').click(function () {
		opening = false;
		jQuery('.site-menu-container').toggleClass('is-opened');
		jQuery('body').toggleClass('offcanvas-overlay');
		setTimeout(() => {
			opening = true;
		}, 500);
	});

	// CREATE ELEMENT TO OPEN MENU ON MOBILE (ARROW)
	jQuery('.menu-item-has-children, .page_item_has_children').prepend(
		'<svg class="menu-item__btn" id="Grupo_5952" data-name="Grupo 5952" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><g id="Trazado_18209" data-name="Trazado 18209" fill="#939ef2"><path d="M 23.00000190734863 45.5 C 19.96230125427246 45.5 17.01573181152344 44.90517044067383 14.24214172363281 43.73204040527344 C 11.56291198730469 42.59883117675781 9.156621932983398 40.97642135620117 7.090101718902588 38.9099006652832 C 5.023581981658936 36.8433837890625 3.401171922683716 34.43709182739258 2.267961978912354 31.75786209106445 C 1.094831943511963 28.98427200317383 0.5000019073486328 26.0377025604248 0.5000019073486328 23.00000190734863 C 0.5000019073486328 19.96230125427246 1.094831943511963 17.01573181152344 2.267961978912354 14.24214172363281 C 3.401171922683716 11.56291198730469 5.023581981658936 9.156621932983398 7.090101718902588 7.090101718902588 C 9.156621932983398 5.023581981658936 11.56291198730469 3.401171922683716 14.24214172363281 2.267961978912354 C 17.01573181152344 1.094831943511963 19.96230125427246 0.5000019073486328 23.00000190734863 0.5000019073486328 C 26.0377025604248 0.5000019073486328 28.98427200317383 1.094831943511963 31.75786209106445 2.267961978912354 C 34.43709182739258 3.401171922683716 36.8433837890625 5.023581981658936 38.9099006652832 7.090101718902588 C 40.97642135620117 9.156621932983398 42.59883117675781 11.56291198730469 43.73204040527344 14.24214172363281 C 44.90517044067383 17.01573181152344 45.5 19.96230125427246 45.5 23.00000190734863 C 45.5 26.0377025604248 44.90517044067383 28.98427200317383 43.73204040527344 31.75786209106445 C 42.59883117675781 34.43709182739258 40.97642135620117 36.8433837890625 38.9099006652832 38.9099006652832 C 36.8433837890625 40.97642135620117 34.43709182739258 42.59883117675781 31.75786209106445 43.73204040527344 C 28.98427200317383 44.90517044067383 26.0377025604248 45.5 23.00000190734863 45.5 Z" stroke="none"/><path d="M 23.00000190734863 1.000003814697266 C 20.02958106994629 1.000003814697266 17.1485424041748 1.58154296875 14.43691253662109 2.728462219238281 C 11.81729125976562 3.836471557617188 9.464412689208984 5.422893524169922 7.443653106689453 7.443653106689453 C 5.422893524169922 9.464412689208984 3.836471557617188 11.81729125976562 2.728462219238281 14.43691253662109 C 1.58154296875 17.1485424041748 1.000003814697266 20.02958106994629 1.000003814697266 23.00000190734863 C 1.000003814697266 25.97042274475098 1.58154296875 28.85146141052246 2.728462219238281 31.56309127807617 C 3.836471557617188 34.18271255493164 5.422893524169922 36.53559112548828 7.443653106689453 38.55635070800781 C 9.464412689208984 40.57711029052734 11.81729125976562 42.16353225708008 14.43691253662109 43.27154159545898 C 17.1485424041748 44.41846084594727 20.02958106994629 45 23.00000190734863 45 C 25.97042274475098 45 28.85146141052246 44.41846084594727 31.56309127807617 43.27154159545898 C 34.18271255493164 42.16353225708008 36.53559112548828 40.57711029052734 38.55635070800781 38.55635070800781 C 40.57711029052734 36.53559112548828 42.16353225708008 34.18271255493164 43.27154159545898 31.56309127807617 C 44.41846084594727 28.85146141052246 45 25.97042274475098 45 23.00000190734863 C 45 20.02958106994629 44.41846084594727 17.1485424041748 43.27154159545898 14.43691253662109 C 42.16353225708008 11.81729125976562 40.57711029052734 9.464412689208984 38.55635070800781 7.443653106689453 C 36.53559112548828 5.422893524169922 34.18271255493164 3.836471557617188 31.56309127807617 2.728462219238281 C 28.85146141052246 1.58154296875 25.97042274475098 1.000003814697266 23.00000190734863 1.000003814697266 M 23.00000190734863 3.814697265625e-06 C 35.70255279541016 3.814697265625e-06 46 10.29745101928711 46 23.00000190734863 C 46 35.70255279541016 35.70255279541016 46 23.00000190734863 46 C 10.29745101928711 46 3.814697265625e-06 35.70255279541016 3.814697265625e-06 23.00000190734863 C 3.814697265625e-06 10.29745101928711 10.29745101928711 3.814697265625e-06 23.00000190734863 3.814697265625e-06 Z" stroke="none" fill="#939ef2"/></g><g id="Grupo_130" data-name="Grupo 130" transform="translate(13.849 13.851)"><path id="Trazado_12440" data-name="Trazado 12440" d="M17115.5,607.165v19.39" transform="translate(-17105.803 -607.165)" fill="none" stroke="#fff" stroke-width="1.5"/><path id="Trazado_12441" data-name="Trazado 12441" d="M0,0V19.39" transform="translate(19.39 9.693) rotate(90)" fill="none" stroke="#fff" stroke-width="1.5"/></g></svg>'
	);

	// TOGGLE CLASS ONCE, WHEN CLICKING THE ARROW
	$(document).on('click', '.menu-item-has-children > a', function () {
		$(this).parent().children('.sub-menu, .children').slideToggle(500);
		$(this).parent().children('.menu-item__btn').toggleClass('rotate');
	});

	jQuery('.site-menu-container__close').click(function () {
		jQuery('.site-menu-container').removeClass('is-opened');
		jQuery('body.offcanvas-overlay').removeClass('offcanvas-overlay');
	});

	document.addEventListener('click', function (evt) {
		if (opening) {
			var elements = document.getElementsByClassName('site-menu-container'),
				targetElement = evt.target,
				close = false;

			do {
				[].forEach.call(elements, function (el) {
					if (targetElement == el) {
						close = true;
						return;
					}
				});

				if (close) return;
				targetElement = targetElement.parentNode;
			} while (targetElement);

			jQuery('.site-menu-container.is-opened').removeClass('is-opened');
			jQuery('body.offcanvas-overlay').removeClass('offcanvas-overlay');
		}
	});
});

$(document).ready(function () {
	var lastScrollTop = 0;
	var delta = 50;
	var siteHeader = $('.site-header');

	$(window).scroll(function () {
		var scrollTop = $(this).scrollTop();

		if (Math.abs(lastScrollTop - scrollTop) <= delta) {
			return;
		}

		if (scrollTop > lastScrollTop) {
			// Scroll hacia abajo
			siteHeader.addClass('is-scrolled');
		} else {
			// Scroll hacia arriba
			siteHeader.removeClass('is-scrolled');
		}

		lastScrollTop = scrollTop;
	});
});

jQuery(document).ready(function () {
	const headerHeight = () => {
		const doc = document.documentElement;
		let header = $('.site-header').innerHeight();
		doc.style.setProperty('--header-height', `${header}px`);
	};

	window.addEventListener('resize', headerHeight);

	headerHeight();
});

/*	# DATOS SLIDER
=============================================== */

$(document).ready(function () {
	$('.actividades-slider .slider__slider').slick({
		infinite: false,
		dots: false,
		mobileFirst: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.actividades-slider .slider__arrow.is-left'),
		nextArrow: $('.actividades-slider .slider__arrow.is-right'),
		appendDots: $('.actividades-slider .slider__dots'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
});

/* ACCORDION
=============================================== */

jQuery(document).ready(function () {
	jQuery(document).on('click', '.page-accordion__header', function () {
		jQuery(this).siblings('.page-accordion__content').slideToggle();
		jQuery(this).toggleClass('is-open');
	});
});

/* SPEAKER POPUP
=============================================== */

jQuery(document).ready(function () {
	jQuery(document).on('click', '.card-speaker__btn', function () {
		jQuery('.speaker-popup').fadeIn('fast');
		var speakerData = jQuery(this).attr('data-speaker');
		console.log(speakerData);
		jQuery('.speaker-popup__content').hide();
		jQuery('.speaker-popup__content').each(function () {
			if (jQuery(this).attr('data-speaker') === speakerData) {
				jQuery(this).show();
			}
		});
	});

	jQuery(document).on('click', '.speaker-popup__close', function () {
		jQuery('.speaker-popup').fadeOut('fast');
	});
});

// /* LOGOS SLIDER
// =============================================== */

// jQuery(document).ready(function () {
// 	jQuery('.logos-slider__track-container').each(function () {
// 		var $container = jQuery(this);
// 		var $sliderTrack = $container.children();
// 		var width = $sliderTrack.width();
// 		var speed = 1;

// 		var $sliderTrackClone;
// 		var x = 0;
// 		var x2 = width;

// 		function cloneUl() {
// 			$sliderTrackClone = $sliderTrack.clone();
// 			$container.append($sliderTrackClone);
// 			$sliderTrackClone.css({ left: `${width}px` });
// 			$sliderTrackClone.css({ width: `${$sliderTrack.width()}px` });
// 		}

// 		function moveFirst() {
// 			x -= speed;

// 			if (width >= Math.abs(x)) {
// 				$sliderTrack.css({ left: `${x}px` });
// 			} else {
// 				x = width;
// 			}
// 		}

// 		function moveSecond() {
// 			x2 -= speed;
// 			console.log('width es', width);
// 			console.log('sliderTrackClone es', $sliderTrackClone.width());
// 			console.log('x2 es', x2);

// 			if ($sliderTrackClone.width() >= Math.abs(x2)) {
// 				$sliderTrackClone.css({ left: `${x2}px` });
// 			} else {
// 				x2 = width;
// 			}
// 		}

// 		cloneUl();

// 		setInterval(moveFirst, 20);
// 		setInterval(moveSecond, 20);
// 	});
// });

/*	# FANCYBOX
=============================================== */

jQuery(document).ready(function() {
    Fancybox.bind("[data-fancybox]", {
    });
});