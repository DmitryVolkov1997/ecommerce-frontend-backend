import {Box} from '@chakra-ui/react'
import {FC, ReactNode} from 'react'
import styles from './Layout.module.scss'

interface ILayout {
    children: ReactNode
}

export const Layout: FC<ILayout> = ({children}) => {
    return (
        <Box className={styles.layout}>
            <Box as="main" className={styles.main}>
                <Box className={styles.content}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

