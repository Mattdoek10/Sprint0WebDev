

const titel = document.querySelector("h1")
    tekstInvoegen()

    async function tekstInvoegen (){
      
      const URL = "https://fdnd.directus.app/items/person/309"

      let response = await fetch(URL)

      let gegevensPersonen = await response.json()

      titel.textContent = gegevensPersonen.data.name

      
    }

const SRSI = document.querySelector("#SRSI");
const SRNI = document.querySelector("#SRNI");
const SRMA = document.querySelector("#SRMA");
const SRCR = document.querySelector("#SRCR");
const SRSA = document.querySelector("#SRSA");
const SRWA = document.querySelector("#SRWA");
const SRPM = document.querySelector("#SRPM");
const SRCM = document.querySelector("#SRCM");
const SRPR = document.querySelector("#SRPR");
const SRBR = document.querySelector("#SRBR");

const infoTekst = document.querySelector(".info-text");
const infoTitle = document.querySelector(".info-title");
const infoImg = document.querySelector(".info-img");


SRSI.addEventListener("click", toonSipaliwini);
SRNI.addEventListener("click", toonNickerie);
SRMA.addEventListener("click", toonMarowijne);
SRCR.addEventListener("click", toonCoronie);
SRSA.addEventListener("click", toonSaramacca);
SRWA.addEventListener("click", toonWanica);
SRPM.addEventListener("click", toonParamaribo);
SRCM.addEventListener("click", toonCommewijne);
SRPR.addEventListener("click", toonPara);
SRBR.addEventListener("click", toonBrokopondo);

function toonSipaliwini() {
    infoTitle.innerHTML = "Mijn Gegevens";
    infoTekst.innerHTML = "Ik ben Matthew, 22 jaar, woonachtig in Amsterdam, Noord-Holland. Ik ben een beginnende UX/UI-designer en front-end developer met passie voor interactieve interfaces."
    infoImg.src = "https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg" ;
}

function toonNickerie() {
    infoTitle.innerHTML = "nickerie";
    infoTekst.innerHTML = "Nickerie - Rijstproducent";
    infoImg.src = "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg";
}

function toonMarowijne() {
    infoTitle.innerHTML = "Marowijne";
    infoTekst.innerHTML = "Marowijne - Oostgrens";
}

function toonCoronie() {
    infoTitle.innerHTML = "Coronie";
    infoTekst.innerHTML = "Coronie - Westgrens";
    infoImg.src = "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg";
}

function toonSaramacca() {
    infoTitle.innerHTML = "Saramacca";
    infoTekst.innerHTML = "Saramacca - Zuidgrens";
}

function toonWanica() {
    infoTitle.innerHTML = "Mijn Gegevens";
    infoTekst.innerHTML = "Ik ben Matthew, 22 jaar, woonachtig in Amsterdam, Noord-Holland. Ik ben een beginnende UX/UI-designer en front-end developer met passie voor interactieve interfaces."
    infoImg.src = "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg";
}

function toonParamaribo() {
    infoTitle.innerHTML = "Paramaribo";
    infoTekst.innerHTML = "Paramaribo - Hoofdstad";
}

function toonCommewijne() {
    infoTitle.innerHTML = "Commewijne";
    infoTekst.innerHTML = "Commewijne - Midden";
}

function toonPara() {
    infoTitle.innerHTML = "Para";
    infoTekst.innerHTML = "Para - Oostkust";
}

function toonBrokopondo() {
    infoTitle.innerHTML = "Brokopondo";
    infoTekst.innerHTML = "Brokopondo - Noordwest";
}