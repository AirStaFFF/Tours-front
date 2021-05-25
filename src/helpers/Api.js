import Helpers from './Helpers';
import { Http } from './Http';
const HttpInstance = new Http();
const axios = HttpInstance.create();

class Api {
    constructor() {
        this.networkErrorMessage = 'Backend unreachable'
    }

    post(url, payload, options = { dialog: true }) {
        return new Promise((resolve, reject) => {
            // const data = JSON.parse(JSON.stringify(payload))
            axios.post(url, payload)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    if (error.response) {
                        Helpers.consoleLogWrapper(error.response.data.message, options)
                    } else {
                        // network error
                        console.log(error)
                        Helpers.consoleLogWrapper(this.networkErrorMessage, options)
                    }
                    reject(error)
                })
        });
    }

    get(url, payload, options = { dialog: true }) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params: payload })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    if (error.response) {
                        Helpers.consoleLogWrapper(error.response.data.message, options)
                    } else {
                        // network error
                        console.log(error)
                        Helpers.consoleLogWrapper(this.networkErrorMessage, options)
                    }
                    reject(error)
                })
        })
    }

    put(url, payload, options = { dialog: true }) {
        return new Promise((resolve, reject) => {
            axios.put(url, { ...payload })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    if (error.response) {
                        Helpers.consoleLogWrapper(error.response.data.message, options)
                    } else {
                        // network error
                        console.log(error)
                        Helpers.consoleLogWrapper(this.networkErrorMessage, options)
                    }
                    reject(error)
                })
        })
    }

    patch(url, payload, options = { dialog: true }) {
        return new Promise((resolve, reject) => {
            axios.patch(url, { ...payload })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    if (error.response) {
                        Helpers.consoleLogWrapper(error.response.data.message, options)
                    } else {
                        // network error
                        console.log(error)
                        Helpers.consoleLogWrapper(this.networkErrorMessage, options)
                    }
                    reject(error)
                })
        })
    }

    delete(url, payload, options = { dialog: true }) {
        return new Promise((resolve, reject) => {
            axios.delete(url, { data: payload })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    if (error.response) {
                        Helpers.consoleLogWrapper(error.response.data.message, options)
                    } else {
                        // network error
                        console.log(error)
                        Helpers.consoleLogWrapper(this.networkErrorMessage, options)
                    }
                    reject(error)
                })
        })
    }
}

export default new Api();
