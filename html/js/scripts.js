$( document ).ready(function() {
    // click for btn burger
    $('.page-header__btn-burger').click(function(){
		$('.page-header__mob-dropdown').toggleClass('page-header__mob-dropdown_opened');
        $('.page-header__btn-burger').toggleClass('page-header__btn-burger_opened');
	});

    // click for lang
    $('.page-header__mob-dropdown .page-header__lang').click(function(){
        $(this).toggleClass('page-header__lang_opened');
	});

    // click for search mobile
    $('.page-header__search-loupe').click(function(){
        $('.page-header__search').toggleClass('page-header__search_opened');
        $('.page-header').toggleClass('page-header_opened-search');
	});

    // click for navi link Help
    $('.page-header__menu-item_dropdown .page-header__menu-link').click(function(e){
        $(this).parent('.page-header__menu-item_dropdown').toggleClass('page-header__menu-item_opened');

        e.stopPropagation();
        e.preventDefault();
	});

    // click for navi dropdoqn link Help
    $('.page-header__navi-link_arrow').click(function(e){
        $(this).parent('.page-header__navi-item').toggleClass('page-header__navi-item_opened');

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

    $('.header-profile__row_main, .header-profile__btn-close').click(function(){
        $(this).parents('.header-profile').toggleClass('header-profile_opened');
	});
});
