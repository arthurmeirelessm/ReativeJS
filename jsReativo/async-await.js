

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
   })
}




   //esperarPor(2000)
   //.then(() => console.log('Executnado promise 1...'))
   //.then(esperarPor)
   //.then(() => console.log('Executnado promise 2...'))
   //.then(esperarPor)
   //.then(() => console.log('Executnado promise 3...'))




   // RESOLVENDO O MESMO PROBLEMA COM ASYNC E AWAIT
   // A GRANDE LOGICA DO ASYNC/AWAIT É FAZER COM QUE AS FUNCTIONS QUE TEM RETRUN PROMISE NÃO RETORNAREM VALORES AO MESMO TEMPO, FAZENDO COM QUE CADA VALOR VOLTE ASINCRONO, UM DEPOIS DO OUTRO DE ACORDO COM O TEMPO ESTIMADO

      function retornarValor () {
             return new Promise(resolve => {
                 setTimeout(() => resolve(10), 5000)
             })
      }




   async function executar () {


       let valor = await retornarValor()


       await esperarPor()
       console.log(`Async/Await ${valor}...`)
       await esperarPor()
       console.log(`Async/Await ${valor + 1}...`)
       await esperarPor()
       console.log(`Async/Await ${valor + 2}...`)

       return valor + 3
   }


   executar().then(console.log)