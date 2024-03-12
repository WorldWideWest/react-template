import { ErrorOption } from 'react-hook-form'

export interface ErrorObject {
    error: ErrorOption
    options?: { shouldFocus: boolean }
}
