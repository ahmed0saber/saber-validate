const allValidationRules = {
  empty: (input) => {
    if (input.value.length === 0) {
      return true;
    }
    return false;
  },
  only_spaces: (input) => {
    if (input.value.length > 0 && input.value.trim().length === 0) {
      console.log(input.value.length === 0);
      return true;
    }
    return false;
  },
  invalid_email: (input) => {
    if (
      input.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return false;
    }
    return true;
  },
};

HTMLInputElement.prototype.checkValidation = function (rules, options) {
  const currentInput = this;
  const errors = [];
  rules.forEach((rule) => {
    const ruleName = rule[0];
    const ruleError = rule[1];

    const isRuleInvalid = allValidationRules[ruleName](currentInput);
    if (isRuleInvalid) {
      errors.push(ruleError);
    }
  });

  console.log(errors);

  // console.log(allValidationRules["empty"](currentInput))
  // console.log(allValidationRules["only_spaces"](currentInput))

  // console.log({
  //     currentInput,
  //     rules,
  //     options
  // })
};
