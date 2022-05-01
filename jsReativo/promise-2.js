// OUTRA FORMA DE FAZER É PASSANDO UJMA FUNCTION DENTRO DO THEN, OCASIONANDO O MESMO RESULTADO

new Promise(function(resolve) {
    resolve(['Ana', 'Caio', 'Josh', 'Daniel', 'Maicon'])
})

const priElem = array => array[0]

const priLetra = string => string[0] 

const toLowerCase = string => string.toLowerCase()
    .then(priElem)
    .then(priLetra)
    .then(toLowerCase)
    .then(string => console.log(string))




    /*setTimeout(function() {
              console.log("Ola, executando promise...")
              setTimeout(function() { 
                  console.log('Execuntando callback...')
              
              setTimeout(function() { 
                console.log('Execuntando calback denovo...')
            }, 2000)
    }, 2000)
}, 2000)*/


function esperarPor(tempo = 2000) {
 return new Promise(function(resolve) {
     setTimeout(function() {
         console.log('Executando promise...')
         resolve('vihshhhhh')
     }, tempo) 
 })
}


esperarPor(3000).then(() => esperarPor()).then(esperarPor)