import {FC, useState} from "react"
import {Box} from "@chakra-ui/react"
import styles from './ProductCard.module.scss'
import {ProductImage, ProductInfo, ProductVariations} from "components"
import {IProductDetails} from "types"

type ProductCard = IProductDetails

export const ProductCard: FC<ProductCard> = ({product}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    return (
        <Box className={styles.card}>
            <ProductInfo
                product={product}
                setCurrentImageIndex={setCurrentImageIndex}
                currentImageIndex={currentImageIndex}
            />
            <ProductImage
                product={product}
                currentImageIndex={currentImageIndex}
            />
            <ProductVariations product={product}/>
        </Box>
    )
}


