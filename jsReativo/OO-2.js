class Product {
    constructor(name, price, desc = 0.5) {
         this.name = name
         this.price = price
         this.desc = desc
    }
    get name() {
      return `Produto: ${this._name}`    
}
   set name(newName) {
       this._name = newName.toUpperCase()
   }
   
    get price () {
        return this._price
    } 

   set price(newPrice) {
       if (newPrice >= 0) {
           this._price = newPrice
       }
   }

    get finalPrice() {

        return this.price * (1 - this.desc)
    }
        
}

const p2 = new Product('Pen', 12000)

p2.price = 23
console.log(p2.price)

console.log(p2.finalPrice)

console.log(p2.name)
