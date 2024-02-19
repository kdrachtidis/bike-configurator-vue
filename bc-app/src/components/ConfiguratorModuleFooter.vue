<script setup>
const props = defineProps({
    Sum: String
})
</script>

<template>
    <div class="card-footer d-flex justify-content-between">
        <div class="card-text text-body-tertiary">Summe: {{ Sum || "Summary empty" }}</div>
    </div>
</template>