const Login = () => import(
    '@/views/Auth/Login'
)

const Register = () => import(
    '@/views/Auth/Register'
)

const ForgotPassword = () => import(
    '@/views/Auth/ForgotPassword'
)

const ResetPassword = () => import(
    '@/views/Auth/ResetPassword'
)

const UserAccount = () => import(
    '@/views/User/Account'
)

export default [
    {   // login
        path: '/login',
        component: Login,
        name: 'login'
    },
    {   // forgot password
        path: '/forgot',
        component: ForgotPassword,
        name: 'forgot-password'
    },
    {   // register
        path: '/register',
        component: Register,
        name: 'register'
    },
    {   // reset pass
        path: '/reset/:token',
        component: ResetPassword,
        name: 'reset'
    },
    {   // account
        path: '/user',
        component: UserAccount,
        name: 'user',
        meta: {
            requiresAuth: true
        }
    }
]
