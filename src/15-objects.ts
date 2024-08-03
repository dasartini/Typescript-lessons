(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL'
    type Products = {
        product: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }
let products : Products[] = []

    const addProduct = (productData: Products )=>{

        products.push(productData)

    }

    addProduct({
        product: "Skincare cream",
        createdAt: new Date(),
        stock : 100
    })
    addProduct({
        product: "Free Venezuela shirt",
        createdAt: new Date(),
        stock : 100,
        size: 'XL'
    })

    console.log(products)

})()