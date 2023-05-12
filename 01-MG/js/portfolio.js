$(function () {
  let win_w = $(window).width();
  $(window).on('resize',function(){
    win_w = $(this).width();
  });

  //header
  $(window).on('scroll', function () {
    let scroll = $(this).scrollTop();

    if (scroll > 100) {
      $('.header').addClass('on')
    } else {
      $('.header').removeClass('on')
    }
  });

  //gnb
  $('.gnb > li').on('mouseenter', function () {

    $('.gnb > li > .subwrap').hide();
    $(this).children('.subwrap').stop().show();

    // gnb > subwrap auto-height
    let h = parseInt($(this).children('.subwrap').height());
    $(this).children('.subwrap').height(h);
  });
  $('.gnb > li').on('mouseleave', function () {
    $('.gnb > li > .subwrap').hide();
  });

  // all_menu
  $('.header .all_menu_btn').on('click', function () {
    $('.all_menu_area').addClass('on');
    // $('html, body').children('section').hide();
    
  });
  $('.all_menu_area .close_icon').on('click', function () {
    $('.all_menu_area').removeClass('on');
    // $('html, body').children('section').show();
  });

  //all_menu_moblie tab
  $('.all_menu_area .all_menu > li').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on');
  });
  $('.all_menu_area .all_menu > li').first().trigger('click');

  // visual swiper
  let visual_swiper = new Swiper('.visual .swiper', {
    loop: true,
    pagination: {
      el: '.visual .swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: '.visual .swiper-button-next',
      prevEl: '.visual .swiper-button-prev',
    },

  });

  //visual swiper button
  $('.button-play').on('click', function () {
    $(this).toggleClass('stop');

    if ($(this).hasClass('stop')) {
      visual_swiper.autoplay.stop();
    } else {
      visual_swiper.autoplay.start();
    }

  });

  //media
  let media_swiper = new Swiper(".media .swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //media tab menu
  $('.media .tab > li > a').on('click', function (e) {
    e.preventDefault();
    $('.media .panel').hide();
    $(this).next('.panel').show();

    $('.media .tab>li').removeClass('on');
    $(this).parents('li').addClass('on');
  });
  $('.media .tab>li>a').first().trigger('click');

  //board tab
  $('.board .mo').on('click', function () {
    $(this).parents('.box').addClass('on').siblings().removeClass('on');
  });
  $('.board .mo').first().trigger('click');

  //banner swiper
  let banner_swiper = new Swiper('.banner .swiper', {
    loop: true,
    pagination: {
      type: "fraction",
      el: '.banner .swiper-pagination',
    },
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: '.banner .swiper-button-next',
      prevEl: '.banner .swiper-button-prev',
    },
  });

  // banner swiper button
  $('.banner_button_play').on('click', function () {
    $(this).toggleClass('stop');
    if ($(this).hasClass('stop')) {
      banner_swiper.autoplay.stop();
    } else {
      banner_swiper.autoplay.start();
    }
  });

  //footer family site
  $('.site').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
      $(this).children('.site_menu').slideDown();
    } else {
      $(this).children('.site_menu').slideUp();
    }
  });
});