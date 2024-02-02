<script setup>
const props = defineProps({
    product: String,
    category: String
})
</script>

<template>
    <li class="list-group-item d-flex justify-content-between list-group-item-info">
        <div>
            <p class="card-text lh-sm mb-1">{{ product || "Product empty" }}
            </p>
            <p class="card-text text-secondary">{{ category || "Category empty" }}</p>
        </div>
        <div class="mt-3">
            <button type="button" class="btn btn-sm btn-outline-light" aria-label="Editieren"><i
                    class="bi bi-pencil"></i></button>
        </div>
    </li>
</template>