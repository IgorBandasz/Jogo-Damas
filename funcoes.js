function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
} else {
      x.className = "topnav";
}
}

function movercasa(origem, destino)