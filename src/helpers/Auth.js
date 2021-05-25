/* eslint-disable class-methods-use-this */

class Auth {
    constructor() {
        this.auth = {}
    }

    async login(data) {
        return new Promise((resolve) => {
            const clientData = {
                token: data.token,
                user: data.data.user
            }
            window.localStorage.setItem('user', JSON.stringify(clientData))
            resolve(true)
        })
    }

    logout() {
        return new Promise((resolve) => {
            window.localStorage.removeItem('user')
            resolve(true)
        })
    }

    getLocalStorage() {
        const auth = window.localStorage.getItem('user')
        if (!auth) return false
        return JSON.parse(auth)
    }

    getToken() {
        const { token } = this.getLocalStorage()
        return token
    }

}
export default new Auth()
