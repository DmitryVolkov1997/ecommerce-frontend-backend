import { axiosClassic } from 'api/api'
import { IProduct } from 'types'
import { SortType } from 'types/sort.type'

const PRODUCTS = 'products'

export class ProductService {
	async getProducts(type?: SortType) {
		return await axiosClassic.get<IProduct[]>(PRODUCTS, {
			params: {
				sortType: type,
			},
		})
	}

	async bySearchTerm(searchTerm: string) {
		return await axiosClassic.get<IProduct[]>(`${PRODUCTS}/search/`, {
			params: {
				searchTerm,
			},
		})
	}

	async getProductById(productId: number) {
		return await axiosClassic.get(`${PRODUCTS}/${productId}`)
	}

	async getProductBySlug(slug: string) {
		return await axiosClassic.get<IProduct>(`${PRODUCTS}/slug/${slug}`)
	}

	async getRelatives(withoutId: number) {
		return await axiosClassic.get<IProduct[]>(
			`${PRODUCTS}/relatives/${withoutId}`
		)
	}
}

export default new ProductService()
