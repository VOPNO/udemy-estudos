// Sintax: (condição) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontUser = 99;
const lvUser = pontUser >= 1000 ? 'Usuário Vip': 'Usuario normal'
console.log(lvUser)

// Esse codigo acima substitui tudo isso abaixo:

// if(pontUser >= 1000){
//     console.log('Usuario vip')
// } else {
//     console.log('Usuário normal');
// }


// Avaliação de shourt-circut

const corUser = null;
const corPadrao = corUser || 'Preta';

// Assim definindo uma cor padrão para caso nenhuma seja selecionada;

console.log(corPadrao)

