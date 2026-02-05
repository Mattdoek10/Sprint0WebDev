// const districten = document.querySelectorAll('.hover-district');

// districten.forEach (function(district) {
//     district.addEventListener('click', () {
//         district.classList.toggle('toon-info');
//     })
// });
//````````````````````````````

// const districten = document.querySelectorAll('.hover-district');

// districten.forEach(district => {
//     district.addEventListener('click', wijsInfo);
// });

// //districten.addEventListener('click', wijsInfo);

// function wijsInfo() {

//     var districtinfo = this.getAttribute('data-info');
//     document.querySelector('.info-text').innerHTML = districtinfo;
//     district.classList.toggle('toon-info');
// }

// -----------------------------

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
    infoTitle.innerHTML = "Test";
    infoTekst.innerHTML = "Bombo - Grootste district";
}

function toonNickerie() {
    infoTitle.innerHTML = "nickerie";
    infoTekst.innerHTML = "Nickerie - Rijstproducent";
}

function toonMarowijne() {
    infoTitle.innerHTML = "Marowijne";
    infoTekst.innerHTML = "Marowijne - Oostgrens";
}

function toonCoronie() {
    infoTitle.innerHTML = "Coronie";
    infoTekst.innerHTML = "Coronie - Westgrens";
}

function toonSaramacca() {
    infoTitle.innerHTML = "Saramacca";
    infoTekst.innerHTML = "Saramacca - Zuidgrens";
}

function toonWanica() {
    infoTitle.innerHTML = "Wanica";
    infoTekst.innerHTML = "Wanica - Noordgrens";
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