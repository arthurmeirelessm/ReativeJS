const { interval } = require('rxjs')

const gerarNumeros = interval(500)



const sub = gerarNumeros.subscribe(num => {
    console.log(Math.pow(2, num))
})


setTimeout(() => {
    console.log("Vamos parar por aqui!")
    sub.unsubscribe()
}, 5000)