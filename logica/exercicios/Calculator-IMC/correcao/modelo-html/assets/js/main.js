// Capturar evento de submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();

})

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP()


}