import { Box, Spinner } from '@chakra-ui/react'
import {
	Catalog,
	Heading,
	ProductBreadcrumbs,
	ProductCard,
	ProductNavigation,
} from 'components'
import { useRelatives } from 'hooks/use-relatives'
import { FC } from 'react'
import { IProductDetails } from 'types'
import styles from './ProductDetails.module.scss'

export const ProductDetails: FC<IProductDetails> = ({ product }) => {
	const { data: products, isSuccess, isLoading } = useRelatives(product.id)

	return (
		<Box className={styles.details}>
			<Box className='flex items-center justify-between'>
				{product && <ProductBreadcrumbs product={product} />}
				<Box className='flex justify-end'>
					<Heading className='text-center'>Product Details</Heading>
				</Box>

				{product && <ProductNavigation productId={product.id} />}
			</Box>

			<ProductCard product={product} />

			{isLoading && <Spinner />}
			{isSuccess && <Catalog products={products} isSorting={false} />}
		</Box>
	)
}
