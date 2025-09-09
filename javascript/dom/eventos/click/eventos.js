var divResult = document.getElementById("divResult");
var btnButton = document.getElementById("btnButton");

function click() {
    divResult.textContent = "Você clicou no botão!";
}

function mouseOver() {
    divResult.textContent = "Você passou o mouse por cima!";
}

function mouseOut() {
    divResult.textContent = "Você retirou o mouse!";
    setTimeout(() => {
        divResult.textContent = null;
    }, 3000)
}

btnButton.addEventListener("click", click);

btnButton.addEventListener("mouseover", mouseOver);

btnButton.addEventListener("mouseout", mouseOut);

