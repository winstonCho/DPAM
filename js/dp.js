
$(function(){
    var win_width=$(window).width();
    if(win_width>1024){
        $('header nav > ul li').hover(function(){
            $(this).find('.sub').stop().fadeIn();
        },function(){
            $(this).find('.sub').stop().fadeOut();
        });
        $('#fullpage').fullpage({
            //options here
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Main', 'Lady','Reni','Product','How2make','Best','Luxury','Product2'],
            afterLoad: function(anchorLink,index){
                if(index == 9 ){
                    $('#fp-nav').fadeOut();
                }else{
                    $('#fp-nav').fadeIn();
                }
            }

        });

    }else{
        $('.mobile_nav .mobile_nav_in nav> ul > li ').click(function(){
            if($(this).attr('class') != 'active'){
                $('.mobile_nav .mobile_nav_in nav > ul > li ').removeClass('active');
                $(this).addClass('active');
                $('.mobile_nav .mobile_nav_in nav > ul > li .sub').stop().slideUp();
                $(this).find('.sub').stop().slideDown();
            }else{
                $(this).removeClass('active');
                $(this).find('.sub').stop().slideUp();
            }
        });
        $('header .hbg ').click(function(){
            $('header .mobile_nav ').animate({
                right:0
            });
        });
        $('header .mobile_close ').click(function(){
            $('header .mobile_nav ').animate({
                right:('-100%')
            });
        });
       
    }
 
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        effect:'fade',
            autoplay: {
            delay:4000
            },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
    });
    $('.contents li').on('mouseenter',function(){
        var $child = $(this).find('.li_bg');
        var duration=0.5;
        var delay=0.1;
        TweenMax.to($child, duration, {
            scaleY:1.5, ease:Expo.easeOut
        });
        TweenMax.to($child, duration, {
            scaleX:1.2, scaleY:1, ease:Back.easeOut,
            easeParms:[3], delay:delay
        });
        TweenMax.to($child, duration*1.25, {
            scaleX:1, scaleY:1, ease:Back.easeOut,
            easeParms:[6], delay:delay*3
        });
    });
    $('.Reni').slick({
        dots:true,
        infinite:true,
        speed: 500,
        fade:true,
        cssEase:'linear',
        autoplay:true,
        autoplayspeed:1000
    });
    var main = new Splide( '#main-carousel', {
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
      } );
    
      var thumbnails = new Splide( '#thumbnail-carousel', {
        fixedWidth  : 'auto',
        fixedHeight : 60,
        gap         : 10,
        rewind      : true,
        pagination  : false,
        isNavigation: true,
        breakpoints : {
          600: {
            fixedWidth : 60,
            fixedHeight: 44,
          },
        },
      } );
    
      main.sync( thumbnails );
      main.mount();
      thumbnails.mount();

      $('.banner .contents ul li .des1').hover(function(){
        $('.banner .contents ul li .des1 .contents_h .contents_h_p span').hide();
        $('.banner .contents ul li .des1 .contents_h .contents_h_p p').show();
      },function(){
        $('.banner .contents ul li .des1 .contents_h .contents_h_p p').hide();
        $('.banner .contents ul li .des1 .contents_h .contents_h_p span').show();

      });
      $('.banner .contents ul li .des2').hover(function(){
        $('.banner .contents ul li .des2 .contents_h .contents_h_p span').hide();
        $('.banner .contents ul li .des2 .contents_h .contents_h_p p').show();
      },function(){
        $('.banner .contents ul li .des2 .contents_h .contents_h_p p').hide();
        $('.banner .contents ul li .des2 .contents_h .contents_h_p span').show();

      });
      $('.banner .contents ul li .des3').hover(function(){
        $('.banner .contents ul li .des3 .contents_h .contents_h_p span').hide();
        $('.banner .contents ul li .des3 .contents_h .contents_h_p p').show();
      },function(){
        $('.banner .contents ul li .des3 .contents_h .contents_h_p p').hide();
        $('.banner .contents ul li .des3 .contents_h .contents_h_p span').show();
      });
      $('.hive .hive_contents .wrapper1 .hex .hex-inner1 .heximg1').hover(function(){
        $('.hive .hive_info .hit1').slideDown(300);
      },function(){
        $('.hive .hive_info .hit1').slideUp(100);
      });
      $('.hive .hive_contents .wrapper1 .hex .hex-inner1 .heximg2').hover(function(){
        $('.hive .hive_info .hit2').slideDown(300);
      },function(){
        $('.hive .hive_info .hit2').slideUp(100);
      });
      $('.hive .hive_contents .wrapper1 .hex .hex-inner1 .heximg3').hover(function(){
        $('.hive .hive_info .hit3').slideDown(300);
      },function(){
        $('.hive .hive_info .hit3').slideUp(100);
      });
      $('.hive .hive_contents .wrapper1 .hex .hex-inner1 .heximg4').hover(function(){
        $('.hive .hive_info .hit4').slideDown(300);
      },function(){
        $('.hive .hive_info .hit4').slideUp(100);
      });
      $('.hive .hive_contents .wrapper1 .hex .hex-inner1 .heximg5').hover(function(){
        $('.hive .hive_info .hit5').slideDown(300);
      },function(){
        $('.hive .hive_info .hit5').slideUp(100);
      });
      $('.hive .hive_contents .wrapper2 .hex .hex-inner1 .heximg6').hover(function(){
        $('.hive .hive_info .hit6').slideDown(300);
      },function(){
        $('.hive .hive_info .hit6').slideUp(100);
      });
      $('.hive .hive_contents .wrapper2 .hex .hex-inner1 .heximg7').hover(function(){
        $('.hive .hive_info .hit7').slideDown(300);
      },function(){
        $('.hive .hive_info .hit7').slideUp(100);
      });
      $(".hover").mouseleave(
        function () {
          $(this).removeClass("hover");
        }
      );
      var swiper = new Swiper(".ls", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
      $(".hover").mouseleave(
        function () {
          $(this).removeClass("hover");
        }
      );
      // top버튼 클릭하면 맨 위로 이동하게 하기
      $('.top').click(function(){
        $.fn.fullpage.moveTo(1,1);
      });
      setInterval(header_color,1);
      function header_color(){
          if($('body').hasClass('fp-viewing-0')===true){
              $('header').removeClass('active');
          }else{
              $('header').addClass('active');
          }
      }
});