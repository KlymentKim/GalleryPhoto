const swiper = new Swiper('#swiper-1', {
    // Optional parameters
    initialSlide: 0,
    spaceBetween: 400,
    autoHeight: true,
    autoplayDisableOnInteraction: false,
		loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    //   clickable: true,
    //   dynamicBullets: true,


     //Фракция
     type:'fraction',
     renderFraction: function (currentClass, totalClass){
         return 'Фото <span class = "' + currentClass + '"></span>' + 
         ' из ' + 
         '<span class = "' + totalClass + '"></span>';
     },
    },

    scollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
  
   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev', 
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

      keyboard: {
        enable: true,
        onlyInViewpot: true,
        pageUpDown: true
    },

      speed: 500,
 
    // slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
       effect:'slide',
    
       breakpoints: {
        767: {
            spaceBetween: 10,
            freeMode: true,
            slidesPerView: 'auto',
            allowTouchMove: true,
            scrollbar: {
                el: '.scroll-swiper-scrollbar',
                hide: true,
            },
        },
        1024: { 
            allowTouchMove: true,
        },
        1260: {
            allowTouchMove: true,
            spaceBetween: 15,
            slidesPerView: 2,
            // slidesPerColumn: 2,
        }
    }
       
  });

//   var tabsSwiper = new Swiper('.slider',{
//     speed:300,
//     calculateHeight:true,
//     onSlideChangeStart: function(){
//       $(".tabs li").removeClass('active')
//       $(".tabs li").eq(tabsSwiper.activeIndex).addClass('active')  
//     }
//   })


 
 
 