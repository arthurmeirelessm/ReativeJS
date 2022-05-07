function gerarNumeros() {
    return {
        iniciar(fn) {
            let num = 0
            setInterval(() => {
                fn(num++)
            }, 2000)
        }
    }
}





const resp1 = gerarNumeros() 
resp1.iniciar(numeros => {
    console.log(`#1: ${numeros * 2}`)
})




resp2 = gerarNumeros()
resp2.iniciar(a => {
    console.log(`#2: ${a + 100}`)
})