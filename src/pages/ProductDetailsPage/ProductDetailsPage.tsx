import { Spinner } from '@chakra-ui/react'
import { Header, Layout, ProductDetails } from 'components'
import { useProductBySlug } from 'hooks/use-product-by-slug'
import { useParams } from 'react-router-dom'

export const ProductDetailsPage = () => {
	const { slug } = useParams()
	const { data, isSuccess, isLoading } = useProductBySlug(slug)

	return (
		<Layout>
			<Header />
			{isLoading && <Spinner />}
			{isSuccess && <ProductDetails product={data} />}
		</Layout>
	)
}
