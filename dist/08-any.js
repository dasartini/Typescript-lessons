"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 100;
    myDynamicVar = 'hello';
    myDynamicVar = true;
    myDynamicVar = "Adrian";
    const transform = myDynamicVar.toLowerCase;
    console.log(transform);
    myDynamicVar = 123;
    const rta = myDynamicVar.toFixed;
    console.log(rta);
})();
