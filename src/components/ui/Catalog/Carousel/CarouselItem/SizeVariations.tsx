import {Box, Button} from '@chakra-ui/react'
import cn from 'classnames'
import {Dispatch, FC, SetStateAction} from 'react'
import styles from './CarouselVariations.module.scss'
import {TypeSize} from "types"

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

interface ICarouselVariations {
    productId: number
    selectedSize: TypeSize
    setSelectedSize: Dispatch<SetStateAction<TypeSize>>
    variant?: 'small' | 'medium'
}

export const SizeVariations: FC<ICarouselVariations> = ({
                                                            setSelectedSize,
                                                            selectedSize,
                                                            variant = 'small'
                                                        }) => {
    return (
        <Box className={cn(styles.variations, {
            [styles.medium]: variant === 'medium'
        })}>
            {SIZES.map(size => (
                <Button
                    className={cn(styles.button, {
                        [styles.active]: selectedSize === size,
                    })}
                    key={size}
                    onClick={() => setSelectedSize(size)}
                >
                    {size}
                </Button>
            ))}
        </Box>
    )
}
