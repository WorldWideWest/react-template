import { Error } from '../../../api/interface'

export interface IdentityStore<T> {
    isLoading: boolean
    succeeded: boolean
    errors?: Array<Error>
    body?: T
}
