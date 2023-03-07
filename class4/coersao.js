const nome = "André"

String.prototype.meRetorna = function () {
    return this
}

const quemEhVC = nome.meRetorna()

console.log(nome.toUpperCase())
console.log(nome)
console.log(typeof nome)
console.log(typeof quemEhVC)