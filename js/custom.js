$('.ban_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow:('.next'),
    prevArrow:('.prev'),

  });

  $('.ser_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode:true,
    centerPadding:"0px",
    vertical:true,
    nextArrow:('.next2'),
    prevArrow:('.prev2'),
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        breakpoint:767,
        settings :{
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ],
  });

  $('.team_for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    vertical:true,
    centerMode: true,
    centerPadding:"0px",
    asNavFor: '.team_nav',
    fade:false,
    nextArrow:('.next3'),
    prevArrow:('.prev3'),
    
  });

  $('.team_nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.team_for',
    vertical:true,
    
  });
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
   
  
    
  
  
    
    if(scrolling > 40){
      $(".back_top i").fadeIn(500)
    }
    else{
      $(".back_top i").fadeOut(500)
    }





    if(scrolling > 40){
      $(".bgcolor").addClass("bg")
    }
    else{
      $(".bgcolor").removeClass("bg")
    }
  
  
  });
  




  $(".back_top i").click(function(){
    $('body, html').animate({
      scrollTop:0
    })
  })


  

  
 