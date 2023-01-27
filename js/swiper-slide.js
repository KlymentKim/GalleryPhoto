const swiper = new Swiper('#swiper-1', {
    // Optional parameters
    initialSlide: 0,
    spaceBetween: 350,
    autoHeight: true,
    autoplayDisableOnInteraction: false,
		loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      //  clickable: true,
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
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
      
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

      speed: 900,
 
    // slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
       effect:'cude',
    
       breakpoints: {
        767: {
            // spaceBetween: 10,
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
            // spaceBetween: 15,
            // slidesPerView: 0,
            // slidesPerColumn: 2,
        }
    },

    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 50,
      shadowScale: 0.3,
    },
       
  });

//   var tabsSwiper = new Swiper('.slider',{
//     speed:300,
//     calculateHeight:true,
//     onSlideChangeStart: function(){
//       $(".tabs li").removeClass('active')
//       $(".tabs li").eq(tabsSwiper.activeIndex).addClass('active')  
//     }
//   })


 
 
 