const tresHoras = 60 * 60 * 3 * 1000 // 60 * 60 = 1hr + numerodeHorasDesejadas * 1000 que é os milissegundos

const umDia = 60 * 60 * 24 * 1000 // 60 * 60 = 1hr * hrsDoDia * 1000 que é convertendo para milissegundos

//const data = new Date(0 + tresHoras + umDia); // Função construtora, indicada pelo iniciador new antes do nome da função,  funções construtoras sempre iniciam seu nome com uma letra maiúscula

// 01/01/1970 Timestamp unix ou época unix = 0

// Essa função construtora recebe os argumentos em milissegundos. 

const dataNow = new Date(2007, 1, 29); /// a, m, d, h, M, s ,ms

const data = new Date('2007-05-19 20:20:59:999')

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() +1 ); // O mês +1 é porquê os meses em js começam em  0 
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay() + 1); // Começa em 0 também, sendo zero o Domingo.
console.log(data.toString());
console.log(Date.now())

// console.log(, data.getDate());
// console.log(, data.getDate());

