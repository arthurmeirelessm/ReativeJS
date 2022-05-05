// São objetos que implementam a função MAP

//rray é um exemplo de functos
const nums = [1, 5, 3, 5, 3, 5]
const nome = 'Arthur'
const idade = 14
const corPreferida = 'Azul'

const novosNums = nums
    .map(el => el + 10)
    .map(el => el * 2)

//console.log(novosNums)



function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if (this.invalido()) {
                return TipoSeguro(null)
            } else {
                return TipoSeguro(fn(this.valor))
            }
        }
    }
}


const resultado = TipoSeguro('Esse é um texto!')
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!!`)
    .map(t => t.split('').join(''))

console.log(resultado.valor)