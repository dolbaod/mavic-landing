$(function(){

    $(".slider-content").slick({
        slidesToShow: 1,
        infinite:true,
        slidesToScroll: 1,
        prevArrow:'<button class="slider-btn btn-left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.21839 1L1 9L9.21839 17" stroke="white"/></svg></button>',
        nextArrow: '<button class="slider-btn btn-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" stroke="black"/></svg></button>', 
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 1,
              dots: true,
              infinite:true,
            }
          }
        ]
        //autoplay: true,
        //autoplaySpeed: 2000
          // dots: false, Boolean
         // arrows: false, Boolean
       });

    //Accordion

      // $('.item-inner').on('click', function(){

      //   $('.item-inner').removeClass('open');
      //   $(this).addClass('open');

      // });
      
      $('.item-inner').on('click', function(){

        if($(this).hasClass('open')){
          $(this).removeClass('open');
        }

        else {
          $('.item-inner').removeClass('open');
          $(this).addClass('open');
        }

      });


    //Burger

      $('.menu-icon-wrapper').on('click', function () {

        $('.menu-icon').toggleClass('menu-icon-active');
        $('.nav').toggleClass('nav--visible');

      });

      //Anchor links
      $('.nav-link').on('click', function () { 

        $('.menu-icon').removeClass('menu-icon-active'); 
        $('.nav').removeClass('nav--visible');

      });
});
  
  
  //Burger

  // document.querySelector('.menu-icon-wrapper').onclick = function(){

  //   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    
  //   document.querySelector('.nav').classList.toggle('nav--visible');
  // }

  // document.querySelector('.nav-link').onclick = function(){

  //   document.querySelector('.menu-icon').classList.remove('menu-icon-active');
    
  //   document.querySelector('.nav').classList.remove('nav--visible');
  // }
  
