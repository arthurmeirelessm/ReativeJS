const { from, Observable, observable, pipe } = require('rxjs')




function createPipeableOperator(nextFn) {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(v) {
                   nextFn(subscriber, v)
                }
            })
        })
    }
}

function primeiro() {
    return createPipeableOperator(subscriber => {
      subscriber.next(v)
      subscriber.complete()
    })
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
    //.pipe(nenhum())
    .pipe(primeiro())

    .subscribe(console.log)