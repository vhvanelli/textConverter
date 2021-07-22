const afterText = document.getElementById("after-text");

const uppercaseButton = document.getElementById("uppercase-button");
const lowercaseButton = document.getElementById("lowercase-button");
const capitalizeButton = document.getElementById("capitalize-button");
// const alternatingButton = document.getElementById("alternating-button");

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

uppercaseButton.addEventListener("click", upper)
lowercaseButton.addEventListener("click", lower)
capitalizeButton.addEventListener("click", capitalize)

