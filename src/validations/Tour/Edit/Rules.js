import {
    required,
    email
} from 'vuelidate/lib/validators';

export const validationRules = {
    tour: {
        name: {
            required
        },
        duration: {
            required
        },
        rating: {
            required
        },
        ratingsAverage: {
            required
        },
        ratingsQuantity: {
            required
        },
        maxGroupSize: {
            required
        },
        difficulty: {
            required
        },
        summary: {
            required
        },
        description: {
            required
        },
        price: {
            required
        },
        discountPrice: {
            required
        },
        slug: {
            required
        }
    }
};
