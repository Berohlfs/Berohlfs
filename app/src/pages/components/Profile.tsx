// Radix
import { Heading, Flex, Text, Link, Avatar } from "@radix-ui/themes"
import { ExternalLinkIcon, SewingPinFilledIcon, GlobeIcon, BackpackIcon, PersonIcon } from "@radix-ui/react-icons"
// React
import { useState, useEffect } from "react"
// Libs
import axios from "axios"
import { toast } from "sonner"
// Components
import { CustomBlockSkeleton, CustomCircleSkeleton } from "../../components/widgets/CustomSkeleton"

export const Profile = ()=> {

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
            toast.warning('Erro ao carregar o perfil.', {id: 'error-github-API-profile'})
        }
    }

    useEffect(()=> {
        setTimeout(getProfile, 900)
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

    const ProfileSkeleton = ()=> {
        return (<>
            <CustomCircleSkeleton width={190}/>
            <Flex 
                direction={'column'} 
                gap={'3'} 
                align={{initial: 'center', xs: 'start'}}>
                <CustomBlockSkeleton width={235} height={25}/>
                <CustomBlockSkeleton width={150} height={15}/>
                <CustomBlockSkeleton width={140} height={15}/>
                <CustomBlockSkeleton width={170} height={15}/>
                <CustomBlockSkeleton width={130} height={15}/>
                <CustomBlockSkeleton width={100} height={15}/>
            </Flex>   
        </>)
    }

    return (
        <Flex 
            mt={'8'} 
            px={'2'}
            align={'center'}
            justify={{initial: 'center', xs: 'start'}}
            gap={'6'}
            wrap={'wrap'}>
            {profile ? <>
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
            </> : 
            <ProfileSkeleton/>} 
        </Flex>
    )
}