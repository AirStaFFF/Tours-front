<template>
    <div class="form-input">
        <b-form-input
            v-model="val"
            :type="type"
            class="mt-2"
            :placeholder="placeholder"
            :class="{ 'error-border': validationError, 'success': !validationError && value }"
            @input="onChange($event)"
            @blur="blur($event)"
        />
        <div class="form-input__message">
            <span>
                {{ validationError }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormInput",
    props: ['value', 'errors', 'is-valid', 'type', 'placeholder'],
    data() {
        return {
            val: ''
        }
    },
    watch: {
        value(val) {
            this.val = val
        }
    },
    computed: {
        validationError() {
            return this.errors ? this.errors : '';
        }
    },
    methods: {
        onChange(event) {
            this.$emit('update:field', event);
            this.$emit('onChange', event)
        },
        blur(event) {
            this.$emit('blur', event)
        }
    }
}
</script>

<style lang="scss">
    .error-border {
        border: 1px solid red !important
    }
    .success-border {
        border: 1px solid green !important
    }
    .form-input {
        &__message {
            font-size: 12px;
            color: red;
            text-align: left;
        }
    }
</style>
