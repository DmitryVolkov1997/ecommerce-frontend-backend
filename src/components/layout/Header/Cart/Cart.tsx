import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    useDisclosure,
} from '@chakra-ui/react'
import cn from 'classnames'
import {useCart} from 'features/cart/use-products'
import {DetailedHTMLProps, FC, HTMLAttributes, useRef} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {formatToCurrency} from 'utils/format-to-currency'
import styles from './Cart.module.scss'
import {CartItem} from 'components'
import {Link} from "react-router-dom"

type ICart = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Cart: FC<ICart> = ({className}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef<HTMLButtonElement | null>(null)
    const {cart, total} = useCart()

    return (
        <Box className={cn(styles['wrapper-cart'], className)}>
            <Button className={styles.heading} onClick={onOpen}>
                {cart.length ? (
                    <Box className={styles.badge} as="span">
                        {cart.length}
                    </Box>
                ) : null}

                <Box className={styles.text} as="span">
                    MY BASKET
                </Box>
            </Button>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>My basket</DrawerHeader>

                    <DrawerBody className={styles.cart}>
                        {cart.length ? (
                            cart.map(cart => <CartItem key={cart.id} item={cart}/>)
                        ) : (
                            <Box className="flex flex-col items-center">
                                <Heading as="h3" fontSize="2xl" textAlign="center" my={3}>
                                    Basket is empty!
                                </Heading>
                                <AiOutlineShoppingCart size="60"/>
                            </Box>
                        )}
                    </DrawerBody>

                    <DrawerFooter
                        className="border-t"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box className={styles.footer}>
                            <Box>Total:</Box>
                            <Box>{formatToCurrency(total)}</Box>
                        </Box>
                        <Link to="/checkout">
                            <Button colorScheme="blue">
                                Checkout
                            </Button>
                        </Link>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}
