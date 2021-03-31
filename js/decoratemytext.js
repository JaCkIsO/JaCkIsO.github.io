'use strict'
window.onload = function () {
    const button = document.getElementById("btn");
    const textArea = document.getElementById("textArea");
    const checkbox = document.getElementById("bling");
    const malkovitch = document.getElementById("malkovitch");
    textArea.style.fontSize = "10pt";
    button.addEventListener("click", () => {
        setInterval(function () {
            textArea.style.fontSize = parseInt(textArea.style.fontSize) + 2 + "pt";
        }, 500)
    });

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {

            textArea.style.fontWeight = "bold";
            textArea.style.color = "green";
            textArea.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('../images/background.png')";
        } else {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black";
            textArea.style.textDecoration = "";
            document.body.style.backgroundImage = "";
        }
    });
    malkovitch.addEventListener("click", ()=>{
        if(textArea.value.length>=5){
            textArea.value = "Malkovich"

        }
    })

}