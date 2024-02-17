const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible" 
}

function esconderForm(){
    form.style.left = "-335px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden" 

}
const texto = [
    "Fazemos reparos nos seu encanamentos!",
    "Arrumamos torneiras!",
    "Canos furados!",
    "Seu vaso entupiu? Chame os irmãos Mario!",
    "Somos a solução dos seus problemas!"
];

const divTexto = document.getElementById('texto');
let index = 0;

function digitarTexto() {
    divTexto.textContent = frases[index];
    divTexto.style.animation = 'typing 5s steps(40, end)';
    index = (index + 1) % frases.length;
}

// Chama a função para iniciar a digitação do primeiro texto
digitarTexto();

// Configura um intervalo para digitar os textos subsequentes
setInterval(digitarTexto, 6000); // Mude o tempo conforme desejado (em milissegundos)
