const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dadosCallbacks.txt')

function exibirConteudo(conteudo) {
    const exibirConteudo = (err, conteudo) => console.log(conteudo.toString())
    const fsRead = fs.readFile(caminho, {}, exibirConteudo)
     
    return new Promise(resolve => {
        console.log(fsRead)
    })
 }
 
 
 exibirConteudo(caminho)
 .then(console.log)


 