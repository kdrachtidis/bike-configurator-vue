<script setup>
const props = defineProps({
    Group: String
})
</script>

<template>
    <div class="card-header d-flex justify-content-between">
        <h4 class="card-title mb-0 mt-1">{{ Group || "Group Empty" }}
        </h4>
        <div>
            <button type="button" class="btn btn-outline-secondary me-2" aria-label="Editieren"><i
                    class="bi bi-pencil"></i></button>
            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse" data-bs-target="#CollapseList"
                aria-label="Einklappen"><i class="bi bi-arrows-collapse"></i></button>
        </div>
    </div>
</template>