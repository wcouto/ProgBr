var alunos = new Array("Igor", "Jose", "Marcos", "Mariana");

console.log(alunos[0]);

var alunos2 = ["Willian", "Karina", "Gabriel"];

console.log(alunos2.length)

for (var index in alunos){
    console.log(index)
}

for (var aluno of alunos){
    console.log(aluno)
}