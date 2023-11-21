import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ICartItem, TypeSize} from 'types'

type CartSlice = {
    items: ICartItem[]
}

type AddToCartPayloadType = Omit<ICartItem, 'id'>

interface IChangeQuantity extends Pick<ICartItem, 'id'> {
    type: 'increment' | 'decrement'
}


interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
    size: TypeSize
}

const initialState: CartSlice = {
    items: [],
}

const cartSlice = createSlice({
    name: '@cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<AddToCartPayloadType>) {
            const id = state.items.length
            const isExistSize = state.items.some(
                item =>
                    item.product.id === action.payload.product.id &&
                    item.size === action.payload.size
            )

            if (!isExistSize) {
                state.items.push({id, ...action.payload})
            }
        },

        removeFromCart(state, action: PayloadAction<Pick<ICartItem, 'id'>>) {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },

        changeQuantity(state, action: PayloadAction<IChangeQuantity>) {
            const {id, type} = action.payload
            const product = state.items.find(item => item.id === id)

            if (product) {
                if (type === 'decrement' && product.quantity > 1) {
                    product.quantity--
                } else if (type === 'increment') {
                    product.quantity++
                }
            }
        },
        changeSize(state, action: PayloadAction<IChangeSizePayload>) {
            const {id, size} = action.payload
            const item = state.items.find(item => item.id === id)

            if (item) {
                item.size = size
            }
        },
    },
})

export const {addToCart, removeFromCart, changeQuantity, changeSize} =
    cartSlice.actions
export default cartSlice.reducer
