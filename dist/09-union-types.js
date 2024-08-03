"use strict";
(() => {
    let userId;
    userId = 1;
    userId = 'adrian';
    function greeting(myText) {
        if (typeof myText === 'string') {
            myText.toUpperCase;
            console.log(myText);
        }
        else {
            myText.toFixed();
            console.log(myText);
        }
    }
    greeting('adrian');
    greeting(12.21);
})();
