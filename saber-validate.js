const maxOrMin = "max" || "min";
const anyNumber = 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9;
const maxOrMinFunction = /\w{1,}-\d{1,}/;

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
    if (input.value.match(/^[a-z]\w{2,}@\w{2,}\.\w{2,}$/)) {
      return false;
    }
    return true;
  },
  min: (input, value) => {
    if (input.value.length <= value) return true;
    return false;
  },
  max: (input, value) => {
    if (input.value.length >= value) return true;
    return false;
  },
};

HTMLInputElement.prototype.checkValidation = function (rules, options) {
  const currentInput = this;
  const validationGroup = this.closest(".validation-group");
  const errors = [];

  for (let i = 0; i < rules.length; i++) {
    const ruleName = rules[i][0];
    const ruleError = rules[i][1];

    const isRuleInvalid = allValidationRules[ruleName](currentInput);
    console.log("im here");
    if (isRuleInvalid) {
      errors.push(ruleError);
      console.log(errors);
      if (options.block === true) {
        break;
      }
    }
  }

  if (errors.length === 0) {
    validationGroup.classList.add("valid");
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
    validationGroup.classList.remove("valid");
    validationGroup.querySelector(".error").textContent = errors.join(", ");
  }
};
