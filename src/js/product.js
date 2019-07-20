// es5 area

$(document).ready(function () {
  var windows_w = $(window).width();
  var swiper_project = new Swiper(".gallery-thumbs", {
    spaceBetween: 0,
    slidesPerView: "auto",
    centeredSlides: false,
    touchRatio: 0.2,
    on: {   
    },
    breakpoints: {
      480: {
        //- slidesPerView: 2,
        loop: false ,
        slidesOffsetBefore : 30,
        slidesOffsetAfter : 30,
      },
      960: {
        //- slidesPerView: 3,
        loop: false, //循環撥放
        slidesOffsetBefore : 30,
        slidesOffsetAfter : 30,
      },
      5000: {
        loop: false, //循環撥放
      }
    },
    navigation: {
      nextEl: ".be-icon-next",
      prevEl: ".be-icon-prev"
    }
  });

  
  
   
});