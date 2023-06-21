function calcularMedia (nota1, nota2){
    return  (nota1 + nota2)/2;
}

console.log(calcularMedia(5, 10));
console.log(calcularMedia(4, 6));
console.log(calcularMedia(8, 7));
console.log(calcularMedia(9, 3));

function saudacao () {
    return "Hello Motherfuckers!"
}

console.log(saudacao());

//Atribuir uma funcao a uma variavel
var funcaox = saudacao;
console.log(funcaox);

//Funcao anonima
var multiplicacao = function (n1,n2) {
    return n1 * n2;
}

console.log(multiplicacao(5, 6));

//funcao anonima mais simplificada
var divisao = (n1,n2) => {
    return n1 / n2;
}