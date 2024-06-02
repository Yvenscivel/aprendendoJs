const palavra = prompt("Digite a palavra para saber se é um palíndromo: ");
let palavraInvertida = ""

for (let i = palavra.length - 1 ; i >= 0; i--){
    palavraInvertida += palavra[i]
    console.log(palavraInvertida)
}

if(palavra === palavraInvertida){
    alert("A palavra " + palavra + " é um palíndromo")
}

else if(palavra !== palavraInvertida){
    alert("A palavra: " + palavra + " não é um palíndromo.\nO nome de trás para frente seria: " + palavraInvertida);
}

else{
    alert("erro, tente novamente")
}

