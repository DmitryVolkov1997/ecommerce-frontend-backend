import { useQuery } from '@tanstack/react-query'
import productService from 'services/product-service'

export const useSearch = (searchTerm: string) => {
	return useQuery({
		queryKey: ['search', searchTerm],
		queryFn() {
			return productService.bySearchTerm(searchTerm)
		},
		select(data) {
			return data.data
		},
		enabled: !!searchTerm,
	})
}
