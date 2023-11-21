import { useSelector } from 'react-redux'
import { selectAllProducts } from './cart-selectors'

export const useCart = () => {
	const items = useSelector(selectAllProducts)

	const total = items.reduce((acc, val) => {
		return acc + val.product.price * val.quantity
	}, 0)

	return { cart: items, total }
}
