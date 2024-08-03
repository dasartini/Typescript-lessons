"use strict";
(() => {
    const login = (data) => {
        console.log(data);
    };
    login({
        email: "example@gmail.com",
        password: "secretpassword"
    });
    let products = [];
    const addProduct = (productData) => {
        products.push(productData);
    };
    addProduct({
        product: "Polish dictionary",
        createdAt: new Date(),
        stock: 100
    });
    addProduct({
        product: "Venezuelan flag",
        createdAt: new Date(),
        stock: 100,
        size: 'XL'
    });
    console.log(products);
})();
