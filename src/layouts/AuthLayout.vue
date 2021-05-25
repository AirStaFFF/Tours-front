<template>
    <div class="auth">
        <div class="auth-header">
            <slot name="header"></slot>
        </div>
        <div class="auth-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthLayout"
}
</script>

<style lang="scss">
body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.auth {
    width: 400px;
    padding: 0 0 30px 0px;
    border-radius: 4px;
    border: 1px solid #dedede;
    margin-left: auto;
    margin-right: auto;
    &-header {
        padding: 30px 30px 15px 30px;
        border-bottom: 1px solid #dedede;
        &__container {

        }
    }
    &-content {
        padding: 15px 30px 0 30px;
        &__container {

        }
    }
    &-links {

    }
}
</style>
