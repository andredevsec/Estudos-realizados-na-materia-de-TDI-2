const nome = "André"
let idade = 23
var filhos = 0

console.log(nome, idade, filhos)

function imprime () {
    console.log(nome, idade, filhos);

    if(true){
        console.log(nome, idade, filhos);
    }
}

imprime()