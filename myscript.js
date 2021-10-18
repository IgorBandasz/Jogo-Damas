
//Pop-up Duvidas e Sujestões//
  function popupduvidaesujestoes(URL) {
    var width = 512;
    var height = 350;
    var left = 50;
    var top = 50;
    window.open(URL, 'janela', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', scrollbars=yes, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');
  }
//Pop-up do Fim do Jogo

 //Mostrar Modal
  function showModal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
  }

 