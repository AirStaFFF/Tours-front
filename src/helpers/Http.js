import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';

export class Http {
    constructor() {

    }

    create() {
        const instance = axios.create({
            baseURL: 'http://127.0.0.1:3000',
            headers: {
                Authorization: `Bearer ${this.getToken()}`,
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-Forwarded-For': '127.0.0.1'
            }
        });
        loadProgressBar({}, instance);

        // interceptor
        instance.interceptors.request.use((config) => {
            const token = this.getToken();

            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }

            return config;
        }, (error) => Promise.reject(error));

        return instance;
    }

    getToken() {
        const data = window.localStorage.getItem('user');
        let token = null;
        token = (data && data !== 'undefined') ? JSON.parse(data).token : null;
        return token;
    }
}

export default new Http();
