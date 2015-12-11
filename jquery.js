$(function(){
$('main').children(':gt(1)').hide(); //hides all children of main element on loadGame
$('.right').on('click', function(){
  $(this).parent().next().show();
  $(this).parent().next().children('.gameOptionButton').not('.death').show();
});
$('.wrong').on('click', function(){
  $('.gameOptionButton').hide();
  $(this).siblings('.death').show();
});
$('.death').on('click', function(){
  $(this).siblings().show();
  $(this).hide();
});
});
