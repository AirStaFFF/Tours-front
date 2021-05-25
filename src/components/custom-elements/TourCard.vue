<template>
    <card-layout>
        <template #body>
            <b-button
                v-if="admin"
                variant="danger"
                class="w-100 mb-2"
                @click="$emit('deleteTour', card['_id'])"
            >
                Delete
            </b-button>
            <h2 class="card-title">
                {{ card.name }}
            </h2>
            <p class="card-summary">
                {{ card.summary }}
            </p>
            <p class="card-description">
                {{ card.description }}
            </p>
            <p class="card-price text-end">
                Price: {{ card.price }}$
            </p>
        </template>
        <template #footer>
            <b-button
                variant="outline-primary mt-2 w-100"
                @click="watchDetails"
            >
                View details
            </b-button>
        </template>
    </card-layout>
</template>

<script>
import CardLayout from "@/layouts/CardLayout";
export default {
    name: "TourCard",
    components: {
        CardLayout
    },
    props: {
        card: Object,
        admin: Boolean
    },
    methods: {
        watchDetails() {
            if (this.admin) {
                this.$router.push(`/admin/tours/edit/${this.card.id}`)
                return
            }
            this.$router.push(`/${this.card.id}`)
        }
    }
}
</script>

<style lang="scss">
.card-container {
    width: 31%;
}
.card {
    max-height: 350px;
    overflow: hidden;
    margin-bottom: 20px;
    padding: 10px;
}
.card-description {
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    text-overflow: ellipsis;
    max-height: 200px;
    height: 100%;
}
</style>
