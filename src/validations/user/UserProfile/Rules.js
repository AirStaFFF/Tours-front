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
    name: {
        required,
        minLength: minLength(2)
    }
};
