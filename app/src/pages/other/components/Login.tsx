// Radix
import { AlertDialog, Button, Flex } from "@radix-ui/themes"
// Libs
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from 'zod'
import Cookies from "js-cookie"
// Validation
import { loginSchema, login_default_values } from "../../../validation/login"
// Components
import { CustomTextField } from "../../../components/widgets/CustomTextField"

export const Login = ()=> {

    const navigate = useNavigate()

    const login = (data: z.infer<typeof loginSchema>)=> {
        Cookies.set('access', 'access')
        console.log(data)
        navigate('/characters')
    }

    const {
        control,
        handleSubmit
    } = useForm({
        defaultValues: login_default_values,
        resolver: zodResolver(loginSchema)
    })

    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button 
                    variant={'soft'} 
                    size={{initial: '2', xs: '3', sm: '4'}}>
                        Click to log in
                </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content style={{ maxWidth: 450 }}>
                <AlertDialog.Title>
                    Login
                </AlertDialog.Title>
                <Flex direction={'column'} gap={'2'}>
                    <CustomTextField
                        control={control}
                        label={'CPF'}
                        placeholder={'Type your CPF'}
                        name={'cpf'}
                        mask={{mask: '000.000.000-00'}}/>
                    <CustomTextField
                        control={control}
                        label={'Password'}
                        placeholder={'Type your password'}
                        name={'senha'}/>
                </Flex>
                <Flex gap="3" mt="4" justify="end">
                    <Button 
                        onClick={handleSubmit(data=> login(data))} variant="soft" 
                        color="gray">
                        Login
                    </Button>
                    <AlertDialog.Action>
                        <Button variant="solid" color="red">
                            Cancel
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}