
$(window).scroll(function() {
	$('#title-main').each(function(){
	    var imagePos = $(this).offset().top;

	    var topOfWindow = $(window).scrollTop();
	    if (imagePos < topOfWindow+650) {
	        $(this).addClass("fadeInDown");
	        }
	    });
	});


$(window).scroll(function() {
	$('#awaits-1').each(function(){
	    var imagePos = $(this).offset().top;

	    var topOfWindow = $(window).scrollTop();
	    if (imagePos < topOfWindow+650) {
	        $(this).addClass("fadeInLeft");
	        }
	    });
	});

$(window).scroll(function() {
	$('#awaits-2').each(function(){
	    var imagePos = $(this).offset().top;

	    var topOfWindow = $(window).scrollTop();
	    if (imagePos < topOfWindow+650) {
	        $(this).addClass("fadeInUp");
	        }
	    });
	})

$(window).scroll(function() {
	$('#awaits-3').each(function(){
	    var imagePos = $(this).offset().top;

	    var topOfWindow = $(window).scrollTop();
	    if (imagePos < topOfWindow+650) {
	        $(this).addClass("fadeInRight");
	        }
	    });
	})

$(window).scroll(function() {
	$('#title-main2').each(function(){
	    var imagePos = $(this).offset().top;

	    var topOfWindow = $(window).scrollTop();
	    if (imagePos < topOfWindow+650) {
	        $(this).addClass("fadeInLeft");
	        }
	    });
	});

$(window).scroll(function() {
	$('#form').each(function(){
	    var imagePos = $(this).offset().top;

	    var topOfWindow = $(window).scrollTop();
	    if (imagePos < topOfWindow+650) {
	        $(this).addClass("fadeInRight");
	        }
	    });
	})