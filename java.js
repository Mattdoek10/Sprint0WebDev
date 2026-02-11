

const titel = document.querySelector("h1")



async function tekstInvoegen() {
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
const infoUL = document.querySelector(".info-panel ul");
const gebieden = document.querySelectorAll("svg path");



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
    infoImg.src = "https://avatars.githubusercontent.com/u/152287577?v=4";
    infoUL.innerHTML = "<li></li>"
}

function toonNickerie() {
    infoTitle.innerHTML = "Leerdoel 1";
    infoTekst.innerHTML = "Ik wil graag meer leren over CSS en mezelf hierin verder ontwikkelen. Animaties vind ik erg leuk en interessant, en ik wil ze beter onder de knie krijgen. Uiteindelijk wil ik functionele websites kunnen maken die niet alleen fijn aanvoelen voor mij, maar ook voor de mensen die ze gebruiken.";
    infoImg.src = "https://secure.kwaliteitsregisterparamedici.nl/SiteAssets/Afbeelding%20leerdoelen.png";
    infoUL.innerHTML = "<li></li>"
}

function toonMarowijne() {
    infoTitle.innerHTML = "Mijn Gegevens";
    infoTekst.innerHTML = "Ik ben Matthew, 22 jaar, woonachtig in Amsterdam, Noord-Holland. Ik ben een beginnende UX/UI-designer en front-end developer met passie voor interactieve interfaces."
    infoImg.src = "https://avatars.githubusercontent.com/u/152287577?v=4";
    infoUL.innerHTML = "<li></li>"
}

function toonCoronie() {
    infoTitle.innerHTML = "Leerdoel 2";
    infoTekst.innerHTML = "Ik wil JavaScript zo goed mogelijk leren, zodat ik de code beter kan begrijpen en schrijven. Ik wil me er verder in verdiepen, want op dit moment beheers ik alleen de basis en nog niet de details.";
    infoImg.src = "https://secure.kwaliteitsregisterparamedici.nl/SiteAssets/Afbeelding%20leerdoelen.png";
    infoUL.innerHTML = "<li></li>"
}

function toonSaramacca() {
    infoTitle.innerHTML = "Leerdoel 3";
    infoTekst.innerHTML = "Ik wil beter leren samenwerken binnen een team op het gebied van coderen, omdat ik binnenkort stage ga lopen als front-end developer en deze vaardigheden goed van pas zullen komen.";
    infoImg.src = "https://secure.kwaliteitsregisterparamedici.nl/SiteAssets/Afbeelding%20leerdoelen.png";
    infoUL.innerHTML = "<li></li>"
}

function toonWanica() {
    infoTitle.innerHTML = "Mijn Gegevens";
    infoTekst.innerHTML = "Ik ben Matthew, 22 jaar, woonachtig in Amsterdam, Noord-Holland. Ik ben een beginnende UX/UI-designer en front-end developer met passie voor interactieve interfaces."
    infoImg.src = "https://avatars.githubusercontent.com/u/152287577?v=4";
    infoUL.innerHTML = "<li></li>"
}

function toonParamaribo() {
    infoTitle.innerHTML = "Mijn Gegevens";
    infoTekst.innerHTML = "Ik ben Matthew, 22 jaar, woonachtig in Amsterdam, Noord-Holland. Ik ben een beginnende UX/UI-designer en front-end developer met passie voor interactieve interfaces."
    infoImg.src = "https://avatars.githubusercontent.com/u/152287577?v=4";
    infoUL.innerHTML = "<li></li>"
}

function toonCommewijne() {
    infoImg.src = " ";
    infoTitle.innerHTML = "Mijn hobbies";
    infoTekst.innerHTML = "Mijn hobbies zijn gamen, reizen, koken en muziek luisteren. Ik geniet ervan om nieuwe culturen te ontdekken en mijn creativiteit te uiten door middel van design en development.";
    infoUL.innerHTML = "<li><img src=\"https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg\" alt=\"foto van console\"></li><li><img src=\"https://www.globaljobbing.nl/wp-content/uploads/2024/11/reizen-1024x683.webp\" alt=\"foto van reisen\"></li><li><img src=https://cvofocus.be/wp-content/uploads/2019/05/koken-12.jpg alt=\"foto van koken\"></li><li><img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BdjaPumQC-Wg3MPMf9L2V1zQNQk-IXf9mg&s alt=\"foto van muziek\"></li>";

}

function toonPara() {

    infoImg.src = " ";
    infoTitle.innerHTML = "Mijn hobbies";
    infoTekst.innerHTML = "Mijn hobbies zijn gamen, reizen, koken en muziek luisteren. Ik geniet ervan om nieuwe culturen te ontdekken en mijn creativiteit te uiten door middel van design en development.";
    infoUL.innerHTML = "<li><img src=\"https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg\" alt=\"foto van console\"></li><li><img src=\"https://www.globaljobbing.nl/wp-content/uploads/2024/11/reizen-1024x683.webp\" alt=\"foto van reisen\"></li><li><img src=https://cvofocus.be/wp-content/uploads/2019/05/koken-12.jpg alt=\"foto van koken\"></li><li><img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BdjaPumQC-Wg3MPMf9L2V1zQNQk-IXf9mg&s alt=\"foto van muziek\"></li>";

}

function toonBrokopondo() {
    infoTitle.innerHTML = "Studenten Gegevens";
    infoTekst.innerHTML = "";
    infoUL.innerHTML = "";
    infoImg.src = "";

    const base = "https://fdnd.directus.app/items"
    let eindpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526"
    let url = base + eindpoint

    loadOneStudent(url)
}

async function loadOneStudent(url) {
    let response = await fetch(url)
    let responseJSON = await response.json()
    let deMinorMensen = responseJSON.data
    console.log(deMinorMensen)

    if (deMinorMensen.length > 0) {
        let randomPersoon = Math.floor(Math.random() * deMinorMensen.length)
        let eenMinorMens = deMinorMensen[randomPersoon]
        console.log(eenMinorMens)

        if (eenMinorMens.avatar === null || eenMinorMens.avatar === undefined) {
            eenMinorMens.avatar = "https://www.thetombomb.com/images/ForPosts/null.png"
        }

        let minorMensenHTML = `
        <li>
            <h3>${eenMinorMens.name}</h3>
            <img src="${eenMinorMens.avatar}" alt="avatar van ${eenMinorMens.name}">
        </li>`
        infoUL.insertAdjacentHTML("beforeend", minorMensenHTML)
    }
}


// Loop door elk gebied heen
gebieden.forEach(function (gebied) {

    gebied.addEventListener("click", function () {

        // Verwijder de actieve klasse van alle gebieden
        gebieden.forEach(function (gebied) {
            gebied.classList.remove("onClickhover-district");
        });

        // Voeg de actieve klasse toe aan het aangeklikte gebied
        gebied.classList.add("onClickhover-district");
    });

});

tekstInvoegen()

// Volg de muis en zet de x- en y-coördinaten in CSS-variabelen
// Niet eigen code bron: https://dev.to/mattmarquise/how-to-create-a-custom-circular-cursor-for-your-website-4i7p
document.body.onmousemove = function (e) {
    document.documentElement.style.setProperty(
        '--x', (
            e.clientX + window.scrollX
        )
    + 'px'
    );
    document.documentElement.style.setProperty(
        '--y', (
            e.clientY + window.scrollY
        )
    + 'px'
    );
}