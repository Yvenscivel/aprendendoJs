function calcularVelocidade(){
    const veiculo1 = prompt("Digite o nome do primeiro veículo:");
    const velocidadeVeiculo1 = parseFloat(prompt("Digite a velocidade do primeiro veículo:"));
    const veiculo2 = prompt("Digite o nome do segundo veículo:");
    const velocidadeVeiculo2 = parseFloat(prompt("Digite a velocidade do segundo veículo:"));
    
    if(velocidadeVeiculo1 > velocidadeVeiculo2){
        alert(`O veículo ${veiculo1} tem uma velocidade de ${velocidadeVeiculo1} km/h, sendo mais rápido do que o ${veiculo2} que tem ${velocidadeVeiculo2} km/h.`);
    }
    else if(velocidadeVeiculo1 < velocidadeVeiculo2){
        alert(`O veículo ${veiculo2} tem uma velocidade de ${velocidadeVeiculo2} km/h, sendo mais rápido do que o ${veiculo1} que tem ${velocidadeVeiculo1} km/h.`);
    }

    else if(velocidadeVeiculo1 === velocidadeVeiculo2){
        alert('Ambos os veículos possuem velocidades iguais');
    }

    else{
        alert("ERRO, tente novamente!");
    }
}

