function calcularMedia (){
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno = {
    nome: "Willian",
    notas: [7.5, 8],
    media: calcularMedia
}

var aluno2 = {
    nome: "Karina",
    notas: [9, 10],
    media: calcularMedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno2.nome);
console.log(aluno2.media());