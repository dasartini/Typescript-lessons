(() => {

    type UserId = string | number |boolean
 
    let userId: UserId;
   
//Literal types

type Sizes = 'S' | 'M' | 'L' | 'XL' 
let shirtSize : Sizes ;

shirtSize = 'S'
shirtSize = 'M'
shirtSize = 'L'
shirtSize = 'XL'

function greeting(userId :UserId, size : Sizes) {
    if (typeof userId === 'string') {
        userId.toUpperCase
        console.log(`${userId} ordered a shirt of size ${size}`)
    }

}
greeting('Adrian', 'L')

})()