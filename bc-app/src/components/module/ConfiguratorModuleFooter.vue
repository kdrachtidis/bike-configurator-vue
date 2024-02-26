<script setup>
const props = defineProps({
    Sum: String
})
</script>

<template>
    <div class="card-footer d-flex justify-content-between bg-body-tertiary">
        <div class="card-text text-body-secondary">Summe: {{ Sum || "Summary empty" }}</div>
    </div>
</template>