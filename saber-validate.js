const allValidationRules = {
    empty: (input) => {
        if (input.value.length === 0) {
            return true
        }
        return false
    },
    only_spaces: (input) => {
        if (input.value.length > 0 && input.value.trim().length === 0) {
            return true
        }
        return false
    }
}

HTMLInputElement.prototype.checkValidation = function (rules, options) {
    const currentInput = this
    const errors = []

    console.log(allValidationRules["empty"](currentInput))
    console.log(allValidationRules["only_spaces"](currentInput))

    console.log({
        currentInput,
        rules,
        options
    })
}
