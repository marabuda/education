
$(function() {
	$("#header").load("header.html");
	$("#footer").load("footer.html");
    console.log( "ready!" );

    $('.slideShow').slick({
    	infinite: true,
    	// autoplay: true,
		autoplaySpeed: 7000,
  	});








});
