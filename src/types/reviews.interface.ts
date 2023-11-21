import {IProduct} from "types"

export interface IReview {
    id: number
    product: IProduct
    text: string
    rating: number
}