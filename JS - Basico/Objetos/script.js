//Array
var alunos = ["Willian", "Karina"];

//Objeto
var aluno = {
    nome: "Willian",
    notas: [7.5, 8]
}

console.log(aluno.nome);
console.log(aluno['notas']);
console.log(aluno['notas'][0]);

aluno.matricula = 1994;
aluno["sobrenome"] = "Couto"

var novaPropriedade = "faltas";
aluno[novaPropriedade] = 25;

console.log(aluno);

//Outra maneira de declarar objeto
var aluno2 = new Object();

aluno2.nome = "Karina";
aluno2.notas = [9, 9];
aluno2["matricul"] = 1997;
aluno2.sobrenome = "Avelar";
aluno2.faltas = 10;

console.log(aluno2);