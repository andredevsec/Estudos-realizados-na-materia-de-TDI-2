const nome = "André"
const altura = 1.73
const filhos = 0
const efetivo = false

const idade = function () { //Função para calcular idade com base na data atual
    const hoje = new Date ()
    const nascimento = new Date (1999, 03, 14)
    const milisegundoPorAno = 31536000000
    const idade =  (hoje - nascimento) / milisegundoPorAno
    return Math.floor(idade)

}

console.log(idade())

const hobbies = ["Jogar dota", "Musculação", "Comer e beber com amigos"] //Array (object)
hobbies.push(33)

//*-----------------------------------------*
// function  Foo () {

// }

// const foo = new Foo ();

// console.log (typeof foo)
//*-----------------------------------------*

//JSON      Criação de um objeto, pode atribuir todos esses valores a andre
const andre = {
    nomeA: nome,
    alturaA: altura,
    filhosA: filhos, 
    efetivoA: efetivo,
    idadeA: idade(),
    hobbiesA: hobbies,
    resume: function () {
        console.log (`Nome : ${nome}, Idade: ${idade()}`)
    }
}

console.log(andre)

console.log (hobbies)

andre.resume()
