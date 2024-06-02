let baralho = []
let opcao;

do{
    opcao = parseInt(prompt(
        "Quantidas de cartas no baralho " + baralho.length + "\n\n" +
        "Que opção deseja escolher: \n" +
        "1- Adicionar carta \n" +
        "2- Puxar carta \n" +
        "3- Sair do programa"
    ));

    switch(opcao){
        case 1:
            let adicionarCarta = prompt("Qual carta deseja adicionar? ")
            baralho.push(adicionarCarta)
            alert("A carta adicionada foi: " + baralho)
            break
        case 2:
            alert("A carta puxada foi: " + baralho.pop())
            break;
        case 3:
            alert("Encerrando programa...")
            break
        default:
            ("Escolha uma opção válida!")
    }
    
}while(opcao !==3)