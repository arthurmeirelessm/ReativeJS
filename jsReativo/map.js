const numbers = [1, 4, 9];
const multiply = num => num * 2  
const doubles = numbers.map(multiply);

console.log(doubles)

const nums = [1, 2, 3, 4, 5, 6]

const dobro = (num, i, a) => num * 2 + i + a.length

console.log(nums.map(dobro))


const names = ['Ana', 'Fabio', 'Jorge', 'Mateus', 'Josh', 'Fich']

const firstLetter = nome => nome[0]

console.log(names.map(firstLetter))



const cart = [
    
       {name: 'pen', qtd: 10, price: 7.89},
        {name: 'printer', qtd: 10, price: 4.89},
        {name: 'notebook', qtd: 10, price: 3.59},
        {name: 'pencil', qtd: 10, price: 6.34},
        {name: 'scissors', qtd: 10, price: 18.89},
    
]

const nameOfProduct = (cart) => cart.name

const multiplyOfProduct = (cart) => cart.qtd * cart.price 

console.log(cart.map(nameOfProduct))
console.log(cart.map(multiplyOfProduct))
