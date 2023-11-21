import { Box, Heading } from '@chakra-ui/react'
import cn from 'classnames'
import { AddToCartButton, CarouselNavigation, SizeVariations } from 'components'
import { selectSlide } from 'features/carousel/carousel-slice.ts'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState, useAppDispatch } from 'store.ts'
import { TypeSize } from 'types'
import styles from './CarouselItem.module.scss'
import { ICarouselItem } from './carousel.interface.ts'

export const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const dispatch = useAppDispatch()
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')
	const { selectedItemIndex } = useSelector(
		(state: RootState) => state.carousel
	)
	const isActive = index === selectedItemIndex

	return (
		<Box
			className={cn(styles.item, {
				[styles.active]: isActive,
			})}
			style={{ textAlign: 'left' }}
			aria-label='Select-item'
			role='button'
			as={motion.div}
			initial={{ scale: 1 }}
			animate={isActive ? { scale: 1.03 } : {}}
			transition='0.5s linear'
		>
			<Box>
				<CarouselNavigation
					product={product}
					isActive={isActive}
					index={index}
				/>

				<Heading
					className={styles.heading}
					onClick={() => dispatch(selectSlide(index))}
				>
					{product.name.length > 30
						? `${product.name.slice(0, 30)}...`
						: product.name}
				</Heading>

				{isActive ? (
					<>
						<SizeVariations
							productId={product.id}
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<Box className='w-full flex flex-col items-center'>
							<Link className={styles.link} to={`/product/${product.slug}`}>
								More information
							</Link>

							<AddToCartButton product={product} selectedSize={selectedSize} />
						</Box>
					</>
				) : (
					<Box className={styles.description}>
						{product.description.length > 30
							? `${product.description.slice(0, 100)}...`
							: product.description}
					</Box>
				)}
			</Box>
		</Box>
	)
}
