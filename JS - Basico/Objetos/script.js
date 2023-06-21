function calcularMedia (n1, n2){
    return (n1 + n2) / 2
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
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

console.log(aluno2.nome);
console.log(aluno2.media(aluno2.notas[0], aluno2.notas[1]));