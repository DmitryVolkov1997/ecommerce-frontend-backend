import { Box } from '@chakra-ui/react'
import { AddToCartButton, ProductRating, SizeVariations } from 'components'
import { FC, useState } from 'react'
import { IProductDetails, TypeSize } from 'types'
import styles from './ProductVariations.module.scss'

type ProductVariations = IProductDetails

export const ProductVariations: FC<ProductVariations> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	return (
		<Box className={styles.variations}>
			<ProductRating product={product} />

			<SizeVariations
				productId={product.id}
				variant='medium'
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
			/>

			<AddToCartButton
				product={product}
				selectedSize={selectedSize}
				variant='medium'
			/>
		</Box>
	)
}
