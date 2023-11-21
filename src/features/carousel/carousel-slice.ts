import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProduct} from "types"
import {EnumSorting} from "../../components/ui/Catalog/Sorting/sorting.interface.ts"

interface CarouselSlice {
    selectedItemIndex: number
    items: IProduct[]
    search: string
    sortType: EnumSorting
}

const initialState: CarouselSlice = {
    selectedItemIndex: 1,
    items: [],
    search: '',
    sortType: EnumSorting.NEWEST
}

const CarouselSlice = createSlice({
    name: '@carousel',
    initialState,
    reducers: {
        nextSlide: (state, action: PayloadAction<{
            carouselLength: number
        }>) => {
            const {selectedItemIndex} = state

            if (selectedItemIndex !== action.payload.carouselLength - 1) {
                state.selectedItemIndex += 1
            }
        },
        prevSlide: state => {
            if (state.selectedItemIndex > 0) {
                state.selectedItemIndex -= 1
            }
        },
        selectSlide: (state, action: PayloadAction<number>) => {
            state.selectedItemIndex = action.payload
        },
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.items = action.payload
        },
        setSortType: (state, action: PayloadAction<EnumSorting>) => {
            state.sortType = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        }
    },
})

export const {nextSlide, prevSlide, selectSlide, setProducts, setSortType, setSearch} = CarouselSlice.actions
export default CarouselSlice.reducer
