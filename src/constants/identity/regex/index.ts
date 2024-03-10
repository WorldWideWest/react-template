class Regex {
    static readonly onlyAlphabeticCharactersWithApostrophie = /^[a-zA-Z'_ ]*$/g
    static readonly password =
        /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)(?=.*[a-zA-Z]).{0,}$/g
}

export default Regex
