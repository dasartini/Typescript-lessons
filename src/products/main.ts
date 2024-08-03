import { addProduct, calculateStock, products } from "./product.service";


addProduct({
    product: "Skincare cream",
    createdAt: new Date(),
    stock : 100
})
addProduct({
    product: "Free Venezuela shirt",
    createdAt: new Date(),
    stock : 100,
    size: 'XL'
})
console.log(products)

const totalStock = calculateStock()

console.log(totalStock)

