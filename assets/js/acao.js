$(document).ready(function() {

  // conta o número de telas
  var telas = $(".base > .centro").length;
  $(".seta-baixo").click(function() {

    // oculta a tela do botão clicado
    $(this).closest(".centro").hide();

    // pega o index (índice) do botão clicado
    var indice = $(".base a.seta-baixo").index(this);

    // calcula qual elemento será mostrado
    indice += indice == telas - 1 ? -telas + 1 : 1;

    // mostra a tela da vez usando .eq()
    $(".base > .centro").eq(indice).show();

  });

});
