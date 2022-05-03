function executar (fn, ...params) {
   return  fn(...params)
}


function somar(a, b, c) {
    return a + b + c
}

function multi(a, b) {
    return a * b
}


const r1 = executar(somar, 4, 7, 8)
const r2 = executar(multi, 4, 7)
console.log(r1, r2)
