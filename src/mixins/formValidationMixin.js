// import { forEach } from 'lodash';
import { eventBus } from '@/helpers/EventBus/';
// import formFields from '@/helpers/FormFieldNames.js';

const touchMap = new WeakMap();

export default {
    data: () => ({
        snackbar: false,
        snackbar_message: ''
    }),
    methods: {
        delayTouch($v) {
            $v.$reset();
            if (touchMap.has($v)) {
                clearTimeout(touchMap.get($v));
            }
            touchMap.set($v, setTimeout($v.$touch, 1000));
        },
        focusFirstStatus(component = this) {
            const a = component.errorMessages;
            if (typeof a !== 'undefined' && a instanceof Array) {
                if (a.length > 0) {
                    return true;
                }
            }
            let focused = false;
            component.$children.some((childComponent) => {
                focused = this.focusFirstStatus(childComponent);
                return focused;
            });
            return focused;
        },
        validations() {
            return new Promise((resolve) => {
                if (this.$v.$error || !this.$v.$pending) {
                    return resolve();
                }
                const poll = setInterval(() => {
                    if (!this.$v.$pending) {
                        clearInterval(poll);
                        resolve();
                    }
                }, 200);
                return poll
            });
        },
        async isValid() {
            this.$v.$reset();
            this.$v.$touch();
            await this.validations();
            return Promise.resolve(!this.$v.$error);
        },
        async validate() {
            // check phone first
            const isValid = await this.isValid();
            if (isValid) {
                this.submit();
            } else {
                // const errorName = this.findNameOfFirstError(this.$v);
                // eventBus.$emit('showSnackBar', `Please complete the form: ${errorName}`, 'error');
                throw new Error('form is invalid');
            }
        },

        // findNameOfFirstError(items) {
        //     const vm = this;
        //     let listOfErrors = '';
        //     forEach(items, (item, key) => {
        //         try {
        //             const result = vm.$v[key].$error;
        //             if (result === true) {
        //                 const itemDisplayName = formFields[key] ? formFields[key] : key;
        //                 listOfErrors += `${itemDisplayName}, `;
        //             }
        //         } catch (e) {
        //             console.log(e);
        //         }
        //     });
        //     listOfErrors = listOfErrors.substring(0, listOfErrors.length - 2);
        //     return listOfErrors;
        // }
    }
};
