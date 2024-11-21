$(document).ready(function(){
    $(window).load(function() {
      $(".icon").click(function(){
        $(".mobile-menu,.mask-overlay").addClass("visible");
      });
      
      $(".close").click(function(){
        $(".mobile-menu,.mask-overlay").removeClass("visible");
      });
      });
      
      
      $(document).click(function(event) {
        //if you click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".mobile-menu,.icon").length) {
          $("body").find(".mobile-menu,.mask-overlay").removeClass("visible");
        }
      });
      // magnetic popup


    $('a.btn-gallery').on('click', function(event) {
      event.preventDefault();
      
      var gallery = $(this).attr('href');
      
      $(gallery).magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
          enabled: true
        }
      }).magnificPopup('open');
    });

    // review sec
    $('.review-container').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      
      autoplaySpeed: 15000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            
            
            slidesToShow: 2
          }
        },
        {
          breakpoint: 599,
          settings: {
            arrows: false,
            
            
            slidesToShow: 1
          }
        }
      ]
  });
  
  


});