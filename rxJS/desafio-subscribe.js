// esperar 3000
// gerar numeros de 500
// depois de 10000 unsubscribe


const { timer } = require('rxjs')

// Timer é passada da seguinte forma: primeiro tempo (numero) => tempo de inicio para começar a execução, segundo tempo (numero) => tempo de intervalo de uma execução para outra
const time = timer(10000, 500)


const sub1 = time.subscribe(num => {
    console.log(`#1 Gerou o numero ${num}`)
})



const sub2 = time.subscribe(num => {
    console.log(`#2 Gerou o numero ${num}`)
})



setTimeout(() => {
    sub1.unsubscribe()
    sub2.unsubscribe()
}, 10000)