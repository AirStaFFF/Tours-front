import {
    required,
    minLength,
    maxLength,
    email,
    sameAs
} from 'vuelidate/lib/validators';

export const validationRules = {

    name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50)
    },
    email: {
        required,
        email
    },
    password: {
        required,
        minLength: minLength(7),
        maxLength: maxLength(50)
    },
    passwordConfirm: {
        required,
        sameAsPassword: sameAs('password')
    }
}
