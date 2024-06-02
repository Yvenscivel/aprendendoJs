const opcao = parseInt(prompt(
    "Escolha uma opção: \n" +
    "1- Novo paciente \n" +
    "2- Consultar paciente \n" +
    "3- Sair"
));

let listaPacientes = [];

do{
    switch(opcao){
        case 1:
            cadastrarPaciente = prompt("Digite o nome do paciente: ");
            listaPacientes.push(cadastrarPaciente);
            alert("Paciente " + cadastrarPaciente + " cadatrado com um sucesso");
            alert(listaPacientes)
            break

        case 2:
            listaPacientes.shift()
            break
        case 3:
            alert("Encerrando...")
            break
    }
}while(opcao !== 3);

