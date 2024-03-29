const swiper = new Swiper('#swiper-1', {
    // Optional parameters
    initialSlide: 0,
    spaceBetween: 30,
    autoHeight: true,
    speed:100,
    // autoplayDisableOnInteraction: true,
		loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      },
  
    // If we need pagination
       pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },

     //Фракция
    //  type:'fraction',
    //  renderFraction: function (currentClass, totalClass){
    //      return 'Фото <span class = "' + currentClass + '"></span>' + 
    //      ' из ' + 
    //      '<span class = "' + totalClass + '"></span>';
    //  },
    // },

    // scollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true
    // },
  
   
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

      keyboard: {
        enable: true,
        onlyInViewpot: true,
        // pageUpDown: true
    },

    // slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  
      effect: "flip",
      // grabCursor: true,
      // cubeEffect: {
      //   // shadow: true,
      //   // slideShadows: true,
      //   // shadowOffset: 20,
      //   // shadowScale: 0.94,
      // },
    
       breakpoints: {
        320: {
          slidesPerView: 1,
          freeMode: true,
          slidesPerView: 'auto',
          allowTouchMove: true,
        },
        480: {
          slidesPerView: 1,
          freeMode: true,
          slidesPerView: 'auto',
          allowTouchMove: true,
      },
        767: {
            slidesPerView: 2,
            freeMode: true,
            slidesPerView: 'auto',
            allowTouchMove: true,
        },
        1024: { 
            allowTouchMove: true,
        },
        1260: {          
            allowTouchMove: true,
          
        }
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


 
 
 