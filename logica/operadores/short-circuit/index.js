/* 
&& -> false && true -> false "O valor mesmo"
|| ->  true || false -> vai retornar "o valor verdadeiro"

Falsy:
False
0
"" '' ``
Null / Undefined
NaN
*/

const corUser = 'vermelho'
const corPadrão = corUser || 'preto'

console.log(corPadrão)
  