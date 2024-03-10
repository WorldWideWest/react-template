export default class ErrorMessage {
    static readonly propertyRequired = (property: string): string =>
        `${property} is Required`

    static readonly propertyInvalid = (property: string): string =>
        `${property} is Invalid`

    static readonly invalidName = (property: string): string =>
        `${property} can not have any special characters or numbers outside \'`

    static readonly invalidLength = (
        property: string,
        min: number,
        max: number
    ): string =>
        `${property} doesn't match the required length, the required length is between ${min} and ${max} characters`

    static readonly invalidPassword =
        "Password need's to contain at least one Number and one Special Character"
}
