// Radix
import { Heading, Container, Flex, Avatar, Card, Grid, Text, Separator, Badge, Link, Button, AspectRatio } from "@radix-ui/themes"
import { StarIcon, ExternalLinkIcon, ChevronDownIcon, ChevronUpIcon, SewingPinFilledIcon, GlobeIcon, BackpackIcon, PersonIcon } from "@radix-ui/react-icons"
// Libs
import axios from 'axios'
import dayjs from "dayjs"
// React
import { useState, useEffect } from "react"

export const Home = ()=> {

    type Profile = {
        avatar_url: string,
        bio: string,
        company: string,
        following: number,
        followers: number,
        location: string,
        name: string,
        html_url: string
    } | null

    const [profile, setProfile] = useState<Profile>(null)

    const getProfile = async()=> {
        try{
            const res = await axios.get(`https://api.github.com/users/Berohlfs`)
            setProfile(res.data)
        }catch(error){

        }
    }

    type Repos = {
        name: string,
        id: string,
        size: number,
        stargazers_count: number,
        html_url: string,
        created_at: string,
        description: string
    }[]

    const [repos, setRepos] = useState<Repos>([])
    const [repos_show_all, setReposShowAll] = useState(false)
    const [deploys_show_all, setDeploysShowAll] = useState(false)

    const getRepos = async()=> {
        try{
            const res = await axios.get(`https://api.github.com/users/Berohlfs/repos`, {
            })
            setRepos(res.data)
        }catch(error){
            let mock = []
            for(let turn in [0,1,2,3,4,5,6,7,8,9,10]){
                mock.push({
                    name: 'Repo Mock',
                    id: turn,
                    size: 100,
                    stargazers_count: 7,
                    html_url: 'https://google.com',
                    created_at: '2022-10-10',
                    description: 'Descrição'
                })
            }
            setRepos(mock)
        }
    }

    useEffect(()=> {
        getProfile()
        getRepos()
    },[])

    type ProfileAttributeProps = {
        text: string,
        Icon: JSX.Element
    }

    const ProfileAttribute = ({text, Icon}: ProfileAttributeProps)=> {
        return (
            <Flex align={'center'} gap={'1'}>
                {Icon}
                <Text size={'1'}>
                    {text}
                </Text>
            </Flex>
        )
    }

    type Deploy = {
        url: string, 
        name: string, 
        image: string,
        badges: string[]
    }

    const deploys: Deploy[] = [
        {
            url: 'https://mrf-tailwind.bernardorohlfs.site',
            name: 'React Template 1',
            image: 'https://www.freecodecamp.org/portuguese/news/content/images/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png',
            badges: ['Tailwind', 'Radix UI Themes', 'Vite.js']
        }
    ]

    return (
        <Container className={'px-4 pb-9'}>
            <Flex 
                mt={'8'} 
                px={'2'}
                align={'center'}
                justify={{initial: 'center', xs: 'start'}}
                gap={'6'}
                wrap={'wrap'}>
               {profile && <>
                <Avatar
                    className={'w-48 h-48'}
                    src={profile?.avatar_url}
                    fallback={'?'}
                    radius={'full'}/>
                <Flex direction={'column'} gap={'2'} align={{initial: 'center', xs: 'start'}}>
                    <Heading>{profile.name}</Heading>

                    <ProfileAttribute
                        text={profile.bio}
                        Icon={<PersonIcon/>}/>

                    <ProfileAttribute
                        text={profile.location}
                        Icon={<SewingPinFilledIcon/>}/>

                    <ProfileAttribute
                        text={profile.company}
                        Icon={<BackpackIcon/>}/>

                    <ProfileAttribute
                        text={`${profile.followers} seguidores | ${profile.following} seguindo`}
                        Icon={<GlobeIcon/>}/>

                    <Link 
                        href={profile.html_url} 
                        color={'blue'}
                        target={'_blank'}
                        size={'1'}>
                        <Flex gap={'1'}>
                            <Text>Acessar perfil no GitHub</Text>
                            <ExternalLinkIcon/>
                        </Flex>
                    </Link>
                </Flex>   
                </>} 
            </Flex>
            
            <Flex direction={'column'} mt={'7'}>
                <Flex align={'center'} gap={'3'} mb={'3'}>
                    <Heading size={'3'}>Meus repositórios</Heading>
                    <Separator orientation={'vertical'}/>
                    <Button
                        variant={'ghost'}
                        size={'1'}
                        onClick={()=> setReposShowAll(prev=> !prev)}>
                        {repos_show_all ? 'Mostrar menos' : 'Mostrar todos'}
                        {repos_show_all ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                    </Button>
                </Flex>
               <Grid columns={{initial: '1', xs: '2', sm: '3', md: '4'}} gap={'3'}>
                    {(repos_show_all ? repos : repos.slice(0,4)).map(repo=> (
                        <Card key={repo.id}>
                            <Flex direction={'column'} gap={'3'}>
                                <Flex 
                                    gap={'2'}
                                    align={'center'}>
                                    <Avatar 
                                        color={'green'}
                                        fallback={repo.name[0]} 
                                        size={'2'}
                                        radius={'full'}/>
                                    <Flex direction={'column'} gap={'1'}>
                                        <Heading size={'1'}>
                                            {repo.name}
                                        </Heading>
                                        <Text size={'1'} color={'gray'}>
                                            {repo.size} KB
                                        </Text>
                                    </Flex>
                                </Flex>
                                <Separator size={'4'}/>
                                <Text size={'1'}>{repo.description}</Text>
                                <Flex gap={'2'}>
                                    <Badge>
                                        {repo.stargazers_count}
                                        <StarIcon/>
                                    </Badge>
                                    <Badge color={'purple'}>
                                        Criado em:{' '}
                                        {dayjs(repo.created_at).format('DD/MM/YYYY')}
                                    </Badge>
                                </Flex>
                                <Link 
                                    href={repo.html_url} 
                                    color={'blue'}
                                    target={'_blank'}
                                    size={'1'}>
                                    <Flex gap={'1'}>
                                        <Text>Acessar repositório no GitHub</Text>
                                        <ExternalLinkIcon/>
                                    </Flex>
                                </Link>
                            </Flex>
                        </Card>
                    ))}
               </Grid>
            </Flex>

            <Flex direction={'column'} mt={'7'}>
                <Flex align={'center'} gap={'3'} mb={'3'}>
                    <Heading size={'3'}>Meus deploys</Heading>
                    <Separator orientation={'vertical'}/>
                    <Button
                        variant={'ghost'}
                        size={'1'}
                        onClick={()=> setDeploysShowAll(prev=> !prev)}>
                        {repos_show_all ? 'Mostrar menos' : 'Mostrar todos'}
                        {repos_show_all ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                    </Button>
                </Flex>
               <Grid columns={{initial: '1', xs: '2', sm: '3', md: '4'}} gap={'3'}>
                    {(deploys_show_all ? deploys : deploys.slice(0,4)).map((deploy, index)=> (
                        <Card key={index}>
                            <Flex direction={'column'} gap={'3'}>
                                <AspectRatio
                                    ratio={16 / 9}>
                                    <img 
                                        className={'rounded'}
                                        src={deploy.image}/>
                                </AspectRatio>
                                <Heading size={'1'}>
                                    {deploy.name}
                                </Heading>
                                <Flex gap={'2'}>
                                    {deploy.badges.map((badge)=> (
                                        <Badge color={'red'} key={badge}>
                                            {badge}
                                        </Badge>
                                    ))}
                                </Flex>    
                                <Link 
                                    href={deploy.url} 
                                    color={'blue'}
                                    target={'_blank'}
                                    size={'1'}>
                                    <Flex gap={'1'}>
                                        <Text>Visitar website</Text>
                                        <ExternalLinkIcon/>
                                    </Flex>
                                </Link>
                            </Flex>
                        </Card>
                    ))}
               </Grid>
            </Flex>

            <Separator size={'4'} className={'my-8'}/>

        </Container>
    )
}