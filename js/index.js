!(function($) {
	"use strict";

	$(document).on('click', '.scrollto', function(e) {
	      	e.preventDefault();

		    var target = $(this.hash);
		    
		    if (target.length) {

		        var scrollto = target.offset().top;
		        console.log(scrollto);

		        $('html, body').animate({
		          scrollTop: scrollto
		        }, 1500, 'easeInOutExpo');

		        return false;
		    } else {
		    	if($(this).attr('href') != undefined)
		    		location.assign($(this).attr('href'));
		    }
	});

	// Back to top button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
	      $('.back-to-top').fadeIn('slow');
	    } else {
	      $('.back-to-top').fadeOut('slow');
	    }

	    let nv = $('#last').offset().top;
	    if ($(this).scrollTop() > nv + 200) {
	      $('#footer').css('z-index', 0);
	    } else {
	      $('#footer').css('z-index', -1);
	    }
	});

	$('.back-to-top').click(function() {
	    $('html, body').animate({
	      scrollTop: 0
	    }, 1500, 'easeInOutExpo');
	    return false;
	});



	//si on clique sur un éléments de mes entetes
	$(document).on('click', '.entete-element', function(e) {
		let entetes = $('.entete-element');
		let id;
		for (var i = 0; i < entetes.length; i++) {
			if($(entetes[i]).hasClass('active')) {
				$(entetes[i]).removeClass('active');
				id = $(entetes[i]).attr('for');
				$('#'+id).addClass('d-none')
			}
		}

		$(this).addClass('active');
		id = $(this).attr('for');

		if(id != 'langages') {
			$('#'+id).removeClass('d-none').hide();
			$('#' + id).slideDown(1500, function() {
				$('.skill').waypoint(function() {
			    	$('.progress-bar').each(function() {
			      		$(this).css("width", '1%');
			    	});
			  	}, {
			    	offset: '80%'
			  	});
			});
		}else {

			$('#'+id).removeClass('d-none').hide();
			$('#' + id).slideDown(1500, function() {
				$('.skill').waypoint(function() {
			    	$('.progress-bar').each(function() {
			      		$(this).css("width", $(this).attr("aria-valuenow") + '%');
			    	});
			  	}, {
			    	offset: '80%'
			  	});
			});
		}

	});

	$('.entetes-mobile select').on('change', function() {
		let entetes = $('.entete-element');
		let id;
		for (var i = 0; i < entetes.length; i++) {
			if($(entetes[i]).hasClass('active')) {
				$(entetes[i]).removeClass('active');
				id = $(entetes[i]).attr('for');
				$('#'+id).addClass('d-none')
			}else if($(this).children('option:selected').attr('value')==$(entetes[i]).attr('for')){
				$(entetes[i]).addClass('active');
			}
		}

		id = $(this).children('option:selected').attr('value');
		
		if(id != 'langages') {
			$('#'+id).removeClass('d-none').hide();
			$('#' + id).slideDown(1500, function() {
				$('.skill').waypoint(function() {
			    	$('.progress-bar').each(function() {
			      		$(this).css("width", '1%');
			    	});
			  	}, {
			    	offset: '80%'
			  	});
			});
		}else {

			$('#'+id).removeClass('d-none').hide();
			$('#' + id).slideDown(1500, function() {
				$('.skill').waypoint(function() {
			    	$('.progress-bar').each(function() {
			      		$(this).css("width", $(this).attr("aria-valuenow") + '%');
			    	});
			  	}, {
			    	offset: '80%'
			  	});
			});
		}
	});

	$('.outils-element').on('mouseenter', function() {
		$(this).find('i').css({
			background: '#D5D700',
			color: '#2727e6'
		});

	});

	$('.outils-element').on('mouseleave', function() {
		$(this).find('i').css({
			background: 'rgba(213, 215, 00, 0.7)',
			color: '#fff'
		});
	});

	// Skills section
  	$('.skill').waypoint(function() {
    	$('.progress-bar').each(function() {
      		$(this).css("width", $(this).attr("aria-valuenow") + '%');
    	});
  	}, {
    	offset: '80%'
  	});


})(jQuery);