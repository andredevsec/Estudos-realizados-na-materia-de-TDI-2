//Função litera
const nome = "André"

//Função construtora
const nomeMeio = String("Luiz")

//Função instanciação
const sobreNome = new String ("Lima")

console.log(nome instanceof String) //Stirng false
console.log(nomeMeio instanceof String) //Stirng false
console.log(sobreNome instanceof String) //Stirng true

console.log(nome.constructor == String) // String true *Retirando "== String" mostra function*
console.log(nomeMeio.constructor == String) // String true
console.log(sobreNome.constructor == String) // String true

