const pesoTxt = document.querySelector('#peso-txt');
const altTxt = document.querySelector('#alt-txt');
const btn = document.querySelector('#btn');
const result = document.querySelector('#resultado');
const divResult = document.querySelector('#divResult');

btn.addEventListener('click', function(){
    const peso = Number(pesoTxt.value);
    const alt = Number(altTxt.value);
    calc(peso, alt);
});

function calc(peso, altura) {
    if(peso <= 0 ){
        divResult.style.backgroundColor = 'rgb(255, 117, 117)';
        result.textContent = 'Peso inválido';
    } else if( altura <= 0){
        divResult.style.backgroundColor = 'rgb(255, 117, 117)';
        result.textContent = 'Altura inválida';
    } else {
        const imc = calcularIMC(peso, altura);
        mostrarResultado(imc);
    };
};

function calcularIMC(peso, altura){
    const imc = peso / Math.pow(altura, 2);
    return imc;
};

function mostrarResultado(imc) {
    if(imc < 18.5){
        divResult.style.backgroundColor = 'aqua';
        result.textContent = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
    } else if(imc <= 24.9) {
        divResult.style.backgroundColor = 'aqua';
        result.textContent = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`;
    } else if(imc <= 29.9){
        divResult.style.backgroundColor = 'aqua';
        result.textContent = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
    } else if(imc <= 34.9) {
        divResult.style.backgroundColor = 'aqua';
        result.textContent = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`;
    } else if(imc <= 39.9) {
        divResult.style.backgroundColor = 'aqua';
        result.textContent = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`;
    } else if(imc >= 40) {
        divResult.style.backgroundColor = 'aqua';
        result.textContent = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`;
    };
};