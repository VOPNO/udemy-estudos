const pessoa = {
    nome:  'GUilherme',
    sobrenome: 'Caetano',
    idade: 16,
    endereco: {
        rua: 'Campos dos Cariocas',
        numero: 202,
        cep: '61661-300'
    }
}

const {endereco: {rua, numero} } = pessoa

console.log(`Rua ${rua}, ${numero}`)