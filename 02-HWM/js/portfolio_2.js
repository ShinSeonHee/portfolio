$(function(){

    //header
    $('.header .gnb > li > a').on('mouseenter',function(){
      $(this).parents('li').addClass('on').siblings().removeClass('on');
    });
    $('.header').on('mouseleave',function(){
      $('.gnb > li').removeClass('on');
    });

    //search
    $('.board input').on('focusin',function(){
      $(this).next('.commend').addClass('on');
    });
    $('.board input').on('focusout',function(){
      $(this).next('.commend').removeClass('on');
    });

    //board tab
    $('.board .tab > li > a').on('click',function(e){
        e.preventDefault();
        $(this).parents('li').addClass('on').siblings().removeClass('on');
    });
    $('.board .tab > li > a').first().trigger('click');
    
    //popup
    let popup = new Swiper('.popup .swiper', {
        loop: true,
        pagination: {
          el: '.popup .swiper-pagination',
          type: "fraction",
        },
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.popup .swiper-button-next',
          prevEl: '.popup .swiper-button-prev',
        },
      });

    //popup button
    $('.popup_button .popup_play').on('click',function(){
      $(this).toggleClass('pause');
      if( $(this).hasClass('pause') ){
        popup.autoplay.stop();
      }else{
        popup.autoplay.start();
      }
    });

    //news tab
    $('.word .tab > li > a').on('click', function(e){
      e.preventDefault();
      $(this).parents('li').addClass('on').siblings().removeClass('on')
    });
    $('.word .tab > li > a').first().trigger('click');

    //service tab
    $('.service .tab > li > a').on('click',function(e){
      e.preventDefault();
      $(this).parents('li').addClass('on').siblings().removeClass('on');
    });
    $('.service .tab > li > a').first().trigger('click');

    //service swiper
    let service = new Swiper(".notify .swiper", {
      loop : true,
      slidesPerView: 2,
      spaceBetween: 40,
      breakpoints: {
        451: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".notify .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.notify .swiper-button-next',
        prevEl: '.notify .swiper-button-prev',
      },
    });

    //banner swiper
    let banner = new Swiper(".banner .swiper", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay : 5000,
      },
      navigation: {
        nextEl: '.banner .swiper-button-next',
        prevEl: '.banner .swiper-button-prev',
      },
    });

    //banner button
    $('.banner_button .banner_play').on('click',function(){
      $(this).toggleClass('pause')
      if( $(this).hasClass('pause') ){
        banner.autoplay.stop();
      }else{
        banner.autoplay.start();
      }
    });

    //footer top
    $('.footer .ft_title > li > a').on('click',function(e){
      e.preventDefault();
      $(this).parents('li').toggleClass('on');
      $(this).parents('li').siblings().removeClass('on')
    });
});