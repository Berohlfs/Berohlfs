// Libs
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
// React
import { ReactNode } from 'react'
// Static
import { Static } from './Static'

type Props = {
    children: ReactNode
}

export const AuthLayout = ({ children }: Props) => {
    return Cookies.get('access') ? (<>
        <Static/>
        {children}
    </>) : (
        <Navigate to={'/'} />
    )
}
