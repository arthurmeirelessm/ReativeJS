//Sintaxe será feita em portgues no promisse

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Caio', 'Josh', 'Daniel', 'Maicon'])
})



//O "then" é usado para chamar as promises
//como no exemplo abaixo, valor de cada then é pego e printado logo depois pelo proprio then refente a um valor diferente, primeira palavra do array, depois primeira letra e assim por diante

p
    .then(valor => valor[0])
    .then(primeiro => (primeiro[0]))
    .then(letra => (letra.toLowerCase()))
    .then(letra => console.log(letra))




