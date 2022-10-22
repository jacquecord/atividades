var idade=prompt("Digite a idade:");
function verificarPermissoes(idade) {
    if (idade>= 18){
        console.log("A pessoa já pode votar e já pode dirigir!")
    } else if (idade>= 16){
        console.log("A pessoa já pode votar mas não pode dirigir!")
    } else {
        console.log("A pessoa não pode votar nem pode dirigir!")
    }
}
verificarPermissoes(idade);

var gasolinaTanque=prompt("Digite a quantidade de litros de gasolina no tanque do carro:");
var quilomLitro=prompt("Digite a quilometragem média por litro:");
var estimativa=0;
function previsaoRodagem(gasolinaTanque, quilomLitro){
    estimativa=gasolinaTanque*quilomLitro;
    console.log("A estimativa de km que podem ser rodados nas circunstâncias fornecidas é: " + estimativa);
}
previsaoRodagem(gasolinaTanque, quilomLitro);
