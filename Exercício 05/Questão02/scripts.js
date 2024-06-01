let moneyStart = parseFloat(prompt("Qual a sua quantidade incial de dinheiro? "));

do{
    option = parseInt(prompt((`Você possui: ${moneyStart} Reais\nEscolha uma opção abaixo:\n\n1-Adicionar dinheiro\n2-Remover dinheiro\n3-Sair`)));

    switch(option){
        case 1:
           moneyStart+= parseFloat(prompt("Quanto você gostaria de adicionar?"));
           alert(`Você agora possui: ${moneyStart} Reais`);
           break
        case 2:
            moneyStart -= parseFloat(prompt("Quanto você gostaria de remover?"));
            alert(`Você agora possui: ${moneyStart} Reais`);
            break
        case 3:
            alert("Encerrando...")
            break
        default:
            alert("Digito inválido");
    }

}while(option!==3)
