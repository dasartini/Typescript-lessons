"use strict";
(() => {
    const calcTotal = (price) => {
        let total = 0;
        price.forEach((element) => {
            total += element;
        });
        return total;
    };
    const answer = calcTotal([Math.random(), 99, 20]);
    console.log(answer);
    const printTotal = (prices) => {
        const answer = calcTotal(prices);
        console.log(`total is ${answer}`);
    };
    printTotal([1, 1, 90]);
})();
