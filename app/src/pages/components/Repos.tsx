// Radix
import { Grid, Card, Heading, Flex, Text, Badge, Link, Button, Separator, Avatar } from "@radix-ui/themes"
import { ExternalLinkIcon, ChevronDownIcon, ChevronUpIcon, StarIcon } from "@radix-ui/react-icons"
// React
import { useState, useEffect } from "react"
// Libs
import axios from "axios"
import dayjs from "dayjs"
import { toast } from "sonner"
// Components
import { CustomBlockSkeleton, CustomCircleSkeleton } from "../../components/widgets/CustomSkeleton"

export const Repos = ()=> {

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

    const getRepos = async()=> {
        try{
            const res = await axios.get(`https://api.github.com/users/Berohlfs/repos`)
            setRepos(res.data)
        }catch(error){
            toast.warning('Erro ao carregar os repositórios.', {id: 'error-github-API-repos'})
        }
    }

    useEffect(()=> {
        setTimeout(getRepos, 900)
    },[])

    const RepoSkeleton = ()=> {
        return (
            <Card>
                <Flex direction={'column'} gap={'3'}>
                    <Flex 
                        gap={'2'}
                        align={'center'}>
                        <CustomCircleSkeleton width={40}/>
                        <Flex direction={'column'} gap={'1'}>
                            <CustomBlockSkeleton width={110} height={15}/>
                            <CustomBlockSkeleton width={35} height={10}/>
                        </Flex>
                    </Flex>
                    <CustomBlockSkeleton height={8}/>
                    <CustomBlockSkeleton height={8}/>
                    <Flex gap={'2'}>
                        <CustomBlockSkeleton width={30} height={20}/>
                        <CustomBlockSkeleton width={40} height={20}/>
                    </Flex>
                    <CustomBlockSkeleton height={10} width={80}/>
                </Flex>
            </Card>
        )
    }

    return (
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
                {repos.length !== 0 ? 
                (repos_show_all ? repos : repos.slice(0,4)).map(repo=> (
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
                )) : 
                
                [1,2,3,4].map(item=> (<RepoSkeleton key={item}/>))}
            </Grid>
        </Flex>
    )
}