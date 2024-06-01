let numero = parseInt(prompt(
    'Olá, este é o robô da tabuada\n' + 
    'Digite o numero que você quer multiplicar:'
))

let resultado = " "

for(let fator = 1; fator <= 20; fator++){
    resultado+= '->' + numero + 'x' + fator + ' = ' + (numero * fator) + '\n'
}

alert('Resultado da tabuada de' + numero + ":\n\n" + resultado);