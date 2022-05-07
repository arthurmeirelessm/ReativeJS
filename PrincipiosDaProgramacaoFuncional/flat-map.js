const letras1 = [
    'O', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o', '!', '!', '!'
]


const resultado = letras1
    .map(el => el.toUpperCase())
        .reduce((a, b) => a + b)


//console.log(resultado)




//-----------------------------------------------------------------------------------------------------

const letras2 = [
    ['O', ['l'], 'a'], [' '], ['m', ['u', ['n']], 'd', 'o'], ['!', '!', '!']
]


const resultado2 = letras2
    .map(el => el.toUpperCase())
        .reduce((a, b) => a + b)




const letrasAninhadas = letras2.flat(Infinity)
console.log(letrasAninhadas)