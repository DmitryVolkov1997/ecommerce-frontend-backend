import { RootState } from 'store'

export const selectAllProducts = (state: RootState) => state.cart.items
