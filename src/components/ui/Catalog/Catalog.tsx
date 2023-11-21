import { Box } from '@chakra-ui/react'
import { Carousel } from 'components'
import { FC } from 'react'
import { IProduct } from 'types'
import { Sorting } from './Sorting/Sorting'
import { sortingData } from './Sorting/sorting.data'

interface ICatalog {
	products: IProduct[]
	isSorting?: boolean
}

export const Catalog: FC<ICatalog> = ({ products, isSorting = true }) => {
	return (
		<Box>
			{isSorting && (
				<Box className='flex justify-end mt-20'>
					<Sorting className='max-w-xs w-full' list={sortingData} />
				</Box>
			)}

			<Carousel products={products} />
		</Box>
	)
}
