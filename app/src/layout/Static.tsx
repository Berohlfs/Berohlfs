// Radix
import { DropdownMenu, Button, Flex, Heading, Separator, Box, Avatar } from "@radix-ui/themes"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
// Libs
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
// React
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Static = ({children}: Props)=> {

    const navigate = useNavigate()

    const logout = ()=> {
        Cookies.remove('access')
        navigate('/')
    }

    return (<>
    <Box className={'fixed top-0 right-0 w-full bg-[var(--color-background)] z-50'}>
        <Flex 
            p={'4'} 
            align={'center'}
            gap={'3'}>

            <Avatar fallback={'BR'}/>
            <Heading size={'2'}>
                Meu Portifólio
            </Heading>
         
        </Flex>
        <Separator className={'w-full'}/>
        </Box>
        <Box pt={'9'}>
           {children} 
        </Box>
        
    </>)    
}