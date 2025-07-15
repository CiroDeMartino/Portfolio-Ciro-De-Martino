 
  // Prendiamo il bottone per usarlo
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  // Inizialmente lo nascondiamo

  // Funzione per mostrare/nascondere il bottone
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollToTopBtn.style.display = "block";
       
    } else {
      scrollToTopBtn.style.display = "none";
       
    }
  };
// Funzione per mostrare/nascondere il bottone

  // Quando clicco il bottone, torno in alto
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // scorrimento dolce
      
    });
  });

// Quando clicco il bottone, torno in alto
 

let inputNome = document.querySelector("#nome");
let inputEmail = document.getElementById("email");
let inputCognome = document.getElementById("cognome");
let inputTelefono = document.getElementById("telefono");
let inputAdulti = document.getElementById("adulti");
let inputBambini = document.getElementById("bambini");
let modale = document.querySelector(".divModale") 
let outModale = document.querySelector(".divModale button")
inputNome.addEventListener("input", selezioneCorretta);

 
setTimeout(() => {
 
modale.style.display = "block"

}, 1000);

outModale.addEventListener( "click", clickOut );

function clickOut() {

  modale.style.display = "none"

}




function selezioneCorretta()  {
let valoreInserito = inputNome.value;


 
if (!isNaN(Number(valoreInserito))) {
  inputNome.style.borderColor = "red";
} else {
  inputNome.style.borderColor = "green";
}
};
 
inputCognome.addEventListener("input", selezioneCorrettaCognome);

function selezioneCorrettaCognome()  {
let valoreInseritoCognome = inputCognome.value;

 
if (!isNaN(Number(valoreInseritoCognome))) {
  inputCognome.style.borderColor = "red";
} 
else {
  inputCognome.style.borderColor = "green";
}
};


inputEmail.addEventListener("input", selezioneCorrettaEmail);

function selezioneCorrettaEmail()  {
let valoreInseritoEmail = inputEmail.value;

 
if (!isNaN(Number(valoreInseritoEmail))) {
  inputEmail.style.borderColor = "red";
} 

else if (!valoreInseritoEmail.includes("@")) {
  inputEmail.style.borderColor = "red";
}
else {
  inputEmail.style.borderColor = "green";
}
};

inputTelefono.addEventListener("input", selezioneCorrettaTelefono);

function selezioneCorrettaTelefono()  {
let valoreInseritoTelefono = inputTelefono.value;

 
if (isNaN(Number(valoreInseritoTelefono))) {
  inputTelefono.style.borderColor = "red";
} 
else {
  inputTelefono.style.borderColor = "green";
}
};

inputAdulti.addEventListener("input", selezioneCorrettaAdulti);

function selezioneCorrettaAdulti()  {
let valoreInseritoAdulti = inputAdulti.value;


if (isNaN(Number(valoreInseritoAdulti))) {
  inputAdulti.style.borderColor = "red";
   
} 
else {
  inputAdulti.style.borderColor = "green";
}
};

inputBambini.addEventListener("input", selezioneCorrettaBambini);

function selezioneCorrettaBambini()  {
let valoreInseritoBambini = inputBambini.value;


 if (isNaN(Number(valoreInseritoBambini))) {
  inputBambini.style.borderColor = "red";
} 
else {
  inputBambini.style.borderColor = "green";
}
};


let formVar = document.querySelector("#reservation-form");

formVar.addEventListener("submit", function (event) {
  event.preventDefault(); // previene l'invio del form


  if (inputNome.style.borderColor === "green" && inputCognome.style.borderColor === "green" && inputEmail.style.borderColor === "green" && inputTelefono.style.borderColor === "green" && inputAdulti.style.borderColor === "green" && inputBambini.style.borderColor === "green") {
    alert("Form inviato con successo!" );
  }
  else {
    alert("Compila correttamente il form!" );
  }

 
});


// Funzione per il caricamento dell'immagine
 

window.addEventListener("load",  loadImg); 
let timerId;

function loadImg() {
  const sliderConteiner = document.querySelector("#img-container");
  sliderConteiner.addEventListener("click", nextImg);
  setInterval(nextImg, 6000);

  document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
     clearInterval(timerId);
    // Pause  
     }
     else {
      timerId = setInterval(nextImg, 6000);
      // Resume  

     }
});
}

function nextImg() {
  /*document.querySelector(".visible").style.left = "-100%";
  document.querySelector(".next").style.left = "0";*/
  let imgVisible = document.querySelector(".visible");
  imgVisible.classList.remove("visible");
  let imgNext = document.querySelector(".next");
  imgNext.classList.replace("next", "visible");
  let imgNextVisible = document.querySelector(".visible + img");
  if (imgNextVisible !== null) {
    
    imgNextVisible.classList.add("next");
  }
  else{
    let imgFirst = document.querySelector("#img-container img:first-child");
    imgFirst.classList.add("next");
  }

}

// Funzione per il caricamento dell'immagine

//focus su pagina 

const home = document.querySelector("h1#Home")
const history = document.querySelector ("h2#Storia")
const menu = document.querySelector ("h2#Menu")
const prenotazione = document.querySelector ("h2#Prenotazione")
const contatti = document.querySelector ("div#Contatti")

const arrayPage = [home, history, menu, prenotazione, contatti]

 


window.addEventListener("scroll", function (){
  let minDistance = Infinity
  let sezioneAttiva = null 
  for (i=0; i < arrayPage.length; i++){
     let sezione = arrayPage[i];

    let heightPage = sezione.getBoundingClientRect().top
    
     let distanza = Math.abs(heightPage)

     if (distanza < minDistance){
      minDistance = distanza
      sezioneAttiva = sezione
  
     }
  }
  if (sezioneAttiva !==null){
      let idPage =  sezioneAttiva.getAttribute("id");

       document.querySelectorAll(".nav-list a").forEach(link => link.classList.remove("colore"));

       let link = document.querySelector( `a[href="#${idPage}"]`)
      console.log(link)
      
      
     console.log(idPage)
     if(link){
      link.classList.add("colore");
     }
  }

   

});

// focus su page 

