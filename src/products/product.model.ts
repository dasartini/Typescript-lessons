export type Sizes = 'S' | 'M' | 'L' | 'XL'
export type Products = {
    product: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
}

