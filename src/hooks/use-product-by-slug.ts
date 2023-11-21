import { useQuery } from '@tanstack/react-query'
import productService from 'services/product-service'

export const useProductBySlug = (slug: string = '') => {
	return useQuery({
		queryKey: ['product', slug],
		queryFn() {
			return productService.getProductBySlug(slug)
		},
		select(data) {
			return data.data
		},
		enabled: !!slug,
	})
}
