import {FC} from "react"
import {Box, Heading} from "@chakra-ui/react"
import styles from './CheckoutSummary.module.scss'
import {useCart} from "features/cart/use-products.ts"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {formatToCurrency} from "utils/format-to-currency.ts"
import {CartItem} from "components"

interface CheckoutSummary {
}

export const CheckoutSummary: FC<CheckoutSummary> = () => {
    const {cart, total} = useCart()

    return (
        <Box className={styles.summary}>
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

            {cart.length ? (
                <Heading className={styles.total}>
                    Total: {formatToCurrency(total)}
                </Heading>
            ) : null}
        </Box>
    )
}


