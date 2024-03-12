import { AxiosError } from 'axios'
import { Error, Result } from '../api/interface'
import ErrorCode from '../constants/identity/errors/code'
import { ErrorObject } from './interface'

export const toResult = (error: unknown): Result<object> =>
    (error as AxiosError).response?.data as Result<object>

export const findUserAlreadyExistsError = (
    errors: Array<Error>
): string | undefined => {
    const error = errors.find(
        (error) => error.code == ErrorCode.userAlreadyExists
    )

    return error?.description
}

export const toUserAlreadyExistsErrorObject = (error: unknown): ErrorObject => {
    const result = toResult(error)

    const errorObject: ErrorObject = {
        error: {
            type: 'validate',
            message: findUserAlreadyExistsError(result.errors || []),
        },
        options: { shouldFocus: true },
    }

    return errorObject
}
