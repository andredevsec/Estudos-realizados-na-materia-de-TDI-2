function f4 () {
    setTimeout (() =>console.log ('Timeout chamado' , 5000))
    console.log("Função 4 executou")

}

function f3 () {
    console.log("Função 3 executou")
    f4();
}

function f2 () {
    console.log("Função 2 executou")
    f3()
}

function f1 () {
    console.log("Função 1 executou")
    f2()
}

f1();
console.log("Fim do programa")

// primeiro vc empilha, depois vem desempilhando
