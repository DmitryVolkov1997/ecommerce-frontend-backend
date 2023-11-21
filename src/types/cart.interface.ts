import {IProduct, TypeSize} from 'types'

export interface ICartItem {
    id: number
    product: IProduct
    quantity: number
    size: TypeSize
}
