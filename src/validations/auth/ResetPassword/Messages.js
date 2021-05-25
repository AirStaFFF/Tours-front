export const formMessages = {
    required: () => 'Required',
    minLength: ({ $params }) => `Must be at least ${$params.minLength.min} characters.`,
    maxLength: ({ $params }) => `Must be less than ${$params.maxLength.max} characters.`,
    passwordStrengthTest: ({ $params }) => $params.passwordStrengthTest.message,
    sameAs: () => 'Must be the same'
};
