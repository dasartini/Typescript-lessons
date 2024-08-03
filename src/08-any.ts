(()=>{

let myDynamicVar : any ;
myDynamicVar = 100
myDynamicVar = 'hello'
myDynamicVar = true 

myDynamicVar= "Adrian"
const transform = ( myDynamicVar as string).toLowerCase
console.log(transform)

myDynamicVar = 123

const rta = (<number>myDynamicVar).toFixed

console.log(rta)



})()