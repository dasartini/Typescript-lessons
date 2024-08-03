"use strict";
(() => {
    let userId;
    let shirtSize;
    shirtSize = 'S';
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    function greeting(userId, size) {
        if (typeof userId === 'string') {
            userId.toUpperCase;
            console.log(`${userId} ordered a shirt of size ${size}`);
        }
    }
    greeting('Adrian', 'L');
})();
