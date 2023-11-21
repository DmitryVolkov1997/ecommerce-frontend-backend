import { Box, Spinner } from '@chakra-ui/react'
import { Catalog, Header, Heading, Layout } from 'components'
import { useProducts } from 'hooks/use-products'
import { useSearch } from 'hooks/use-search'
import { useSelector } from 'react-redux'
import { RootState } from 'store.ts'

export const HomePage = () => {
	const { sortType, search } = useSelector((state: RootState) => state.carousel)
	const { data, isLoading } = useProducts(sortType)
	const { data: searchData } = useSearch(search)

	return (
		<Layout>
			<Header />
			<Box className='w-full flex justify-end'>
				<Heading className='text-right'>The happiest hour of the year</Heading>
			</Box>

			{isLoading && (
				<div className='flex justify-center'>
					<Spinner size='xl' />
				</div>
			)}
			{search.length && searchData?.length ? (
				<Catalog products={searchData} />
			) : search.length && !searchData?.length ? (
				<h1>Ничего найдено...</h1>
			) : (
				<Catalog products={data || []} />
			)}
		</Layout>
	)
}
