<script setup>
const props = defineProps({
    Group: String,
    Id: String
})
</script>

<template>
    <div class="card-header d-flex justify-content-between bg-body-secondary">
        <h4 class="card-title mb-0 fw-light">{{ Group || "Group Empty" }}
        </h4>
        <div>
            <button type="button" class="btn btn-sm btn-outline-secondary me-2" :aria-label="$t('message.edit')"><i
                    class="bi bi-pencil"></i></button>
            <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="collapse"
                :data-bs-target="Id" :aria-label="$t('message.expand')"><i class="bi bi-chevron-expand"></i></button>
        </div>
    </div>
</template>