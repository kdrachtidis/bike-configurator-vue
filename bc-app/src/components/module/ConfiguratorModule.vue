<script>
import { ref } from 'vue'

import productData from '../../assets/products.json'

import ConfiguratorModuleHeader from './ConfiguratorModuleHeader.vue'
import ConfiguratorModuleFooter from './ConfiguratorModuleFooter.vue'
import ConfiguratorModuleSubHeader from './ConfiguratorModuleSubHeader.vue'
import ConfiguratorModuleItemCategory from './ConfiguratorModuleItemCategory.vue'
import ConfiguratorModuleItemProduct from './ConfiguratorModuleItemProduct.vue'

const sum = "150,00 €"
const count = "2"

export default {
    components: {
        ConfiguratorModuleHeader,
        ConfiguratorModuleFooter,
        ConfiguratorModuleSubHeader,
        ConfiguratorModuleItemCategory,
        ConfiguratorModuleItemProduct
    },
    props: {
        ModuleId: String,
        ModuleGroup: String,
        ModuleItemCount: Number,
        ModuleSum: String
    },
    data() {
        return {
            products: productData
        }
    }
}
</script>

<template>
    <div class="col-4">
        <section class="card border-secondary mb-3">
            <ConfiguratorModuleHeader :Id="'#' + ModuleId" :Group="ModuleGroup" />
            <ConfiguratorModuleSubHeader :ItemCount="ModuleItemCount" />
            <div class="collapse show" :id="ModuleId">
                <div class="card-body p-0 overflow-auto" style="height: 300px;">
                    <ul class="list-group list-group-flush">
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[0].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[1].categoryname" />
                        <ConfiguratorModuleItemProduct :Product="products[0].categories[2].categoryproducts[0].name"
                            :Category="products[0].categories[2].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[3].categoryname" />
                        <ConfiguratorModuleItemProduct :Product="products[0].categories[4].categoryproducts[0].name"
                            :Category="products[0].categories[4].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[5].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[6].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[7].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[8].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[9].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[10].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[11].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[12].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[13].categoryname" />
                        <ConfiguratorModuleItemCategory :Category="products[0].categories[14].categoryname" />
                    </ul>
                </div>
            </div>
            <ConfiguratorModuleFooter :Sum="ModuleSum" />
        </section>
    </div>
</template>