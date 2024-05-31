function visitandoNovasCidadades(){
    const turista = prompt("Digite o seu nome: ");
    let visitas = "";
    let numeroVisitas = 0;


    while(true){

    let resposta = prompt("Você ja visitou alguma cidade? SIM OU NÃO");
        if(resposta.toLocaleLowerCase() === "sim"){
            let cidade = prompt("Qual foi a cidade que você visitou? ");
            visitas += `${cidade}/`
            numeroVisitas+= 1;
            alert(`Cidades: ${visitas}`)
        }

        else {
            alert(`Turista: ${turista}\nNúmero de cidades visitadas: ${numeroVisitas}\nCidades visitadas: ${visitas}`)
            break;
        }
    }
}

visitandoNovasCidadades()