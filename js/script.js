	$("#header").load("header.html");
	$("#footer").load("footer.html");
$(function() {
    console.log( "ready!" );
    // banner slide show
    $('.slideShow').slick({
    	infinite: true,
    	autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover:false,
  	});

    //header add background
    $(document).scroll(function () {
    	var $nav = $(".fixed-top");
    	$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

    //new game slide show
	$('.slider-for').slick({
		// infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
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
	 	responsive: [
		 	{
			    breakpoint: 460,
			    settings: {
			        slidesToShow: 1,
			    }
			}
		]
	});

	//back to top
	$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('#toTop').fadeIn(200);
				} else {
					$('#toTop').fadeOut(200);
				}
	});
	
	$(document).ready(function() {
		// Animate the scroll to top
		$('#toTop').click(function(event) {
			console.log( "go" );
			$('html, body').animate({scrollTop: 0}, 500);
		});
		 $(".banner_btn").click(function (){
		 	console.log('55');
            $('html, body').animate({
                scrollTop: $("#features").offset().top
            }, 1000);
        });
	});
    // $(document).ready(function (){
       
    // });
	




	// $(function() {
	//     $.fn.scrollToTop = function() {
	//         $(this).hide().removeAttr("href");
	//         if ($(window).scrollTop() != "0") {
	//             $(this).fadeIn("slow")
	//         }
	//         var scrollDiv = $(this);
	//         $(window).scroll(function() {
	//             if ($(window).scrollTop() == "0") {
	//                 $(scrollDiv).fadeOut("slow")
	//             } else {
	//                 $(scrollDiv).fadeIn("slow")
	//             }
	//         });
	//         $(this).click(function() {
	//             $("html, body").animate({
	//                 scrollTop: 0
	//             }, "slow")
	//         })
	//     }
	// });

	// $(function() {
	    // $("#toTop").scrollToTop();
	// });

	// When the user scrolls down 20px from the top of the document, show the button
	// window.onscroll = function() {scrollFunction()};

	// function scrollFunction() {
	//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	//     document.getElementById("top_btn").style.display = "block";
	//   } else {
	//     document.getElementById("top_btn").style.display = "none";
	//   }
	// }



});
