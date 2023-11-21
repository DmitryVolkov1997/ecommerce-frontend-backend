import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'
import cn from 'classnames'
import { products } from 'data/product.data'
import {
	nextSlide,
	prevSlide,
	selectSlide,
} from 'features/carousel/carousel-slice'
import { FC } from 'react'
import { useAppDispatch } from 'store'
import { ICarouselItem } from '../carousel.interface'
import styles from './CarouselNavigation.module.scss'

interface ICarouselNavigation extends Omit<ICarouselItem, 'index'> {
	isActive: boolean
	index: number
}

export const CarouselNavigation: FC<ICarouselNavigation> = ({
	product,
	isActive,
	index,
}) => {
	const dispatch = useAppDispatch()

	return (
		<Box className={styles.navigation}>
			{isActive && (
				<Box className={styles['navigation__btn']}>
					<Button
						onClick={() => dispatch(prevSlide())}
						className={cn(styles.arrow, styles['arrow-left'])}
					>
						<ChevronLeftIcon fontSize={80} color='white' />
					</Button>
					<Button
						onClick={() =>
							dispatch(nextSlide({ carouselLength: products.length }))
						}
						className={cn(styles.arrow, styles['arrow-right'])}
					>
						<ChevronRightIcon fontSize={80} color='white' />
					</Button>
				</Box>
			)}

			<img
				className={styles.image}
				src={`http://localhost:4200${product.images[0]}`}
				alt={product.name}
				onClick={() => dispatch(selectSlide(index))}
			/>
		</Box>
	)
}
