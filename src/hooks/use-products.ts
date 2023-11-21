import { useQuery } from '@tanstack/react-query'
import productService from 'services/product-service'
import { SortType } from 'types/sort.type'

export const useProducts = (sortType: SortType) => {
	return useQuery({
		queryKey: ['products', sortType],
		queryFn() {
			return productService.getProducts(sortType)
		},
		select(data) {
			return data.data
		},
	})
}
