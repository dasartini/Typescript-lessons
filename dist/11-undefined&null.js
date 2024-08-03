"use strict";
(() => {
    let myNull = null;
    let myUndefined = undefined;
    let myNumner = null;
    myNumner = 2;
    myNumner = null;
    let myString = undefined;
    myString = 'Alonso';
    function myFunction(name) {
        let greet = "Hello ";
        greet += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'nobody';
        console.log(greet);
    }
    myFunction('Nico');
    myFunction(null);
})();
