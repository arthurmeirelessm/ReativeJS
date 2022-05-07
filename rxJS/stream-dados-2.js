
function gerarElementos(array) {
    return {
        iniciar(fn) {
            let indice = 0
            const i = setInterval(() => {
                if (indice >= array.length) {
                    console.log("Vou parar por aqui!")
                    clearInterval(i)
                } else {
                    fn(array[indice])
                    indice++
                }
            }, 1000)
            return {
                parar() {
                    clearInterval(i)
                }
            }
        }
    }
}

//const numeros = [1, 3, 5, 4, 3, 5, 4, 8, 8, 5, 5, 5, 2, 9,]
//const temp1 = gerarElementos(numeros)

//const exec1 = temp1.iniciar(num => {
    //console.log(Math.pow(2, num))
//})



//setTimeout(() => {
    ///exec1.parar()
//}, 3000)


const nomes = ['Ana', 'Alon', 'Dylan']


gerarElementos(nomes).iniciar(console.log)
