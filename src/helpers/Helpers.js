import { eventBus } from '@/helpers/EventBus/';

class Helpers {
    constructor() {
        this.env = {
            application_url: process.env.APP_URL,
            application_env: process.env.APP_ENV
        };

        this.stagingEnvironmentsArray = [
            'local',
            'development',
            'dev'
        ];

        this.consoleLogColors = {
            green: 'green',
            blue: 'blue',
            red: 'red'
        };
    }

    getEnvironment() {
        return this.env.application_env;
    }

    isProduction() {
        if (this.stagingEnvironmentsArray.includes(this.env.application_env)) {
            return false;
        }
        return true;
    }

    isDebugMode() {
        if (this.stagingEnvironmentsArray.includes(this.env.application_env)) {
            return true;
        }
        return false;
    }

    dialogAlert(text) {
        eventBus.$emit('showSnackBar', text, 'error');
    }

    consoleLogWrapper(text, config) {
        if (this.isDebugMode() === true) {
            console.log(`%c ${text}`, 'background: #2; color: green');
        }
        if (config.dialog === true) {
            this.dialogAlert(text);
        }
    }

    getWordCount(text) {
        const tmp = document.createElement('DIV');
        tmp.innerHTML = text;
        const content = tmp.textContent || tmp.innerText || '';
        const array = content.split(' ');
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (/\S/.test(array[i])) {
                count++;
            }
        }
        return count;
    }

    _debounce(fn, delay) {
        let timeoutID;
        return function (...args) {
            if (timeoutID) {
                clearTimeout(timeoutID)
            }
            timeoutID = setTimeout(() => {
                fn(...args)
            }, delay)
        }
    }
}
export default new Helpers();
