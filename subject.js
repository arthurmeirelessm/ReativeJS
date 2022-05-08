const { observable, Observable, Subscriber, Subject } = require('rxjs')



function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            console.log('#1 Obs...')
            subscriber.next(Math.random())
            subscriber.complete()
        }, 1000)
    })
}



const obsObservable = getObservable()


obsObservable.subscribe(console.log)
obsObservable.subscribe(console.log)

//=======================================================================================================================


function getSubject() {
    const sub = new Subject
    setTimeout(() => {
        console.log('#2 Subject...')
        sub.next(34)
        sub.complete()
    }, 1000)
    return sub
}



const obsSubject = getSubject()


obsSubject.subscribe(v => v * 2)
obsSubject.subscribe(console.log)