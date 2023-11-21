import { Box } from '@chakra-ui/react'
import { CartActions } from 'components'
import { FC } from 'react'
import { ICartItem } from 'types'
import { formatToCurrency } from 'utils/format-to-currency'
import styles from './CartItem.module.scss'

export const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<Box className={styles.item}>
			<img
				className={styles.img}
				src={`http://localhost:4200${item.product.images[0]}`}
				alt={item.product.name}
			/>

			<Box>
				<Box className={styles.name}>{item.product.name}</Box>
				<Box className={styles.price}>
					{formatToCurrency(item.product.price)}
				</Box>
				<Box className={styles.variation}>{item.size}</Box>
				<CartActions item={item} />
			</Box>
		</Box>
	)
}
