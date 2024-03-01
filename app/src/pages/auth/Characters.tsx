// Radix UI
import { Container, Text, Flex, Grid, Heading } from "@radix-ui/themes"
// Components
import { CharacterCardSkeleton } from "./components/CharacterCardSkeleton"
import { CharacterCard } from "./components/CharacterCard"
// React
import { useState, useEffect } from "react"
// Libs
import axios from 'axios'
import { toast } from "sonner"

export type Character = {
  attributes: {
    name: string,
    image: string,
    born: string,
    died: string,
    species: string,
    blood_status: string,
    wiki: string, 
  },
  id: string
}

type Characters = Character[] | null | false

export const Characters = ()=> {

  const [characters, setCharacters] = useState<Characters>(null)

  const getCharacters = async()=> {
    try{
      const res = await axios.get('https://api.potterdb.com/v1/characters?page[size]=25&filter[name_cont]=Potter')
      setCharacters(res.data.data)
      //console.log(res.data)
    }catch(error){
      toast.warning('API unavailable.', {id: 'characters-fail'})
      setCharacters(false)
    }
  }

  useEffect(()=> {
    setTimeout(getCharacters, 1000)
  },[])

  const handleCharactersRender = ()=> {
    if(characters){
      return (
        characters.map((character)=> (
          <CharacterCard key={character.id} character={character}/>
        ))
      )
    }else if(characters === false){
      return (<Heading mt={'5'}>Unable to load characters :(</Heading>)
    }else{
      return ([1,2,3,4,5,6,7,8,9,10].map((key)=> (<CharacterCardSkeleton key={key}/>)))
    }
  }

  return (
    <Container size={'4'}>
        <Flex p={'4'} direction={'column'}>
        <Heading size={'3'}>The Potters</Heading>
        <Text size={'1'} color={'gray'}>
            All Potter characters from the books and movies!
        </Text>
        </Flex>
    
        <Grid gap={'4'} px={'4'} pb={'4'} columns={{ initial: '1', xs: '2', sm: '3'}}>
        
          {handleCharactersRender()}

        </Grid>
        
    </Container> 
  )
}
