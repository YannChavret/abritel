/* Voici la fonction javascript qui change la propriété "display"
pour afficher ou non le div selon que ce soit "none" ou "block". */

function AfficherMasquer() {
  divInfo = document.getElementById("divacacher");
  var boutton = document.getElementById("BoutonVoirPlus");

  if (divInfo.style.display == "none") {
    divInfo.style.display = "grid";
    boutton.setAttribute("value", "Voir moins d'idées >");
  } else {
    divInfo.style.display = "none";
    boutton.setAttribute("value", "Voir plus d'idées >");
  }
}

// </script>

// /* La c'est le bouton qui va afficher le div en cliquant dessus. */
// <input type="button" value="Afficher ou Masquer" onClick="AfficherMasquer()" />

// /* Ca c'est le div en question qui possède l'id indiqué dans
// la fonction. */
// <div id="divacacher" style="display:none;"></div>

window.addEventListener("scroll", fixedbar);

function fixedbar() {
  if (window.scrollY > 200) {
    document.getElementById("textsearch").classList.add("fixedTop");
  } else {
    document.getElementById("textsearch").classList.remove("fixedTop");
  }
}
