   $(document).ready(function() {

   	  
   
   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".navbar-lower").addClass("navbar-fixed");
        	
    }
    else {
        $(".navbar-lower").removeClass("navbar-fixed");     
    }
});


   

   	 
   	 $("a[rel='m_PageScroll2id']").mPageScroll2id({
         	 		});

   	  $('.materialboxed').materialbox();

	$('h1').animated("fadeInDown","fadeOutUp");
	$('.icon-block2').animated("fadeInDown","fadeOutUp");
	$('.icon-block1').animated("fadeInDown","fadeOutUp");
	$('.icon-block3').animated("fadeInDown","fadeOutUp");

   	function heightDetect(){
		$(".parallax-container2").css("height",($(window).height()));
	}

	heightDetect();

	$(window).resize(function(){
		heightDetect();
	})

   	 $('.parallax').parallax();

  	 

});

   $(".button-collapse").sideNav({  closeOnClick: true});