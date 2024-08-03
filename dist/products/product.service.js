"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateStock = exports.addProduct = exports.products = void 0;
exports.products = [];
const addProduct = (productData) => {
    exports.products.push(productData);
};
exports.addProduct = addProduct;
const calculateStock = () => {
    let total = 0;
    exports.products.forEach((item) => {
        total += item.stock;
    });
    return total;
};
exports.calculateStock = calculateStock;
