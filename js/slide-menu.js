$(document).ready(function() {
var start_pos=$('.header-menu').offset().top;
 $(window).scroll(function(){
  if ($(window).scrollTop()>=start_pos) {
      if ($('.header-menu').hasClass()==false) $('.header-menu').addClass('to_top');
  }
  else $('.header-menu').removeClass('to_top');
 });
});