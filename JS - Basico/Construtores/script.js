function criarAluno(nome, n1, n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: calcularMedia
    }
}

var calcularMedia = function(){
    return (this.nota1 + this.nota2)/2;
}

var turma = [
    criarAluno("Karina", 9, 5),
    criarAluno("Willian", 5, 4),
    criarAluno("Gabriel", 9, 1),
]

turma.forEach( function(aluno){
    console.log(aluno.nome + " - " + aluno.media());
})

//Outra maneira
function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    
    this.media = function (){
        return (this.nota1 + this.nota2)/2;
    }
}

var alunoNovo = new aluno("Joao", 10, 9);
console.log(alunoNovo);
console.log(alunoNovo.media());