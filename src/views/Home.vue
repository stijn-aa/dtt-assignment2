<template>
    <div class="container">
        <Header
            @click="this.methods.toggleMenu()"
            headerText="Astroids Not Hitting Earth Today"
            :loading="loading"
        />
        <div v-if="menuShow">
            <MenuComponent />
        </div>
        <div v-if="!menuShow" class="main">
            <Dayselect @go="this.methods.createANHETfetch" :date="this.date" />
            <Sort @select="this.methods.sort" :sortBy="this.sortBy" />
            <Items
                :items="this.itemsArray"
                origin="Astroids Not Hitting Earth Today"
            />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Dayselect from '@/components/Dayselect.vue'
import Sort from '@/components/Sort.vue'
import Items from '@/components/Items.vue'
import MenuComponent from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Dayselect,
        Sort,
        Items,
        MenuComponent,
        Footer
    },
    data () {
        return {
            date: Date,
            itemsArray: [],
            rawItemsArray: [],
            menuShow: false,
            loading: 'none',
            sortBy: 'time',
            methods: {
                fetchData: async function (url) {
                    return fetch(url)
                        .then(response => {
                            return response.json().then(data => {
                                return data
                            })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                },
                itemParser: (rawItem) => {
                    const obj = {}
                    obj.id = rawItem.id
                    obj.name = rawItem.name
                    obj.flyby = rawItem.close_approach_data[0].close_approach_date_full.split(
                        ' '
                    )[1]
                    obj.size = Math.round(
                        (rawItem.estimated_diameter.meters
                            .estimated_diameter_min +
                            rawItem.estimated_diameter.meters
                                .estimated_diameter_max) /
                                2
                    )
                    obj.metric = ' Meter'
                    obj.haz = rawItem.is_potentially_hazardous_asteroid
                    obj.relevantItems = this.methods.getReleventItems(rawItem)
                    // console.log(obj.relevantItems[0])
                    return obj
                },
                getReleventItems: rawItem => {
                    const relevance = this.rawItemsArray.sort(function (a, b) {
                        const aSize = (a.estimated_diameter.meters.estimated_diameter_min + a.estimated_diameter.meters.estimated_diameter_max) / 2
                        const bSize = (b.estimated_diameter.meters.estimated_diameter_min + b.estimated_diameter.meters.estimated_diameter_max) / 2
                        const cSize = (rawItem.estimated_diameter.meters.estimated_diameter_min + rawItem.estimated_diameter.meters.estimated_diameter_max) / 2
                        return Math.abs(cSize - aSize) - Math.abs(cSize - bSize)
                    })
                    const outputArray = []
                    outputArray.push(relevance[1], relevance[2], relevance[3])
                    // console.log(outputArray)
                    return outputArray
                },
                sort: sortOption => {
                    if (sortOption) {
                        this.sortBy = sortOption
                    }
                    if (sortOption === 'time') {
                        this.itemsArray.sort(this.methods.compareTime)
                    } else if (sortOption === 'size') {
                        this.itemsArray.sort(this.methods.compareSize)
                    } else {
                        this.itemsArray.sort(this.methods.compareHaz)
                    }
                },
                compareCloseSize: function (a, b) {},
                compareTime: function (a, b) {
                    const timeA = a.flyby.replace(':', '.')
                    const timeB = b.flyby.replace(':', '.')
                    if (timeA < timeB) return -1
                    if (timeA > timeB) return 1
                    return 0
                },
                compareSize: function (a, b) {
                    const sizeA = a.size
                    const sizeB = b.size
                    if (sizeA < sizeB) return 1
                    if (sizeA > sizeB) return -1
                    return 0
                },
                compareHaz: function (a, b) {
                    return a.haz === b.haz ? 0 : a.haz ? -1 : 1
                },
                buildUrl: date => {
                    const dd = String(date.getDate()).padStart(2, '0')
                    const mm = String(date.getMonth() + 1).padStart(2, '0')
                    const yyyy = date.getFullYear()
                    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${yyyy}-${mm}-${dd}&end_date=${yyyy}-${mm}-${dd}&api_key=0rzPjGgziJwSRBSerukevfNFkafd4UtL8WQ4xtAe`
                    return url
                },
                createANHETfetch: async dateGot => {
                    this.date = dateGot
                    const url = this.methods.buildUrl(dateGot)
                    this.loading = 'loading'
                    this.itemsArray = []
                    this.rawItemsArray = []
                    this.methods.fetchData(url).then(data => {
                        // console.log(data)
                        const items =
                            data.near_earth_objects[
                                Object.keys(data.near_earth_objects)[0]
                            ]
                        this.rawItemsArray = items
                        items.forEach(item => {
                            this.itemsArray.push(this.methods.itemParser(item))
                        })
                        this.methods.sort()
                        this.loading = 'none'
                    })
                },
                toggleMenu: () => {
                    this.menuShow = !this.menuShow
                }
            }
        }
    },
    created () {
        const newdate = new Date()
        this.methods.createANHETfetch(newdate)
    }
}
</script>

<style scoped>

.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (min-width:0px) and (max-width:1500px){
    .container {
        width: 100%;
    }
    .bar{
        font-size: 0.6rem;
    }
}

</style>
