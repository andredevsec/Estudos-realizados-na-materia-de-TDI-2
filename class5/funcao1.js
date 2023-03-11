function testeEscopo () {
    // if(true) {
    //     const marca = "Honda"
    //     let modelo = "Civic"
    //     var ano = 2020
    // }

    // somente o ano consegue aceitar pelo tipo ser var dentro do if    

    const marca = "Honda"
    let modelo = "Civic"
    var ano = 2020

    console.log(marca, modelo, ano);
}

testeEscopo()

// Sem acesso a essas variáveis
console.log(marca, modelo, ano)

