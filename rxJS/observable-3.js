const { Observable, noop } = require('rxjs')



function entre(min, max) {
    return new Observable(subscriber => {
        for (let i = min; min <= max; i++) {
            subscriber.next(i)
        }
       // O Complete finaliza o Observable
        subscriber.complete()
    })
}


entre(3, 8)
    .subscribe(
       num => console.log(num),
       noop,
       () => console.log('Fim!!!')
    )