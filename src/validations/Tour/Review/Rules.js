import {
    required,
    email
} from 'vuelidate/lib/validators';

export const validationRules = {
    reviewText: {
        required
    },
    reviewRating: {
        required
    }
};
