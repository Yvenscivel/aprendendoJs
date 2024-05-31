function conversordeMedidas(){

    const metros =  parseFloat(prompt("Bem vindo ao conversor de medidas, quantos metros você deseja converter? "));

    const escolha = parseInt(prompt("Escolha o número correspondente a medida\n\n1 - Mílimetro (mm)\n2 - Céntimetro (cm)\n3 - Decímetro (dm)\n4 - decâmetro (dam)\n5 - Hectômetro (hm)\n6 - Quilômetro (km)"));


    switch(escolha){
        case 1:
            const resultadoMM = metros * 1000;
            alert(`${metros.toLocaleString()}m é equivalente à ${resultadoMM.toLocaleString()}mm`);
            break;

       case 2:
            const resultadoCM = metros * 100;
            alert(`${metros.toLocaleString()}m é equivalente à ${resultadoCM.toLocaleString()}cm`);
            break;

       case 3:
            const resultadoDM = metros * 10;
            alert(`${metros.toLocaleString()}m é equivalente à ${resultadoDM.toLocaleString()}dm`);
            break;
        
        case 4:
            const resultadoDAM = metros/10;
            alert(`${metros.toLocaleString()}m é equivalente à ${resultadoDAM.toLocaleString()}dam`);
            break;

        case 5:
            const resultadoHM = metros/20;
            alert(`${metros.toLocaleString()}m é equivalente à ${resultadoHM.toLocaleString()}dam`);
            break;

        case 6:
            const resultadoKM = metros/1000;
            alert(`${metros.toLocaleString()}m é equivalente à ${resultadoKM.toLocaleString()}km`);
            break;

        default:
            alert("Numéro não correspondente, tente novamente.")
    }

}

conversordeMedidas();