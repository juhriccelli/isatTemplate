$(document).ready(function() {
  $('.info').click(function() {
    $('.perfil').children().toggleClass("visible");
  });

  $('.heart').click(function() {
    $('.perfil').removeClass('visible');
    $('.perfil').eq(index('.heart')).addClass('visible');
  });
});
