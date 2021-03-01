$( document ).ready(function() {
    // click for btn burger
    $('.header-page__btn-burger').click(function(){
		$('.header-page__mob-dropdown').toggleClass('header-page__mob-dropdown_opened');
        $('.header-page__btn-burger').toggleClass('header-page__btn-burger_opened');
	});

    // click for lang
    $('.header-page__mob-dropdown .header-page__lang').click(function(){
        $(this).toggleClass('header-page__lang_opened');
	});

    // click for search mobile
    $('.header-page__search-loupe').click(function(){
        $('.header-page__search').toggleClass('header-page__search_opened');
        $('.header-page').toggleClass('header-page_opened-search');
	});

    // click for navi link Help
    $('.header-page__menu-item_dropdown .header-page__menu-link').click(function(e){
        $(this).parent('.header-page__menu-item_dropdown').toggleClass('header-page__menu-item_opened');

        e.stopPropagation();
        e.preventDefault();
	});

    // click for navi dropdoqn link Help
    $('.header-page__navi-link_headphone').click(function(e){
        $(this).parent('.header-page__navi-item').toggleClass('header-page__navi-item_opened');

        e.stopPropagation();
        e.preventDefault();
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
