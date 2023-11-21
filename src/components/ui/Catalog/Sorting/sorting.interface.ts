// export enum EnumSorting {
// 	LOW_TO_HIGH_PRICE = 'LOW_TO_HIGH_PRICE',
// 	HIGH_TO_LOW_PRICE = 'HIGH_TO_LOW_PRICE',
// 	NEWEST = 'NEWEST',
// 	OLDEST = 'OLDEST',
// }

export enum EnumSorting {
	LOW_TO_HIGH_PRICE = 'low-to-hight',
	HIGH_TO_LOW_PRICE = 'high-to-low',
	NEWEST = 'newest',
	OLDEST = 'oldest',
}

export interface ISortingItem {
	label: 'Price: low to high' | 'Price: high to low' | 'Newest' | 'Oldest'
	value: EnumSorting
}
