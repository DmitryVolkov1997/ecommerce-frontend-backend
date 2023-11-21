import {Box} from '@chakra-ui/react'
import {FC} from 'react'
import {IProduct} from 'types'
import styles from './Carousel.module.scss'
import { CarouselItem } from 'components'

interface ICarousel {
    products: IProduct[]
}

export const Carousel: FC<ICarousel> = ({products}) => {
    return (
        <Box className={styles.carousel}>
            {products.map((product, idx) => (
                <CarouselItem key={product.id} product={product} index={idx}/>
            ))}
        </Box>
    )
}

