import { combineReducers } from '@reduxjs/toolkit'
import carouselReducer from 'features/carousel/carousel-slice'
import cartReducer from 'features/cart/cart-slice'

const rootReducer = combineReducers({
	cart: cartReducer,
	carousel: carouselReducer,
})

export default rootReducer
