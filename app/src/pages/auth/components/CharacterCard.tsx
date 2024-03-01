// Radix
import { Card, Flex, Avatar, Text, Link, Badge, Popover, Button, TextArea } from "@radix-ui/themes"
import { ExternalLinkIcon, ChatBubbleIcon } from "@radix-ui/react-icons"
// Types
import { Character } from "../Characters"

const CustomPopover = ()=> {
    return (
      <Popover.Root>
        <Popover.Trigger>
          <Button variant={'ghost'} size={'1'}>
            <ChatBubbleIcon width="16" height="16" />
          </Button>
        </Popover.Trigger>
        <Popover.Content style={{ width: 360 }}>
          <Flex gap="3" direction={'column'} align={'end'}>
            <TextArea className={'w-full'} placeholder="Write a message…" style={{ height: 80 }} />
            <Popover.Close>
              <Button size="1">Send</Button>
            </Popover.Close>
          </Flex>
        </Popover.Content>
      </Popover.Root>
    )
  }

export const CharacterCard = ({character}: {character: Character})=> {
    return (
      <Card>
        <Flex direction={'column'} align={'start'}>
          <Flex align={'center'} gap={'3'}>
            <Avatar src={character.attributes.image} fallback={'?'}/>
            <Text>
              {character.attributes.name.split('').splice(0,25).join('')}
              {character.attributes.name.length > 25 && '...'}
            </Text>
            <CustomPopover/>
          </Flex>

          <Flex direction={'column'} py={'4'} gap={'2'}>
            <Text 
              className={'text-[11px]'}
              color={'gray'}>
                {character.attributes.born ? 
                'Birth: ' + character.attributes.born 
                : 'Birth: ?'}
            </Text>
            <Text 
              className={'text-[11px]'}
              color={'gray'}>
                {character.attributes.died ? 
                'Death: ' + character.attributes.died 
                : 'Death: ?'}
            </Text>
            {character.attributes.wiki &&
            <Link href={character.attributes.wiki} target={'_blank'} size={'1'}>
              <Flex align={'center'} gap={'1'}>
                <Text>Saiba mais</Text>
                <ExternalLinkIcon/>
              </Flex>
            </Link>}
          </Flex>
          
          <Flex align={'center'} gap={'2'}>
            <Badge color={'plum'}>
              {character.attributes.species}
            </Badge>
            <Badge color={'blue'}>
              {character.attributes.blood_status ?? '-'}
            </Badge>
          </Flex>
        </Flex>
      </Card>
    )
  }