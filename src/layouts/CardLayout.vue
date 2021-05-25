<template>
    <div class="card-container">
        <div class="card">
            <div class="card-container__body">
                <slot name="body"/>
            </div>
            <div class="card-container__footer">
                <slot name="footer"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardLayout"
}
</script>

<style lang="scss">
</style>
