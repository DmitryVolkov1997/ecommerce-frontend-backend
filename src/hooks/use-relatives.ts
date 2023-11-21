import { useQuery } from '@tanstack/react-query'
import productService from 'services/product-service'

export const useRelatives = (withoutId: number) => {
	return useQuery({
		queryKey: ['relatives', withoutId],
		queryFn() {
			return productService.getRelatives(withoutId)
		},
		select(data) {
			return data.data
		},
		enabled: !!withoutId,
	})
}
