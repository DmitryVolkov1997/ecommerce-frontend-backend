import cn from 'classnames'
import { setSortType } from 'features/carousel/carousel-slice.ts'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import Select from 'react-select'
import { useAppDispatch } from 'store.ts'
import { ISortingItem } from './sorting.interface'

interface ISorting
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLOptionElement>,
		HTMLOptionElement
	> {
	list: ISortingItem[]
}

export const Sorting: FC<ISorting> = ({ list, className }) => {
	const dispatch = useAppDispatch()

	return (
		<Select
			className={cn(className)}
			options={list}
			placeholder='Default sorting'
			onChange={val => {
				if (val) dispatch(setSortType(val.value))
			}}
			isClearable
			styles={{
				control: baseStyles => ({
					...baseStyles,
					borderColor: '#E8E7E3',
					borderWidth: '2px',
					transitionDelay: '400',
				}),
			}}
		/>
	)
}
