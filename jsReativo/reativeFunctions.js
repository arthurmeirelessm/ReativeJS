// Testing for Reative type of functions in JS
// The idea is to test functions inside other functions


const goodMorning = function( ) {
     console.log('good Morning!')
}

 
const goodAfternoon = function() {
     console.log('good Afternoon!')
}


function runAnything(fn) {
    if (typeof fn == 'function')
    fn()
}

runAnything(4)
runAnything(goodMorning)
runAnything(goodAfternoon)



function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}


const potencia2 = potencia()


console.log(potencia(3)(4))





function calcular (a) {
   return function (b) {
           return function (fn) {
               return fn(a ,b)
           }
       }
   }



function add(a, b)  {
    return a + b
}
function multiply(a , b)  {
  return a * b 
}


function subtract(a , b)  {
return a - b 
}



 const r1 = calcular(4)(3)(multiply)


console.log(r1)




//Arrow functions
const nu1 = 246


const fin = () => nu1 == 2 ? console.log('oioioi') : console.log('svfvdefvd')


fin(nu1)

 
const add = (array) => {
    let total = 0
    for(let n of array) {
    total += n
    }
    return total
}

const arr = [3, 6, 6 ,7 ,7, 2]

console.log(add(arr))