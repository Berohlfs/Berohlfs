// Radix
import { Container } from "@radix-ui/themes"
// Components
import { Deploys } from "./components/Deploys"
import { Repos } from "./components/Repos"
import { Profile } from "./components/Profile"

export const Home = ()=> {

    return (
        <Container className={'px-4'}>
            
            {<Profile/>}

            {<Repos/>}

            {<Deploys/>}

        </Container>
    )
}