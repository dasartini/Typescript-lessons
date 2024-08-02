(()=>{

let isEnabled = true;
//  isEnabled = 'heelo'
//  isEnabled = 123
 
let isNew : boolean = false;
console.log("is it new?", isNew)
isNew = false

console.log("is it new now?", isNew)

const randomNumber = Math.random();
console.log(randomNumber)

isNew = randomNumber >= 0.5? true : false
console.log(isNew)

})();