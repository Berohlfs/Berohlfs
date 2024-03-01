// Libs
import z from 'zod'
import { string_required, cpf } from '../utils/zodModules'

export const login_default_values = {
    cpf: '',
    senha: ''
}

export const loginSchema = z.object({
    cpf: cpf,
    senha: string_required
})

