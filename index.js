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