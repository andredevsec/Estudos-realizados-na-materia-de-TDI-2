function maiorQue () {
    let aleatorio = Math.random() * 100
    aleatorio = aleatorio.toFixed(0)

    let func = function(valor) {
        console.log(`${valor} é maior que ${aleatorio}?`)
        return valor > aleatorio
    }
    return func
}

console.log(maiorQue()(50))

const func2 = maiorQue()
console.log(func2(50))