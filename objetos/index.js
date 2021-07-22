// const objectA = {
//     keyA: 'A'
// };

// const objectB = {
//     keyB: 'B'
// }

// Object.setPrototypeOf(objectB, objectA)

// console.log(objectB.keyA)

// function Produto (name, price){
//     this.name = name
//     this.price = price
// }

// Produto.prototype.discount = function (percent) {
//     this.price = this.price - (this.price * (percent/100))
// }

// Produto.prototype.extra = function(percent) {
//     this.price = this.price + (this.price * (percent/100))
// }

// const product_1 = new Produto('Camisa', 59.00)
// console.log(product_1)
// product_1.discount(25)
// console.log(product_1)

function Produto (name, price){
    this.name = name
    this.price = price
}

Produto.prototype.discount = function (percent) {
    this.price = this.price - (this.price * (percent/100))
}

Produto.prototype.extra = function(percent) {
    this.price = this.price + (this.price * (percent/100))
}


function Shirt(name, price, color){
    Produto.call(this, name, price)
    this.color = color
}

Shirt.prototype = Object.create(Produto.prototype)
Shirt.prototype.constructor = Shirt


function Mug(name, price, material){
    Produto.call(this, price, name)
    this.material = material
}

Mug.prototype = Object.create(Produto.prototype)
Mug.prototype.constructor = Mug



const shirt1 = new Shirt('manga longa', 50.50, 'preta')
shirt1.discount(15)
console.log(shirt1)


const mug1 = new Mug('Tea', 57, 'plastic')
mug1.discount(15)
console.log(mug1)