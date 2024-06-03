
let opcao;
let dados = [];

function cadastrar(){
    let propietario = prompt("Digite o nome do propietario: ")
    let quantidadeQuarto = prompt("Digite a quantidade de quartos: ")
    let quantidadeBanheiro = prompt("Digite a quantidade de banheiros: ")
    let possuiGaragem = prompt("Digite sim/não se o imóvel possui garagem: ")

    objImovel = {
        propietario: propietario,
        quantidadeQuarto: quantidadeQuarto,
        quantidadeBanheiro:quantidadeBanheiro,
        possuiGaragem: possuiGaragem
    }
    adicinarImovel = dados.push(objImovel)
    console.log(dados)
}

function mostrarImoveis(){
   for (let i = 0; i < dados.length; i++){
    alert(
        "Imóvel " + (i + 1) +
        "\nPropiétario: " + dados[i].propietario +
        "\n Quantidade de quartos: " + dados[i].quantidadeQuarto +
        "\n Quanditade de banheiros: " + dados[i].quantidadeBanheiro +
        "\n Possui garagem: " + dados[i].possuiGaragem
    )
   }

}

do{
    opcao = parseInt(prompt(
        "Quantidade de imóveis cadastrados: " + dados.length +  "\n\n" +
        "Escolha uma opção: \n" +
        "1- Salvar um imóvel \n" +
        "2- Mostrar todos os ímoveis salvos \n" +
        "3- Encerrar"
    ));

    switch(opcao){
        case 1:
            cadastrar();
            break

        case 2:
            alert("digitou 2")
            mostrarImoveis()
            break

        case 3:
            alert("encerrando")
            break

        default:
            alert("Digite uma opção válida")
    }

}while(opcao !== 3)