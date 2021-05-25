<template>
    <div class="notice-messages">
        <transition-group
            name="notice-messages-list"
            tag="div"
        >
            <div
                v-for="notice in reversedList"
                :key="notice.id"
                :class="{
                    'notice-messages__item-success': notice.type === 'success',
                    'notice-messages__item-info': notice.type === 'info',
                    'notice-messages__item-error': notice.type === 'error'
                }"
                class="notice-messages__item"
            >
                <div class="notice-messages__item-inside">
                    <span
                        v-if="notice.type === 'success'"
                        class="notice-messages__item-inside__icon notice-messages__item-inside__icon_success"
                    />

                    <span
                        v-if="notice.type === 'info'"
                        class="notice-messages__item-inside__icon notice-messages__item-inside__icon_info"
                    />

                    <span
                        v-if="notice.type === 'error'"
                        class="notice-messages__item-inside__icon notice-messages__item-inside__icon_error"
                    />

                    <div class="notice-messages__item-inside__text">
                        {{ notice.message }}
                    </div>

                    <button
                        class="notice-messages__item-inside__close"
                        color="white"
                        @click="delItem(notice.id)"
                    />
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>

export default {
    name: 'SnackBar',
    data: () => ({
        list: []
    }),
    computed: {
        reversedList() {
            const list = [...this.list];
            return list.reverse();
        }
    },
    created() {
        this.$bus.$on('showSnackBar', (msg, type) => {
            function randomInteger() {
                let rand = 0 - 0.5 + Math.random() * (999999999999999 + 1);
                rand = Math.round(rand);
                return rand;
            }

            const el = {
                message: msg,
                type,
                id: randomInteger()
            };

            // Сhecking for the same error messages
            // if (this.list.length > 0) {
            //     for (const item of this.list) {
            //         if (item.message === el.message) {
            //             return;
            //         }
            //     }
            // }

            this.list.push(el);
            setTimeout(this.delItem, 6000, el.id);
        });
    },
    methods: {
        delItem(id) {
            for (let i = 0; i < this.list.length; i += 1) {
                if (this.list[i].id === id) {
                    this.list.splice(i, 1);
                    return;
                }
            }
        }
    }
};
</script>

<style lang="scss">
    @import "@/assets/styles/_snackbar.scss";
</style>
