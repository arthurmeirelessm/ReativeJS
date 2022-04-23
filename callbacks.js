/*const addToTerminal = (a, b) => (a + b)
const subtractToTerminal = (a, b) => a - b


function exec (fn, a, b) {
       return fn(a, b)
}

const r = exec(addToTerminal, 50, 78)

const fn = () => console.log('Exec...')
setInterval(fn, 1000)*/


const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dadosCallbacks.txt')

console.log(caminho)
function exibirConteudo(err, conteudo) {
   console.log(conteudo.toString())
}

const fsRead = fs.readFile(caminho, {}, exibirConteudo)


