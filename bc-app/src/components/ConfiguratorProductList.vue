<script setup>
import ConfiguratorProductListHeader from './ConfiguratorProductListHeader.vue';
import ConfiguratorProductListGroup from './ConfiguratorProductListGroup.vue';

</script>

<template>
    <section class="col-sm-3">
        <header>
            <ConfiguratorProductListHeader />
        </header>
        <ul class="list-group mt-2">
            <li class="list-group-item d-flex justify-content-between">
                <ConfiguratorProductListGroup />
            </li>
        </ul>
    </section>
</template>