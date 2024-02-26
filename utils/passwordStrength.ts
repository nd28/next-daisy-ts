const passwordStrengthConstraints = {
  MinimumCharacter: {
    name: 'MinimumCharacter',
    message: 'Must have at least 8 characters',
    validate: value => {
      return value.length >= 8;
    },
    validateStatus: false
  },
  IncludeSpecialCharacter: {
    name: 'IncludeSpecialCharacter',
    message: 'Must have special charater',
    validate: (value: string) => value.includes('$'),
    validateStatus: false
  }
};

type TPasswordRules = keyof typeof passwordStrengthConstraints;

const minimumFulfillmentRule: Record<
  'weak' | 'strong' | 'fair',
  Array<TPasswordRules>
> = {
  weak: [],
  fair: ['MinimumCharacter', 'IncludeSpecialCharacter'],
  strong: ['MinimumCharacter', 'IncludeSpecialCharacter']
};

const passwordStrength = (value: string) => {
  let strengthStatus: 'weak' | 'strong' | 'fair' | false = false;

  for (let [_constraintName, constraintObject] of Object.entries(
    passwordStrengthConstraints
  )) {
    // Obtain status of each rule on the incoming value
    constraintObject.validateStatus = constraintObject.validate(value);
  }

  // minimum fulfillment rules are to allow customization in logic of calculating strength
  const minimumFulfillmentRuleMet: Record<
    keyof typeof minimumFulfillmentRule,
    boolean
  > = { fair: false, strong: false, weak: false };

  for (const [_strengthStatus, rules] of Object.entries(
    minimumFulfillmentRule
  )) {
    const rulesValidateStatusSuccess = rules.every(
      rule => passwordStrengthConstraints[rule].validateStatus
    );
    if (rulesValidateStatusSuccess) {
      minimumFulfillmentRuleMet[_strengthStatus] = true;
    }
  }

  let customizedStrengthStatus;
  if (!Boolean(value)) {
    customizedStrengthStatus = false;
  } else if (minimumFulfillmentRuleMet.strong) {
    customizedStrengthStatus = 'strong';
  } else if (minimumFulfillmentRuleMet.fair) {
    customizedStrengthStatus = 'fair';
  } else {
    customizedStrengthStatus = 'weak';
  }

  // Straight forward and verbose logic to get strength. Cannot customize without modifying code.
  if (!Boolean(value)) {
    strengthStatus = false;
  } else if (
    passwordStrengthConstraints.MinimumCharacter.validateStatus &&
    passwordStrengthConstraints.IncludeSpecialCharacter.validateStatus
  ) {
    strengthStatus = 'strong';
  } else if (passwordStrengthConstraints.MinimumCharacter.validateStatus) {
    strengthStatus = 'fair';
  } else {
    strengthStatus = 'weak';
  }

  return {
    strengthStatus,
    customizedStrengthStatus,
    constraints: passwordStrengthConstraints,
    minimumFulfillmentRuleMet
  };
};
export default passwordStrength;
