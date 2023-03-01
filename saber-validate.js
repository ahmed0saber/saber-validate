const allValidationRules = {
  empty: (input) => {
    if (input.value.length === 0) {
      return true;
    }
    return false;
  },
  only_spaces: (input) => {
    if (input.value.length > 0 && input.value.trim().length === 0) {
      return true;
    }
    return false;
  },
  invalid_email: (input) => {
    if (
      input.value.match(/^[a-z]\w{2,}@\w{2,}\.\w{2,}$/)
    ) {
      return false;
    }
    return true;
  },
};

HTMLInputElement.prototype.checkValidation = function (rules, options) {
  const currentInput = this;
  const validationGroup = this.closest(".validation-group");
  const errors = [];

  rules.forEach((rule) => {
    const ruleName = rule[0];
    const ruleError = rule[1];

    const isRuleInvalid = allValidationRules[ruleName](currentInput);
    if (isRuleInvalid) {
      errors.push(ruleError);
    }
  });

  if (errors.length === 0) {
    validationGroup.classList.remove("invalid");
    validationGroup.querySelector(".error").textContent = "";
    return;
  }

  if (options.method === "console") {
    console.log(errors);
  } else if (options.method === "alert") {
    window.alert(errors.join(", "));
  } else if (options.method === "field") {
    validationGroup.classList.add("invalid");
    validationGroup.querySelector(".error").textContent = errors.join(", ");
  }
};
