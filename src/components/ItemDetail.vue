<template>
    <div class="item">
        <div>
            <div class="line">
                <div class="static ">Id:</div>
                <div class="variable " id="flyby">{{ itemObj.id }}</div>
            </div>
            <div class="line">
                <div class="static ">Name:</div>
                <div class="variable " id="name">{{ itemObj.name }}</div>
            </div>
            <div class="line">
                <div class="static ">Min size:</div>
                <div class="variable " id="size">
                    {{
                        itemObj.estimated_diameter.meters.estimated_diameter_min
                    }}
                </div>
            </div>
            <div class="line">
                <div class="static ">Max Size:</div>
                <div class="variable " id="size">
                    {{
                        itemObj.estimated_diameter.meters.estimated_diameter_max
                    }}
                </div>
            </div>
            <div class="line">
                <div class="static ">Is potentially hazardous asteroid:</div>
                <div class="variable " id="haz">
                    {{ itemObj.is_potentially_hazardous_asteroid }}
                </div>
            </div>
            <div class="line">
                <div class="static ">Is sentry object:</div>
                <div class="variable " id="haz">
                    {{ itemObj.is_sentry_object }}
                </div>
            </div>
            <div class="line">
                <div class="static ">First observation:</div>
                <div class="variable " id="haz">
                    {{ itemObj.orbital_data.first_observation_date }}
                </div>
            </div>
            <div class="line">
                <div class="static ">Orbital arc:</div>
                <div class="variable " id="haz">
                    {{ itemObj.orbital_data.data_arc_in_days }}
                </div>
            </div>
            <div class="line">
                <div class="static ">Close approach data:</div>
                <div class="variable " id="haz">
                    {{ itemObj.orbit.close_approach_date_full }}
                </div>
            </div>
            <div class="line">
                <div class="static ">Miss distance:</div>
                <div class="variable " id="haz">
                    {{ itemObj.orbit.miss_distance.lunar }}
                </div>
            </div>
            <div class="line">
                <div class="static ">Velocity:</div>
                <div class="variable " id="haz">
                    {{ itemObj.orbit.relative_velocity.kilometers_per_second }}
                </div>
            </div>
            <div class="line">
                <div class="static ">Nasa Url:</div>
                <div class="variable" id="haz">
                    <a :href="itemObj.nasa_jpl_url">
                        {{ itemObj.nasa_jpl_url }}</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemDetail',
    props: {
        itemObj: Object
    },
    data () {
        return {
            orbit: Object,
            methods: {}
        }
    }
}
</script>

<style scoped>
.item {
    background: rgba(0, 0, 0, 0.205);
    border-color: rgb(163, 255, 217);
    border-style: solid;
    border-width: 1px;
    box-shadow: 0px 5px 22px 0px rgba(0, 0, 0, 0.37);
    height: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    padding: 30px;
    border-radius: 10px;
    font-family: 'Press Start 2P';
    font-size: 0.8em;
    cursor: pointer;
}
.static {
    flex-basis: 40%;
    color: grey;
}

.line {
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
}

@media (min-width: 0px) and (max-width: 900px) {
    .item {
        width: inherit;
        border-radius: 0px;
        border-left-style: none;
        border-right-style: none;
    }
}
@media (min-width:0px) and (max-width: 685px){
   .line {
        flex-direction: column;
   }
   .static {
        margin-bottom: 1rem;
   }
}
</style>
