	$("#header").load("header.html");
	$("#footer").load("footer.html");
$(function() {
    console.log( "ready!" );

    $('.slideShow').slick({
    	infinite: true,
    	// autoplay: true,
		autoplaySpeed: 7000,
  	});
    $(document).scroll(function () {
    	var $nav = $(".fixed-top");
    	$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

	$('.slider-for').slick({
		// infinite: true,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
	  	centerMode: true,
	  	draggable:false,
	  	asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  	infinite: true,	
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	 	asNavFor: '.slider-for',
		// dots: true,
		centerMode: true,
 		centerPadding: '0px',
 		

	 	focusOnSelect: true,


	});






});
