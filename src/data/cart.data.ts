import { ICartItem } from 'types'
import { products } from './product.data'

export const cart: ICartItem[] = [
	{
		id: 1,
		quantity: 1,
		product: products[0],
		size:'SHORT',
	},
	{
		id: 2,
		quantity: 2,
		product: products[1],
		size:'TALL',
	},
]
