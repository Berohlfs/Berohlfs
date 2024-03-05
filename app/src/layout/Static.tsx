// Radix
import { DropdownMenu, Flex, Heading, Separator, Box, Avatar, Button, Container, Text, Link } from "@radix-ui/themes"
import { SunIcon, MoonIcon, ChatBubbleIcon, EnvelopeClosedIcon, LinkedInLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons"
// Libs
import { useTheme } from "next-themes"
// React
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Static = ({children}: Props)=> {

    const { setTheme } = useTheme()

    type Contato = {text: string, Icon: JSX.Element, link?: string}

    const contatos: Contato[] = [
        {text: '+55 (31) 99959-2002', Icon: <ChatBubbleIcon/>},
        {text: 'berohlfs@gmail.com', Icon: <EnvelopeClosedIcon/>},
        {text: 'Acessar meu perfil no LinkedIn.', Icon: <LinkedInLogoIcon/>, link: 'https://linkedin.com/in/bernardo-rohlfs-a09b61232'},
        {text: 'Acessar meu perfil no Instagram.', Icon: <InstagramLogoIcon/>, link: 'https://instagram.com/berohlfs'},
    ]

    return (<>
    <Box className={'fixed top-0 right-0 w-full bg-[var(--color-background)] z-50'}>
        <Flex 
            p={'4'} 
            justify={'between'} 
            align={'center'}>
            <Flex
                gap={'4'}
                align={'center'}>
                <Avatar fallback={'BR'}/>
                <Heading size={'2'}>
                    Meu Portifólio
                </Heading>
            </Flex>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button variant={'soft'}>
                        <SunIcon/> 
                        <Separator orientation={'vertical'} color={'orange'}/> 
                        <MoonIcon/>
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item onClick={()=> setTheme('light')}>
                        Light
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onClick={()=> setTheme('dark')}>
                        Dark
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onClick={()=> setTheme('system')}>
                        Sistema
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </Flex>
        <Separator size={'4'}/>
    </Box>

    <Box pt={'9'}>
        {children} 
    </Box>

    <footer>
        <Container className={'px-4 pb-9'}>
            <Separator size={'4'} className={'my-9'}/>
                <Flex direction={'column'} gap={'2'}>
                    <Heading size={'2'}>Contato</Heading>
                    {contatos.map((contato, index)=> (
                        <Flex gap={'2'} align={'center'} key={index}>
                            {contato.Icon}
                            {contato.link ? 
                            <Link 
                                size={'1'} 
                                color={'blue'} 
                                href={contato.link} 
                                target={'_blank'}>
                                {contato.text}
                            </Link> :
                            <Text 
                                size={'1'} 
                                color={'gray'}>
                                {contato.text}
                            </Text>}
                        </Flex>
                    ))}
                </Flex>
        </Container>
    </footer>
    </>)    
}