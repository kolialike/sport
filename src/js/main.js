jQuery(function($){
  var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.slider-content .swiper-container', {
        pagination: '.swiper-pagination',
        // slidesPerView: 1,
        // centeredSlides: true,
        paginationClickable: true,
        // spaceBetween: 20,
        loop: true,
        speed: 200,
    });

    var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.news-content .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 20,
        loop: true,
        speed: 200,
    });

    // var swiperSlideNext = $(".news-content .swiper-slide-next");
    // var swiperSlidePrev = $(".news-content .swiper-slide-prev");
    // swiperSlideNext.next().addClass('slider-opa')
    // swiperSlidePrev.prev().addClass('slider-opa')

    var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.event-content .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 20,
        loop: true,
        speed: 200,
    });
});
