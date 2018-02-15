   $(document).ready(function() {

   	  $('.carousel.carousel-slider').carousel({ fullWidth: true,
            interval: 500,
             });
   
   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".navbar-lower").addClass("navbar-fixed");
        	
    }
    else {
        $(".navbar-lower").removeClass("navbar-fixed");     
    }
});


   	jQuery('.content, .sidebar').theiaStickySidebar({
      // Settings
      additionalMarginTop: 30
    });

   	 $(".button-collapse").sideNav();
   	 $("a[rel='m_PageScroll2id']").mPageScroll2id({

   	 		layout:"horizontal"});

   	  $('.materialboxed').materialbox();

	$('h1').animated("fadeInDown","fadeOutUp");
	$('.icon-block2').animated("fadeInDown","fadeOutUp");
	$('.icon-block1').animated("rotateInDownLeft","fadeOutUp");
	$('.icon-block3').animated("rotateInDownRight","fadeOutUp");

   	function heightDetect(){
		$(".parallax-container2").css("height",($(window).height()));
	}

	heightDetect();

	$(window).resize(function(){
		heightDetect();
	})

   	 $('.parallax').parallax();

  	 $(".button-collapse").sideNav({  closeOnClick: true});

});