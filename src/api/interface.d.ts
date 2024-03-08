export interface Result<T> {
    succeeded: boolean
    errors?: Array<Error>
    body?: T
}

export interface Error {
    code: string
    description: string
}
