
function areaTriangulo(){
    let base = parseFloat(prompt("Digite a base do triângulo: "))
    let altura = parseFloat(prompt("Digite a altura do triângulo: "))
    let area = (base * altura) / 2
    alert("A área do triângulo é: " + area)
}

function areaRetangulo(){
    let base = parseFloat(prompt("Digite a base do retângulo: "))
    let altura = parseFloat(prompt("Digite a altura do retângulo: "))
    let area = base * altura
    alert("A área do retângulo é: " + area)
}

function areaQuadrado(){
    let lado = parseFloat(prompt("Digite o lado do quadrado: "))
    let area = lado ** 2
    alert("A área do quadrado é: " + area)
}

function areaTrapezio(){
    let baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "))
    let baseMenor = parseFloat(prompt("Digite a base menor do trapézio: "))
    let altura = parseFloat(prompt("Digite a altura do trapézio: "))
    let area = ((baseMaior + baseMenor) * altura) / 2
    alert ("A área do trapézio é: " + area)
}

function areaCirculo(){
    let pi = 3.14
    let raio = parseFloat(prompt("Qual é o raio do círculo: "))
    let area = (pi * (raio**2))
    alert ("A área do círculo é: " + area)
}

function executar (){
    let opcao

    do{
        opcao = parseInt(prompt(
            "Calculadora geométrica \n\n" + 
            "Digite uma opção válida: \n" +
            "1- Calcular área do triângulo \n" +
            "2- Calcular área do retângulo \n" +
            "3- Calcular área do quadrado \n" +
            "4- Calcular área do trapézio \n" +
            "5- Calcular área do círculo \n" +
            "6- Encerrar"
        ))
    
        switch(opcao){
            case 1:
                areaTriangulo()
                break
            case 2:
                areaRetangulo()
                break
            case 3:
                areaQuadrado()
                break
            case 4:
                areaTrapezio()
                break
            case 5: 
                areaCirculo()
                break
            case 6: 
                alert("Encerrando...")
                break
            default:
                alert("Insira uma opção válida")
        }
    
    }while(opcao !== 6)
}


executar ()