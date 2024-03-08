import { z } from 'zod'
import ErrorMessage from '../../../constants/identity/messages'
import { Error } from '../../../constants/identity/errors'

export const schema = z.object({
    email: z
        .string({ required_error: Error.email.required })
        .email({ message: Error.email.invalid }),
    password: z.string(),
})

export type FormFields = z.infer<typeof schema>
