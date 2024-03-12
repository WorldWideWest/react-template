import { z } from 'zod'
import ErrorMessage from '../../../constants/identity/errors/message'

export const schema = z.object({
    email: z
        .string({ required_error: ErrorMessage.propertyRequired('Email') })
        .email({ message: ErrorMessage.propertyInvalid('Email') }),
    password: z.string({
        required_error: ErrorMessage.propertyRequired('Password'),
    }),
})

export type FormFields = z.infer<typeof schema>
