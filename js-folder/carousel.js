var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay:true,
    autoplayTimeout:5000,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
    },
  });


  var swiper0 = new Swiper(".slide-content0", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
          slidesPerView: 4,
      },
    },
  });