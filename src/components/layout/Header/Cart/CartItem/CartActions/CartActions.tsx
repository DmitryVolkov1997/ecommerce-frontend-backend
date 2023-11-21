import {AddIcon, MinusIcon} from '@chakra-ui/icons'
import {Box, Button, HStack, Input} from '@chakra-ui/react'
import {changeQuantity, removeFromCart} from 'features/cart/cart-slice'
import {FC} from 'react'
import {useAppDispatch} from 'store'
import {ICartItem} from 'types'

interface ICartActions {
    item: ICartItem
}

export const CartActions: FC<ICartActions> = ({item}) => {
    const dispatch = useAppDispatch()

    return (
        <Box>
            <HStack className="mt-3">
                <Button
                    onClick={() =>
                        dispatch(changeQuantity({id: item.id, type: 'decrement'}))
                    }
                >
                    <MinusIcon fontSize={13}/>
                </Button>
                <Input focusBorderColor="green.400" readOnly value={item.quantity}/>
                <Button
                    onClick={() =>
                        dispatch(changeQuantity({id: item.id, type: 'increment'}))
                    }
                >
                    <AddIcon fontSize={13}/>
                </Button>
            </HStack>

            <Button
                variant="unstyled"
                color="#FF4A55"
                marginTop={2}
                size={'sm'}
                opacity={0.8}
                onClick={() => dispatch(removeFromCart({id: item.id}))}
            >
                Remove
            </Button>
        </Box>
    )
}

