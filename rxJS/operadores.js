//Os dois tipos

//1. Operadores de criação
const { of } = require('rxjs')

//2.Operadores Encadéaveis (Pipeable)
const { last, map} = require('rxjs/operators')



of(1, 2, 'ana', false, 'ultimo')
    .pipe(last())
    .pipe(map(v => v[0]))
    .subscribe(function (valor) {
        console.log(`O valor gerado foi: ${valor}`)
    })

