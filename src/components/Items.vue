<template>
    <div>
        <div :v-if="this.items && this.items.length">
            <div v-for="(item, index) in this.items" :key="index">
                <ItemGeneral :itemObj="item" @click="$router.push({ name: 'Details', params: { id: item.id, origin: this.origin, relevantItems: JSON.stringify(item.relevantItems) } })"  />
            </div>
        </div>
        <div v-if="!this.items || !this.items.length">
            <ItemGeneral :itemObj="emptyObj" />
            <ItemGeneral :itemObj="emptyObj" />
            <ItemGeneral :itemObj="emptyObj" />
        </div>
    </div>
</template>
<script>
import ItemGeneral from '@/components/ItemGeneral.vue'

export default {
    name: 'Items',
    components: {
        ItemGeneral
    },
    props: {
        items: Array,
        origin: String
    },
    data () {
        return {
            emptyObj: {
                id: 'loading...',
                name: 'loading...',
                flyby: 'loading...',
                size: 'loading...',
                metric: '',
                haz: 'loading...'
            }
        }
    },
    created () {
        // console.log(this.items[0])
    }
}
</script>
