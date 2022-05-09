const { from, Observable, observable, pipe } = require('rxjs')


function primeiro() {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(v) {
                    subscriber.next(1)
                    subscriber.complete()
                }
            })
        })
    }
}


function ultimo() {
    return function (source) {
        return new Observable(subscriber => {
            let ultimo
            source.subscribe({
                next(v) {
                    ultimo = v
                },
                complete() {
                    if (ultimo !== undefined) {
                        subscriber.next(ultimo)
                    }
                    subscriber.complete()
                }

            })
        })
    }
}


function nenhum() {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(v) {

                    subscriber.complete()
                }
            })
        })
    }
}



from([2, 5, 3, 4, 6, 5, 6])
    .pipe(nenhum()).pipe(ultimo())
    
    .subscribe(console.log)