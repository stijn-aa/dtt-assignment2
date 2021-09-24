<template>
    <div class="container">
        <Header
            @click="this.methods.toggleMenu()"
            headerText="Random Astroids not hitting Earth"
            :loading="loading"
        />
        <div v-if="menuShow">
            <MenuComponent />
        </div>
        <div v-if="!menuShow" class="main">
            <div class="bar">
                <button
                    @click="this.methods.getRandomId()"
                    class="btn align-right right"
                >
                    New Astroid
                </button>
            </div>
            <div v-if="this.loading === 'loading'">
                <ItemDetail :itemObj="this.emptyObj" />
            </div>
            <div v-if="this.loading === 'none'">
                <ItemDetail :itemObj="this.item" />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import MenuComponent from '@/components/Menu.vue'
import ItemDetail from '@/components/ItemDetail.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        MenuComponent,
        ItemDetail,
        Footer
    },
    data () {
        return {
            item: Object,
            menuShow: false,
            loading: 'none',
            emptyObj: {
                id: 'loading...',
                name: 'loading...',
                estimated_diameter: {
                    meters: {
                        estimated_diameter_min: 'loading...',
                        estimated_diameter_max: 'loading...'
                    }
                },
                is_potentially_hazardous_asteroid: 'loading...',
                is_sentry_object: 'loading...',
                orbital_data: {
                    first_observation_date: 'loading...',
                    data_arc_in_days: 'loading...'
                },
                orbit: {
                    close_approach_date_full: 'loading...',
                    miss_distance: {
                        lunar: 'loading...'
                    },
                    relative_velocity: {
                        kilometers_per_second: 'loading...'
                    }
                },
                nasa_jpl_url: 'loading...'
            },
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
                buildUrl: id => {
                    const url = `http://www.neowsapp.com/rest/v1/neo/${id}?&api_key=0rzPjGgziJwSRBSerukevfNFkafd4UtL8WQ4xtAe`
                    return url
                },
                createDetailfetch: async id => {
                    const url = this.methods.buildUrl(id)
                    this.methods.fetchData(url).then(data => {
                        this.item = data
                        this.methods.getOrbitData()
                        this.item.estimated_diameter.meters.estimated_diameter_min =
                            this.item.estimated_diameter.meters
                                .estimated_diameter_min + ' Meter'
                        this.item.estimated_diameter.meters.estimated_diameter_max =
                            this.item.estimated_diameter.meters
                                .estimated_diameter_max + ' Meter'
                        this.item.orbital_data.data_arc_in_days =
                            this.item.orbital_data.data_arc_in_days + ' Days'
                        this.item.orbit.miss_distance.lunar =
                            this.item.orbit.miss_distance.lunar +
                            ' lunar distances'
                        this.item.orbit.relative_velocity.kilometers_per_second =
                            this.item.orbit.relative_velocity
                                .kilometers_per_second +
                            ' Kilometers per second'
                        this.loading = 'none'
                    })
                },
                toggleMenu: () => {
                    this.menuShow = !this.menuShow
                },
                getOrbitData: () => {
                    const orbitData = this.item.close_approach_data.filter(
                        element => element.orbiting_body === 'Earth'
                    )
                    if (orbitData) {
                        orbitData.sort(function (a, b) {
                            return (
                                Math.abs(
                                    Date.now() - new Date(a.close_approach_date)
                                ) -
                                Math.abs(
                                    Date.now() - new Date(b.close_approach_date)
                                )
                            )
                        })
                        this.item.orbit = orbitData[0]
                    } else {
                        // no prox to earth
                        console.log('no prox to earth')
                        this.item.orbit = {
                            close_approach_date_full: 'no prox to earth',
                            miss_distance: {
                                lunar: '-'
                            },
                            relative_velocity: {
                                kilometers_per_second: '-'
                            }
                        }
                    }
                },
                getRandomId: async () => {
                    this.loading = 'loading'
                    const randomPage = Math.floor(
                        Math.random() * (1200 - 1) + 1
                    )
                    const randomObject = Math.floor(
                        Math.random() * (20 - 1) + 1
                    )
                    const url = `http://www.neowsapp.com/rest/v1/neo/browse?page=${randomPage}&size=20&api_key=0rzPjGgziJwSRBSerukevfNFkafd4UtL8WQ4xtAe`
                    this.methods.fetchData(url).then(async data => {
                        console.log(data.near_earth_objects[randomObject].id)
                        const id = data.near_earth_objects[randomObject].id
                        this.methods.createDetailfetch(id)
                    })
                }
            }
        }
    },
    created () {
        this.methods.getRandomId()
    }
}
</script>

<style scoped>

.bar {
    display: flex;
    margin-bottom: 50px;
}

.right {
    background: rgb(9, 9, 121);
    background: linear-gradient(
        90deg,
        rgba(9, 9, 121, 0) 20%,
        rgb(163, 255, 217) 100%
    );
    /* box-shadow: 0px 5px 22px 0px rgba(0, 0, 0, 0.2); */
    border-radius: 10px;
    transition: 0.5s;
}
.align-right {
    text-align: right;
    margin-left: auto;
}

.sticky {
    position: sticky;
    top: 0;
    background: rgb(20, 20, 29);
    background: linear-gradient(
        -180deg,
        rgb(20, 20, 29) 88%,
        rgba(163, 255, 243, 0) 100%
    );
    padding-bottom: 0.3em;
}

.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
@media (min-width:0px) and (max-width:900px){
    .align-right {
        margin-top: 1.2rem;
        width: 100%;
    }
    .container {
        width: 100%;
    }
    .bar{
        margin-left: 10px;
        margin-right: 10px;
        font-size: 0.6rem;
    }
    button{
        padding: 0.6rem 0.8rem;
    }
}

</style>
