var dados = {
    aluno1: ["Igor", 7, 8],
    aluno2: ["Daniel", 5, 10],
    aluno3: ["Godofredo", 6, 8],
    aluno4: ["Karina", 4, 4],
    aluno5: ["Willian", 2, 1]
}

function calcularMedia (n1, n2){
    var media = (n1 + n2)/2;
    dados[key].push(media);
    return media;
}

function verificarAprovacao(key, media){
    dados[key].push("Reprovado")
    if (media >= 6){
        dados[key].push("Aprovado");
    }
}

for (var key in dados){
    var media = calcularMedia(key, dados[key][1], dados[key][2]);
    verificarAprovacao(key, media);
}

console.log(dados);


