
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
        } catch(e) {
            reject(e)
        }
    })
}



funcionarOuNao('Testando', 0,9)
.then(v => console.log(`VALOR: ${v}`))
.then( 
    v => console.log(v),
    err => console.log(`Erro Esp: ${err}`)
)
.catch(err => console.log(`ERRO: ${err}`))
.then(() => console.log("FIM!"))

