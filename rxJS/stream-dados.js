function gerarNumeros() {
    return {
        iniciar(fn, intervalo = 2000) {
            let num = 0
            const i = setInterval(() => {
                fn(num++)
            }, intervalo)

            return {
                parar() {
                    clearInterval(i)
                }
            }
        }
    }
}





const resp1 = gerarNumeros()
const exec11 = resp1.iniciar(numeros => {
    console.log(`#1.1: ${numeros * 2}`)
}, 1000)
const exec12 = resp1.iniciar(numeros => {
    console.log(`#1.2: ${numeros * 2}`)
}, 5000)





const resp2 = gerarNumeros()
const exec2 = resp2.iniciar(a => {
    console.log(`#2: ${a + 100}`)
}, 2000)


setTimeout(() => {
     exec11.parar()
     exec2.parar()
}, 10000)


setTimeout(() => {
    exec1.parar()
}, 12000)