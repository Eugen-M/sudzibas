$( document ).ready(function() {
    // click for btn burger
    $('.header-page__btn-burger').click(function(){
		$('.header-page__mob-dropdown').toggleClass('header-page__mob-dropdown_opened');
        $('.header-page__btn-burger').toggleClass('header-page__btn-burger_opened');
	});

    // review slick slider
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
    });

    // init for map
    var mapid = L.map('mapid', {
        center: [51.505, -0.09],
        zoom: 13
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapid);
});
