const inputUser = document.querySelector(".input-usuario");
const encriptarBtn = document.querySelector(".encriptar-btn");
const desencriptarBtn = document.querySelector(".desencriptar-btn");
const resultadoContainer = document.querySelector(".resultado-container");
const muñecoImg = document.querySelector(".muñeco-img");
const noTextoTitulo = document.querySelector(".no-texto-titulo");
const noTextoParrafo = document.querySelector(".no-texto-parrafo");
const resultado = document.querySelector(".resultado");
const copiarBtn = document.querySelector(".copiar-btn");

document.addEventListener("DOMContentLoaded", () => {
    revisarResultado();
});

// Sirve para revisar si el resultado-container esta vacio
function revisarResultado() {
    resultadoContainer.classList.remove("no-resultado");

    if(resultado.textContent === "") {
        resultadoContainer.classList.add("no-resultado");
        
        resultado.style.display = "none";
        copiarBtn.style.display = "none";

        muñecoImg.style.display = "block";
        noTextoTitulo.style.display = "block";
        noTextoParrafo.style.display = "block";
    } else {
        resultado.style.display = "block";
        copiarBtn.style.display = "block";

        muñecoImg.style.display = "none";
        noTextoTitulo.style.display = "none";
        noTextoParrafo.style.display = "none";
    }
}

inputUser.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-z ]/g, '');
});

encriptarBtn.addEventListener("click", () => {
    let textoEncriptar = inputUser.value;
    inputUser.value = "";

    // Transformo el string en array
    textoEncriptar = textoEncriptar.split("");

    const textoEncriptado = encriptarTexto(textoEncriptar);

    resultado.textContent = textoEncriptado;

    console.log(inputUser.value === null);
    console.log(inputUser.value === undefined);
    console.log(inputUser.value === "");

    revisarResultado();
});

function encriptarTexto(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === "e") {
            array[i] = "enter";
        } 
        
        else if(array[i] === "i") {
            array[i] = "imes";
        } 
        
        else if(array[i] === "a") {
            array[i] = "ai";
        } 
        
        else if(array[i] === "o") {
            array[i] = "ober";
        } 
        
        else if(array[i] === "u") {
            array[i] = "ufat";
        };
    }

    return array.join("").toString()
}

desencriptarBtn.addEventListener("click", () => {
    const textoEncriptado = inputUser.value;
    inputUser.value = "";

    const textoDesencriptado = desencriptarTexto(textoEncriptado);

    resultado.textContent = textoDesencriptado;

    revisarResultado();
});

function desencriptarTexto(textoEncriptado) {
    // Reemplazamos cada cadena encriptada por su correspondiente letra
    textoEncriptado = textoEncriptado.replace(/enter/g, "e");
    textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    textoEncriptado = textoEncriptado.replace(/ai/g, "a");
    textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/g, "u");

    return textoEncriptado;
}

copiarBtn.addEventListener("click", () => {
    const textoCopiar = resultado.textContent;

    navigator.clipboard.writeText(textoCopiar);
})