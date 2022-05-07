const { Observable, subscribeOn } = require('rxjs')



const obs = new Observable(subscriber => {
    subscriber.next('Rxjs')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('podederoso@!!!!!!!')

    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Que problema foi esse!!!????')
    }
})



//obs.subscribe(
   // valor => console.log(`Valor: ${valor}`),
    //erro => console.log(`Valor: ${erro}`),
    //() => console.log('Fim!!!')
//)


obs.subscribe
    ({
        next(valor) {
            console.log(`Valor: ${valor}`)
        },
        complete(valor) {
            console.log('Fim!!!')
        },
        error(erro) {
            console.log(`Erro: ${erro}`)
        },

    })