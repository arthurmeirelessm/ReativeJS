const nums = [3, 7, 4, 5, 4, 5, 4, 4, 3]


let total = 0


//for (let i = 0; i < nums.length; i++) {
    //total += nums[i]
    
//}


const soma = (a, b) => a + b
const result = nums.reduce(soma)
console.log(result)