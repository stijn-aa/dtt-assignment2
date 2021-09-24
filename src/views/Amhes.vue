<template>
    <div class="container">
            <Header
                @click="this.methods.toggleMenu()"
                headerText="Astroids Maybe Hitting Earth Someday"
                :loading="loading"
            />
        <div v-if="menuShow">
            <MenuComponent />
        </div>
        <div v-if="!menuShow" class="main">
            <Pageselect @go="this.methods.createAMHESfetch" :page="this.page" />
            <Sort @select="this.methods.sort" :sortBy="this.sortBy" />
            <Items :items="this.itemsArray" origin="Astroids Maybe Hitting Earth Someday"/>
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Pageselect from '@/components/Pageselect.vue'
import Sort from '@/components/Sort.vue'
import Items from '@/components/Items.vue'
import MenuComponent from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Pageselect,
        Sort,
        Items,
        MenuComponent,
        Footer
    },
    data () {
        return {
            page: Number,
            itemsArray: [],
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
                itemParser: function (rawItem) {
                    const obj = {}
                    obj.id = rawItem.id
                    obj.name = rawItem.name
                    obj.flyby = rawItem.orbital_data.orbit_determination_date
                    obj.size = Math.round(
                        (rawItem.estimated_diameter.meters
                            .estimated_diameter_min +
                            rawItem.estimated_diameter.meters
                                .estimated_diameter_max) /
                                2
                    )
                    obj.metric = ' Meter'
                    obj.haz = rawItem.is_potentially_hazardous_asteroid
                    return obj
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
                buildUrl: (page) => {
                    const url = `http://www.neowsapp.com/rest/v1/neo/browse?page=${page}&size=10&api_key=0rzPjGgziJwSRBSerukevfNFkafd4UtL8WQ4xtAe`
                    return url
                },
                createAMHESfetch: async (page) => {
                    this.page = page
                    const url = this.methods.buildUrl(page)
                    this.loading = 'loading'
                    this.itemsArray = []
                    this.methods.fetchData(url).then(data => {
                        console.log(data)
                        data.near_earth_objects.forEach(item => {
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
        const page = 1
        this.methods.createAMHESfetch(page)
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
