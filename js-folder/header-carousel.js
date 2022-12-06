var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    autoplay:true,
    autoplayTimeout:5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });


  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 5,
    autoplay:true,
    autoplayTimeout:5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      590: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      855: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });