<script setup>
const props = defineProps({
    ItemCount: Number
})
</script>

<template>
    <div class="card-body pt-2 pb-2 border-bottom d-flex justify-content-between">
        <div class="mt-1"><small class="text-body-secondary">{{ ItemCount || "0" }} Artikel hinzugefügt</small></div>
        <button type="button" class="btn btn-sm btn-outline-secondary" aria-label="Filtern">Filtern</button>
    </div>
</template>