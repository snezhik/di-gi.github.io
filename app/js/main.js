$(function(){


  $(".footer__bottom-link, .footer__address-link").on("click", function (e){
    e.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);

  });


  $('.blockquote__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  })

  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"> <img src="images/prev-arrow.svg" alt="prev arrow"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"> <img src="images/next-arrow.svg" alt="next arrow"></button>',
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        
        }
      },
      {
     
        breakpoint: 640,
        settings: {
          arrows: false,
        }
      }
   
    ]
  });


});
