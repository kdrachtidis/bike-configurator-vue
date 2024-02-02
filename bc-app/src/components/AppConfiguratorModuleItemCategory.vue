<script setup>
const props = defineProps({
    category: String
})
</script>

<template>
    <li class="list-group-item d-flex justify-content-between">
        <div class="fs-5 fw-light">
            {{ category || "Category Empty" }}
        </div>
        <div>
            <button type="button" class="btn btn-sm btn-outline-light" aria-label="Hinzufügen"><i
                    class="bi bi-plus-lg"></i></button>
        </div>
    </li>
</template>