import {
    required,
    minLength,
    sameAs
} from 'vuelidate/lib/validators';

export const validationRules = {
    currentPassword: {
        required
    },
    password: {
        required,
        minLength: minLength(8)
    },
    passwordConfirm: {
        required,
        sameAsPassword: sameAs('password')
    }
};
