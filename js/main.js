"use strict";
"use strict";

$(function () {
  lazyload();
  $(document).on('scroll', function () {
    if (window.pageYOffset > 0) {
      $('#header').addClass('fix');
    } else {
      $('#header').removeClass('fix');
    }
  });

  function burgerOpen() {
    $('#burger').toggleClass('active');
    $('#header').toggleClass('open-menu');
    $('.mob-nav').fadeToggle(300);
  }

  $('#burger').on('click', function () {
    burgerOpen();
  });
  $('#burger-footer').on('click', function () {
    burgerOpen();
  });

  if ($(window).width() > 991) {
    var swiper = new Swiper('#main-slider', {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function formatFractionCurrent(number) {
          if (number < 10) {
            number = '0' + number;
          }

          return number;
        },
        formatFractionTotal: function formatFractionTotal(number) {
          if (number < 10) {
            number = '0' + number;
          }

          return number;
        },
        renderFraction: function renderFraction(currentClass, totalClass, index, total) {
          return '<span class="' + currentClass + '">0 ' + index + ' </span>' + ' <span class="line"></span> ' + '<span class="' + totalClass + '">0 ' + total + ' </span>';
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      effect: "fade",
      lazy: true,
      slidesPerView: 1,
      loop: true,
      allowTouchMove: true,
      breakpoints: {
        992: {
          allowTouchMove: false,
          effect: "fade"
        }
      }
    });
  } else {
    var _swiper = new Swiper('#main-slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      effect: "slide",
      lazy: true,
      slidesPerView: 1,
      loop: true,
      allowTouchMove: true,
      spaceBetween: 2000
    });
  }

  var swiperImgTmb = new Swiper('#main-slider-img-sub', {
    slidesPerView: 'auto',
    spaceBetween: 9,
    loop: true,
    lazy: true,
    autoplay: {
      delay: 5000
    },
    allowTouchMove: false
  });
  var swiperImg = new Swiper('#main-slider-img', {
    lazy: true,
    loop: true,
    autoplay: {
      delay: 5000
    },
    allowTouchMove: false,
    effect: "fade"
  }); // табы на главной

  var customSwipers = document.querySelectorAll('.custom-swiper');

  if (customSwipers.length) {
    customSwipers.forEach(function (el, index) {
      var customSwiper = new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 20,
        lazy: true,
        pagination: {
          el: '.swiper-pagination-custom',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom'
        },
        breakpoints: {
          575: {
            slidesPerView: 'auto'
          }
        }
      });
    });
  }

  $('.main-tabs__nav li').on('click', function () {
    if (!$(this).hasClass('active')) {
      $('.main-tabs__nav li').removeClass('active');
      $(this).addClass('active');
      var index = $(this).index();
      $('.main-tabs__content').hide();
      $('.main-tabs__content').eq(index).fadeIn();
    }
  });
  $('.more-catalog-show').on('click', function () {
    $('.main-catalog__bot').addClass('active');
    $('.main-catalog__wrap--more').slideDown().css('display', 'flex');
  });
  $('.more-catalog-hide').on('click', function () {
    $('.main-catalog__bot').removeClass('active');
    $('.main-catalog__wrap--more').slideUp();
  });

  function refreshMainCompany() {
    if ($(window).width() < 992) {
      $('.company__media').appendTo('.company__mob');
      $('.company__btn').appendTo('.company__mob');
    } else {
      $('.company__media').appendTo('.company__left');
      $('.company__btn').appendTo('.company__right__wrap');
    }
  }

  refreshMainCompany();
  $(window).on('resize', function () {
    refreshMainCompany();
  });
  $('.vakancii__btn').on('click', function () {
    if (!$(this).hasClass('active')) {
      $('.vakancii__btn').removeClass('active');
      $('.vakancii__body').slideUp(300);
      $(this).addClass('active');
      $(this).closest('.vakancii__row').find('.vakancii__body').slideDown(300);
    } else {
      $('.vakancii__btn').removeClass('active');
      $('.vakancii__body').slideUp(300);
    }
  });
  $('.reviews__more').on('click', function () {
    $(this).closest('.reviews__item__des').toggleClass('active');
  });
});
//# sourceMappingURL=main.js.map
