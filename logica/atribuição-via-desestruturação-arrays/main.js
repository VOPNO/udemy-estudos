//   Indices     0  1  2  3  4  5  6  7  8 
const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [primeiroNumero, segundoNumero, ...resto] = numbers

// ... rest (pegar o resto), ... spread(espalhar) operator

const [um, , tres,, cinco,, sete] = numbers

            //      0        1        2              
            //     0 1 2   0 1 2   0 1 2
const numeros = [ [1,2,3],[4,5,6],[7,8,9]]

const [ lista1, lista2, lista3] = numeros

console.log(lista3) 