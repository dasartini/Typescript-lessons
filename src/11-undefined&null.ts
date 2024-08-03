(()=>{
  
let myNull : null = null;
let myUndefined : undefined = undefined

let myNumner : null | number = null
myNumner = 2
myNumner = null

let myString : string | undefined = undefined

myString = 'Alonso'
type Name = string |null

function myFunction( name : Name){
    let greet = "Hello "
   greet += name?.toLowerCase() || 'nobody'
   console.log(greet)
}

myFunction('Nico')
myFunction(null)

})()