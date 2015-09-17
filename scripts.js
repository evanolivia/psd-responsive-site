$(function() {
    $('.mobile-menu').on('click', function(){
    	$('.menu-overlay').removeClass('hide');
    });
    $('.close').on('click', function() {
    	$('.menu-overlay').addClass('hide');
    });
    $('.menu-items li').on('click', function() {
    	$('.menu-overlay').addClass('hide');
    });
});