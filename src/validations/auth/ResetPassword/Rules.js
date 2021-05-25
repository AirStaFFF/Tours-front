import {
    maxLength, minLength, required, sameAs
} from 'vuelidate/lib/validators';

export const validationRules = {
    password: {
        required,
        minLength: minLength(7),
        maxLength: maxLength(50)
    },
    passwordConfirm: {
        required,
        sameAs: sameAs('password')
    }
}
