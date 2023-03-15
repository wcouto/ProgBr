var idade = 71;

if (idade < 18 || idade > 70){
    console.log("Menor de 18 anos ou maior de 70 anos, NAO pode comprar bedida alcoolica!");
} else if ( idade <= 35) {
    console.log("Maior de 18 anos, pode comprar bebida alcoolica!");
    console.log("Por favor, mostrar sua identidade!")
} else {
    console.log("Maior de 18 anos, pode comprar bebida alcoolica!");
    console.log("Qual o seu pedido?");
}