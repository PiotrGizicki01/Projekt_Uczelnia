$(document).ready(function(){ 
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.scrollToTop').fadeIn();
	} else {
		$('.scrollToTop').fadeOut();
	}
}); 
$('.scrollToTop').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 800);
	return false;
});
});

function scroll(nazwa) {
$('html,body').animate({
scrollTop: $("." + nazwa).offset().top - 10},
'slow');
}