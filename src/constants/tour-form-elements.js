export default [
    {
        field: 'name',
        type: 'text',
        placeholder: 'Add name',
        component: 'input'
    },
    {
        field: 'duration',
        type: 'number',
        placeholder: 'Add duration',
        component: 'input'
    },
    {
        field: 'rating',
        type: 'number',
        placeholder: 'Add rating',
        component: 'input'
    },
    {
        field: 'ratingsAverage',
        type: 'number',
        placeholder: 'Add ratings average',
        component: 'input'
    },
    {
        field: 'ratingsQuantity',
        type: 'number',
        placeholder: 'Add ratings quantity',
        component: 'input'
    },
    {
        field: 'maxGroupSize',
        type: 'number',
        component: 'select',
        options: [
            {
                text: 'Select group size',
                value: null
            },
            {
                text: 5,
                value: 5
            },
            {
                text: 10,
                value: 10
            },
            {
                text: 15,
                value: 15
            },
            {
                text: 20,
                value: 20
            }
        ]
    },
    {
        field: 'difficulty',
        type: 'text',
        component: 'select',
        options: [
            {
                text: 'Select difficulty',
                value: null
            },
            {
                text: 'easy',
                value: 'easy'
            },
            {
                text: 'medium',
                value: 'medium'
            },
            {
                text: 'difficult',
                value: 'difficult'
            }
        ]
    },
    {
        field: 'summary',
        type: 'text',
        placeholder: 'Add summary',
        component: 'input'
    },
    {
        field: 'description',
        placeholder: 'Add description',
        type: 'text',
        component: 'input'
    },
    {
        field: 'price',
        type: 'number',
        placeholder: 'Add price',
        component: 'input'
    },
    {
        field: 'discountPrice',
        placeholder: 'Add price discount',
        type: 'number',
        component: 'input'
    },
    {
        field: 'slug',
        placeholder: 'Add slug',
        type: 'text',
        component: 'input'
    },

]
