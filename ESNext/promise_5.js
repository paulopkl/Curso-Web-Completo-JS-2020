function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            // con.log('temp')
            let chance = Math.random();
            if (chance < (chanceErro / 100)) {
                reject(`Chance de: ${chance.toFixed(2) * 100}%`); // Erro
            } else {
                resolve(valor) // Sem Erro
            }
        } catch(err) {
            reject(err)
        }
    })
}

funcionarOuNao('50%', 50)
    .then(value => `Valor maior que: ${value}`)
    .then(
        value => console.log(value),
        err => console.log(`Erro then: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))