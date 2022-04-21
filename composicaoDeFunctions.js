const notas = [5.7, 7.6, 6.7, 5.7, 7.0, 7.8, 9.0 ]


const somar = (a, b) => a + b
const dividir = (a, b) => a / b


const media = dividir(notas.reduce(somar), notas.length)

console.log(media)