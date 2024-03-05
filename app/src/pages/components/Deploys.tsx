// Radix
import { Grid, Card, Heading, Flex, AspectRatio, Text, Badge, Link, Button, Separator } from "@radix-ui/themes"
import { ExternalLinkIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"
// React
import { useState } from "react"

export const Deploys = ()=> {

    type Deploy = {
        url: string, 
        name: string, 
        image: string,
        badges: string[],
        description: string
    }

    const deploys: Deploy[] = [
        {
            url: 'https://mrf-tailwind.bernardorohlfs.site',
            name: 'React Template Project nº1',
            description: 'React template built over Vite. It uses Tailwind CSS and Radix UI Themes for styling.',
            image: 'https://www.freecodecamp.org/portuguese/news/content/images/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png',
            badges: ['Tailwind CSS', 'Radix UI Themes', 'Vite.js', 'react-hook-form', 'zod', 'react-imask', 'react-router-dom']
        },
        {
            url: 'https://mrf-mui.bernardorohlfs.site',
            name: 'React Template Project nº2',
            description: 'React template built over Vite. It uses Material UI for styling.',
            image: 'https://www.freecodecamp.org/portuguese/news/content/images/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png',
            badges: ['Material UI', 'Vite.js', 'react-hook-form', 'zod', 'react-imask', 'react-router-dom']
        }
    ]
    
    const [deploys_show_all, setDeploysShowAll] = useState(false)

    return (
        <Flex direction={'column'} mt={'7'}>
            <Flex align={'center'} gap={'3'} mb={'3'}>
                <Heading size={'3'}>Meus deploys</Heading>
                <Separator orientation={'vertical'}/>
                <Button
                    variant={'ghost'}
                    size={'1'}
                    onClick={()=> setDeploysShowAll(prev=> !prev)}>
                    {deploys_show_all ? 'Mostrar menos' : 'Mostrar todos'}
                    {deploys_show_all ? <ChevronUpIcon/> : <ChevronDownIcon/>}
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
                            <Text size={'1'} color={'gray'}>
                                {deploy.description}
                            </Text>
                            <Flex gap={'2'} wrap={'wrap'}>
                                {deploy.badges.map((badge, badge_index)=> (
                                    <Badge color={
                                        badge_index % 2 === 0 ? 'mint' : 
                                        badge_index % 3 === 0 ? 'tomato' : 'crimson' 
                                    } key={badge}>
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
    )
}