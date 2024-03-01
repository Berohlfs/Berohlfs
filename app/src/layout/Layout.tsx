// React
import { ReactNode } from 'react'
// Static
import { Static } from './Static'

type Props = {
    children: ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
    <>
        <Static>
            {children}
        </Static>
    </>
    )
}
