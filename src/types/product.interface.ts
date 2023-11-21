import {IReview} from "types"

export interface IProduct {
    id: number
    name: string
    slug: string
    description: string
    price: number
    /*TODO*/
    reviews: IReview[]
    size: number
    images: string[]
    date: Date
}

export interface IProductDetails {
    product: IProduct
}