/*const notas = [5.7, 7.6, 6.7, 5.7, 7.0, 7.8, 9.0 ]


const somar = (a, b) => a + b
const dividir = (a, b) => a / b


const media = dividir(notas.reduce(somar), notas.length)

console.log(media)*/


const alunos = [
    {nome: 'Ana', nota: 8.0,},
    {nome: 'Arthur', nota: 5.0},
    {nome: 'Caio', nota: 6.0},
]

function run(alunos) {
    const aprovados = []
    console.log(alunos.length)
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota <= 7)
        return aprovados.push(alunos[i])
    }
    return 'Nenhum aluno aprovado'
}

console.log(run(alunos))