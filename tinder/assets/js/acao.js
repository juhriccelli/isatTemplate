$(document).ready(function() {
  $('.info').click(function() {
    $('.perfil').children().toggleClass("visible");
  });

  $('.heart').click(function() {
    $('.perfil').removeClass('visible');
    var aux = $('.heart').index();
    $('.perfil').siblings().eq(aux).addClass('visible');
  });
});
