export const formMessages = {
    required: () => 'Required',
    email: () => 'Must be a valid e-mail',
    minLength: ({ $params }) => `Must be at least ${$params.minLength.min} characters.`,
    maxLength: ({ $params }) => `Must be less than ${$params.maxLength.max} characters.`,
    sameAsPassword: () => 'Must be the same'
};
