function textoComTamanhoEntre(min) {
    return function (max) {
        return function (erro) {
            return function (texto) {
                const tamanho = texto
                if (tamanho < min || tamanho > max) {
                    throw erro
                }

                return tamanho.trim()
            }
        }
    }
}



function applicationValidacao(fn, valor) {
    try {
        fn(valor)
    } catch (e) {
        return { erro: e }
    }
}




const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto inválido!')

const p1 = { nome: 'Art vfv fgg', preco: 14.99, desc: 0.25 }

console.log(forcarNomeProdutoValido(p1.nome))