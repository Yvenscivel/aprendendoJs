
function cadastroDePessoa(){
    
    const nome = prompt("Digite seu primeiro nome: ");
    const sobreNome = prompt("Digite seu sobrenome: ");
    const campoDeEstudo = prompt("Digite seu campo de estudo: ");
    const anoNascimento = prompt("Digite seu ano de nascimento: ");
    const idade = 2024 - anoNascimento;

    alert(`Seu nome é ${nome} ${sobreNome}, seu campo de estudo é ${campoDeEstudo} e sua idade é de ${idade} anos`);

}

function calcular(){

    const num1 = parseFloat(prompt("Digite o primeiro número: "));
    const num2 = parseFloat(prompt("Digite o segundo número: "));
    
    soma = num1 + num2;
    subtracao = num1 - num2;
    multiplicacao = num1 * num2;
    divisao = num1 / num2;
    
    alert(`Soma: ${soma}\n
    Subtração: ${subtracao}\n
    Multiplicação: ${multiplicacao}\n
    Divisão: ${divisao}
    `);
}