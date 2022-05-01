function gerarNumeros (min,max, numerosJaSorteados) {
    if (min > max) {
         [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
         const fator = max - min + 1
         const aleatorio = parseInt(Math.random() * fator) + min
         if(numerosJaSorteados.includes(aleatorio)) {
             reject('Numero já foi sorteado')
         }else {
            resolve(aleatorio)
         }
    })
 }

async function gerarMegaSena(qtddeNumeros, tentativas = 4) {
    try {
    const numeros = []
    const arrayMegaSena = Array(qtddeNumeros).fill()
    for(let _ of arrayMegaSena) {
         numeros.push(await gerarNumeros(1, 100, numeros))
    }
    return numeros
   } catch(e) {
       if (tentativas > 4) {
       throw 'Que chato!!'
       } else {
           gerarMegaSena(qtddeNumeros, tentativas + 1)
       }
   }
}



gerarMegaSena(40)
.then(console.log)
.catch(console.log)



//gerarNumeros(1, 4,[1,3,2] )
//.then(console.log)
//.catch(console.log)