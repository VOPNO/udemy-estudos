setTimeout(() => {
    window.location.reload();
    console.log('Reload')
},
10000);

const insert = document.querySelector('#data')

const data = new Date();

function exibindo(){
    insert.innerHTML = `${definirData()}`
}

function definirData() {
    const mes = data.getMonth();
    const dia = data.getDate();
    const ano = data.getFullYear();
    const diaSem = data.getDay();

    const hora = data.getHours();
    const min = data.getMinutes()

    return `${definirDiaSemana(diaSem)}, ${zeroAEsquerda(dia)} de ${definirMes(mes)} de  ${ano} <br> ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)} `


}

function definirDiaSemana(dia){
    switch(dia){
        case 0:
            return 'Domingo'
            break;
        case 1:
            return 'Segunda-feira';
            break;
        case 2:
            return 'Terça-feira';
            break;
        case 3:
            return 'Quarta-feira';
            break;
        case 4: 
            return 'Quinta-feira';
            break;
        case 5:
            return 'Sexta-feira'
            break;
        case 6:
            return 'Sabádo'
            break;
        default:
            return 'Erro desconheicdo'
    }
}

function definirMes(m){
    switch (m){
        case 0:
            return 'Janeiro';
            break;
        case 1:
            return 'Fevereiro';
            break;
        case 2:
            return 'Março';
            break;
        case 3: 
            return 'Abril';
            break;
        case 4:
            return 'Maio';
            break;
        case 5:
            return 'Junho';
            break;
        case 6:
            return 'Julho';
            break
        case 7: 
            return 'Agosto'
            break;
        case 8:
            return 'Setembro';
            break;
        case 9:
            return 'Outubro';
            break;
        case 10:
            return 'Novembro';
            break;
        case 11:
            return 'Dezembro';
            break;
        default:
            return 'Algum erro desconhecido aconteceu.'
    }   
}

function zeroAEsquerda(n){
    if(n < 10){
        return `0${n}`;
    } else {
        return n;    
    }
}

exibindo()