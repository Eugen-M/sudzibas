$( document ).ready(function() {
    $('.header-page__btn-burger').click(function(){
		$('.header-page__mob-dropdown').toggleClass('header-page__mob-dropdown_opened');
	});

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
    });

    var mapid = L.map('mapid', {
        center: [51.505, -0.09],
        zoom: 13
    });
});
