/*const nums = [5, 5, 5 ,7, 7, 9, 3, 56, 67, 87, 23]


const filt = item => item >= 7


console.log(nums.filter(filt))*/


const cart = [
    
    {name: 'pen', qtd: 6, price: 7.89},
     {name: 'printer', qtd: 4, price: 4.89},
     {name: 'notebook', qtd: 40, price: 3.59},
     {name: 'pencil', qtd: 7, price: 6.34},
     {name: 'scissors', qtd: 8, price: 18.89},
 
]

const getName = elem => elem.nome
const quantityGreaterThanZero = elem => elem.qtd < 10
const nameForItens = cart.filter(quantityGreaterThanZero).map(getName)


console.log(nameForItens)
 