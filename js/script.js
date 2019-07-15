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
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true
	});






});
