const { from, asyncScheduler } = require('rxjs')
const { observeOn } = require('rxjs/operators')

console.log('inicio...')

from([1, 4, 5, 3, 3, 6])
    .pipe(observeOn(asyncScheduler))
    .subscribe(console.log)

console.log('Fim...')