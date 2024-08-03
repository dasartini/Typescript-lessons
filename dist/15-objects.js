"use strict";
(() => {
    let products = [];
    const addProduct = (productData) => {
        products.push(productData);
    };
    addProduct({
        product: "Skincare cream",
        createdAt: new Date(),
        stock: 100
    });
    addProduct({
        product: "Free Venezuela shirt",
        createdAt: new Date(),
        stock: 100,
        size: 'XL'
    });
    console.log(products);
})();
