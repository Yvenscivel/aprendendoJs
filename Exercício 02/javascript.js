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

function calculoDeDano(){

    const personagem = prompt("Digite o nome do personagem: ");
    const poderDeAtaque = parseInt(prompt("Digite o poder de ataque do personagem: "))
    
    const defensor = prompt("Digite o nome do defensor: ");
    const defensorVida = parseInt(prompt("Digite os pontos de vida do defensor: "));
    const defensorPoderDefesa = parseInt(prompt("Digite o poder de defesa do defensor: "));
    const defensorEscudo = prompt("Defensor possui escudo? SIM ou NÃO");

    if(poderDeAtaque > defensorPoderDefesa & defensorEscudo !== "sim"){
        danoCausado = poderDeAtaque - defensorPoderDefesa;
        vida = defensorVida - danoCausado;
    }

    else if(poderDeAtaque > defensorPoderDefesa & defensorEscudo === "sim"){
        danoCausado = (poderDeAtaque - defensorPoderDefesa )/2;
        vida = defensorVida - danoCausado ;
    }

    else if(poderDeAtaque <= defensorPoderDefesa){
        danoCausado = 0;
    }

    else{
        alert("ERRO");
    }

    alert(`${personagem} causou ${danoCausado} de dano em ${defensor}`);

    alert(`${personagem} \n Poder de ataque: ${poderDeAtaque} \n \n ${defensor} \n Pontos de vida: ${vida} \n Poder de defesa: ${defensorPoderDefesa} \n Possui escudo: ${defensorEscudo}`);
}
calculoDeDano()