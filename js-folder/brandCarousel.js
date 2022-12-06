$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        dots: false,
        pauseOnHover:false,


        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                // infinite: true,
                // dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        // responsive: [{
        //     breakpoint: 768,
        //     setting: {
        //         slidesToShow:4
        //     }
        // }, {
        //     breakpoint: 520,
        //     setting: {
        //         slidesToShow: 3
        //     }
        // }]
    });
});


