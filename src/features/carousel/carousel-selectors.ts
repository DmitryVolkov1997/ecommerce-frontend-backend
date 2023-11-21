import {RootState} from "store.ts"
import {EnumSorting} from "../../components/ui/Catalog/Sorting/sorting.interface.ts"

export const visibleAllProducts = ((state: RootState, {sortType, search}: { search: string, sortType: EnumSorting }) => {
        const itemsCopy = [...state.carousel.items];

        switch (sortType) {
            case EnumSorting.HIGH_TO_LOW_PRICE:
                return itemsCopy.filter(product => product.name.trim().toLowerCase().includes(search.trim().toLowerCase())).sort((a, b) => b.price - a.price)
            case EnumSorting.LOW_TO_HIGH_PRICE:
                return itemsCopy.filter(product => product.name.trim().toLowerCase().includes(search.trim().toLowerCase())).sort((a, b) => a.price - b.price)
            case EnumSorting.NEWEST:
                return itemsCopy.filter(product => product.name.trim().toLowerCase().includes(search.trim().toLowerCase())).sort((a, b) => {
                    const dateA = new Date(a.date)
                    const dateB = new Date(b.date)
                    // Сравниваем только год, месяц и день
                    if (dateA.getFullYear() !== dateB.getFullYear()) {
                        return dateB.getFullYear() - dateA.getFullYear()
                    }
                    if (dateA.getMonth() !== dateB.getMonth()) {
                        return dateB.getMonth() - dateA.getMonth()
                    }
                    return dateB.getDate() - dateA.getDate()
                })
            case EnumSorting.OLDEST:
                return itemsCopy.filter(product => product.name.trim().toLowerCase().includes(search.trim().toLowerCase())).sort((a, b) => {
                    const dateA = new Date(a.date)
                    const dateB = new Date(b.date)

                    if (dateA.getFullYear() !== dateB.getFullYear()) {
                        return dateA.getFullYear() - dateB.getFullYear()
                    }

                    if (dateA.getMonth() !== dateB.getMonth()) {
                        return dateA.getMonth() - dateB.getMonth()
                    }

                    return dateA.getDate() - dateB.getDate()
                })
            default:
                return state.carousel.items
        }
    }
)