const TourList = () => import(
    '@/views/Tours/ToursList'
)

const TourDetails = () => import(
    '@/views/Tours/TourDetails'
)

const TourCreate = () => import(
    '@/views/Tours/TourCreate'
)

const TourEdit = () => import(
    '@/views/Tours/TourEdit'
)

const AdminToursList = () => import(
    '@/views/Tours/AdminToursList'
)

export default [
    {   // list
        path: '/',
        component: TourList,
        name: 'tours-list',
        meta: {
            // requiresAuth: true
        }
    },
    {
        path: '/:id',
        component: TourDetails,
        name: 'tours-details',
        meta: {
            // requiresAuth: true
        }
    },
    {
        path: '/admin/tours/create',
        component: TourCreate,
        name: 'tours-create',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/admin/tours/edit/:id',
        component: TourEdit,
        name: 'tours-edit',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/admin/tours',
        component: AdminToursList,
        name: 'admin-tours-list',
        meta: {
            requiresAuth: true
        }
    },

]
