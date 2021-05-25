import {
    required,
    email
} from 'vuelidate/lib/validators';

export const validationRules = {
    email: {
        required,
        email
    }
};
