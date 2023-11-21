import { Box, Button, Heading, Image } from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction } from 'react'
import { IProductDetails } from 'types'
import styles from './ProductInfo.module.scss'

interface IProductInfo extends IProductDetails {
	setCurrentImageIndex: Dispatch<SetStateAction<number>>
	currentImageIndex: number
}

export const ProductInfo: FC<IProductInfo> = ({
	product,
	setCurrentImageIndex,
	currentImageIndex,
}) => {
	return (
		<Box className={styles.info}>
			<Heading className={styles.title}>{product.name}</Heading>

			<Box className={styles.description} as='p'>
				{product.description}
			</Box>

			{product.images.map((image, idx) => (
				<Button
					key={idx}
					className={styles.btn}
					background={currentImageIndex === idx ? '#008D64' : 'gray.300'}
					height={90}
					_hover={{
						background: currentImageIndex === idx ? '#008D64' : 'gray.300',
					}}
					onClick={() => setCurrentImageIndex(idx)}
					borderRadius={23}
					transitionDuration={'50'}
				>
					<Image src={`http://localhost:4200${image}`} width={70} height={70} />
				</Button>
			))}
		</Box>
	)
}
