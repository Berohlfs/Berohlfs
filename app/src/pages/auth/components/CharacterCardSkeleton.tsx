// Radix
import { Card, Flex } from "@radix-ui/themes"
// Components
import { CustomBlockSkeleton, CustomCircleSkeleton } from "../../../components/widgets/CustomSkeleton"

export const CharacterCardSkeleton = ()=> {
    return (
        <Card>
            <Flex direction={'column'} gap={'3'}>
                <CustomCircleSkeleton width={50}/>
                <CustomBlockSkeleton height={10} width={180}/>
                <CustomBlockSkeleton height={10} width={200}/>
                <CustomBlockSkeleton height={10} width={120}/>
                <Flex gap={'2'} mt={'1'}>
                    <CustomBlockSkeleton height={20} width={60}/>
                    <CustomBlockSkeleton height={20} width={80}/>
                </Flex>
            </Flex>
        </Card>
    )
}