//Primeira maneira
var a = {
    nome: "Willian"
}

//Segunda maneira
function obj(nome, sobrenome){
    return {nome: nome, sobrenome: sobrenome};
}

//Terceira maneira
function obj2(n, s) {
    this.nome = n;
    this.sobrenome = s;
}

aluno = new obj2("Willian", "Couto");
console.log(aluno);
console.log(aluno["nome"]);
console.log(aluno.sobrenome);