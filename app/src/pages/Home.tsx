// Radix
import { Heading, Container, Flex, Avatar, Card, Grid } from "@radix-ui/themes"
// Libs
import axios from 'axios'
// React
import { useState, useEffect } from "react"

export const Home = ()=> {

    type Profile = {
        avatar_url: string,
    } | null

    const [profile, setProfile] = useState<Profile>(null)

    const getProfile = async()=> {
        try{
            const res = await axios.get(`https://api.github.com/users/Berohlfs`)
            setProfile(res.data)
        }catch(error){

        }
    }

    useEffect(()=> {
        getProfile()
    },[])

    type Repos = {
        name: string,
        id: string
    }[]

    const [repos, setRepos] = useState<Repos>([])

    const getRepos = async()=> {
        try{
            const res = await axios.get(`https://api.github.com/users/Berohlfs/repos`)
            setRepos(res.data)
            console.log(res.data)
        }catch(error){

        }
    }

    useEffect(()=> {
        getProfile()
        getRepos()
    },[])

    return (
        <Container size={'3'}>
            <Flex mt={'5'} direction={'column'} align={'center'}>
               {profile &&
                <Avatar
                    className={'w-80 h-80'}
                    src={profile?.avatar_url}
                    fallback={'?'}/>} 
            </Flex>
            <Flex direction={'column'} mt={'5'}>
               <Heading size={'3'} mb={'3'} >Meus repositórios</Heading>
               <Grid columns={'3'} gap={'3'}>
                    {repos.map(repo=> (
                        <Card key={repo.id}>
                            <Heading size={'2'}>{repo.name}</Heading>
                        </Card>
                    ))}
               </Grid>
            </Flex>
            
        </Container>
    )
}