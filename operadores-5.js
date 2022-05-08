const { of, Observable, observable } = require('rxjs')



function terminadoCom(parteFinal) {
    return function (fonte) {
        return new Observable(subscriber => {
               fonte.subscribe({
                   next(valor) {
                       //Aqui em baixo o array.isArray valida se os nomes passados estão dentro de um array
                       if (Array.isArray(valor)) {
                         subscriber.next(
                             valor.filter(el => el.endsWith(parteFinal))
                         ) 
                       }
                      else if (valor.endsWith(parteFinal)) {
                          subscriber.next(valor)
                      }
                   },
                   error(e) {
                       subscriber.error(e)
                   },
                   complete() {
                       subscriber.complete()
                   }
               })
        })
    }
}

of(['Ana Silva', 'Maria Josefa', 'Arthur Meireles'])
    .pipe(terminadoCom('Silva'))
    .subscribe(console.log)