<<<<<<< HEAD
(function ( $ ) {
	$(document).ready(function() {

	Swal.fire({
	  title: '<strong>WELCOME!</strong>',
	  type: 'question',
	  html:
		'DO YOU REQUIRE VISUAL AID?',
	  showCloseButton: true,
	  showCancelButton: true,
	  focusConfirm: true, 
	  confirmButtonText:
		'<a class = "visualAid" ><i class="fa fa-thumbs-up"></i> YES!</a>',
	  confirmButtonAriaLabel: 'Thumbs up, great!',
	  cancelButtonText:
		'<a class = "cancel"><i class="fa fa-thumbs-down">NO, THANKS</i></a>',
	  cancelButtonAriaLabel: 'Thumbs down'
	})
	});

$(document).on('click', '.visualAid', function(e) {
    $(".logo").css('visibility', 'visible').trigger('click');
});

$(document).on('click', '.logo', function(e) {
    $(".menu").css('visibility', 'visible').trigger('click');
});

   $.fn.increase = function() {
       this.css( "font-size", 250 +"%" );
       return this;
   };
 
$( "a, h1, h2, h3, h4, h5, h6, p, span" ).increase().addClass( "decreased" );
	
	 $.fn.decrease = function() {
		 
		 this.css( "font-size", 10 + "px" );
       return this;
   }

$( "a, h1, h2, h3, h4, h5, h6, p, span" ).decrease().addClass( "decreased" );
	
	$.fn.color = function() {
       this.css( "filter", "grayscale(100%)" );
       return this;
   };
	
	$("body").color();
	
	$.fn.style = function() {
       this.css( "font-family", "Ariel" );
       return this;
   };
	
	$( "a, h1, h2, h3, h4, h5, h6, p, span").style();
	
}(jQuery));
=======
(function ( $ ) {
	$(document).ready(function() {

	Swal.fire({
	  title: '<strong>WELCOME!</strong>',
	  type: 'question',
	  html:
		'DO YOU REQUIRE VISUAL AID?',
	  showCloseButton: true,
	  showCancelButton: true,
	  focusConfirm: true, 
	  confirmButtonText:
		'<a class = "visualAid" ><i class="fa fa-thumbs-up"></i> YES!</a>',
	  confirmButtonAriaLabel: 'Thumbs up, great!',
	  cancelButtonText:
		'<a class = "cancel"><i class="fa fa-thumbs-down">NO, THANKS</i></a>',
	  cancelButtonAriaLabel: 'Thumbs down'
	})
	});

 $.fn.menu =  function() {
	 menu = $.parseHTML("<ul id='menu' style='visibility: hidden'" + 
		 "<a class = '' onclick= ''><li><div>Nearsightedness</div></li></a>" +
	 	"<a class = '' onclick= ''><li><div>Farsightedness</div></li></a>" +
		"<a class = '' onclick= ''><li><div>Colorblindness</div></li></a>" +
		"<a class = '' onclick= ''><li><div>Change Font Style</div></li></a>" +
		  "</ul>")
	$(".logo").append(menu);
	return this;
 } ;

$(document).on('click', '.visualAid', function(e) {
    $(".logo").css('visibility', 'visible').trigger('click');
});

$(document).on('click', '.logo', function(e) {
    $("$(menu())").trigger('click');
});

	
//	 $.fn.highlight = function() {
//	$("section").append( $(""))
//		this.hover( function() { this.css("border-style", "solid")});
//		hover = this.css( "border-style", "solid" );
//        return this;
//    };
//	
//	$("section").highlight();
 
//    $.fn.increase = function() {
//        this.css( "font-size", 250 +"%" );
//        return this;
//    };
//// 
//$( "a, h1, h2, h3, h4, h5, h6, p, span" ).increase().addClass( "decreased" );
////	
//	 $.fn.decrease = function() {
//		 
//		 this.css( "font-size", 10 + "px" );
//        return this;
//    }
// 
//$( "a, h1, h2, h3, h4, h5, h6, p, span" ).decrease().addClass( "decreased" );
//	
//	$.fn.color = function() {
//        this.css( "filter", "grayscale(100%)" );
//        return this;
//    };
//	
//	$("body").color();
	
//	$.fn.style = function() {
//        this.css( "font-family", "Ariel" );
//        return this;
//    };
//	
//	$( "a, h1, h2, h3, h4, h5, h6, p, span").style();
	
}(jQuery));
>>>>>>> 0d33f78dae9b9ff456cb451b4045d977a3574d41
