import { Products, Sizes } from "./product.model"

export let products : Products[] = []

export   const addProduct = (productData: Products )=>{

        products.push(productData)

    }


export const calculateStock = (): number =>{

    let total = 0
    products.forEach((item)=>{
        total += item.stock
    })
    return total
} 