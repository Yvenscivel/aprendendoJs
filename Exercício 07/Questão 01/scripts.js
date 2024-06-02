
let listaPacientes = [];
let opcao
do{
    opcao = parseInt(prompt(
        "Escolha uma opção: \n" +
        "1- Cadastrar paciente \n" +
        "2- Listar pacientes na fila de espera \n" +
        "3- Consultar paciente \n" +
        "4- Sair"
    ));
    
    switch(opcao){
        case 1:
            let cadastrarPaciente = prompt("Digite o nome do paciente:");
            listaPacientes.push(cadastrarPaciente);
            alert("Paciente " + cadastrarPaciente + " cadatrado com um sucesso");
            break;

        case 2:
            if (listaPacientes.length === 0){
                alert("Nenhum paciente cadastrado")
            }
            else{
                alert("Pacientes cadastrados: \n" +listaPacientes)
            }
            break;

        case 3:
            let pacienteConsultado = listaPacientes.shift();
            alert("Paciente consultado: " + pacienteConsultado)
            
            break;

        case 4:
            alert("Encerrando...");
            break;

        default:
            alert("Digite uma opção válida do menu.");
    }
} while(opcao !== 4);




