$(document).ready(function() {
  $('.seta').click(function() {
    $(this).parent().removeClass('visible');
    $(this).parent().next().addClass('visible');
  });
});
