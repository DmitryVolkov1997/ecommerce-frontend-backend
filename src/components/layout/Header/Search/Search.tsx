import { Input } from '@chakra-ui/react'
import cn from 'classnames'
import { setSearch } from 'features'
import { DetailedHTMLProps, FC, FormEvent, HTMLAttributes } from 'react'
import { VscSearch } from 'react-icons/vsc'
import { useAppDispatch } from 'store.ts'
import styles from './Search.module.scss'

type ISearch = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Search: FC<ISearch> = ({ className }) => {
	const dispatch = useAppDispatch()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const search = e.currentTarget.search.value.trim()

		dispatch(setSearch(search))
	}

	return (
		<form onSubmit={handleSubmit} className={cn(styles.search, className)}>
			<Input name='search' type='text' placeholder='search' variant='flushed' />

			<VscSearch className={styles.icon} size={23} color='lightgray' />
		</form>
	)
}
