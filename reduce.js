
/*const array = [4, 6, 5, 4, 3, 3]
const add = (acc, el) => acc * el

console.log(array.reduce(add))

function run() {
const cart = [
    
    {name: 'pen', qtd: 10, price: 7.89},
     {name: 'printer', qtd: 2, price: 4.89},
     {name: 'notebook', qtd: 4, price: 3.59},
     {name: 'pencil', qtd: 15, price: 6.34},
     {name: 'scissors', qtd: 7, price: 18.89},
 
]

const getTotal = item => item.qtd * item.price
const adddddd = (acc, el) => acc + el
const generalTotal = cart.map(getTotal).reduce(adddddd)


return generalTotal

}
console.log(run())*/

const cart = [
    
     {  name: 'pen', qtd: 4, price: 7.89, fragil: true },
     {  name: 'printer', qtd: 4, price: 4.89, fragil: true },
     {  name: 'notebook', qtd: 7, price: 3.59, fragil: false },
     {  name: 'pencil', qtd: 10, price: 6.34, fragil: false },
     {  name: 'scissors', qtd: 8, price: 18.89, fragil: true },
 
]


// 1 - fragil: true
// 2 - qtd: 4, preco: 27.10
// 3 - media of totals


//const returnName = item => item.fragil == true

//console.log(cart.map(returnName))

/*const returnQtdAndPrice = item => {
     if (item.qtd == 10 && item.price == 6.34) {
          return item.name
     } 
}*/



/*const fragil = item => item.fragil
const getTotal = item => item.qtd * item.price
const getMedia = (acc, el) => {
     const newQtd = acc.qtd + 1
     const newTotal = acc.total + el 
     return {
          qtd: newQtd,
          total: newTotal,
          media: newTotal / newQtd
     }
}


const InitialMedia = { qtd: 0, total: 0, media: 0 }

const media = cart
.filter(fragil)
.map(getTotal)
.reduce(getMedia, InitialMedia).media


console.log(media)*/





const getTotal = item => item.qtd * item.price
const add = (acc, el) => acc + el

const total = cart.map(getTotal).reduce(add)

console.log(total)
