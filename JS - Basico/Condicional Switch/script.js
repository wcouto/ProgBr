var nota1 = 1.0;
var nota2 = 10.0;

var media = (nota1 + nota2) / 2;

var conceito;

if (media >= 8){
    conceito = "otimo";
} else if (media >= 6.5){
    conceito = "bom";
}else if (media >= 5){
    conceito = "regular";
}else {
    conceito = "ruim";
}

console.log(media);

switch(conceito){
    case "otimo":
        console.log("Parabens, você é um ótimo aluno!")
        break;

    case "bom":
        console.log("Você está quase perfeito!");
        break;

    case "regular":
        console.log("Estude mais um pouco!");
        break;

    case "ruim":
        console.log("Reprovou!");
        break;

    default:
        console.log("Erro!");
}