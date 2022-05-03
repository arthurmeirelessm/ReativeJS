function textoComTamanhoEntre(min, max, erro, texto) {
    const tamanho = texto
    if (tamanho < min || tamanho > max) {
        throw erro
    }   

    return tamanho.trim()
}



const p1 = {nome: 'Art vfv fgg', preco: 14.99, desc: 0.25}


console.log(textoComTamanhoEntre(4, 15, 'Erro!', p1.nome))