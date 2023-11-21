import {FC} from "react"
import {IProduct, TypeSize} from "types"
import {Box, Button} from "@chakra-ui/react"
import {addToCart, removeFromCart} from "features/cart/cart-slice.ts"
import {useAppDispatch} from "store.ts"
import {useCart} from "features/cart/use-products.ts"

interface AddToCartButton {
    product: IProduct
    selectedSize: TypeSize
    variant?: 'small' | 'medium'
}

export const AddToCartButton: FC<AddToCartButton> = ({product, selectedSize, variant = 'small'}) => {
    const dispatch = useAppDispatch()
    const {cart} = useCart()
    const currentElement = cart.find(
        item => item.product.id === product.id && item.size === selectedSize
    )

    const isSmall = variant === 'small'

    return (
        <Box className="text-center">
            <Button
                onClick={() =>
                    !currentElement
                        ? dispatch(
                            addToCart({
                                product,
                                quantity: 1,
                                size: selectedSize,
                            })
                        )
                        : currentElement.id !== undefined &&
                        dispatch(removeFromCart({id: currentElement.id}))
                }
                colorScheme={currentElement ? 'red' : 'green'}
                color={'white'}
                className="uppercase tracking-widest mt-6"
                rounded={20}
                fontSize={isSmall ? 12 : 15}
                py={6}
            >
                {currentElement ? (
                    'Remove from basket'
                ) : (
                    'Add to basket'
                )}
            </Button>
        </Box>
    )
}



