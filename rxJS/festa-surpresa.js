const { resolve } = require('path')
const { stdout } = require('process')
const readLine = require('readline')




//

function obterResposta(pergunta) {
    // VARIAVEL rl PUXA UM METODO(CREATEINTERFACE) QUE FORMA UM INPUT/PERGUNTA E UM OUTPUT/RESPOSTA
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




function namorada() {
    console.log('N: Apagar as luzes pessoal...')
    console.log("N: Silêcio...")
    console.log("N: SURPRESA!!!!")
}



function sindico() {
    console.log('S: Monitorando o baralho')
}


async function porteiro(interessados) {
    while (true) {
        const resp = await obterResposta('O namorado chegou?')
        if (resp.toLowerCase() === 'sim') {
            (interessados || []).forEach(obs => obs());
        } else if (resp.toLowerCase() === 'q') {
            break
        }
    }
}


porteiro([namorada, sindico])

