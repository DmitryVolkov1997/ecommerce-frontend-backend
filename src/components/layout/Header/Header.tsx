import { FC } from 'react'
import styles from './Header.module.scss'
import Menu from './Menu/Menu'
import { Cart, Search } from 'components'

 export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Menu className={styles.menu} />
			<Search className={styles.search} />
			<Cart className={styles.cart} />
		</div>
	)
}

