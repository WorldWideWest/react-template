import { z } from 'zod'
import ErrorMessage from '../../../constants/identity/messages'
import { ErrorMessage } from '../../../constants/identity/errors'

export const schema = z.object({
    email: z
        .string({ required_error: ErrorMessage.email.required })
        .email({ message: ErrorMessage.email.invalid }),
    password: z.string(),
})

export type FormFields = z.infer<typeof schema>
