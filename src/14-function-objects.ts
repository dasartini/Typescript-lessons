(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL'

    const login = (data: { email: string, password: string }) => {

        console.log(data)
    }

    login({
        email: "example@gmail.com",
        password: "secretpassword"
    })

let products : any[] = []

    const addProduct = (productData: {
        product: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    })=>{

        products.push(productData)

    }

    addProduct({
        product: "Polish dictionary",
        createdAt: new Date(),
        stock : 100
    })
    addProduct({
        product: "Venezuelan flag",
        createdAt: new Date(),
        stock : 100,
        size: 'XL'
    })

    console.log(products)

})()