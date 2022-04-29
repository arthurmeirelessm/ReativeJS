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


Object.defineProperties(Product.prototype, 'desc', {
    get: function() {
        return this._desc
    }
})

Object.defineProperties(Product.prototype, 'descString', {
    get: function() {
        return `${this._desc * 100}%`
    }
})




const p1 = new Product('Pen', 12000)
console.log(p1.name)
p1.log()
console.log(p2.desc)
console.log(p2.descString)
