const emailValidationRules = [
    ["empty", "email is required"],
    ["only_spaces", "email can't be only spaces"],
    ["invalid_email", "email is not valid"]
]
const emailValidationOptions = {
    method: "field", // console, alert or field
    block: true // block after the first error (don't show all errors, just the first one)
}

const validateEmailAddress = () => {
    const emailInput = document.querySelector(".email-input")
    emailInput.checkValidation(emailValidationRules, emailValidationOptions)
}

document.querySelector(".register-form").addEventListener("submit", () => {
    validateEmailAddress()
})