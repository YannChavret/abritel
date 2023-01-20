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

// API

// API URL
const urlAPI = "https://simplon-brief-htmlcssjs.vercel.app";

// API Villes
window.addEventListener("load", async (event) => {
  console.log("La page est complètement chargée");
  await getValueDestination();
});

let destination = document.querySelector("#villes");

async function getValueDestination() {
  let result = await fetch(
    "https://simplon-brief-htmlcssjs.vercel.app/api/destination"
  );
  let data = await result.json();

  for (const ville of data) {
    const option = document.createElement("option");
    option.value = ville;
    destination.appendChild(option);
  }
  console.log(data);
}

// API Hero

window.addEventListener("load", async (event) => {
  console.log("La page est complètement chargée");
  await getHeroAndTitle();
});

let title = document.querySelector(".heroTitle");
let image = document.querySelector("#slider");

async function getHeroAndTitle() {
  let result = await fetch(
    "https://simplon-brief-htmlcssjs.vercel.app/api/hero"
  );
  let data = await result.json();
  title.innerHTML = data.h1;
  image.setAttribute("src", urlAPI + "/" + data.img);

  console.log(data);
  console.log(result);
}

// API Inspiration

window.addEventListener("load", async (event) => {
  console.log("La page est complètement chargée");
  await getInspiration();
});

async function getInspiration() {
  let inspiration = document.querySelector(".mosaique:nth-of-type(2)");
  let inspirationBis = document.querySelector(".mosaique:nth-of-type(3)");

  let result = await fetch(
    "https://simplon-brief-htmlcssjs.vercel.app/api/inspiration"
  );
  let data = await result.json();
  let count = 0;

  for (const iterator of data) {
    let vignette = document.createElement("div");
    vignette.classList.add("Vignette");

    if (count < 5) {
      inspiration.appendChild(vignette);
    } else {
      inspirationBis.appendChild(vignette);
    }

    let imageVignette = document.createElement("img");
    imageVignette.classList.add("imageVignette");
    vignette.appendChild(imageVignette);

    let fondTexteVignette = document.createElement("div");
    fondTexteVignette.classList.add("fondTexteVignette");
    vignette.appendChild(fondTexteVignette);

    let texteVignette = document.createElement("p");
    texteVignette.classList.add("texteVignette");
    fondTexteVignette.appendChild(texteVignette);

    imageVignette.setAttribute("src", urlAPI + "/" + iterator.img);
    texteVignette.innerHTML = iterator.name;

    count++;
  }
}

// API Location type

window.addEventListener("load", async (event) => {
  console.log("La page est complètement chargée");
  await getLocationType();
});

async function getLocationType() {
  let carroussel = document.querySelector(".carroussel");

  let result = await fetch(
    "https://simplon-brief-htmlcssjs.vercel.app/api/location-type"
  );
  let data = await result.json();

  for (const iterator of data) {
    let card = document.createElement("div");
    card.classList.add("card");
    carroussel.appendChild(card);

    let img_card = document.createElement("div");
    img_card.classList.add("img_card");
    card.appendChild(img_card);

    let imageLocation = document.createElement("img");
    imageLocation.classList.add("imageLocation");
    img_card.appendChild(imageLocation);

    let caption = document.createElement("div");
    caption.classList.add("caption");
    card.appendChild(caption);

    let titleLocationType = document.createElement("h3");
    titleLocationType.classList.add("titleLocationType");
    caption.appendChild(titleLocationType);

    let numberOfLocation = document.createElement("p");
    numberOfLocation.classList.add("numberOfLocation");
    caption.appendChild(numberOfLocation);

    imageLocation.setAttribute("src", urlAPI + "/" + iterator.img);
    titleLocationType.innerHTML = iterator.name;
    numberOfLocation.innerHTML =
      "Voir les " + " " + iterator.nb + " " + iterator.name;
  }
}
