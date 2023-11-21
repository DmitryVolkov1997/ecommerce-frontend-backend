import cn from 'classnames'
import {DetailedHTMLProps, FC, HTMLAttributes} from 'react'
import {SiStarbucks} from 'react-icons/si'
import {Link} from 'react-router-dom'
import styles from './Menu.module.scss'
import {menu} from './menu-data'
import MenuItem from './MenuItem/MenuItem'

type IMenu = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Menu: FC<IMenu> = ({className}) => {
    return (
        <div className={cn(styles.menu, className)}>
            <Link to="/">
                <SiStarbucks size={100} color="green"/>
            </Link>

            <nav className={styles.nav}>
                <ul>
                    {menu.map((item, idx) => (
                        <MenuItem key={idx} item={item}/>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Menu
