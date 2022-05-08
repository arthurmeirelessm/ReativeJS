const { Observable } = require('rxjs')


function elementosComDelay(tempo, ...elementos) {
    return Observable.create(subscriber => {
        (elementos || []).forEach((el, i) => {
            setTimeout(() => {
                subscriber.next(el)
                if (elementos.length === i + 1) {
                    subscriber.complete()
                }
            }, tempo * (i + 1))
        })
    })
}


elementosComDelay(1000, [4, 5, 6, 7, 8, 5, 4, 3])
    .subscribe(console.log)