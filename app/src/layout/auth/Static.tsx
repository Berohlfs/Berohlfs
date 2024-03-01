// Radix
import { DropdownMenu, Button, Flex, Heading, Separator } from "@radix-ui/themes"
import { CaretDownIcon } from "@radix-ui/react-icons"
// Libs
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

export const Static = ()=> {

    const navigate = useNavigate()

    const logout = ()=> {
        Cookies.remove('access')
        navigate('/')
    }

    return (<>
        <Flex p={'4'} justify={'between'}>
            <Heading>MRF</Heading>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button variant={'soft'}>
                        Menu
                        <CaretDownIcon />
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
    </>)    
}