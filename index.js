const prompt = require('prompt-sync')();

let resp
let nome
let xp

console.log('Olá aventureiro! Aqui na Taverna do Orbe Ancião, você poderá descansar, comer, e arranjar trabalhos. Antes de continuar, precisamos te registrar na nossa lista de trabalhos.')

while (resp != 'S' && resp != 's'){
    nome = prompt('Digite o seu nome: ')
    xp = prompt('Agora, digite o valor do seu xp: ')
    resp = prompt('As informações estão corretas? [S/N] ')
}

if (xp < 1000){
    nivel = 'Ferro'
} else if (xp >= 1001 && xp <= 2000){
    nivel = 'Bronze'
} else if (xp >= 2001 && xp <= 5000){
    nivel = 'Prata'
} else if (xp >= 5001 && xp <= 7000){
    nivel = 'Ouro'
} else if (xp >= 7001 && xp <= 8000){
    nivel = 'Platina'
} else if (xp >= 8001 && xp <= 9000){
    nivel = 'Ascendente'
} else if (xp >= 9001 && xp <= 10000){
    nivel = 'Imortal'
} else {
    nivel = 'Radiante'
}

console.log(`O herói de nome **${nome}** está no nível **${nivel}**`)
