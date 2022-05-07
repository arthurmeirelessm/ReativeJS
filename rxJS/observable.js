const { resolve } = require('path')
const { observable, Observable } = require('rxjs')


const promise = new Promise (resolve => {
    resolve('Promise chamando!!!!!!')
})



promise.then(console.log)


const obs = new Observable(subscriber => {
    subscriber.next('Observer na veia!!!!!')
})



obs.subscribe(console.log)