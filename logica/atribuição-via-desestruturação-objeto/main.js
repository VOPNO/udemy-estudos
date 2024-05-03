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

const { nome, idade , endereco } = pessoa

console.log(nome, idade, endereco)