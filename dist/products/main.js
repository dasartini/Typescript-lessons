"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({
    product: "Skincare cream",
    createdAt: new Date(),
    stock: 100
});
(0, product_service_1.addProduct)({
    product: "Free Venezuela shirt",
    createdAt: new Date(),
    stock: 100,
    size: 'XL'
});
console.log(product_service_1.products);
const totalStock = (0, product_service_1.calculateStock)();
console.log(totalStock);
