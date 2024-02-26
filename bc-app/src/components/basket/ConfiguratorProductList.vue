<script setup>
import ConfiguratorProductListHeader from './ConfiguratorProductListHeader.vue';
import ConfiguratorProductListGroup from './ConfiguratorProductListGroup.vue';

</script>

<template>
    <div class="col-sm-3">
        <section class="card border-secondary mb-3">

            <ConfiguratorProductListHeader />

            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between">
                    <ConfiguratorProductListGroup />
                </li>
            </ul>
        </section>
    </div>
</template>