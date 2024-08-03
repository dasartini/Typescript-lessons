"use strict";
(() => {
    function createProductToJson(title, createdAt, stock, size) {
        return {
            title,
            createdAt,
            stock,
            size
        };
    }
    const product1 = createProductToJson('Monster energy tee', new Date(), 12, 'M');
    console.log(product1);
    const createProductToJson2 = (title, createdAt, stock, size) => {
        return {
            title,
            createdAt,
            stock,
            size
        };
    };
    const product2 = createProductToJson2('Fritolay chips', new Date(), 100);
    console.log(product2);
})();
