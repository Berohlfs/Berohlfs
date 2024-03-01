// Radix
import { TextField, Text, Tooltip } from '@radix-ui/themes'
import { ExclamationTriangleIcon, EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons'
// Libs
import { IMaskMixin } from 'react-imask'
import { Controller, Control } from 'react-hook-form'
// React 
import { useState } from 'react'

const MaskedTextField = IMaskMixin<HTMLInputElement>(({inputRef, ...props}) => {

    const { size, color, ...other} = props // Removes conflicting props

    return (
        <TextField.Input
            {...other}
            ref={inputRef}/>
    )
})

type MaskProps = {
    mask: NumberConstructor | string
    max?: number
    min?: number
    radix?: string
    scale?: number
    padFractionalZeros?: boolean
    thousandsSeparator?: string
}

  type Props = {
    control: Control<any, any>
    mask?: MaskProps
    name: string
    label: string
    placeholder: string
    disabled?: boolean
    password?: boolean
  }

export const CustomTextField = ({
    control, 
    mask, 
    name,
    label,
    placeholder,
    disabled,
    password}: Props)=> {
        
    const [visible, setVisible] = useState(false)

    const common_props = {
        placeholder,
        disabled,
        type: (password && !visible) ? 'password' : undefined
    }

    return (
        <Controller 
            control={control} 
            name={name} 
            render={({field: {value, onChange}, fieldState: {error}})=> (
            <label>
                <Text as="div" size="1" mb="1" weight="bold">
                    {label}
                </Text>
                <TextField.Root>
                    {mask ? 
                    <MaskedTextField
                        {...common_props}
                        value={String(value)}
                        unmask={true}
                        onAccept={(value: string) => onChange({ target: { name: name, value } })}
                        {...mask}/>
                    : 
                    <TextField.Input
                        {...common_props}
                        value={String(value)}
                        onChange={(e)=> onChange(e)}/>}

                    {password && 
                    <TextField.Slot>
                        <Tooltip content="Inválido">
                            {visible ? 
                                <EyeOpenIcon className={'cursor-pointer'} onClick={()=> setVisible(false)}/> :
                                <EyeNoneIcon className={'cursor-pointer'}  onClick={()=> setVisible(true)}/>}
                        </Tooltip>
                    </TextField.Slot>}

                    {error && 
                    <TextField.Slot>
                        <Tooltip content="Inválido">
                            <ExclamationTriangleIcon 
                                className={'cursor-default'} 
                                color={'darkorange'}/>
                        </Tooltip>
                    </TextField.Slot>}
                </TextField.Root>  
            </label>)}/>
    )
}