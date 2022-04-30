class Product {
    constructor(name, price, desc = 0.5) {
         this.name = name
         this.price = price
         this._desc = desc
    }

    finalPrice() {

        return this.price * (1 - this._desc)
    }
        
}


Product.prototype.log = function() {
    console.log(`Name: ${this.name} Price: R$ ${this.price}`   )
}


Object.defineProperty(Product.prototype, 'desc', {
    get: function() {
        return this._desc
    },
    set: function(newDesc) {
        if (newDesc > this._desc && newDesc <= 1) {
            this._desc = newDesc
        }
 }
})

Object.defineProperty(Product.prototype, 'descString', {
    get: function() {
        return `${this._desc * 100}% de desconto`
    }
    
})




const p1 = new Product('Pen', 12000)
console.log(p1.name)
p1.log()


const p2 = new Product('Pen', 12000)

console.log(p2.finalPrice())
console.log(p2.desc)
console.log(p2.descString)
p2.desc = 0.9
console.log(p2.desc)