export const formMessages = {
    required: () => 'Required',
    email: () => 'Must be a valid e-mail',
    emailExists: () => 'E-mail already exists',
    minLength: ({ $params }) => `Must be at least ${$params.minLength.min} characters.`,
    maxLength: ({ $params }) => `Must be less than ${$params.maxLength.max} characters.`,
    passwordStrengthTest: ({ $params }) => $params.passwordStrengthTest.message,
    sameAsPassword: () => 'Must be the same'
    // phoneValidated: () => 'Phone number is invalid'
};
