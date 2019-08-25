
// Feature Jobs Slider
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        dotsEach: 3,
        margin: 30,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
  });
});

// counter js
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});