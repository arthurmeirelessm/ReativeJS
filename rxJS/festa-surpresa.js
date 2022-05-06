const { resolve } = require('path')
const { stdout } = require('process')
const readLine = require('readline')



function obterResposta(pergunta) {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: stdout,
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}




function namorada () {
    console.log('N: Apagar as luzes pessoal...')
    console.log("N: Silêcio...")
    setTimeout(() => {
    console.log("N: SURPRESA!!!!")
    }, 5000) 
}



function sindico ( ) {
    setTimeout(() => {
        console.log('S: Monitorando o baralho')
    }, 2000)
}


function porteiro (interessados) {
    interessados.forEach(obs => obs());
}


porteiro([namorada, sindico])

