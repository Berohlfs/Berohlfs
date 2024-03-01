// Radix
import { DropdownMenu, Button, Flex, Heading, Separator, Box } from "@radix-ui/themes"
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
    <Box className={'fixed top-0 right-0 w-full bg-[var(--color-background)]'}>
        <Flex p={'4'} justify={'between'}>
            <Heading>Bernardo Rohlfs</Heading>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button variant={'soft'}>
                        <HamburgerMenuIcon />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item 
                        shortcut="⌘">
                            Characters
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item color="red" onClick={logout}>
                        Log out
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </Flex>
        <Separator className={'w-full'}/>
        </Box>
        <Box pt={'9'}>
           {children} 
        </Box>
        
    </>)    
}