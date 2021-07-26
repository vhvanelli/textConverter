const afterText = document.getElementById("after-text");

const uppercaseButton = document.getElementById("uppercase-button");
const lowercaseButton = document.getElementById("lowercase-button");
const capitalizeButton = document.getElementById("capitalize-button");
const arrowImg =  document.getElementById("arrow-img");
// const alternatingButton = document.getElementById("alternating-button");

const screenPx = window.matchMedia("(max-width: 700px)");

function midiaScreen(screenPx){
if (screenPx.matches) { 
    arrowImg.src = "assets/arrow-down.png";
    
  } else {
    arrowImg.src = "assets/arrow-right.png";
  }
}

midiaScreen(screenPx);

const upper = () =>{
    afterText.style.textTransform = "none";
    const text = document.getElementById("text").value;

    afterText.innerHTML = text.toUpperCase();
}
const lower = () =>{
    afterText.style.textTransform = "none";
    const text = document.getElementById("text").value;
    afterText.innerHTML =  text.toLowerCase();
}
const capitalize = () =>{
    afterText.style.textTransform = "none";
    const text = document.getElementById("text").value;
    afterText.innerHTML = text.toLowerCase();
    afterText.style.textTransform = "capitalize" ;
}

uppercaseButton.addEventListener("click", upper);
lowercaseButton.addEventListener("click", lower);
capitalizeButton.addEventListener("click", capitalize);
screenPx.addEventListener("change", midiaScreen);

