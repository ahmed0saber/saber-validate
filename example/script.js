const emailValidationRules = [
  ["empty", "email is required"],
  ["only_spaces", "email can't be only spaces"],
  ["invalid_email", "email is not valid"],
  ["max-8", "shouldn't be greater than 8 characters"],
  ["min-3", "shouldn't be less than 3 characters"],
];

const emailValidationOptions = {
  method: "field", // console, alert or field
  block: false, // block after the first error (don't show all errors, just the first one)
};

const emailInput = document.querySelector(".email-input");
const registerForm = document.querySelector(".register-form");

const validateEmailAddress = () => {
  emailInput.checkValidation(emailValidationRules, emailValidationOptions);
};

emailInput.addEventListener("keyup", validateEmailAddress);
registerForm.addEventListener("submit", () => {
  validateEmailAddress();
});
