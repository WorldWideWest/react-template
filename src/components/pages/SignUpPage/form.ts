import { z } from 'zod'
import Regex from '../../../constants/identity/regex'
import ErrorMessage from '../../../constants/identity/errors'

export const schema = z.object({
    firstName: z
        .string()
        .regex(
            Regex.onlyAlphabeticCharactersWithApostrophie,
            ErrorMessage.invalidName('First Name')
        ),
    lastName: z
        .string()
        .regex(
            Regex.onlyAlphabeticCharactersWithApostrophie,
            ErrorMessage.invalidName('Last Name')
        ),
    email: z
        .string({ required_error: ErrorMessage.propertyRequired('Email') })
        .email({ message: ErrorMessage.propertyInvalid('Email') }),
    password: z
        .string({
            required_error: ErrorMessage.propertyRequired('Password'),
        })
        .regex(Regex.password, ErrorMessage.invalidPassword),
})

export type FormFields = z.infer<typeof schema>
