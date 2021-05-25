<template>
    <div class="form-input">
        <b-form-select
            v-model="val"
            :options="options"
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
    name: "FormSelect",
    props: ['value', 'errors', 'is-valid', 'type', 'placeholder', 'options'],
    data() {
        return {
            val: this.value
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

<style scoped>

</style>
