const pessoa = {
    nome: 'Maicon',
    altura: 1.78,
    cidade: 'São Luis'
}

//console.log(pessoa)

//pessoa.nome = 'Arthur'
//pessoa.cidade = 'Floripa'

//console.log(pessoa)


//const novaPessoa = pessoa

//console.log(novaPessoa)


//PASSAGEM POR REFERENCIA
function alteraPessoa (novaPessoa) {
    novaPessoa.nome = 'Lindoval'
    novaPessoa.cidade = 'Vitória'
    
}


console.log(alteraPessoa(pessoa))



//ALTERANDO VALORES DE JSON DE FORMA PURA (USANDO APENAS OS PARAMETROS PASSADOS)
function alteraPessoa (pessoa) {
    //O {...pessoa} PEGA OS VALORES DO JSON PASSADO NA CONST "PESSOA"
    const novaPessoa = {...pessoa}
    novaPessoa.nome = 'Lindoval'
    novaPessoa.cidade = 'Vitória'
    return novaPessoa
    
}


console.log(alteraPessoa(pessoa))

//let a = 5
//let b = a

//for(let i = 0; b = a; b++) {
    //b++
//}
//console.log(b)


