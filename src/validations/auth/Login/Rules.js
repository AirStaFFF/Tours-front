import {
    required,
    minLength,
    email
} from 'vuelidate/lib/validators';

export const validationRules = {
    email: {
        required,
        email
    },
    password: {
        required,
        minLength: minLength(8)
    }
};
