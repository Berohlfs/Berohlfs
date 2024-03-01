// Components
import { Login } from "./components/Login"
// Radix
import { Heading, Text, Container, Flex } from "@radix-ui/themes"

export const Home = ()=> {

    return (
        <Container className="fixed top-0 left-0 w-full h-full flex items-center justify-center" size={'1'}>
            <Flex direction={'column'} align={'center'} gap={'5'}>
                <Heading size={{initial: '7', xs: '8', sm: '9'}}>MyReactFramework</Heading>
                <Text className={'w-4/6 text-center'} color={'gray'} size={{initial: '2', xs: '3', sm: '5'}}>
                    A React.js project built with Vite, Radix UI Themes and Tailwind.
                </Text>
                <Login/>
            </Flex>
        </Container>
    )
}