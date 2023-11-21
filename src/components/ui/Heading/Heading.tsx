import cn from 'classnames'
import {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from 'react'
import styles from './Heading.module.scss'

interface IHeading
    extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
    children: ReactNode
}

export const Heading: FC<IHeading> = ({children, className}) => {
    return <h1 className={cn(styles.heading, className)}>{children}</h1>
}

